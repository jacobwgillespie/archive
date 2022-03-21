---
id: philosophy
title: Philosophy
---

Metamorphosis streams (MStreams) are based on async iterators in ECMAScript.

## Push vs Pull Streams

Streams can be either push streams or pull streams. A stream that is considered a push stream emits stream items as they occurr to subscribed consumers. Push streams have difficulty handling slow or dead consumers. If the rate at which consumers can process a particular stream item is slower than the rate at which items are emitted, the consumer will become overwhelmed. Likewise, if the consumer dies without handling all items it was given, it can be difficult to handle rescheduling. Some push stream implementations, like Reactive Streams, attempt to handle this problem of "back-pressure" where a consumer requests that the stream slow down or pause while the consumer processes items.

Pull streams are instead controlled by the consumer - they pull items from the stream on demand, and thus the rate of items consumed never exceeds the capacity of an individual consumer. **Metamorphosis Streams are pull-based.** Each stream and stream operation request items from the source, thus allowing them to efficiently process everything without incurring back-pressure.

## Converting Push Data Into Pull Streams

Sources of stream data may, however, be push-type streams, however - for instance, if a temperature sensor emits temperature measurements every 250ms, the stream operations being performed by the stream processing framework must take no more than 250ms to complete, otherwise the push-type source will not be properly consumed.

What do you do then?

- **Drop Stream Items**

  Your source could drop items if they are not consumed - this assumes that each stream item is safe to ignore.

- **Buffering**

  You could maintain a buffer of a certain size, in the hopes that the consumers would eventually catch up.

- **Increase Consumer Capacity**

  Finally you could increase the capacity the consumers are able to handle by speeding up individual consumers, distributing the work across multiple consumers, or otherwise increasing the ability to handle incoming items until the consumers are faster than the source.

## Log Data Structure

The Log data structure provides a single structure for converting push-based data into a pull-based stream. A log stores incoming stream events with an offset number, a pseudo-timestamp, where new stream items are always added to the end of the log. Consumers then request log items by offset. Logs could be considered a specialized type of buffer, but based on their design, they are able to support parallel processing of the log by multiple consumers.

Metamorphosis provides an `MLog` data structure to implement this transformation. It ships with several implementations:

- `MemoryMLog` which stores the contents of the log in memory
- `FileMLog` which stores the contents of the log in a set of files
- `KafkaMLog` which uses Apache Kafka to create and manage the log (**recommended for production**)
