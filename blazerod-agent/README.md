# [Blazerod](https://blazerod.com) Agent

[![Build Status](https://travis-ci.org/BlazerodMC/blazerod-agent.svg?branch=master)](https://travis-ci.org/BlazerodMC/blazerod-agent)
[![GitHub release](https://img.shields.io/github/release/BlazerodMC/blazerod-agent.svg)]()
[![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)]()

This is the OSS agent that reports events and statistics to the [Blazerod](https://blazerod.com) professional Minecraft platform.

## Requirements

* Java 8

## Installation

1. Download the [latest release](https://github.com/BlazerodMC/blazerod-agent/releases) from GitHub
1. Add it to your `plugins` folder
1. Either run Bukkit/Spigot once to generate `blazerod/config.yml` or create it using the guide below.
1. All done!

## Configuration

```yaml
api-token: "xxxxxxxxxxxxxxxxxxx"
```

## Commands

- `/blazerod status` - displays the connection status to the Blazerod service
