import * as $protobuf from 'protobufjs'
/** Namespace tfplugin5. */
export namespace tfplugin5 {
  /** Properties of a DynamicValue. */
  interface IDynamicValue {
    /** DynamicValue msgpack */
    msgpack?: Uint8Array | null

    /** DynamicValue json */
    json?: Uint8Array | null
  }

  /** Represents a DynamicValue. */
  class DynamicValue implements IDynamicValue {
    /**
     * Constructs a new DynamicValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IDynamicValue)

    /** DynamicValue msgpack. */
    public msgpack: Uint8Array

    /** DynamicValue json. */
    public json: Uint8Array

    /**
     * Creates a new DynamicValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DynamicValue instance
     */
    public static create(properties?: tfplugin5.IDynamicValue): tfplugin5.DynamicValue

    /**
     * Encodes the specified DynamicValue message. Does not implicitly {@link tfplugin5.DynamicValue.verify|verify} messages.
     * @param message DynamicValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IDynamicValue, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified DynamicValue message, length delimited. Does not implicitly {@link tfplugin5.DynamicValue.verify|verify} messages.
     * @param message DynamicValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IDynamicValue, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a DynamicValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DynamicValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.DynamicValue

    /**
     * Decodes a DynamicValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DynamicValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.DynamicValue

    /**
     * Verifies a DynamicValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a DynamicValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DynamicValue
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.DynamicValue

    /**
     * Creates a plain object from a DynamicValue message. Also converts values to other types if specified.
     * @param message DynamicValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tfplugin5.DynamicValue, options?: $protobuf.IConversionOptions): {[k: string]: any}

    /**
     * Converts this DynamicValue to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  /** Properties of a Diagnostic. */
  interface IDiagnostic {
    /** Diagnostic severity */
    severity?: tfplugin5.Diagnostic.Severity | null

    /** Diagnostic summary */
    summary?: string | null

    /** Diagnostic detail */
    detail?: string | null

    /** Diagnostic attribute */
    attribute?: tfplugin5.IAttributePath | null
  }

  /** Represents a Diagnostic. */
  class Diagnostic implements IDiagnostic {
    /**
     * Constructs a new Diagnostic.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IDiagnostic)

    /** Diagnostic severity. */
    public severity: tfplugin5.Diagnostic.Severity

    /** Diagnostic summary. */
    public summary: string

    /** Diagnostic detail. */
    public detail: string

    /** Diagnostic attribute. */
    public attribute?: tfplugin5.IAttributePath | null

    /**
     * Creates a new Diagnostic instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Diagnostic instance
     */
    public static create(properties?: tfplugin5.IDiagnostic): tfplugin5.Diagnostic

    /**
     * Encodes the specified Diagnostic message. Does not implicitly {@link tfplugin5.Diagnostic.verify|verify} messages.
     * @param message Diagnostic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified Diagnostic message, length delimited. Does not implicitly {@link tfplugin5.Diagnostic.verify|verify} messages.
     * @param message Diagnostic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a Diagnostic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Diagnostic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Diagnostic

    /**
     * Decodes a Diagnostic message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Diagnostic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Diagnostic

    /**
     * Verifies a Diagnostic message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a Diagnostic message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Diagnostic
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.Diagnostic

    /**
     * Creates a plain object from a Diagnostic message. Also converts values to other types if specified.
     * @param message Diagnostic
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tfplugin5.Diagnostic, options?: $protobuf.IConversionOptions): {[k: string]: any}

    /**
     * Converts this Diagnostic to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace Diagnostic {
    /** Severity enum. */
    enum Severity {
      INVALID = 0,
      ERROR = 1,
      WARNING = 2,
    }
  }

  /** Properties of an AttributePath. */
  interface IAttributePath {
    /** AttributePath steps */
    steps?: tfplugin5.AttributePath.IStep[] | null
  }

  /** Represents an AttributePath. */
  class AttributePath implements IAttributePath {
    /**
     * Constructs a new AttributePath.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IAttributePath)

    /** AttributePath steps. */
    public steps: tfplugin5.AttributePath.IStep[]

    /**
     * Creates a new AttributePath instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttributePath instance
     */
    public static create(properties?: tfplugin5.IAttributePath): tfplugin5.AttributePath

    /**
     * Encodes the specified AttributePath message. Does not implicitly {@link tfplugin5.AttributePath.verify|verify} messages.
     * @param message AttributePath message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IAttributePath, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified AttributePath message, length delimited. Does not implicitly {@link tfplugin5.AttributePath.verify|verify} messages.
     * @param message AttributePath message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IAttributePath, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes an AttributePath message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttributePath
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.AttributePath

    /**
     * Decodes an AttributePath message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttributePath
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.AttributePath

    /**
     * Verifies an AttributePath message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates an AttributePath message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttributePath
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.AttributePath

    /**
     * Creates a plain object from an AttributePath message. Also converts values to other types if specified.
     * @param message AttributePath
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tfplugin5.AttributePath, options?: $protobuf.IConversionOptions): {[k: string]: any}

    /**
     * Converts this AttributePath to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace AttributePath {
    /** Properties of a Step. */
    interface IStep {
      /** Step attributeName */
      attributeName?: string | null

      /** Step elementKeyString */
      elementKeyString?: string | null

      /** Step elementKeyInt */
      elementKeyInt?: number | null
    }

    /** Represents a Step. */
    class Step implements IStep {
      /**
       * Constructs a new Step.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.AttributePath.IStep)

      /** Step attributeName. */
      public attributeName: string

      /** Step elementKeyString. */
      public elementKeyString: string

      /** Step elementKeyInt. */
      public elementKeyInt: number

      /** Step selector. */
      public selector?: 'attributeName' | 'elementKeyString' | 'elementKeyInt'

      /**
       * Creates a new Step instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Step instance
       */
      public static create(properties?: tfplugin5.AttributePath.IStep): tfplugin5.AttributePath.Step

      /**
       * Encodes the specified Step message. Does not implicitly {@link tfplugin5.AttributePath.Step.verify|verify} messages.
       * @param message Step message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.AttributePath.IStep, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Step message, length delimited. Does not implicitly {@link tfplugin5.AttributePath.Step.verify|verify} messages.
       * @param message Step message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: tfplugin5.AttributePath.IStep, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Decodes a Step message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Step
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.AttributePath.Step

      /**
       * Decodes a Step message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Step
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.AttributePath.Step

      /**
       * Verifies a Step message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Step message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Step
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.AttributePath.Step

      /**
       * Creates a plain object from a Step message. Also converts values to other types if specified.
       * @param message Step
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.AttributePath.Step,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Step to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a Stop. */
  interface IStop {}

  /** Represents a Stop. */
  class Stop implements IStop {
    /**
     * Constructs a new Stop.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IStop)

    /**
     * Creates a new Stop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Stop instance
     */
    public static create(properties?: tfplugin5.IStop): tfplugin5.Stop

    /**
     * Encodes the specified Stop message. Does not implicitly {@link tfplugin5.Stop.verify|verify} messages.
     * @param message Stop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IStop, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified Stop message, length delimited. Does not implicitly {@link tfplugin5.Stop.verify|verify} messages.
     * @param message Stop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IStop, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a Stop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Stop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Stop

    /**
     * Decodes a Stop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Stop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Stop

    /**
     * Verifies a Stop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a Stop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Stop
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.Stop

    /**
     * Creates a plain object from a Stop message. Also converts values to other types if specified.
     * @param message Stop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tfplugin5.Stop, options?: $protobuf.IConversionOptions): {[k: string]: any}

    /**
     * Converts this Stop to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace Stop {
    /** Properties of a Request. */
    interface IRequest {}

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.Stop.IRequest)

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.Stop.IRequest): tfplugin5.Stop.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.Stop.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.Stop.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.Stop.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: tfplugin5.Stop.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Stop.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Stop.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.Stop.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.Stop.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response Error */
      Error?: string | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.Stop.IResponse)

      /** Response Error. */
      public Error: string

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tfplugin5.Stop.IResponse): tfplugin5.Stop.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.Stop.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.Stop.IResponse, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.Stop.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: tfplugin5.Stop.IResponse, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Stop.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Stop.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.Stop.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.Stop.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a RawState. */
  interface IRawState {
    /** RawState json */
    json?: Uint8Array | null

    /** RawState flatmap */
    flatmap?: {[k: string]: string} | null
  }

  /** Represents a RawState. */
  class RawState implements IRawState {
    /**
     * Constructs a new RawState.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IRawState)

    /** RawState json. */
    public json: Uint8Array

    /** RawState flatmap. */
    public flatmap: {[k: string]: string}

    /**
     * Creates a new RawState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RawState instance
     */
    public static create(properties?: tfplugin5.IRawState): tfplugin5.RawState

    /**
     * Encodes the specified RawState message. Does not implicitly {@link tfplugin5.RawState.verify|verify} messages.
     * @param message RawState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IRawState, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified RawState message, length delimited. Does not implicitly {@link tfplugin5.RawState.verify|verify} messages.
     * @param message RawState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IRawState, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a RawState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RawState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.RawState

    /**
     * Decodes a RawState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RawState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.RawState

    /**
     * Verifies a RawState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a RawState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RawState
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.RawState

    /**
     * Creates a plain object from a RawState message. Also converts values to other types if specified.
     * @param message RawState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tfplugin5.RawState, options?: $protobuf.IConversionOptions): {[k: string]: any}

    /**
     * Converts this RawState to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  /** StringKind enum. */
  enum StringKind {
    PLAIN = 0,
    MARKDOWN = 1,
  }

  /** Properties of a Schema. */
  interface ISchema {
    /** Schema version */
    version?: number | null

    /** Schema block */
    block?: tfplugin5.Schema.IBlock | null
  }

  /** Represents a Schema. */
  class Schema implements ISchema {
    /**
     * Constructs a new Schema.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.ISchema)

    /** Schema version. */
    public version: number

    /** Schema block. */
    public block?: tfplugin5.Schema.IBlock | null

    /**
     * Creates a new Schema instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Schema instance
     */
    public static create(properties?: tfplugin5.ISchema): tfplugin5.Schema

    /**
     * Encodes the specified Schema message. Does not implicitly {@link tfplugin5.Schema.verify|verify} messages.
     * @param message Schema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.ISchema, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified Schema message, length delimited. Does not implicitly {@link tfplugin5.Schema.verify|verify} messages.
     * @param message Schema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.ISchema, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a Schema message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Schema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Schema

    /**
     * Decodes a Schema message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Schema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Schema

    /**
     * Verifies a Schema message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a Schema message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Schema
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.Schema

    /**
     * Creates a plain object from a Schema message. Also converts values to other types if specified.
     * @param message Schema
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tfplugin5.Schema, options?: $protobuf.IConversionOptions): {[k: string]: any}

    /**
     * Converts this Schema to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace Schema {
    /** Properties of a Block. */
    interface IBlock {
      /** Block version */
      version?: number | null

      /** Block attributes */
      attributes?: tfplugin5.Schema.IAttribute[] | null

      /** Block blockTypes */
      blockTypes?: tfplugin5.Schema.INestedBlock[] | null

      /** Block description */
      description?: string | null

      /** Block descriptionKind */
      descriptionKind?: tfplugin5.StringKind | null

      /** Block deprecated */
      deprecated?: boolean | null
    }

    /** Represents a Block. */
    class Block implements IBlock {
      /**
       * Constructs a new Block.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.Schema.IBlock)

      /** Block version. */
      public version: number

      /** Block attributes. */
      public attributes: tfplugin5.Schema.IAttribute[]

      /** Block blockTypes. */
      public blockTypes: tfplugin5.Schema.INestedBlock[]

      /** Block description. */
      public description: string

      /** Block descriptionKind. */
      public descriptionKind: tfplugin5.StringKind

      /** Block deprecated. */
      public deprecated: boolean

      /**
       * Creates a new Block instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Block instance
       */
      public static create(properties?: tfplugin5.Schema.IBlock): tfplugin5.Schema.Block

      /**
       * Encodes the specified Block message. Does not implicitly {@link tfplugin5.Schema.Block.verify|verify} messages.
       * @param message Block message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.Schema.IBlock, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Block message, length delimited. Does not implicitly {@link tfplugin5.Schema.Block.verify|verify} messages.
       * @param message Block message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: tfplugin5.Schema.IBlock, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Decodes a Block message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Block
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Schema.Block

      /**
       * Decodes a Block message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Block
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Schema.Block

      /**
       * Verifies a Block message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Block message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Block
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.Schema.Block

      /**
       * Creates a plain object from a Block message. Also converts values to other types if specified.
       * @param message Block
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.Schema.Block,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Block to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of an Attribute. */
    interface IAttribute {
      /** Attribute name */
      name?: string | null

      /** Attribute type */
      type?: Uint8Array | null

      /** Attribute description */
      description?: string | null

      /** Attribute required */
      required?: boolean | null

      /** Attribute optional */
      optional?: boolean | null

      /** Attribute computed */
      computed?: boolean | null

      /** Attribute sensitive */
      sensitive?: boolean | null

      /** Attribute descriptionKind */
      descriptionKind?: tfplugin5.StringKind | null

      /** Attribute deprecated */
      deprecated?: boolean | null
    }

    /** Represents an Attribute. */
    class Attribute implements IAttribute {
      /**
       * Constructs a new Attribute.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.Schema.IAttribute)

      /** Attribute name. */
      public name: string

      /** Attribute type. */
      public type: Uint8Array

      /** Attribute description. */
      public description: string

      /** Attribute required. */
      public required: boolean

      /** Attribute optional. */
      public optional: boolean

      /** Attribute computed. */
      public computed: boolean

      /** Attribute sensitive. */
      public sensitive: boolean

      /** Attribute descriptionKind. */
      public descriptionKind: tfplugin5.StringKind

      /** Attribute deprecated. */
      public deprecated: boolean

      /**
       * Creates a new Attribute instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Attribute instance
       */
      public static create(properties?: tfplugin5.Schema.IAttribute): tfplugin5.Schema.Attribute

      /**
       * Encodes the specified Attribute message. Does not implicitly {@link tfplugin5.Schema.Attribute.verify|verify} messages.
       * @param message Attribute message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.Schema.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Attribute message, length delimited. Does not implicitly {@link tfplugin5.Schema.Attribute.verify|verify} messages.
       * @param message Attribute message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: tfplugin5.Schema.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Decodes an Attribute message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Attribute
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Schema.Attribute

      /**
       * Decodes an Attribute message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Attribute
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Schema.Attribute

      /**
       * Verifies an Attribute message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Attribute
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.Schema.Attribute

      /**
       * Creates a plain object from an Attribute message. Also converts values to other types if specified.
       * @param message Attribute
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.Schema.Attribute,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Attribute to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a NestedBlock. */
    interface INestedBlock {
      /** NestedBlock typeName */
      typeName?: string | null

      /** NestedBlock block */
      block?: tfplugin5.Schema.IBlock | null

      /** NestedBlock nesting */
      nesting?: tfplugin5.Schema.NestedBlock.NestingMode | null

      /** NestedBlock minItems */
      minItems?: number | null

      /** NestedBlock maxItems */
      maxItems?: number | null
    }

    /** Represents a NestedBlock. */
    class NestedBlock implements INestedBlock {
      /**
       * Constructs a new NestedBlock.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.Schema.INestedBlock)

      /** NestedBlock typeName. */
      public typeName: string

      /** NestedBlock block. */
      public block?: tfplugin5.Schema.IBlock | null

      /** NestedBlock nesting. */
      public nesting: tfplugin5.Schema.NestedBlock.NestingMode

      /** NestedBlock minItems. */
      public minItems: number

      /** NestedBlock maxItems. */
      public maxItems: number

      /**
       * Creates a new NestedBlock instance using the specified properties.
       * @param [properties] Properties to set
       * @returns NestedBlock instance
       */
      public static create(properties?: tfplugin5.Schema.INestedBlock): tfplugin5.Schema.NestedBlock

      /**
       * Encodes the specified NestedBlock message. Does not implicitly {@link tfplugin5.Schema.NestedBlock.verify|verify} messages.
       * @param message NestedBlock message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.Schema.INestedBlock, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified NestedBlock message, length delimited. Does not implicitly {@link tfplugin5.Schema.NestedBlock.verify|verify} messages.
       * @param message NestedBlock message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: tfplugin5.Schema.INestedBlock, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Decodes a NestedBlock message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns NestedBlock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Schema.NestedBlock

      /**
       * Decodes a NestedBlock message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns NestedBlock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Schema.NestedBlock

      /**
       * Verifies a NestedBlock message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a NestedBlock message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns NestedBlock
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.Schema.NestedBlock

      /**
       * Creates a plain object from a NestedBlock message. Also converts values to other types if specified.
       * @param message NestedBlock
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.Schema.NestedBlock,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this NestedBlock to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    namespace NestedBlock {
      /** NestingMode enum. */
      enum NestingMode {
        INVALID = 0,
        SINGLE = 1,
        LIST = 2,
        SET = 3,
        MAP = 4,
        GROUP = 5,
      }
    }
  }

  /** Represents a Provider */
  class Provider extends $protobuf.rpc.Service {
    /**
     * Constructs a new Provider service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean)

    /**
     * Creates new Provider service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Provider

    /**
     * Information about what a provider supports/expects
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public getSchema(
      request: tfplugin5.GetProviderSchema.IRequest,
      callback: tfplugin5.Provider.GetSchemaCallback,
    ): void

    /**
     * Information about what a provider supports/expects
     * @param request Request message or plain object
     * @returns Promise
     */
    public getSchema(request: tfplugin5.GetProviderSchema.IRequest): Promise<tfplugin5.GetProviderSchema.Response>

    /**
     * Calls PrepareProviderConfig.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public prepareProviderConfig(
      request: tfplugin5.PrepareProviderConfig.IRequest,
      callback: tfplugin5.Provider.PrepareProviderConfigCallback,
    ): void

    /**
     * Calls PrepareProviderConfig.
     * @param request Request message or plain object
     * @returns Promise
     */
    public prepareProviderConfig(
      request: tfplugin5.PrepareProviderConfig.IRequest,
    ): Promise<tfplugin5.PrepareProviderConfig.Response>

    /**
     * Calls ValidateResourceTypeConfig.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public validateResourceTypeConfig(
      request: tfplugin5.ValidateResourceTypeConfig.IRequest,
      callback: tfplugin5.Provider.ValidateResourceTypeConfigCallback,
    ): void

    /**
     * Calls ValidateResourceTypeConfig.
     * @param request Request message or plain object
     * @returns Promise
     */
    public validateResourceTypeConfig(
      request: tfplugin5.ValidateResourceTypeConfig.IRequest,
    ): Promise<tfplugin5.ValidateResourceTypeConfig.Response>

    /**
     * Calls ValidateDataSourceConfig.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public validateDataSourceConfig(
      request: tfplugin5.ValidateDataSourceConfig.IRequest,
      callback: tfplugin5.Provider.ValidateDataSourceConfigCallback,
    ): void

    /**
     * Calls ValidateDataSourceConfig.
     * @param request Request message or plain object
     * @returns Promise
     */
    public validateDataSourceConfig(
      request: tfplugin5.ValidateDataSourceConfig.IRequest,
    ): Promise<tfplugin5.ValidateDataSourceConfig.Response>

    /**
     * Calls UpgradeResourceState.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public upgradeResourceState(
      request: tfplugin5.UpgradeResourceState.IRequest,
      callback: tfplugin5.Provider.UpgradeResourceStateCallback,
    ): void

    /**
     * Calls UpgradeResourceState.
     * @param request Request message or plain object
     * @returns Promise
     */
    public upgradeResourceState(
      request: tfplugin5.UpgradeResourceState.IRequest,
    ): Promise<tfplugin5.UpgradeResourceState.Response>

    /**
     * One-time initialization, called before other functions below
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public configure(request: tfplugin5.Configure.IRequest, callback: tfplugin5.Provider.ConfigureCallback): void

    /**
     * One-time initialization, called before other functions below
     * @param request Request message or plain object
     * @returns Promise
     */
    public configure(request: tfplugin5.Configure.IRequest): Promise<tfplugin5.Configure.Response>

    /**
     * Managed Resource Lifecycle
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public readResource(
      request: tfplugin5.ReadResource.IRequest,
      callback: tfplugin5.Provider.ReadResourceCallback,
    ): void

    /**
     * Managed Resource Lifecycle
     * @param request Request message or plain object
     * @returns Promise
     */
    public readResource(request: tfplugin5.ReadResource.IRequest): Promise<tfplugin5.ReadResource.Response>

    /**
     * Calls PlanResourceChange.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public planResourceChange(
      request: tfplugin5.PlanResourceChange.IRequest,
      callback: tfplugin5.Provider.PlanResourceChangeCallback,
    ): void

    /**
     * Calls PlanResourceChange.
     * @param request Request message or plain object
     * @returns Promise
     */
    public planResourceChange(
      request: tfplugin5.PlanResourceChange.IRequest,
    ): Promise<tfplugin5.PlanResourceChange.Response>

    /**
     * Calls ApplyResourceChange.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public applyResourceChange(
      request: tfplugin5.ApplyResourceChange.IRequest,
      callback: tfplugin5.Provider.ApplyResourceChangeCallback,
    ): void

    /**
     * Calls ApplyResourceChange.
     * @param request Request message or plain object
     * @returns Promise
     */
    public applyResourceChange(
      request: tfplugin5.ApplyResourceChange.IRequest,
    ): Promise<tfplugin5.ApplyResourceChange.Response>

    /**
     * Calls ImportResourceState.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public importResourceState(
      request: tfplugin5.ImportResourceState.IRequest,
      callback: tfplugin5.Provider.ImportResourceStateCallback,
    ): void

    /**
     * Calls ImportResourceState.
     * @param request Request message or plain object
     * @returns Promise
     */
    public importResourceState(
      request: tfplugin5.ImportResourceState.IRequest,
    ): Promise<tfplugin5.ImportResourceState.Response>

    /**
     * Calls ReadDataSource.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public readDataSource(
      request: tfplugin5.ReadDataSource.IRequest,
      callback: tfplugin5.Provider.ReadDataSourceCallback,
    ): void

    /**
     * Calls ReadDataSource.
     * @param request Request message or plain object
     * @returns Promise
     */
    public readDataSource(request: tfplugin5.ReadDataSource.IRequest): Promise<tfplugin5.ReadDataSource.Response>

    /**
     * Graceful Shutdown
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public stop(request: tfplugin5.Stop.IRequest, callback: tfplugin5.Provider.StopCallback): void

    /**
     * Graceful Shutdown
     * @param request Request message or plain object
     * @returns Promise
     */
    public stop(request: tfplugin5.Stop.IRequest): Promise<tfplugin5.Stop.Response>
  }

  namespace Provider {
    /**
     * Callback as used by {@link tfplugin5.Provider#getSchema}.
     * @param error Error, if any
     * @param [response] Response
     */
    type GetSchemaCallback = (error: Error | null, response?: tfplugin5.GetProviderSchema.Response) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#prepareProviderConfig}.
     * @param error Error, if any
     * @param [response] Response
     */
    type PrepareProviderConfigCallback = (
      error: Error | null,
      response?: tfplugin5.PrepareProviderConfig.Response,
    ) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#validateResourceTypeConfig}.
     * @param error Error, if any
     * @param [response] Response
     */
    type ValidateResourceTypeConfigCallback = (
      error: Error | null,
      response?: tfplugin5.ValidateResourceTypeConfig.Response,
    ) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#validateDataSourceConfig}.
     * @param error Error, if any
     * @param [response] Response
     */
    type ValidateDataSourceConfigCallback = (
      error: Error | null,
      response?: tfplugin5.ValidateDataSourceConfig.Response,
    ) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#upgradeResourceState}.
     * @param error Error, if any
     * @param [response] Response
     */
    type UpgradeResourceStateCallback = (
      error: Error | null,
      response?: tfplugin5.UpgradeResourceState.Response,
    ) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#configure}.
     * @param error Error, if any
     * @param [response] Response
     */
    type ConfigureCallback = (error: Error | null, response?: tfplugin5.Configure.Response) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#readResource}.
     * @param error Error, if any
     * @param [response] Response
     */
    type ReadResourceCallback = (error: Error | null, response?: tfplugin5.ReadResource.Response) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#planResourceChange}.
     * @param error Error, if any
     * @param [response] Response
     */
    type PlanResourceChangeCallback = (error: Error | null, response?: tfplugin5.PlanResourceChange.Response) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#applyResourceChange}.
     * @param error Error, if any
     * @param [response] Response
     */
    type ApplyResourceChangeCallback = (error: Error | null, response?: tfplugin5.ApplyResourceChange.Response) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#importResourceState}.
     * @param error Error, if any
     * @param [response] Response
     */
    type ImportResourceStateCallback = (error: Error | null, response?: tfplugin5.ImportResourceState.Response) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#readDataSource}.
     * @param error Error, if any
     * @param [response] Response
     */
    type ReadDataSourceCallback = (error: Error | null, response?: tfplugin5.ReadDataSource.Response) => void

    /**
     * Callback as used by {@link tfplugin5.Provider#stop}.
     * @param error Error, if any
     * @param [response] Response
     */
    type StopCallback = (error: Error | null, response?: tfplugin5.Stop.Response) => void
  }

  /** Properties of a GetProviderSchema. */
  interface IGetProviderSchema {}

  /** Represents a GetProviderSchema. */
  class GetProviderSchema implements IGetProviderSchema {
    /**
     * Constructs a new GetProviderSchema.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IGetProviderSchema)

    /**
     * Creates a new GetProviderSchema instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetProviderSchema instance
     */
    public static create(properties?: tfplugin5.IGetProviderSchema): tfplugin5.GetProviderSchema

    /**
     * Encodes the specified GetProviderSchema message. Does not implicitly {@link tfplugin5.GetProviderSchema.verify|verify} messages.
     * @param message GetProviderSchema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IGetProviderSchema, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified GetProviderSchema message, length delimited. Does not implicitly {@link tfplugin5.GetProviderSchema.verify|verify} messages.
     * @param message GetProviderSchema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IGetProviderSchema, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a GetProviderSchema message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetProviderSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.GetProviderSchema

    /**
     * Decodes a GetProviderSchema message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetProviderSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.GetProviderSchema

    /**
     * Verifies a GetProviderSchema message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a GetProviderSchema message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetProviderSchema
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.GetProviderSchema

    /**
     * Creates a plain object from a GetProviderSchema message. Also converts values to other types if specified.
     * @param message GetProviderSchema
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.GetProviderSchema,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this GetProviderSchema to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace GetProviderSchema {
    /** Properties of a Request. */
    interface IRequest {}

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.GetProviderSchema.IRequest)

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.GetProviderSchema.IRequest): tfplugin5.GetProviderSchema.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.GetProviderSchema.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.GetProviderSchema.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.GetProviderSchema.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.GetProviderSchema.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.GetProviderSchema.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.GetProviderSchema.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.GetProviderSchema.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.GetProviderSchema.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response provider */
      provider?: tfplugin5.ISchema | null

      /** Response resourceSchemas */
      resourceSchemas?: {[k: string]: tfplugin5.ISchema} | null

      /** Response dataSourceSchemas */
      dataSourceSchemas?: {[k: string]: tfplugin5.ISchema} | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null

      /** Response providerMeta */
      providerMeta?: tfplugin5.ISchema | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.GetProviderSchema.IResponse)

      /** Response provider. */
      public provider?: tfplugin5.ISchema | null

      /** Response resourceSchemas. */
      public resourceSchemas: {[k: string]: tfplugin5.ISchema}

      /** Response dataSourceSchemas. */
      public dataSourceSchemas: {[k: string]: tfplugin5.ISchema}

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /** Response providerMeta. */
      public providerMeta?: tfplugin5.ISchema | null

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tfplugin5.GetProviderSchema.IResponse): tfplugin5.GetProviderSchema.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.GetProviderSchema.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.GetProviderSchema.IResponse, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.GetProviderSchema.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.GetProviderSchema.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.GetProviderSchema.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.GetProviderSchema.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.GetProviderSchema.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.GetProviderSchema.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a PrepareProviderConfig. */
  interface IPrepareProviderConfig {}

  /** Represents a PrepareProviderConfig. */
  class PrepareProviderConfig implements IPrepareProviderConfig {
    /**
     * Constructs a new PrepareProviderConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IPrepareProviderConfig)

    /**
     * Creates a new PrepareProviderConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PrepareProviderConfig instance
     */
    public static create(properties?: tfplugin5.IPrepareProviderConfig): tfplugin5.PrepareProviderConfig

    /**
     * Encodes the specified PrepareProviderConfig message. Does not implicitly {@link tfplugin5.PrepareProviderConfig.verify|verify} messages.
     * @param message PrepareProviderConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IPrepareProviderConfig, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified PrepareProviderConfig message, length delimited. Does not implicitly {@link tfplugin5.PrepareProviderConfig.verify|verify} messages.
     * @param message PrepareProviderConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: tfplugin5.IPrepareProviderConfig,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer

    /**
     * Decodes a PrepareProviderConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PrepareProviderConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.PrepareProviderConfig

    /**
     * Decodes a PrepareProviderConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PrepareProviderConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.PrepareProviderConfig

    /**
     * Verifies a PrepareProviderConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a PrepareProviderConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PrepareProviderConfig
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.PrepareProviderConfig

    /**
     * Creates a plain object from a PrepareProviderConfig message. Also converts values to other types if specified.
     * @param message PrepareProviderConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.PrepareProviderConfig,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this PrepareProviderConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace PrepareProviderConfig {
    /** Properties of a Request. */
    interface IRequest {
      /** Request config */
      config?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.PrepareProviderConfig.IRequest)

      /** Request config. */
      public config?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(
        properties?: tfplugin5.PrepareProviderConfig.IRequest,
      ): tfplugin5.PrepareProviderConfig.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.PrepareProviderConfig.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.PrepareProviderConfig.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.PrepareProviderConfig.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.PrepareProviderConfig.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.PrepareProviderConfig.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.PrepareProviderConfig.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.PrepareProviderConfig.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.PrepareProviderConfig.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response preparedConfig */
      preparedConfig?: tfplugin5.IDynamicValue | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.PrepareProviderConfig.IResponse)

      /** Response preparedConfig. */
      public preparedConfig?: tfplugin5.IDynamicValue | null

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(
        properties?: tfplugin5.PrepareProviderConfig.IResponse,
      ): tfplugin5.PrepareProviderConfig.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.PrepareProviderConfig.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.PrepareProviderConfig.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.PrepareProviderConfig.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.PrepareProviderConfig.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.PrepareProviderConfig.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.PrepareProviderConfig.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.PrepareProviderConfig.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.PrepareProviderConfig.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of an UpgradeResourceState. */
  interface IUpgradeResourceState {}

  /** Represents an UpgradeResourceState. */
  class UpgradeResourceState implements IUpgradeResourceState {
    /**
     * Constructs a new UpgradeResourceState.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IUpgradeResourceState)

    /**
     * Creates a new UpgradeResourceState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpgradeResourceState instance
     */
    public static create(properties?: tfplugin5.IUpgradeResourceState): tfplugin5.UpgradeResourceState

    /**
     * Encodes the specified UpgradeResourceState message. Does not implicitly {@link tfplugin5.UpgradeResourceState.verify|verify} messages.
     * @param message UpgradeResourceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IUpgradeResourceState, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified UpgradeResourceState message, length delimited. Does not implicitly {@link tfplugin5.UpgradeResourceState.verify|verify} messages.
     * @param message UpgradeResourceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IUpgradeResourceState, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes an UpgradeResourceState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpgradeResourceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.UpgradeResourceState

    /**
     * Decodes an UpgradeResourceState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpgradeResourceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.UpgradeResourceState

    /**
     * Verifies an UpgradeResourceState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates an UpgradeResourceState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpgradeResourceState
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.UpgradeResourceState

    /**
     * Creates a plain object from an UpgradeResourceState message. Also converts values to other types if specified.
     * @param message UpgradeResourceState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.UpgradeResourceState,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this UpgradeResourceState to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace UpgradeResourceState {
    /** Properties of a Request. */
    interface IRequest {
      /** Request typeName */
      typeName?: string | null

      /** Request version */
      version?: number | null

      /** Request rawState */
      rawState?: tfplugin5.IRawState | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.UpgradeResourceState.IRequest)

      /** Request typeName. */
      public typeName: string

      /** Request version. */
      public version: number

      /** Request rawState. */
      public rawState?: tfplugin5.IRawState | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.UpgradeResourceState.IRequest): tfplugin5.UpgradeResourceState.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.UpgradeResourceState.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.UpgradeResourceState.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.UpgradeResourceState.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.UpgradeResourceState.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.UpgradeResourceState.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.UpgradeResourceState.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.UpgradeResourceState.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.UpgradeResourceState.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response upgradedState */
      upgradedState?: tfplugin5.IDynamicValue | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.UpgradeResourceState.IResponse)

      /** Response upgradedState. */
      public upgradedState?: tfplugin5.IDynamicValue | null

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(
        properties?: tfplugin5.UpgradeResourceState.IResponse,
      ): tfplugin5.UpgradeResourceState.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.UpgradeResourceState.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.UpgradeResourceState.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.UpgradeResourceState.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.UpgradeResourceState.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.UpgradeResourceState.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.UpgradeResourceState.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.UpgradeResourceState.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.UpgradeResourceState.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a ValidateResourceTypeConfig. */
  interface IValidateResourceTypeConfig {}

  /** Represents a ValidateResourceTypeConfig. */
  class ValidateResourceTypeConfig implements IValidateResourceTypeConfig {
    /**
     * Constructs a new ValidateResourceTypeConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IValidateResourceTypeConfig)

    /**
     * Creates a new ValidateResourceTypeConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValidateResourceTypeConfig instance
     */
    public static create(properties?: tfplugin5.IValidateResourceTypeConfig): tfplugin5.ValidateResourceTypeConfig

    /**
     * Encodes the specified ValidateResourceTypeConfig message. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.verify|verify} messages.
     * @param message ValidateResourceTypeConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IValidateResourceTypeConfig, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified ValidateResourceTypeConfig message, length delimited. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.verify|verify} messages.
     * @param message ValidateResourceTypeConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: tfplugin5.IValidateResourceTypeConfig,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer

    /**
     * Decodes a ValidateResourceTypeConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValidateResourceTypeConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ValidateResourceTypeConfig

    /**
     * Decodes a ValidateResourceTypeConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValidateResourceTypeConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ValidateResourceTypeConfig

    /**
     * Verifies a ValidateResourceTypeConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a ValidateResourceTypeConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValidateResourceTypeConfig
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.ValidateResourceTypeConfig

    /**
     * Creates a plain object from a ValidateResourceTypeConfig message. Also converts values to other types if specified.
     * @param message ValidateResourceTypeConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.ValidateResourceTypeConfig,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this ValidateResourceTypeConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace ValidateResourceTypeConfig {
    /** Properties of a Request. */
    interface IRequest {
      /** Request typeName */
      typeName?: string | null

      /** Request config */
      config?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ValidateResourceTypeConfig.IRequest)

      /** Request typeName. */
      public typeName: string

      /** Request config. */
      public config?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(
        properties?: tfplugin5.ValidateResourceTypeConfig.IRequest,
      ): tfplugin5.ValidateResourceTypeConfig.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.ValidateResourceTypeConfig.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ValidateResourceTypeConfig.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ValidateResourceTypeConfig.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ValidateResourceTypeConfig.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ValidateResourceTypeConfig.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ValidateResourceTypeConfig.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ValidateResourceTypeConfig.IResponse)

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(
        properties?: tfplugin5.ValidateResourceTypeConfig.IResponse,
      ): tfplugin5.ValidateResourceTypeConfig.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.ValidateResourceTypeConfig.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ValidateResourceTypeConfig.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ValidateResourceTypeConfig.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): tfplugin5.ValidateResourceTypeConfig.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ValidateResourceTypeConfig.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ValidateResourceTypeConfig.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a ValidateDataSourceConfig. */
  interface IValidateDataSourceConfig {}

  /** Represents a ValidateDataSourceConfig. */
  class ValidateDataSourceConfig implements IValidateDataSourceConfig {
    /**
     * Constructs a new ValidateDataSourceConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IValidateDataSourceConfig)

    /**
     * Creates a new ValidateDataSourceConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValidateDataSourceConfig instance
     */
    public static create(properties?: tfplugin5.IValidateDataSourceConfig): tfplugin5.ValidateDataSourceConfig

    /**
     * Encodes the specified ValidateDataSourceConfig message. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.verify|verify} messages.
     * @param message ValidateDataSourceConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IValidateDataSourceConfig, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified ValidateDataSourceConfig message, length delimited. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.verify|verify} messages.
     * @param message ValidateDataSourceConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: tfplugin5.IValidateDataSourceConfig,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer

    /**
     * Decodes a ValidateDataSourceConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValidateDataSourceConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ValidateDataSourceConfig

    /**
     * Decodes a ValidateDataSourceConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValidateDataSourceConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ValidateDataSourceConfig

    /**
     * Verifies a ValidateDataSourceConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a ValidateDataSourceConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValidateDataSourceConfig
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.ValidateDataSourceConfig

    /**
     * Creates a plain object from a ValidateDataSourceConfig message. Also converts values to other types if specified.
     * @param message ValidateDataSourceConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.ValidateDataSourceConfig,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this ValidateDataSourceConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace ValidateDataSourceConfig {
    /** Properties of a Request. */
    interface IRequest {
      /** Request typeName */
      typeName?: string | null

      /** Request config */
      config?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ValidateDataSourceConfig.IRequest)

      /** Request typeName. */
      public typeName: string

      /** Request config. */
      public config?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(
        properties?: tfplugin5.ValidateDataSourceConfig.IRequest,
      ): tfplugin5.ValidateDataSourceConfig.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.ValidateDataSourceConfig.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ValidateDataSourceConfig.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ValidateDataSourceConfig.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ValidateDataSourceConfig.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ValidateDataSourceConfig.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ValidateDataSourceConfig.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ValidateDataSourceConfig.IResponse)

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(
        properties?: tfplugin5.ValidateDataSourceConfig.IResponse,
      ): tfplugin5.ValidateDataSourceConfig.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.ValidateDataSourceConfig.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ValidateDataSourceConfig.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ValidateDataSourceConfig.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ValidateDataSourceConfig.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ValidateDataSourceConfig.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ValidateDataSourceConfig.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a Configure. */
  interface IConfigure {}

  /** Represents a Configure. */
  class Configure implements IConfigure {
    /**
     * Constructs a new Configure.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IConfigure)

    /**
     * Creates a new Configure instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Configure instance
     */
    public static create(properties?: tfplugin5.IConfigure): tfplugin5.Configure

    /**
     * Encodes the specified Configure message. Does not implicitly {@link tfplugin5.Configure.verify|verify} messages.
     * @param message Configure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IConfigure, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified Configure message, length delimited. Does not implicitly {@link tfplugin5.Configure.verify|verify} messages.
     * @param message Configure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IConfigure, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a Configure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Configure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Configure

    /**
     * Decodes a Configure message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Configure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Configure

    /**
     * Verifies a Configure message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a Configure message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Configure
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.Configure

    /**
     * Creates a plain object from a Configure message. Also converts values to other types if specified.
     * @param message Configure
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tfplugin5.Configure, options?: $protobuf.IConversionOptions): {[k: string]: any}

    /**
     * Converts this Configure to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace Configure {
    /** Properties of a Request. */
    interface IRequest {
      /** Request terraformVersion */
      terraformVersion?: string | null

      /** Request config */
      config?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.Configure.IRequest)

      /** Request terraformVersion. */
      public terraformVersion: string

      /** Request config. */
      public config?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.Configure.IRequest): tfplugin5.Configure.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.Configure.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.Configure.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.Configure.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: tfplugin5.Configure.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Configure.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Configure.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.Configure.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.Configure.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.Configure.IResponse)

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tfplugin5.Configure.IResponse): tfplugin5.Configure.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.Configure.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.Configure.IResponse, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.Configure.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: tfplugin5.Configure.IResponse, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.Configure.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.Configure.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.Configure.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.Configure.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a ReadResource. */
  interface IReadResource {}

  /** Represents a ReadResource. */
  class ReadResource implements IReadResource {
    /**
     * Constructs a new ReadResource.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IReadResource)

    /**
     * Creates a new ReadResource instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadResource instance
     */
    public static create(properties?: tfplugin5.IReadResource): tfplugin5.ReadResource

    /**
     * Encodes the specified ReadResource message. Does not implicitly {@link tfplugin5.ReadResource.verify|verify} messages.
     * @param message ReadResource message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IReadResource, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified ReadResource message, length delimited. Does not implicitly {@link tfplugin5.ReadResource.verify|verify} messages.
     * @param message ReadResource message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IReadResource, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a ReadResource message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ReadResource

    /**
     * Decodes a ReadResource message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReadResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ReadResource

    /**
     * Verifies a ReadResource message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a ReadResource message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReadResource
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.ReadResource

    /**
     * Creates a plain object from a ReadResource message. Also converts values to other types if specified.
     * @param message ReadResource
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tfplugin5.ReadResource, options?: $protobuf.IConversionOptions): {[k: string]: any}

    /**
     * Converts this ReadResource to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace ReadResource {
    /** Properties of a Request. */
    interface IRequest {
      /** Request typeName */
      typeName?: string | null

      /** Request currentState */
      currentState?: tfplugin5.IDynamicValue | null

      /** Request private */
      private?: Uint8Array | null

      /** Request providerMeta */
      providerMeta?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ReadResource.IRequest)

      /** Request typeName. */
      public typeName: string

      /** Request currentState. */
      public currentState?: tfplugin5.IDynamicValue | null

      /** Request private. */
      public private: Uint8Array

      /** Request providerMeta. */
      public providerMeta?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.ReadResource.IRequest): tfplugin5.ReadResource.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ReadResource.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.ReadResource.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ReadResource.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ReadResource.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ReadResource.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ReadResource.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ReadResource.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ReadResource.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response newState */
      newState?: tfplugin5.IDynamicValue | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null

      /** Response private */
      private?: Uint8Array | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ReadResource.IResponse)

      /** Response newState. */
      public newState?: tfplugin5.IDynamicValue | null

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /** Response private. */
      public private: Uint8Array

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tfplugin5.ReadResource.IResponse): tfplugin5.ReadResource.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ReadResource.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.ReadResource.IResponse, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ReadResource.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ReadResource.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ReadResource.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ReadResource.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ReadResource.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ReadResource.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a PlanResourceChange. */
  interface IPlanResourceChange {}

  /** Represents a PlanResourceChange. */
  class PlanResourceChange implements IPlanResourceChange {
    /**
     * Constructs a new PlanResourceChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IPlanResourceChange)

    /**
     * Creates a new PlanResourceChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlanResourceChange instance
     */
    public static create(properties?: tfplugin5.IPlanResourceChange): tfplugin5.PlanResourceChange

    /**
     * Encodes the specified PlanResourceChange message. Does not implicitly {@link tfplugin5.PlanResourceChange.verify|verify} messages.
     * @param message PlanResourceChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IPlanResourceChange, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified PlanResourceChange message, length delimited. Does not implicitly {@link tfplugin5.PlanResourceChange.verify|verify} messages.
     * @param message PlanResourceChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IPlanResourceChange, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a PlanResourceChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlanResourceChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.PlanResourceChange

    /**
     * Decodes a PlanResourceChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlanResourceChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.PlanResourceChange

    /**
     * Verifies a PlanResourceChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a PlanResourceChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlanResourceChange
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.PlanResourceChange

    /**
     * Creates a plain object from a PlanResourceChange message. Also converts values to other types if specified.
     * @param message PlanResourceChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.PlanResourceChange,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this PlanResourceChange to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace PlanResourceChange {
    /** Properties of a Request. */
    interface IRequest {
      /** Request typeName */
      typeName?: string | null

      /** Request priorState */
      priorState?: tfplugin5.IDynamicValue | null

      /** Request proposedNewState */
      proposedNewState?: tfplugin5.IDynamicValue | null

      /** Request config */
      config?: tfplugin5.IDynamicValue | null

      /** Request priorPrivate */
      priorPrivate?: Uint8Array | null

      /** Request providerMeta */
      providerMeta?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.PlanResourceChange.IRequest)

      /** Request typeName. */
      public typeName: string

      /** Request priorState. */
      public priorState?: tfplugin5.IDynamicValue | null

      /** Request proposedNewState. */
      public proposedNewState?: tfplugin5.IDynamicValue | null

      /** Request config. */
      public config?: tfplugin5.IDynamicValue | null

      /** Request priorPrivate. */
      public priorPrivate: Uint8Array

      /** Request providerMeta. */
      public providerMeta?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.PlanResourceChange.IRequest): tfplugin5.PlanResourceChange.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.PlanResourceChange.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.PlanResourceChange.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.PlanResourceChange.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.PlanResourceChange.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.PlanResourceChange.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.PlanResourceChange.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.PlanResourceChange.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.PlanResourceChange.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response plannedState */
      plannedState?: tfplugin5.IDynamicValue | null

      /** Response requiresReplace */
      requiresReplace?: tfplugin5.IAttributePath[] | null

      /** Response plannedPrivate */
      plannedPrivate?: Uint8Array | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null

      /** Response legacyTypeSystem */
      legacyTypeSystem?: boolean | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.PlanResourceChange.IResponse)

      /** Response plannedState. */
      public plannedState?: tfplugin5.IDynamicValue | null

      /** Response requiresReplace. */
      public requiresReplace: tfplugin5.IAttributePath[]

      /** Response plannedPrivate. */
      public plannedPrivate: Uint8Array

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /** Response legacyTypeSystem. */
      public legacyTypeSystem: boolean

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tfplugin5.PlanResourceChange.IResponse): tfplugin5.PlanResourceChange.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.PlanResourceChange.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.PlanResourceChange.IResponse, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.PlanResourceChange.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.PlanResourceChange.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.PlanResourceChange.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.PlanResourceChange.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.PlanResourceChange.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.PlanResourceChange.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of an ApplyResourceChange. */
  interface IApplyResourceChange {}

  /** Represents an ApplyResourceChange. */
  class ApplyResourceChange implements IApplyResourceChange {
    /**
     * Constructs a new ApplyResourceChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IApplyResourceChange)

    /**
     * Creates a new ApplyResourceChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyResourceChange instance
     */
    public static create(properties?: tfplugin5.IApplyResourceChange): tfplugin5.ApplyResourceChange

    /**
     * Encodes the specified ApplyResourceChange message. Does not implicitly {@link tfplugin5.ApplyResourceChange.verify|verify} messages.
     * @param message ApplyResourceChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IApplyResourceChange, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified ApplyResourceChange message, length delimited. Does not implicitly {@link tfplugin5.ApplyResourceChange.verify|verify} messages.
     * @param message ApplyResourceChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IApplyResourceChange, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes an ApplyResourceChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ApplyResourceChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ApplyResourceChange

    /**
     * Decodes an ApplyResourceChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ApplyResourceChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ApplyResourceChange

    /**
     * Verifies an ApplyResourceChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates an ApplyResourceChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ApplyResourceChange
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.ApplyResourceChange

    /**
     * Creates a plain object from an ApplyResourceChange message. Also converts values to other types if specified.
     * @param message ApplyResourceChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.ApplyResourceChange,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this ApplyResourceChange to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace ApplyResourceChange {
    /** Properties of a Request. */
    interface IRequest {
      /** Request typeName */
      typeName?: string | null

      /** Request priorState */
      priorState?: tfplugin5.IDynamicValue | null

      /** Request plannedState */
      plannedState?: tfplugin5.IDynamicValue | null

      /** Request config */
      config?: tfplugin5.IDynamicValue | null

      /** Request plannedPrivate */
      plannedPrivate?: Uint8Array | null

      /** Request providerMeta */
      providerMeta?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ApplyResourceChange.IRequest)

      /** Request typeName. */
      public typeName: string

      /** Request priorState. */
      public priorState?: tfplugin5.IDynamicValue | null

      /** Request plannedState. */
      public plannedState?: tfplugin5.IDynamicValue | null

      /** Request config. */
      public config?: tfplugin5.IDynamicValue | null

      /** Request plannedPrivate. */
      public plannedPrivate: Uint8Array

      /** Request providerMeta. */
      public providerMeta?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.ApplyResourceChange.IRequest): tfplugin5.ApplyResourceChange.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ApplyResourceChange.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.ApplyResourceChange.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ApplyResourceChange.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ApplyResourceChange.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ApplyResourceChange.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ApplyResourceChange.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ApplyResourceChange.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ApplyResourceChange.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response newState */
      newState?: tfplugin5.IDynamicValue | null

      /** Response private */
      private?: Uint8Array | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null

      /** Response legacyTypeSystem */
      legacyTypeSystem?: boolean | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ApplyResourceChange.IResponse)

      /** Response newState. */
      public newState?: tfplugin5.IDynamicValue | null

      /** Response private. */
      public private: Uint8Array

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /** Response legacyTypeSystem. */
      public legacyTypeSystem: boolean

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tfplugin5.ApplyResourceChange.IResponse): tfplugin5.ApplyResourceChange.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ApplyResourceChange.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.ApplyResourceChange.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ApplyResourceChange.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ApplyResourceChange.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ApplyResourceChange.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ApplyResourceChange.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ApplyResourceChange.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ApplyResourceChange.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of an ImportResourceState. */
  interface IImportResourceState {}

  /** Represents an ImportResourceState. */
  class ImportResourceState implements IImportResourceState {
    /**
     * Constructs a new ImportResourceState.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IImportResourceState)

    /**
     * Creates a new ImportResourceState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ImportResourceState instance
     */
    public static create(properties?: tfplugin5.IImportResourceState): tfplugin5.ImportResourceState

    /**
     * Encodes the specified ImportResourceState message. Does not implicitly {@link tfplugin5.ImportResourceState.verify|verify} messages.
     * @param message ImportResourceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IImportResourceState, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified ImportResourceState message, length delimited. Does not implicitly {@link tfplugin5.ImportResourceState.verify|verify} messages.
     * @param message ImportResourceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IImportResourceState, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes an ImportResourceState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ImportResourceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ImportResourceState

    /**
     * Decodes an ImportResourceState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ImportResourceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ImportResourceState

    /**
     * Verifies an ImportResourceState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates an ImportResourceState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ImportResourceState
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.ImportResourceState

    /**
     * Creates a plain object from an ImportResourceState message. Also converts values to other types if specified.
     * @param message ImportResourceState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.ImportResourceState,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this ImportResourceState to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace ImportResourceState {
    /** Properties of a Request. */
    interface IRequest {
      /** Request typeName */
      typeName?: string | null

      /** Request id */
      id?: string | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ImportResourceState.IRequest)

      /** Request typeName. */
      public typeName: string

      /** Request id. */
      public id: string

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.ImportResourceState.IRequest): tfplugin5.ImportResourceState.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ImportResourceState.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.ImportResourceState.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ImportResourceState.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ImportResourceState.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ImportResourceState.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ImportResourceState.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ImportResourceState.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ImportResourceState.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of an ImportedResource. */
    interface IImportedResource {
      /** ImportedResource typeName */
      typeName?: string | null

      /** ImportedResource state */
      state?: tfplugin5.IDynamicValue | null

      /** ImportedResource private */
      private?: Uint8Array | null
    }

    /** Represents an ImportedResource. */
    class ImportedResource implements IImportedResource {
      /**
       * Constructs a new ImportedResource.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ImportResourceState.IImportedResource)

      /** ImportedResource typeName. */
      public typeName: string

      /** ImportedResource state. */
      public state?: tfplugin5.IDynamicValue | null

      /** ImportedResource private. */
      public private: Uint8Array

      /**
       * Creates a new ImportedResource instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ImportedResource instance
       */
      public static create(
        properties?: tfplugin5.ImportResourceState.IImportedResource,
      ): tfplugin5.ImportResourceState.ImportedResource

      /**
       * Encodes the specified ImportedResource message. Does not implicitly {@link tfplugin5.ImportResourceState.ImportedResource.verify|verify} messages.
       * @param message ImportedResource message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.ImportResourceState.IImportedResource,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified ImportedResource message, length delimited. Does not implicitly {@link tfplugin5.ImportResourceState.ImportedResource.verify|verify} messages.
       * @param message ImportedResource message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ImportResourceState.IImportedResource,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes an ImportedResource message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ImportedResource
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ImportResourceState.ImportedResource

      /**
       * Decodes an ImportedResource message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ImportedResource
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): tfplugin5.ImportResourceState.ImportedResource

      /**
       * Verifies an ImportedResource message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates an ImportedResource message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ImportedResource
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ImportResourceState.ImportedResource

      /**
       * Creates a plain object from an ImportedResource message. Also converts values to other types if specified.
       * @param message ImportedResource
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ImportResourceState.ImportedResource,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this ImportedResource to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response importedResources */
      importedResources?: tfplugin5.ImportResourceState.IImportedResource[] | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ImportResourceState.IResponse)

      /** Response importedResources. */
      public importedResources: tfplugin5.ImportResourceState.IImportedResource[]

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tfplugin5.ImportResourceState.IResponse): tfplugin5.ImportResourceState.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ImportResourceState.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.ImportResourceState.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ImportResourceState.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ImportResourceState.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ImportResourceState.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ImportResourceState.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ImportResourceState.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ImportResourceState.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a ReadDataSource. */
  interface IReadDataSource {}

  /** Represents a ReadDataSource. */
  class ReadDataSource implements IReadDataSource {
    /**
     * Constructs a new ReadDataSource.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IReadDataSource)

    /**
     * Creates a new ReadDataSource instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadDataSource instance
     */
    public static create(properties?: tfplugin5.IReadDataSource): tfplugin5.ReadDataSource

    /**
     * Encodes the specified ReadDataSource message. Does not implicitly {@link tfplugin5.ReadDataSource.verify|verify} messages.
     * @param message ReadDataSource message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IReadDataSource, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified ReadDataSource message, length delimited. Does not implicitly {@link tfplugin5.ReadDataSource.verify|verify} messages.
     * @param message ReadDataSource message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IReadDataSource, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a ReadDataSource message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadDataSource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ReadDataSource

    /**
     * Decodes a ReadDataSource message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReadDataSource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ReadDataSource

    /**
     * Verifies a ReadDataSource message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a ReadDataSource message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReadDataSource
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.ReadDataSource

    /**
     * Creates a plain object from a ReadDataSource message. Also converts values to other types if specified.
     * @param message ReadDataSource
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.ReadDataSource,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this ReadDataSource to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace ReadDataSource {
    /** Properties of a Request. */
    interface IRequest {
      /** Request typeName */
      typeName?: string | null

      /** Request config */
      config?: tfplugin5.IDynamicValue | null

      /** Request providerMeta */
      providerMeta?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ReadDataSource.IRequest)

      /** Request typeName. */
      public typeName: string

      /** Request config. */
      public config?: tfplugin5.IDynamicValue | null

      /** Request providerMeta. */
      public providerMeta?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.ReadDataSource.IRequest): tfplugin5.ReadDataSource.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ReadDataSource.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.ReadDataSource.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ReadDataSource.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ReadDataSource.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ReadDataSource.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ReadDataSource.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ReadDataSource.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ReadDataSource.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response state */
      state?: tfplugin5.IDynamicValue | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ReadDataSource.IResponse)

      /** Response state. */
      public state?: tfplugin5.IDynamicValue | null

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tfplugin5.ReadDataSource.IResponse): tfplugin5.ReadDataSource.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ReadDataSource.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.ReadDataSource.IResponse, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ReadDataSource.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ReadDataSource.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ReadDataSource.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ReadDataSource.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ReadDataSource.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ReadDataSource.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Represents a Provisioner */
  class Provisioner extends $protobuf.rpc.Service {
    /**
     * Constructs a new Provisioner service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean)

    /**
     * Creates new Provisioner service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean,
    ): Provisioner

    /**
     * Calls GetSchema.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public getSchema(
      request: tfplugin5.GetProvisionerSchema.IRequest,
      callback: tfplugin5.Provisioner.GetSchemaCallback,
    ): void

    /**
     * Calls GetSchema.
     * @param request Request message or plain object
     * @returns Promise
     */
    public getSchema(request: tfplugin5.GetProvisionerSchema.IRequest): Promise<tfplugin5.GetProvisionerSchema.Response>

    /**
     * Calls ValidateProvisionerConfig.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public validateProvisionerConfig(
      request: tfplugin5.ValidateProvisionerConfig.IRequest,
      callback: tfplugin5.Provisioner.ValidateProvisionerConfigCallback,
    ): void

    /**
     * Calls ValidateProvisionerConfig.
     * @param request Request message or plain object
     * @returns Promise
     */
    public validateProvisionerConfig(
      request: tfplugin5.ValidateProvisionerConfig.IRequest,
    ): Promise<tfplugin5.ValidateProvisionerConfig.Response>

    /**
     * Calls ProvisionResource.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public provisionResource(
      request: tfplugin5.ProvisionResource.IRequest,
      callback: tfplugin5.Provisioner.ProvisionResourceCallback,
    ): void

    /**
     * Calls ProvisionResource.
     * @param request Request message or plain object
     * @returns Promise
     */
    public provisionResource(
      request: tfplugin5.ProvisionResource.IRequest,
    ): Promise<tfplugin5.ProvisionResource.Response>

    /**
     * Calls Stop.
     * @param request Request message or plain object
     * @param callback Node-style callback called with the error, if any, and Response
     */
    public stop(request: tfplugin5.Stop.IRequest, callback: tfplugin5.Provisioner.StopCallback): void

    /**
     * Calls Stop.
     * @param request Request message or plain object
     * @returns Promise
     */
    public stop(request: tfplugin5.Stop.IRequest): Promise<tfplugin5.Stop.Response>
  }

  namespace Provisioner {
    /**
     * Callback as used by {@link tfplugin5.Provisioner#getSchema}.
     * @param error Error, if any
     * @param [response] Response
     */
    type GetSchemaCallback = (error: Error | null, response?: tfplugin5.GetProvisionerSchema.Response) => void

    /**
     * Callback as used by {@link tfplugin5.Provisioner#validateProvisionerConfig}.
     * @param error Error, if any
     * @param [response] Response
     */
    type ValidateProvisionerConfigCallback = (
      error: Error | null,
      response?: tfplugin5.ValidateProvisionerConfig.Response,
    ) => void

    /**
     * Callback as used by {@link tfplugin5.Provisioner#provisionResource}.
     * @param error Error, if any
     * @param [response] Response
     */
    type ProvisionResourceCallback = (error: Error | null, response?: tfplugin5.ProvisionResource.Response) => void

    /**
     * Callback as used by {@link tfplugin5.Provisioner#stop}.
     * @param error Error, if any
     * @param [response] Response
     */
    type StopCallback = (error: Error | null, response?: tfplugin5.Stop.Response) => void
  }

  /** Properties of a GetProvisionerSchema. */
  interface IGetProvisionerSchema {}

  /** Represents a GetProvisionerSchema. */
  class GetProvisionerSchema implements IGetProvisionerSchema {
    /**
     * Constructs a new GetProvisionerSchema.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IGetProvisionerSchema)

    /**
     * Creates a new GetProvisionerSchema instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetProvisionerSchema instance
     */
    public static create(properties?: tfplugin5.IGetProvisionerSchema): tfplugin5.GetProvisionerSchema

    /**
     * Encodes the specified GetProvisionerSchema message. Does not implicitly {@link tfplugin5.GetProvisionerSchema.verify|verify} messages.
     * @param message GetProvisionerSchema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IGetProvisionerSchema, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified GetProvisionerSchema message, length delimited. Does not implicitly {@link tfplugin5.GetProvisionerSchema.verify|verify} messages.
     * @param message GetProvisionerSchema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IGetProvisionerSchema, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a GetProvisionerSchema message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetProvisionerSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.GetProvisionerSchema

    /**
     * Decodes a GetProvisionerSchema message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetProvisionerSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.GetProvisionerSchema

    /**
     * Verifies a GetProvisionerSchema message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a GetProvisionerSchema message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetProvisionerSchema
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.GetProvisionerSchema

    /**
     * Creates a plain object from a GetProvisionerSchema message. Also converts values to other types if specified.
     * @param message GetProvisionerSchema
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.GetProvisionerSchema,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this GetProvisionerSchema to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace GetProvisionerSchema {
    /** Properties of a Request. */
    interface IRequest {}

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.GetProvisionerSchema.IRequest)

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.GetProvisionerSchema.IRequest): tfplugin5.GetProvisionerSchema.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.GetProvisionerSchema.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.GetProvisionerSchema.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.GetProvisionerSchema.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.GetProvisionerSchema.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.GetProvisionerSchema.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.GetProvisionerSchema.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.GetProvisionerSchema.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.GetProvisionerSchema.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response provisioner */
      provisioner?: tfplugin5.ISchema | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.GetProvisionerSchema.IResponse)

      /** Response provisioner. */
      public provisioner?: tfplugin5.ISchema | null

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(
        properties?: tfplugin5.GetProvisionerSchema.IResponse,
      ): tfplugin5.GetProvisionerSchema.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.GetProvisionerSchema.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.GetProvisionerSchema.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.GetProvisionerSchema.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.GetProvisionerSchema.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.GetProvisionerSchema.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.GetProvisionerSchema.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.GetProvisionerSchema.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.GetProvisionerSchema.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a ValidateProvisionerConfig. */
  interface IValidateProvisionerConfig {}

  /** Represents a ValidateProvisionerConfig. */
  class ValidateProvisionerConfig implements IValidateProvisionerConfig {
    /**
     * Constructs a new ValidateProvisionerConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IValidateProvisionerConfig)

    /**
     * Creates a new ValidateProvisionerConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValidateProvisionerConfig instance
     */
    public static create(properties?: tfplugin5.IValidateProvisionerConfig): tfplugin5.ValidateProvisionerConfig

    /**
     * Encodes the specified ValidateProvisionerConfig message. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.verify|verify} messages.
     * @param message ValidateProvisionerConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IValidateProvisionerConfig, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified ValidateProvisionerConfig message, length delimited. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.verify|verify} messages.
     * @param message ValidateProvisionerConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: tfplugin5.IValidateProvisionerConfig,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer

    /**
     * Decodes a ValidateProvisionerConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValidateProvisionerConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ValidateProvisionerConfig

    /**
     * Decodes a ValidateProvisionerConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValidateProvisionerConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ValidateProvisionerConfig

    /**
     * Verifies a ValidateProvisionerConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a ValidateProvisionerConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValidateProvisionerConfig
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.ValidateProvisionerConfig

    /**
     * Creates a plain object from a ValidateProvisionerConfig message. Also converts values to other types if specified.
     * @param message ValidateProvisionerConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.ValidateProvisionerConfig,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this ValidateProvisionerConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace ValidateProvisionerConfig {
    /** Properties of a Request. */
    interface IRequest {
      /** Request config */
      config?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ValidateProvisionerConfig.IRequest)

      /** Request config. */
      public config?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(
        properties?: tfplugin5.ValidateProvisionerConfig.IRequest,
      ): tfplugin5.ValidateProvisionerConfig.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.ValidateProvisionerConfig.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ValidateProvisionerConfig.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ValidateProvisionerConfig.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ValidateProvisionerConfig.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ValidateProvisionerConfig.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ValidateProvisionerConfig.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ValidateProvisionerConfig.IResponse)

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(
        properties?: tfplugin5.ValidateProvisionerConfig.IResponse,
      ): tfplugin5.ValidateProvisionerConfig.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: tfplugin5.ValidateProvisionerConfig.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ValidateProvisionerConfig.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): tfplugin5.ValidateProvisionerConfig.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ValidateProvisionerConfig.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ValidateProvisionerConfig.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ValidateProvisionerConfig.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }

  /** Properties of a ProvisionResource. */
  interface IProvisionResource {}

  /** Represents a ProvisionResource. */
  class ProvisionResource implements IProvisionResource {
    /**
     * Constructs a new ProvisionResource.
     * @param [properties] Properties to set
     */
    constructor(properties?: tfplugin5.IProvisionResource)

    /**
     * Creates a new ProvisionResource instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProvisionResource instance
     */
    public static create(properties?: tfplugin5.IProvisionResource): tfplugin5.ProvisionResource

    /**
     * Encodes the specified ProvisionResource message. Does not implicitly {@link tfplugin5.ProvisionResource.verify|verify} messages.
     * @param message ProvisionResource message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: tfplugin5.IProvisionResource, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified ProvisionResource message, length delimited. Does not implicitly {@link tfplugin5.ProvisionResource.verify|verify} messages.
     * @param message ProvisionResource message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: tfplugin5.IProvisionResource, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes a ProvisionResource message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProvisionResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ProvisionResource

    /**
     * Decodes a ProvisionResource message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProvisionResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ProvisionResource

    /**
     * Verifies a ProvisionResource message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null

    /**
     * Creates a ProvisionResource message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProvisionResource
     */
    public static fromObject(object: {[k: string]: any}): tfplugin5.ProvisionResource

    /**
     * Creates a plain object from a ProvisionResource message. Also converts values to other types if specified.
     * @param message ProvisionResource
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: tfplugin5.ProvisionResource,
      options?: $protobuf.IConversionOptions,
    ): {[k: string]: any}

    /**
     * Converts this ProvisionResource to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any}
  }

  namespace ProvisionResource {
    /** Properties of a Request. */
    interface IRequest {
      /** Request config */
      config?: tfplugin5.IDynamicValue | null

      /** Request connection */
      connection?: tfplugin5.IDynamicValue | null
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ProvisionResource.IRequest)

      /** Request config. */
      public config?: tfplugin5.IDynamicValue | null

      /** Request connection. */
      public connection?: tfplugin5.IDynamicValue | null

      /**
       * Creates a new Request instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Request instance
       */
      public static create(properties?: tfplugin5.ProvisionResource.IRequest): tfplugin5.ProvisionResource.Request

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ProvisionResource.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.ProvisionResource.IRequest, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ProvisionResource.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ProvisionResource.IRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ProvisionResource.Request

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ProvisionResource.Request

      /**
       * Verifies a Request message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ProvisionResource.Request

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ProvisionResource.Request,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }

    /** Properties of a Response. */
    interface IResponse {
      /** Response output */
      output?: string | null

      /** Response diagnostics */
      diagnostics?: tfplugin5.IDiagnostic[] | null
    }

    /** Represents a Response. */
    class Response implements IResponse {
      /**
       * Constructs a new Response.
       * @param [properties] Properties to set
       */
      constructor(properties?: tfplugin5.ProvisionResource.IResponse)

      /** Response output. */
      public output: string

      /** Response diagnostics. */
      public diagnostics: tfplugin5.IDiagnostic[]

      /**
       * Creates a new Response instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Response instance
       */
      public static create(properties?: tfplugin5.ProvisionResource.IResponse): tfplugin5.ProvisionResource.Response

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ProvisionResource.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: tfplugin5.ProvisionResource.IResponse, writer?: $protobuf.Writer): $protobuf.Writer

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ProvisionResource.Response.verify|verify} messages.
       * @param message Response message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: tfplugin5.ProvisionResource.IResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): tfplugin5.ProvisionResource.Response

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): tfplugin5.ProvisionResource.Response

      /**
       * Verifies a Response message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Response
       */
      public static fromObject(object: {[k: string]: any}): tfplugin5.ProvisionResource.Response

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @param message Response
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: tfplugin5.ProvisionResource.Response,
        options?: $protobuf.IConversionOptions,
      ): {[k: string]: any}

      /**
       * Converts this Response to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any}
    }
  }
}
