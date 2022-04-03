/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict'

var $protobuf = require('protobufjs/minimal')

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

$root.tfplugin5 = (function () {
  /**
   * Namespace tfplugin5.
   * @exports tfplugin5
   * @namespace
   */
  var tfplugin5 = {}

  tfplugin5.DynamicValue = (function () {
    /**
     * Properties of a DynamicValue.
     * @memberof tfplugin5
     * @interface IDynamicValue
     * @property {Uint8Array|null} [msgpack] DynamicValue msgpack
     * @property {Uint8Array|null} [json] DynamicValue json
     */

    /**
     * Constructs a new DynamicValue.
     * @memberof tfplugin5
     * @classdesc Represents a DynamicValue.
     * @implements IDynamicValue
     * @constructor
     * @param {tfplugin5.IDynamicValue=} [properties] Properties to set
     */
    function DynamicValue(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * DynamicValue msgpack.
     * @member {Uint8Array} msgpack
     * @memberof tfplugin5.DynamicValue
     * @instance
     */
    DynamicValue.prototype.msgpack = $util.newBuffer([])

    /**
     * DynamicValue json.
     * @member {Uint8Array} json
     * @memberof tfplugin5.DynamicValue
     * @instance
     */
    DynamicValue.prototype.json = $util.newBuffer([])

    /**
     * Creates a new DynamicValue instance using the specified properties.
     * @function create
     * @memberof tfplugin5.DynamicValue
     * @static
     * @param {tfplugin5.IDynamicValue=} [properties] Properties to set
     * @returns {tfplugin5.DynamicValue} DynamicValue instance
     */
    DynamicValue.create = function create(properties) {
      return new DynamicValue(properties)
    }

    /**
     * Encodes the specified DynamicValue message. Does not implicitly {@link tfplugin5.DynamicValue.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.DynamicValue
     * @static
     * @param {tfplugin5.IDynamicValue} message DynamicValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DynamicValue.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.msgpack != null && Object.hasOwnProperty.call(message, 'msgpack'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.msgpack)
      if (message.json != null && Object.hasOwnProperty.call(message, 'json'))
        writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.json)
      return writer
    }

    /**
     * Encodes the specified DynamicValue message, length delimited. Does not implicitly {@link tfplugin5.DynamicValue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.DynamicValue
     * @static
     * @param {tfplugin5.IDynamicValue} message DynamicValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DynamicValue.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a DynamicValue message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.DynamicValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.DynamicValue} DynamicValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DynamicValue.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.DynamicValue()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.msgpack = reader.bytes()
            break
          case 2:
            message.json = reader.bytes()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a DynamicValue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.DynamicValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.DynamicValue} DynamicValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DynamicValue.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a DynamicValue message.
     * @function verify
     * @memberof tfplugin5.DynamicValue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DynamicValue.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      if (message.msgpack != null && message.hasOwnProperty('msgpack'))
        if (!((message.msgpack && typeof message.msgpack.length === 'number') || $util.isString(message.msgpack)))
          return 'msgpack: buffer expected'
      if (message.json != null && message.hasOwnProperty('json'))
        if (!((message.json && typeof message.json.length === 'number') || $util.isString(message.json)))
          return 'json: buffer expected'
      return null
    }

    /**
     * Creates a DynamicValue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.DynamicValue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.DynamicValue} DynamicValue
     */
    DynamicValue.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.DynamicValue) return object
      var message = new $root.tfplugin5.DynamicValue()
      if (object.msgpack != null)
        if (typeof object.msgpack === 'string')
          $util.base64.decode(
            object.msgpack,
            (message.msgpack = $util.newBuffer($util.base64.length(object.msgpack))),
            0,
          )
        else if (object.msgpack.length) message.msgpack = object.msgpack
      if (object.json != null)
        if (typeof object.json === 'string')
          $util.base64.decode(object.json, (message.json = $util.newBuffer($util.base64.length(object.json))), 0)
        else if (object.json.length) message.json = object.json
      return message
    }

    /**
     * Creates a plain object from a DynamicValue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.DynamicValue
     * @static
     * @param {tfplugin5.DynamicValue} message DynamicValue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DynamicValue.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.defaults) {
        if (options.bytes === String) object.msgpack = ''
        else {
          object.msgpack = []
          if (options.bytes !== Array) object.msgpack = $util.newBuffer(object.msgpack)
        }
        if (options.bytes === String) object.json = ''
        else {
          object.json = []
          if (options.bytes !== Array) object.json = $util.newBuffer(object.json)
        }
      }
      if (message.msgpack != null && message.hasOwnProperty('msgpack'))
        object.msgpack =
          options.bytes === String
            ? $util.base64.encode(message.msgpack, 0, message.msgpack.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.msgpack)
            : message.msgpack
      if (message.json != null && message.hasOwnProperty('json'))
        object.json =
          options.bytes === String
            ? $util.base64.encode(message.json, 0, message.json.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.json)
            : message.json
      return object
    }

    /**
     * Converts this DynamicValue to JSON.
     * @function toJSON
     * @memberof tfplugin5.DynamicValue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DynamicValue.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return DynamicValue
  })()

  tfplugin5.Diagnostic = (function () {
    /**
     * Properties of a Diagnostic.
     * @memberof tfplugin5
     * @interface IDiagnostic
     * @property {tfplugin5.Diagnostic.Severity|null} [severity] Diagnostic severity
     * @property {string|null} [summary] Diagnostic summary
     * @property {string|null} [detail] Diagnostic detail
     * @property {tfplugin5.IAttributePath|null} [attribute] Diagnostic attribute
     */

    /**
     * Constructs a new Diagnostic.
     * @memberof tfplugin5
     * @classdesc Represents a Diagnostic.
     * @implements IDiagnostic
     * @constructor
     * @param {tfplugin5.IDiagnostic=} [properties] Properties to set
     */
    function Diagnostic(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Diagnostic severity.
     * @member {tfplugin5.Diagnostic.Severity} severity
     * @memberof tfplugin5.Diagnostic
     * @instance
     */
    Diagnostic.prototype.severity = 0

    /**
     * Diagnostic summary.
     * @member {string} summary
     * @memberof tfplugin5.Diagnostic
     * @instance
     */
    Diagnostic.prototype.summary = ''

    /**
     * Diagnostic detail.
     * @member {string} detail
     * @memberof tfplugin5.Diagnostic
     * @instance
     */
    Diagnostic.prototype.detail = ''

    /**
     * Diagnostic attribute.
     * @member {tfplugin5.IAttributePath|null|undefined} attribute
     * @memberof tfplugin5.Diagnostic
     * @instance
     */
    Diagnostic.prototype.attribute = null

    /**
     * Creates a new Diagnostic instance using the specified properties.
     * @function create
     * @memberof tfplugin5.Diagnostic
     * @static
     * @param {tfplugin5.IDiagnostic=} [properties] Properties to set
     * @returns {tfplugin5.Diagnostic} Diagnostic instance
     */
    Diagnostic.create = function create(properties) {
      return new Diagnostic(properties)
    }

    /**
     * Encodes the specified Diagnostic message. Does not implicitly {@link tfplugin5.Diagnostic.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.Diagnostic
     * @static
     * @param {tfplugin5.IDiagnostic} message Diagnostic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Diagnostic.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.severity != null && Object.hasOwnProperty.call(message, 'severity'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.severity)
      if (message.summary != null && Object.hasOwnProperty.call(message, 'summary'))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.summary)
      if (message.detail != null && Object.hasOwnProperty.call(message, 'detail'))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.detail)
      if (message.attribute != null && Object.hasOwnProperty.call(message, 'attribute'))
        $root.tfplugin5.AttributePath.encode(
          message.attribute,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
        ).ldelim()
      return writer
    }

    /**
     * Encodes the specified Diagnostic message, length delimited. Does not implicitly {@link tfplugin5.Diagnostic.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.Diagnostic
     * @static
     * @param {tfplugin5.IDiagnostic} message Diagnostic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Diagnostic.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a Diagnostic message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.Diagnostic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.Diagnostic} Diagnostic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Diagnostic.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.Diagnostic()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.severity = reader.int32()
            break
          case 2:
            message.summary = reader.string()
            break
          case 3:
            message.detail = reader.string()
            break
          case 4:
            message.attribute = $root.tfplugin5.AttributePath.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a Diagnostic message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.Diagnostic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.Diagnostic} Diagnostic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Diagnostic.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a Diagnostic message.
     * @function verify
     * @memberof tfplugin5.Diagnostic
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Diagnostic.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      if (message.severity != null && message.hasOwnProperty('severity'))
        switch (message.severity) {
          default:
            return 'severity: enum value expected'
          case 0:
          case 1:
          case 2:
            break
        }
      if (message.summary != null && message.hasOwnProperty('summary'))
        if (!$util.isString(message.summary)) return 'summary: string expected'
      if (message.detail != null && message.hasOwnProperty('detail'))
        if (!$util.isString(message.detail)) return 'detail: string expected'
      if (message.attribute != null && message.hasOwnProperty('attribute')) {
        var error = $root.tfplugin5.AttributePath.verify(message.attribute)
        if (error) return 'attribute.' + error
      }
      return null
    }

    /**
     * Creates a Diagnostic message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.Diagnostic
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.Diagnostic} Diagnostic
     */
    Diagnostic.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.Diagnostic) return object
      var message = new $root.tfplugin5.Diagnostic()
      switch (object.severity) {
        case 'INVALID':
        case 0:
          message.severity = 0
          break
        case 'ERROR':
        case 1:
          message.severity = 1
          break
        case 'WARNING':
        case 2:
          message.severity = 2
          break
      }
      if (object.summary != null) message.summary = String(object.summary)
      if (object.detail != null) message.detail = String(object.detail)
      if (object.attribute != null) {
        if (typeof object.attribute !== 'object') throw TypeError('.tfplugin5.Diagnostic.attribute: object expected')
        message.attribute = $root.tfplugin5.AttributePath.fromObject(object.attribute)
      }
      return message
    }

    /**
     * Creates a plain object from a Diagnostic message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.Diagnostic
     * @static
     * @param {tfplugin5.Diagnostic} message Diagnostic
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Diagnostic.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.defaults) {
        object.severity = options.enums === String ? 'INVALID' : 0
        object.summary = ''
        object.detail = ''
        object.attribute = null
      }
      if (message.severity != null && message.hasOwnProperty('severity'))
        object.severity =
          options.enums === String ? $root.tfplugin5.Diagnostic.Severity[message.severity] : message.severity
      if (message.summary != null && message.hasOwnProperty('summary')) object.summary = message.summary
      if (message.detail != null && message.hasOwnProperty('detail')) object.detail = message.detail
      if (message.attribute != null && message.hasOwnProperty('attribute'))
        object.attribute = $root.tfplugin5.AttributePath.toObject(message.attribute, options)
      return object
    }

    /**
     * Converts this Diagnostic to JSON.
     * @function toJSON
     * @memberof tfplugin5.Diagnostic
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Diagnostic.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
     * Severity enum.
     * @name tfplugin5.Diagnostic.Severity
     * @enum {number}
     * @property {number} INVALID=0 INVALID value
     * @property {number} ERROR=1 ERROR value
     * @property {number} WARNING=2 WARNING value
     */
    Diagnostic.Severity = (function () {
      var valuesById = {},
        values = Object.create(valuesById)
      values[(valuesById[0] = 'INVALID')] = 0
      values[(valuesById[1] = 'ERROR')] = 1
      values[(valuesById[2] = 'WARNING')] = 2
      return values
    })()

    return Diagnostic
  })()

  tfplugin5.AttributePath = (function () {
    /**
     * Properties of an AttributePath.
     * @memberof tfplugin5
     * @interface IAttributePath
     * @property {Array.<tfplugin5.AttributePath.IStep>|null} [steps] AttributePath steps
     */

    /**
     * Constructs a new AttributePath.
     * @memberof tfplugin5
     * @classdesc Represents an AttributePath.
     * @implements IAttributePath
     * @constructor
     * @param {tfplugin5.IAttributePath=} [properties] Properties to set
     */
    function AttributePath(properties) {
      this.steps = []
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * AttributePath steps.
     * @member {Array.<tfplugin5.AttributePath.IStep>} steps
     * @memberof tfplugin5.AttributePath
     * @instance
     */
    AttributePath.prototype.steps = $util.emptyArray

    /**
     * Creates a new AttributePath instance using the specified properties.
     * @function create
     * @memberof tfplugin5.AttributePath
     * @static
     * @param {tfplugin5.IAttributePath=} [properties] Properties to set
     * @returns {tfplugin5.AttributePath} AttributePath instance
     */
    AttributePath.create = function create(properties) {
      return new AttributePath(properties)
    }

    /**
     * Encodes the specified AttributePath message. Does not implicitly {@link tfplugin5.AttributePath.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.AttributePath
     * @static
     * @param {tfplugin5.IAttributePath} message AttributePath message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributePath.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.steps != null && message.steps.length)
        for (var i = 0; i < message.steps.length; ++i)
          $root.tfplugin5.AttributePath.Step.encode(
            message.steps[i],
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
          ).ldelim()
      return writer
    }

    /**
     * Encodes the specified AttributePath message, length delimited. Does not implicitly {@link tfplugin5.AttributePath.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.AttributePath
     * @static
     * @param {tfplugin5.IAttributePath} message AttributePath message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributePath.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an AttributePath message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.AttributePath
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.AttributePath} AttributePath
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributePath.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.AttributePath()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (!(message.steps && message.steps.length)) message.steps = []
            message.steps.push($root.tfplugin5.AttributePath.Step.decode(reader, reader.uint32()))
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an AttributePath message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.AttributePath
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.AttributePath} AttributePath
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributePath.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an AttributePath message.
     * @function verify
     * @memberof tfplugin5.AttributePath
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AttributePath.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      if (message.steps != null && message.hasOwnProperty('steps')) {
        if (!Array.isArray(message.steps)) return 'steps: array expected'
        for (var i = 0; i < message.steps.length; ++i) {
          var error = $root.tfplugin5.AttributePath.Step.verify(message.steps[i])
          if (error) return 'steps.' + error
        }
      }
      return null
    }

    /**
     * Creates an AttributePath message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.AttributePath
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.AttributePath} AttributePath
     */
    AttributePath.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.AttributePath) return object
      var message = new $root.tfplugin5.AttributePath()
      if (object.steps) {
        if (!Array.isArray(object.steps)) throw TypeError('.tfplugin5.AttributePath.steps: array expected')
        message.steps = []
        for (var i = 0; i < object.steps.length; ++i) {
          if (typeof object.steps[i] !== 'object') throw TypeError('.tfplugin5.AttributePath.steps: object expected')
          message.steps[i] = $root.tfplugin5.AttributePath.Step.fromObject(object.steps[i])
        }
      }
      return message
    }

    /**
     * Creates a plain object from an AttributePath message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.AttributePath
     * @static
     * @param {tfplugin5.AttributePath} message AttributePath
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AttributePath.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.arrays || options.defaults) object.steps = []
      if (message.steps && message.steps.length) {
        object.steps = []
        for (var j = 0; j < message.steps.length; ++j)
          object.steps[j] = $root.tfplugin5.AttributePath.Step.toObject(message.steps[j], options)
      }
      return object
    }

    /**
     * Converts this AttributePath to JSON.
     * @function toJSON
     * @memberof tfplugin5.AttributePath
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AttributePath.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    AttributePath.Step = (function () {
      /**
       * Properties of a Step.
       * @memberof tfplugin5.AttributePath
       * @interface IStep
       * @property {string|null} [attributeName] Step attributeName
       * @property {string|null} [elementKeyString] Step elementKeyString
       * @property {number|null} [elementKeyInt] Step elementKeyInt
       */

      /**
       * Constructs a new Step.
       * @memberof tfplugin5.AttributePath
       * @classdesc Represents a Step.
       * @implements IStep
       * @constructor
       * @param {tfplugin5.AttributePath.IStep=} [properties] Properties to set
       */
      function Step(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Step attributeName.
       * @member {string} attributeName
       * @memberof tfplugin5.AttributePath.Step
       * @instance
       */
      Step.prototype.attributeName = ''

      /**
       * Step elementKeyString.
       * @member {string} elementKeyString
       * @memberof tfplugin5.AttributePath.Step
       * @instance
       */
      Step.prototype.elementKeyString = ''

      /**
       * Step elementKeyInt.
       * @member {number} elementKeyInt
       * @memberof tfplugin5.AttributePath.Step
       * @instance
       */
      Step.prototype.elementKeyInt = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields

      /**
       * Step selector.
       * @member {"attributeName"|"elementKeyString"|"elementKeyInt"|undefined} selector
       * @memberof tfplugin5.AttributePath.Step
       * @instance
       */
      Object.defineProperty(Step.prototype, 'selector', {
        get: $util.oneOfGetter(($oneOfFields = ['attributeName', 'elementKeyString', 'elementKeyInt'])),
        set: $util.oneOfSetter($oneOfFields),
      })

      /**
       * Creates a new Step instance using the specified properties.
       * @function create
       * @memberof tfplugin5.AttributePath.Step
       * @static
       * @param {tfplugin5.AttributePath.IStep=} [properties] Properties to set
       * @returns {tfplugin5.AttributePath.Step} Step instance
       */
      Step.create = function create(properties) {
        return new Step(properties)
      }

      /**
       * Encodes the specified Step message. Does not implicitly {@link tfplugin5.AttributePath.Step.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.AttributePath.Step
       * @static
       * @param {tfplugin5.AttributePath.IStep} message Step message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Step.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.attributeName != null && Object.hasOwnProperty.call(message, 'attributeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.attributeName)
        if (message.elementKeyString != null && Object.hasOwnProperty.call(message, 'elementKeyString'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.elementKeyString)
        if (message.elementKeyInt != null && Object.hasOwnProperty.call(message, 'elementKeyInt'))
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.elementKeyInt)
        return writer
      }

      /**
       * Encodes the specified Step message, length delimited. Does not implicitly {@link tfplugin5.AttributePath.Step.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.AttributePath.Step
       * @static
       * @param {tfplugin5.AttributePath.IStep} message Step message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Step.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Step message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.AttributePath.Step
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.AttributePath.Step} Step
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Step.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.AttributePath.Step()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.attributeName = reader.string()
              break
            case 2:
              message.elementKeyString = reader.string()
              break
            case 3:
              message.elementKeyInt = reader.int64().toNumber()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Step message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.AttributePath.Step
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.AttributePath.Step} Step
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Step.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Step message.
       * @function verify
       * @memberof tfplugin5.AttributePath.Step
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Step.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        var properties = {}
        if (message.attributeName != null && message.hasOwnProperty('attributeName')) {
          properties.selector = 1
          if (!$util.isString(message.attributeName)) return 'attributeName: string expected'
        }
        if (message.elementKeyString != null && message.hasOwnProperty('elementKeyString')) {
          if (properties.selector === 1) return 'selector: multiple values'
          properties.selector = 1
          if (!$util.isString(message.elementKeyString)) return 'elementKeyString: string expected'
        }
        if (message.elementKeyInt != null && message.hasOwnProperty('elementKeyInt')) {
          if (properties.selector === 1) return 'selector: multiple values'
          properties.selector = 1
          if (
            !$util.isInteger(message.elementKeyInt) &&
            !(
              message.elementKeyInt &&
              $util.isInteger(message.elementKeyInt.low) &&
              $util.isInteger(message.elementKeyInt.high)
            )
          )
            return 'elementKeyInt: integer|Long expected'
        }
        return null
      }

      /**
       * Creates a Step message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.AttributePath.Step
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.AttributePath.Step} Step
       */
      Step.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.AttributePath.Step) return object
        var message = new $root.tfplugin5.AttributePath.Step()
        if (object.attributeName != null) message.attributeName = String(object.attributeName)
        if (object.elementKeyString != null) message.elementKeyString = String(object.elementKeyString)
        if (object.elementKeyInt != null)
          if ($util.Long) (message.elementKeyInt = $util.Long.fromValue(object.elementKeyInt)).unsigned = false
          else if (typeof object.elementKeyInt === 'string') message.elementKeyInt = parseInt(object.elementKeyInt, 10)
          else if (typeof object.elementKeyInt === 'number') message.elementKeyInt = object.elementKeyInt
          else if (typeof object.elementKeyInt === 'object')
            message.elementKeyInt = new $util.LongBits(
              object.elementKeyInt.low >>> 0,
              object.elementKeyInt.high >>> 0,
            ).toNumber()
        return message
      }

      /**
       * Creates a plain object from a Step message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.AttributePath.Step
       * @static
       * @param {tfplugin5.AttributePath.Step} message Step
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Step.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (message.attributeName != null && message.hasOwnProperty('attributeName')) {
          object.attributeName = message.attributeName
          if (options.oneofs) object.selector = 'attributeName'
        }
        if (message.elementKeyString != null && message.hasOwnProperty('elementKeyString')) {
          object.elementKeyString = message.elementKeyString
          if (options.oneofs) object.selector = 'elementKeyString'
        }
        if (message.elementKeyInt != null && message.hasOwnProperty('elementKeyInt')) {
          if (typeof message.elementKeyInt === 'number')
            object.elementKeyInt = options.longs === String ? String(message.elementKeyInt) : message.elementKeyInt
          else
            object.elementKeyInt =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.elementKeyInt)
                : options.longs === Number
                ? new $util.LongBits(message.elementKeyInt.low >>> 0, message.elementKeyInt.high >>> 0).toNumber()
                : message.elementKeyInt
          if (options.oneofs) object.selector = 'elementKeyInt'
        }
        return object
      }

      /**
       * Converts this Step to JSON.
       * @function toJSON
       * @memberof tfplugin5.AttributePath.Step
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Step.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Step
    })()

    return AttributePath
  })()

  tfplugin5.Stop = (function () {
    /**
     * Properties of a Stop.
     * @memberof tfplugin5
     * @interface IStop
     */

    /**
     * Constructs a new Stop.
     * @memberof tfplugin5
     * @classdesc Represents a Stop.
     * @implements IStop
     * @constructor
     * @param {tfplugin5.IStop=} [properties] Properties to set
     */
    function Stop(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new Stop instance using the specified properties.
     * @function create
     * @memberof tfplugin5.Stop
     * @static
     * @param {tfplugin5.IStop=} [properties] Properties to set
     * @returns {tfplugin5.Stop} Stop instance
     */
    Stop.create = function create(properties) {
      return new Stop(properties)
    }

    /**
     * Encodes the specified Stop message. Does not implicitly {@link tfplugin5.Stop.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.Stop
     * @static
     * @param {tfplugin5.IStop} message Stop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Stop.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified Stop message, length delimited. Does not implicitly {@link tfplugin5.Stop.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.Stop
     * @static
     * @param {tfplugin5.IStop} message Stop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Stop.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a Stop message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.Stop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.Stop} Stop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Stop.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.Stop()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a Stop message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.Stop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.Stop} Stop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Stop.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a Stop message.
     * @function verify
     * @memberof tfplugin5.Stop
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Stop.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a Stop message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.Stop
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.Stop} Stop
     */
    Stop.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.Stop) return object
      return new $root.tfplugin5.Stop()
    }

    /**
     * Creates a plain object from a Stop message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.Stop
     * @static
     * @param {tfplugin5.Stop} message Stop
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Stop.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this Stop to JSON.
     * @function toJSON
     * @memberof tfplugin5.Stop
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Stop.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    Stop.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.Stop
       * @interface IRequest
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.Stop
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.Stop.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.Stop.Request
       * @static
       * @param {tfplugin5.Stop.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.Stop.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.Stop.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.Stop.Request
       * @static
       * @param {tfplugin5.Stop.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.Stop.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.Stop.Request
       * @static
       * @param {tfplugin5.Stop.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.Stop.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.Stop.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.Stop.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.Stop.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.Stop.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.Stop.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.Stop.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.Stop.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.Stop.Request) return object
        return new $root.tfplugin5.Stop.Request()
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.Stop.Request
       * @static
       * @param {tfplugin5.Stop.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject() {
        return {}
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.Stop.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    Stop.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.Stop
       * @interface IResponse
       * @property {string|null} [Error] Response Error
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.Stop
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.Stop.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response Error.
       * @member {string} Error
       * @memberof tfplugin5.Stop.Response
       * @instance
       */
      Response.prototype.Error = ''

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.Stop.Response
       * @static
       * @param {tfplugin5.Stop.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.Stop.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.Stop.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.Stop.Response
       * @static
       * @param {tfplugin5.Stop.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.Error != null && Object.hasOwnProperty.call(message, 'Error'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.Error)
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.Stop.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.Stop.Response
       * @static
       * @param {tfplugin5.Stop.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.Stop.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.Stop.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.Stop.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.Error = reader.string()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.Stop.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.Stop.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.Stop.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.Error != null && message.hasOwnProperty('Error'))
          if (!$util.isString(message.Error)) return 'Error: string expected'
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.Stop.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.Stop.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.Stop.Response) return object
        var message = new $root.tfplugin5.Stop.Response()
        if (object.Error != null) message.Error = String(object.Error)
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.Stop.Response
       * @static
       * @param {tfplugin5.Stop.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) object.Error = ''
        if (message.Error != null && message.hasOwnProperty('Error')) object.Error = message.Error
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.Stop.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return Stop
  })()

  tfplugin5.RawState = (function () {
    /**
     * Properties of a RawState.
     * @memberof tfplugin5
     * @interface IRawState
     * @property {Uint8Array|null} [json] RawState json
     * @property {Object.<string,string>|null} [flatmap] RawState flatmap
     */

    /**
     * Constructs a new RawState.
     * @memberof tfplugin5
     * @classdesc Represents a RawState.
     * @implements IRawState
     * @constructor
     * @param {tfplugin5.IRawState=} [properties] Properties to set
     */
    function RawState(properties) {
      this.flatmap = {}
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * RawState json.
     * @member {Uint8Array} json
     * @memberof tfplugin5.RawState
     * @instance
     */
    RawState.prototype.json = $util.newBuffer([])

    /**
     * RawState flatmap.
     * @member {Object.<string,string>} flatmap
     * @memberof tfplugin5.RawState
     * @instance
     */
    RawState.prototype.flatmap = $util.emptyObject

    /**
     * Creates a new RawState instance using the specified properties.
     * @function create
     * @memberof tfplugin5.RawState
     * @static
     * @param {tfplugin5.IRawState=} [properties] Properties to set
     * @returns {tfplugin5.RawState} RawState instance
     */
    RawState.create = function create(properties) {
      return new RawState(properties)
    }

    /**
     * Encodes the specified RawState message. Does not implicitly {@link tfplugin5.RawState.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.RawState
     * @static
     * @param {tfplugin5.IRawState} message RawState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RawState.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.json != null && Object.hasOwnProperty.call(message, 'json'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.json)
      if (message.flatmap != null && Object.hasOwnProperty.call(message, 'flatmap'))
        for (var keys = Object.keys(message.flatmap), i = 0; i < keys.length; ++i)
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .fork()
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(keys[i])
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.flatmap[keys[i]])
            .ldelim()
      return writer
    }

    /**
     * Encodes the specified RawState message, length delimited. Does not implicitly {@link tfplugin5.RawState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.RawState
     * @static
     * @param {tfplugin5.IRawState} message RawState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RawState.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a RawState message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.RawState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.RawState} RawState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RawState.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.RawState(),
        key
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.json = reader.bytes()
            break
          case 2:
            reader.skip().pos++
            if (message.flatmap === $util.emptyObject) message.flatmap = {}
            key = reader.string()
            reader.pos++
            message.flatmap[key] = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a RawState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.RawState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.RawState} RawState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RawState.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a RawState message.
     * @function verify
     * @memberof tfplugin5.RawState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RawState.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      if (message.json != null && message.hasOwnProperty('json'))
        if (!((message.json && typeof message.json.length === 'number') || $util.isString(message.json)))
          return 'json: buffer expected'
      if (message.flatmap != null && message.hasOwnProperty('flatmap')) {
        if (!$util.isObject(message.flatmap)) return 'flatmap: object expected'
        var key = Object.keys(message.flatmap)
        for (var i = 0; i < key.length; ++i)
          if (!$util.isString(message.flatmap[key[i]])) return 'flatmap: string{k:string} expected'
      }
      return null
    }

    /**
     * Creates a RawState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.RawState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.RawState} RawState
     */
    RawState.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.RawState) return object
      var message = new $root.tfplugin5.RawState()
      if (object.json != null)
        if (typeof object.json === 'string')
          $util.base64.decode(object.json, (message.json = $util.newBuffer($util.base64.length(object.json))), 0)
        else if (object.json.length) message.json = object.json
      if (object.flatmap) {
        if (typeof object.flatmap !== 'object') throw TypeError('.tfplugin5.RawState.flatmap: object expected')
        message.flatmap = {}
        for (var keys = Object.keys(object.flatmap), i = 0; i < keys.length; ++i)
          message.flatmap[keys[i]] = String(object.flatmap[keys[i]])
      }
      return message
    }

    /**
     * Creates a plain object from a RawState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.RawState
     * @static
     * @param {tfplugin5.RawState} message RawState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RawState.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.objects || options.defaults) object.flatmap = {}
      if (options.defaults)
        if (options.bytes === String) object.json = ''
        else {
          object.json = []
          if (options.bytes !== Array) object.json = $util.newBuffer(object.json)
        }
      if (message.json != null && message.hasOwnProperty('json'))
        object.json =
          options.bytes === String
            ? $util.base64.encode(message.json, 0, message.json.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.json)
            : message.json
      var keys2
      if (message.flatmap && (keys2 = Object.keys(message.flatmap)).length) {
        object.flatmap = {}
        for (var j = 0; j < keys2.length; ++j) object.flatmap[keys2[j]] = message.flatmap[keys2[j]]
      }
      return object
    }

    /**
     * Converts this RawState to JSON.
     * @function toJSON
     * @memberof tfplugin5.RawState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RawState.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return RawState
  })()

  /**
   * StringKind enum.
   * @name tfplugin5.StringKind
   * @enum {number}
   * @property {number} PLAIN=0 PLAIN value
   * @property {number} MARKDOWN=1 MARKDOWN value
   */
  tfplugin5.StringKind = (function () {
    var valuesById = {},
      values = Object.create(valuesById)
    values[(valuesById[0] = 'PLAIN')] = 0
    values[(valuesById[1] = 'MARKDOWN')] = 1
    return values
  })()

  tfplugin5.Schema = (function () {
    /**
     * Properties of a Schema.
     * @memberof tfplugin5
     * @interface ISchema
     * @property {number|null} [version] Schema version
     * @property {tfplugin5.Schema.IBlock|null} [block] Schema block
     */

    /**
     * Constructs a new Schema.
     * @memberof tfplugin5
     * @classdesc Represents a Schema.
     * @implements ISchema
     * @constructor
     * @param {tfplugin5.ISchema=} [properties] Properties to set
     */
    function Schema(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Schema version.
     * @member {number} version
     * @memberof tfplugin5.Schema
     * @instance
     */
    Schema.prototype.version = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * Schema block.
     * @member {tfplugin5.Schema.IBlock|null|undefined} block
     * @memberof tfplugin5.Schema
     * @instance
     */
    Schema.prototype.block = null

    /**
     * Creates a new Schema instance using the specified properties.
     * @function create
     * @memberof tfplugin5.Schema
     * @static
     * @param {tfplugin5.ISchema=} [properties] Properties to set
     * @returns {tfplugin5.Schema} Schema instance
     */
    Schema.create = function create(properties) {
      return new Schema(properties)
    }

    /**
     * Encodes the specified Schema message. Does not implicitly {@link tfplugin5.Schema.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.Schema
     * @static
     * @param {tfplugin5.ISchema} message Schema message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Schema.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      if (message.version != null && Object.hasOwnProperty.call(message, 'version'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.version)
      if (message.block != null && Object.hasOwnProperty.call(message, 'block'))
        $root.tfplugin5.Schema.Block.encode(message.block, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim()
      return writer
    }

    /**
     * Encodes the specified Schema message, length delimited. Does not implicitly {@link tfplugin5.Schema.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.Schema
     * @static
     * @param {tfplugin5.ISchema} message Schema message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Schema.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a Schema message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.Schema
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.Schema} Schema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Schema.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.Schema()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.version = reader.int64().toNumber()
            break
          case 2:
            message.block = $root.tfplugin5.Schema.Block.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a Schema message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.Schema
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.Schema} Schema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Schema.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a Schema message.
     * @function verify
     * @memberof tfplugin5.Schema
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Schema.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      if (message.version != null && message.hasOwnProperty('version'))
        if (
          !$util.isInteger(message.version) &&
          !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high))
        )
          return 'version: integer|Long expected'
      if (message.block != null && message.hasOwnProperty('block')) {
        var error = $root.tfplugin5.Schema.Block.verify(message.block)
        if (error) return 'block.' + error
      }
      return null
    }

    /**
     * Creates a Schema message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.Schema
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.Schema} Schema
     */
    Schema.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.Schema) return object
      var message = new $root.tfplugin5.Schema()
      if (object.version != null)
        if ($util.Long) (message.version = $util.Long.fromValue(object.version)).unsigned = false
        else if (typeof object.version === 'string') message.version = parseInt(object.version, 10)
        else if (typeof object.version === 'number') message.version = object.version
        else if (typeof object.version === 'object')
          message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber()
      if (object.block != null) {
        if (typeof object.block !== 'object') throw TypeError('.tfplugin5.Schema.block: object expected')
        message.block = $root.tfplugin5.Schema.Block.fromObject(object.block)
      }
      return message
    }

    /**
     * Creates a plain object from a Schema message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.Schema
     * @static
     * @param {tfplugin5.Schema} message Schema
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Schema.toObject = function toObject(message, options) {
      if (!options) options = {}
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.version =
            options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else object.version = options.longs === String ? '0' : 0
        object.block = null
      }
      if (message.version != null && message.hasOwnProperty('version'))
        if (typeof message.version === 'number')
          object.version = options.longs === String ? String(message.version) : message.version
        else
          object.version =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.version)
              : options.longs === Number
              ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber()
              : message.version
      if (message.block != null && message.hasOwnProperty('block'))
        object.block = $root.tfplugin5.Schema.Block.toObject(message.block, options)
      return object
    }

    /**
     * Converts this Schema to JSON.
     * @function toJSON
     * @memberof tfplugin5.Schema
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Schema.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    Schema.Block = (function () {
      /**
       * Properties of a Block.
       * @memberof tfplugin5.Schema
       * @interface IBlock
       * @property {number|null} [version] Block version
       * @property {Array.<tfplugin5.Schema.IAttribute>|null} [attributes] Block attributes
       * @property {Array.<tfplugin5.Schema.INestedBlock>|null} [blockTypes] Block blockTypes
       * @property {string|null} [description] Block description
       * @property {tfplugin5.StringKind|null} [descriptionKind] Block descriptionKind
       * @property {boolean|null} [deprecated] Block deprecated
       */

      /**
       * Constructs a new Block.
       * @memberof tfplugin5.Schema
       * @classdesc Represents a Block.
       * @implements IBlock
       * @constructor
       * @param {tfplugin5.Schema.IBlock=} [properties] Properties to set
       */
      function Block(properties) {
        this.attributes = []
        this.blockTypes = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Block version.
       * @member {number} version
       * @memberof tfplugin5.Schema.Block
       * @instance
       */
      Block.prototype.version = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

      /**
       * Block attributes.
       * @member {Array.<tfplugin5.Schema.IAttribute>} attributes
       * @memberof tfplugin5.Schema.Block
       * @instance
       */
      Block.prototype.attributes = $util.emptyArray

      /**
       * Block blockTypes.
       * @member {Array.<tfplugin5.Schema.INestedBlock>} blockTypes
       * @memberof tfplugin5.Schema.Block
       * @instance
       */
      Block.prototype.blockTypes = $util.emptyArray

      /**
       * Block description.
       * @member {string} description
       * @memberof tfplugin5.Schema.Block
       * @instance
       */
      Block.prototype.description = ''

      /**
       * Block descriptionKind.
       * @member {tfplugin5.StringKind} descriptionKind
       * @memberof tfplugin5.Schema.Block
       * @instance
       */
      Block.prototype.descriptionKind = 0

      /**
       * Block deprecated.
       * @member {boolean} deprecated
       * @memberof tfplugin5.Schema.Block
       * @instance
       */
      Block.prototype.deprecated = false

      /**
       * Creates a new Block instance using the specified properties.
       * @function create
       * @memberof tfplugin5.Schema.Block
       * @static
       * @param {tfplugin5.Schema.IBlock=} [properties] Properties to set
       * @returns {tfplugin5.Schema.Block} Block instance
       */
      Block.create = function create(properties) {
        return new Block(properties)
      }

      /**
       * Encodes the specified Block message. Does not implicitly {@link tfplugin5.Schema.Block.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.Schema.Block
       * @static
       * @param {tfplugin5.Schema.IBlock} message Block message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Block.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.version != null && Object.hasOwnProperty.call(message, 'version'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.version)
        if (message.attributes != null && message.attributes.length)
          for (var i = 0; i < message.attributes.length; ++i)
            $root.tfplugin5.Schema.Attribute.encode(
              message.attributes[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            ).ldelim()
        if (message.blockTypes != null && message.blockTypes.length)
          for (var i = 0; i < message.blockTypes.length; ++i)
            $root.tfplugin5.Schema.NestedBlock.encode(
              message.blockTypes[i],
              writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
            ).ldelim()
        if (message.description != null && Object.hasOwnProperty.call(message, 'description'))
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.description)
        if (message.descriptionKind != null && Object.hasOwnProperty.call(message, 'descriptionKind'))
          writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.descriptionKind)
        if (message.deprecated != null && Object.hasOwnProperty.call(message, 'deprecated'))
          writer.uint32(/* id 6, wireType 0 =*/ 48).bool(message.deprecated)
        return writer
      }

      /**
       * Encodes the specified Block message, length delimited. Does not implicitly {@link tfplugin5.Schema.Block.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.Schema.Block
       * @static
       * @param {tfplugin5.Schema.IBlock} message Block message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Block.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Block message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.Schema.Block
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.Schema.Block} Block
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Block.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.Schema.Block()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.version = reader.int64().toNumber()
              break
            case 2:
              if (!(message.attributes && message.attributes.length)) message.attributes = []
              message.attributes.push($root.tfplugin5.Schema.Attribute.decode(reader, reader.uint32()))
              break
            case 3:
              if (!(message.blockTypes && message.blockTypes.length)) message.blockTypes = []
              message.blockTypes.push($root.tfplugin5.Schema.NestedBlock.decode(reader, reader.uint32()))
              break
            case 4:
              message.description = reader.string()
              break
            case 5:
              message.descriptionKind = reader.int32()
              break
            case 6:
              message.deprecated = reader.bool()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Block message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.Schema.Block
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.Schema.Block} Block
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Block.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Block message.
       * @function verify
       * @memberof tfplugin5.Schema.Block
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Block.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.version != null && message.hasOwnProperty('version'))
          if (
            !$util.isInteger(message.version) &&
            !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high))
          )
            return 'version: integer|Long expected'
        if (message.attributes != null && message.hasOwnProperty('attributes')) {
          if (!Array.isArray(message.attributes)) return 'attributes: array expected'
          for (var i = 0; i < message.attributes.length; ++i) {
            var error = $root.tfplugin5.Schema.Attribute.verify(message.attributes[i])
            if (error) return 'attributes.' + error
          }
        }
        if (message.blockTypes != null && message.hasOwnProperty('blockTypes')) {
          if (!Array.isArray(message.blockTypes)) return 'blockTypes: array expected'
          for (var i = 0; i < message.blockTypes.length; ++i) {
            var error = $root.tfplugin5.Schema.NestedBlock.verify(message.blockTypes[i])
            if (error) return 'blockTypes.' + error
          }
        }
        if (message.description != null && message.hasOwnProperty('description'))
          if (!$util.isString(message.description)) return 'description: string expected'
        if (message.descriptionKind != null && message.hasOwnProperty('descriptionKind'))
          switch (message.descriptionKind) {
            default:
              return 'descriptionKind: enum value expected'
            case 0:
            case 1:
              break
          }
        if (message.deprecated != null && message.hasOwnProperty('deprecated'))
          if (typeof message.deprecated !== 'boolean') return 'deprecated: boolean expected'
        return null
      }

      /**
       * Creates a Block message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.Schema.Block
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.Schema.Block} Block
       */
      Block.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.Schema.Block) return object
        var message = new $root.tfplugin5.Schema.Block()
        if (object.version != null)
          if ($util.Long) (message.version = $util.Long.fromValue(object.version)).unsigned = false
          else if (typeof object.version === 'string') message.version = parseInt(object.version, 10)
          else if (typeof object.version === 'number') message.version = object.version
          else if (typeof object.version === 'object')
            message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber()
        if (object.attributes) {
          if (!Array.isArray(object.attributes)) throw TypeError('.tfplugin5.Schema.Block.attributes: array expected')
          message.attributes = []
          for (var i = 0; i < object.attributes.length; ++i) {
            if (typeof object.attributes[i] !== 'object')
              throw TypeError('.tfplugin5.Schema.Block.attributes: object expected')
            message.attributes[i] = $root.tfplugin5.Schema.Attribute.fromObject(object.attributes[i])
          }
        }
        if (object.blockTypes) {
          if (!Array.isArray(object.blockTypes)) throw TypeError('.tfplugin5.Schema.Block.blockTypes: array expected')
          message.blockTypes = []
          for (var i = 0; i < object.blockTypes.length; ++i) {
            if (typeof object.blockTypes[i] !== 'object')
              throw TypeError('.tfplugin5.Schema.Block.blockTypes: object expected')
            message.blockTypes[i] = $root.tfplugin5.Schema.NestedBlock.fromObject(object.blockTypes[i])
          }
        }
        if (object.description != null) message.description = String(object.description)
        switch (object.descriptionKind) {
          case 'PLAIN':
          case 0:
            message.descriptionKind = 0
            break
          case 'MARKDOWN':
          case 1:
            message.descriptionKind = 1
            break
        }
        if (object.deprecated != null) message.deprecated = Boolean(object.deprecated)
        return message
      }

      /**
       * Creates a plain object from a Block message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.Schema.Block
       * @static
       * @param {tfplugin5.Schema.Block} message Block
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Block.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) {
          object.attributes = []
          object.blockTypes = []
        }
        if (options.defaults) {
          if ($util.Long) {
            var long = new $util.Long(0, 0, false)
            object.version =
              options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
          } else object.version = options.longs === String ? '0' : 0
          object.description = ''
          object.descriptionKind = options.enums === String ? 'PLAIN' : 0
          object.deprecated = false
        }
        if (message.version != null && message.hasOwnProperty('version'))
          if (typeof message.version === 'number')
            object.version = options.longs === String ? String(message.version) : message.version
          else
            object.version =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.version)
                : options.longs === Number
                ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber()
                : message.version
        if (message.attributes && message.attributes.length) {
          object.attributes = []
          for (var j = 0; j < message.attributes.length; ++j)
            object.attributes[j] = $root.tfplugin5.Schema.Attribute.toObject(message.attributes[j], options)
        }
        if (message.blockTypes && message.blockTypes.length) {
          object.blockTypes = []
          for (var j = 0; j < message.blockTypes.length; ++j)
            object.blockTypes[j] = $root.tfplugin5.Schema.NestedBlock.toObject(message.blockTypes[j], options)
        }
        if (message.description != null && message.hasOwnProperty('description'))
          object.description = message.description
        if (message.descriptionKind != null && message.hasOwnProperty('descriptionKind'))
          object.descriptionKind =
            options.enums === String ? $root.tfplugin5.StringKind[message.descriptionKind] : message.descriptionKind
        if (message.deprecated != null && message.hasOwnProperty('deprecated')) object.deprecated = message.deprecated
        return object
      }

      /**
       * Converts this Block to JSON.
       * @function toJSON
       * @memberof tfplugin5.Schema.Block
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Block.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Block
    })()

    Schema.Attribute = (function () {
      /**
       * Properties of an Attribute.
       * @memberof tfplugin5.Schema
       * @interface IAttribute
       * @property {string|null} [name] Attribute name
       * @property {Uint8Array|null} [type] Attribute type
       * @property {string|null} [description] Attribute description
       * @property {boolean|null} [required] Attribute required
       * @property {boolean|null} [optional] Attribute optional
       * @property {boolean|null} [computed] Attribute computed
       * @property {boolean|null} [sensitive] Attribute sensitive
       * @property {tfplugin5.StringKind|null} [descriptionKind] Attribute descriptionKind
       * @property {boolean|null} [deprecated] Attribute deprecated
       */

      /**
       * Constructs a new Attribute.
       * @memberof tfplugin5.Schema
       * @classdesc Represents an Attribute.
       * @implements IAttribute
       * @constructor
       * @param {tfplugin5.Schema.IAttribute=} [properties] Properties to set
       */
      function Attribute(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Attribute name.
       * @member {string} name
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       */
      Attribute.prototype.name = ''

      /**
       * Attribute type.
       * @member {Uint8Array} type
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       */
      Attribute.prototype.type = $util.newBuffer([])

      /**
       * Attribute description.
       * @member {string} description
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       */
      Attribute.prototype.description = ''

      /**
       * Attribute required.
       * @member {boolean} required
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       */
      Attribute.prototype.required = false

      /**
       * Attribute optional.
       * @member {boolean} optional
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       */
      Attribute.prototype.optional = false

      /**
       * Attribute computed.
       * @member {boolean} computed
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       */
      Attribute.prototype.computed = false

      /**
       * Attribute sensitive.
       * @member {boolean} sensitive
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       */
      Attribute.prototype.sensitive = false

      /**
       * Attribute descriptionKind.
       * @member {tfplugin5.StringKind} descriptionKind
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       */
      Attribute.prototype.descriptionKind = 0

      /**
       * Attribute deprecated.
       * @member {boolean} deprecated
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       */
      Attribute.prototype.deprecated = false

      /**
       * Creates a new Attribute instance using the specified properties.
       * @function create
       * @memberof tfplugin5.Schema.Attribute
       * @static
       * @param {tfplugin5.Schema.IAttribute=} [properties] Properties to set
       * @returns {tfplugin5.Schema.Attribute} Attribute instance
       */
      Attribute.create = function create(properties) {
        return new Attribute(properties)
      }

      /**
       * Encodes the specified Attribute message. Does not implicitly {@link tfplugin5.Schema.Attribute.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.Schema.Attribute
       * @static
       * @param {tfplugin5.Schema.IAttribute} message Attribute message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Attribute.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name)
        if (message.type != null && Object.hasOwnProperty.call(message, 'type'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.type)
        if (message.description != null && Object.hasOwnProperty.call(message, 'description'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.description)
        if (message.required != null && Object.hasOwnProperty.call(message, 'required'))
          writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.required)
        if (message.optional != null && Object.hasOwnProperty.call(message, 'optional'))
          writer.uint32(/* id 5, wireType 0 =*/ 40).bool(message.optional)
        if (message.computed != null && Object.hasOwnProperty.call(message, 'computed'))
          writer.uint32(/* id 6, wireType 0 =*/ 48).bool(message.computed)
        if (message.sensitive != null && Object.hasOwnProperty.call(message, 'sensitive'))
          writer.uint32(/* id 7, wireType 0 =*/ 56).bool(message.sensitive)
        if (message.descriptionKind != null && Object.hasOwnProperty.call(message, 'descriptionKind'))
          writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.descriptionKind)
        if (message.deprecated != null && Object.hasOwnProperty.call(message, 'deprecated'))
          writer.uint32(/* id 9, wireType 0 =*/ 72).bool(message.deprecated)
        return writer
      }

      /**
       * Encodes the specified Attribute message, length delimited. Does not implicitly {@link tfplugin5.Schema.Attribute.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.Schema.Attribute
       * @static
       * @param {tfplugin5.Schema.IAttribute} message Attribute message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Attribute.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes an Attribute message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.Schema.Attribute
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.Schema.Attribute} Attribute
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Attribute.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.Schema.Attribute()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.name = reader.string()
              break
            case 2:
              message.type = reader.bytes()
              break
            case 3:
              message.description = reader.string()
              break
            case 4:
              message.required = reader.bool()
              break
            case 5:
              message.optional = reader.bool()
              break
            case 6:
              message.computed = reader.bool()
              break
            case 7:
              message.sensitive = reader.bool()
              break
            case 8:
              message.descriptionKind = reader.int32()
              break
            case 9:
              message.deprecated = reader.bool()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes an Attribute message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.Schema.Attribute
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.Schema.Attribute} Attribute
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Attribute.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies an Attribute message.
       * @function verify
       * @memberof tfplugin5.Schema.Attribute
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Attribute.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.name != null && message.hasOwnProperty('name'))
          if (!$util.isString(message.name)) return 'name: string expected'
        if (message.type != null && message.hasOwnProperty('type'))
          if (!((message.type && typeof message.type.length === 'number') || $util.isString(message.type)))
            return 'type: buffer expected'
        if (message.description != null && message.hasOwnProperty('description'))
          if (!$util.isString(message.description)) return 'description: string expected'
        if (message.required != null && message.hasOwnProperty('required'))
          if (typeof message.required !== 'boolean') return 'required: boolean expected'
        if (message.optional != null && message.hasOwnProperty('optional'))
          if (typeof message.optional !== 'boolean') return 'optional: boolean expected'
        if (message.computed != null && message.hasOwnProperty('computed'))
          if (typeof message.computed !== 'boolean') return 'computed: boolean expected'
        if (message.sensitive != null && message.hasOwnProperty('sensitive'))
          if (typeof message.sensitive !== 'boolean') return 'sensitive: boolean expected'
        if (message.descriptionKind != null && message.hasOwnProperty('descriptionKind'))
          switch (message.descriptionKind) {
            default:
              return 'descriptionKind: enum value expected'
            case 0:
            case 1:
              break
          }
        if (message.deprecated != null && message.hasOwnProperty('deprecated'))
          if (typeof message.deprecated !== 'boolean') return 'deprecated: boolean expected'
        return null
      }

      /**
       * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.Schema.Attribute
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.Schema.Attribute} Attribute
       */
      Attribute.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.Schema.Attribute) return object
        var message = new $root.tfplugin5.Schema.Attribute()
        if (object.name != null) message.name = String(object.name)
        if (object.type != null)
          if (typeof object.type === 'string')
            $util.base64.decode(object.type, (message.type = $util.newBuffer($util.base64.length(object.type))), 0)
          else if (object.type.length) message.type = object.type
        if (object.description != null) message.description = String(object.description)
        if (object.required != null) message.required = Boolean(object.required)
        if (object.optional != null) message.optional = Boolean(object.optional)
        if (object.computed != null) message.computed = Boolean(object.computed)
        if (object.sensitive != null) message.sensitive = Boolean(object.sensitive)
        switch (object.descriptionKind) {
          case 'PLAIN':
          case 0:
            message.descriptionKind = 0
            break
          case 'MARKDOWN':
          case 1:
            message.descriptionKind = 1
            break
        }
        if (object.deprecated != null) message.deprecated = Boolean(object.deprecated)
        return message
      }

      /**
       * Creates a plain object from an Attribute message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.Schema.Attribute
       * @static
       * @param {tfplugin5.Schema.Attribute} message Attribute
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Attribute.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.name = ''
          if (options.bytes === String) object.type = ''
          else {
            object.type = []
            if (options.bytes !== Array) object.type = $util.newBuffer(object.type)
          }
          object.description = ''
          object.required = false
          object.optional = false
          object.computed = false
          object.sensitive = false
          object.descriptionKind = options.enums === String ? 'PLAIN' : 0
          object.deprecated = false
        }
        if (message.name != null && message.hasOwnProperty('name')) object.name = message.name
        if (message.type != null && message.hasOwnProperty('type'))
          object.type =
            options.bytes === String
              ? $util.base64.encode(message.type, 0, message.type.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.type)
              : message.type
        if (message.description != null && message.hasOwnProperty('description'))
          object.description = message.description
        if (message.required != null && message.hasOwnProperty('required')) object.required = message.required
        if (message.optional != null && message.hasOwnProperty('optional')) object.optional = message.optional
        if (message.computed != null && message.hasOwnProperty('computed')) object.computed = message.computed
        if (message.sensitive != null && message.hasOwnProperty('sensitive')) object.sensitive = message.sensitive
        if (message.descriptionKind != null && message.hasOwnProperty('descriptionKind'))
          object.descriptionKind =
            options.enums === String ? $root.tfplugin5.StringKind[message.descriptionKind] : message.descriptionKind
        if (message.deprecated != null && message.hasOwnProperty('deprecated')) object.deprecated = message.deprecated
        return object
      }

      /**
       * Converts this Attribute to JSON.
       * @function toJSON
       * @memberof tfplugin5.Schema.Attribute
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Attribute.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Attribute
    })()

    Schema.NestedBlock = (function () {
      /**
       * Properties of a NestedBlock.
       * @memberof tfplugin5.Schema
       * @interface INestedBlock
       * @property {string|null} [typeName] NestedBlock typeName
       * @property {tfplugin5.Schema.IBlock|null} [block] NestedBlock block
       * @property {tfplugin5.Schema.NestedBlock.NestingMode|null} [nesting] NestedBlock nesting
       * @property {number|null} [minItems] NestedBlock minItems
       * @property {number|null} [maxItems] NestedBlock maxItems
       */

      /**
       * Constructs a new NestedBlock.
       * @memberof tfplugin5.Schema
       * @classdesc Represents a NestedBlock.
       * @implements INestedBlock
       * @constructor
       * @param {tfplugin5.Schema.INestedBlock=} [properties] Properties to set
       */
      function NestedBlock(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * NestedBlock typeName.
       * @member {string} typeName
       * @memberof tfplugin5.Schema.NestedBlock
       * @instance
       */
      NestedBlock.prototype.typeName = ''

      /**
       * NestedBlock block.
       * @member {tfplugin5.Schema.IBlock|null|undefined} block
       * @memberof tfplugin5.Schema.NestedBlock
       * @instance
       */
      NestedBlock.prototype.block = null

      /**
       * NestedBlock nesting.
       * @member {tfplugin5.Schema.NestedBlock.NestingMode} nesting
       * @memberof tfplugin5.Schema.NestedBlock
       * @instance
       */
      NestedBlock.prototype.nesting = 0

      /**
       * NestedBlock minItems.
       * @member {number} minItems
       * @memberof tfplugin5.Schema.NestedBlock
       * @instance
       */
      NestedBlock.prototype.minItems = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

      /**
       * NestedBlock maxItems.
       * @member {number} maxItems
       * @memberof tfplugin5.Schema.NestedBlock
       * @instance
       */
      NestedBlock.prototype.maxItems = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

      /**
       * Creates a new NestedBlock instance using the specified properties.
       * @function create
       * @memberof tfplugin5.Schema.NestedBlock
       * @static
       * @param {tfplugin5.Schema.INestedBlock=} [properties] Properties to set
       * @returns {tfplugin5.Schema.NestedBlock} NestedBlock instance
       */
      NestedBlock.create = function create(properties) {
        return new NestedBlock(properties)
      }

      /**
       * Encodes the specified NestedBlock message. Does not implicitly {@link tfplugin5.Schema.NestedBlock.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.Schema.NestedBlock
       * @static
       * @param {tfplugin5.Schema.INestedBlock} message NestedBlock message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      NestedBlock.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.block != null && Object.hasOwnProperty.call(message, 'block'))
          $root.tfplugin5.Schema.Block.encode(message.block, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim()
        if (message.nesting != null && Object.hasOwnProperty.call(message, 'nesting'))
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.nesting)
        if (message.minItems != null && Object.hasOwnProperty.call(message, 'minItems'))
          writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.minItems)
        if (message.maxItems != null && Object.hasOwnProperty.call(message, 'maxItems'))
          writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.maxItems)
        return writer
      }

      /**
       * Encodes the specified NestedBlock message, length delimited. Does not implicitly {@link tfplugin5.Schema.NestedBlock.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.Schema.NestedBlock
       * @static
       * @param {tfplugin5.Schema.INestedBlock} message NestedBlock message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      NestedBlock.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a NestedBlock message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.Schema.NestedBlock
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.Schema.NestedBlock} NestedBlock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      NestedBlock.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.Schema.NestedBlock()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.block = $root.tfplugin5.Schema.Block.decode(reader, reader.uint32())
              break
            case 3:
              message.nesting = reader.int32()
              break
            case 4:
              message.minItems = reader.int64().toNumber()
              break
            case 5:
              message.maxItems = reader.int64().toNumber()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a NestedBlock message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.Schema.NestedBlock
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.Schema.NestedBlock} NestedBlock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      NestedBlock.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a NestedBlock message.
       * @function verify
       * @memberof tfplugin5.Schema.NestedBlock
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      NestedBlock.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.block != null && message.hasOwnProperty('block')) {
          var error = $root.tfplugin5.Schema.Block.verify(message.block)
          if (error) return 'block.' + error
        }
        if (message.nesting != null && message.hasOwnProperty('nesting'))
          switch (message.nesting) {
            default:
              return 'nesting: enum value expected'
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break
          }
        if (message.minItems != null && message.hasOwnProperty('minItems'))
          if (
            !$util.isInteger(message.minItems) &&
            !(message.minItems && $util.isInteger(message.minItems.low) && $util.isInteger(message.minItems.high))
          )
            return 'minItems: integer|Long expected'
        if (message.maxItems != null && message.hasOwnProperty('maxItems'))
          if (
            !$util.isInteger(message.maxItems) &&
            !(message.maxItems && $util.isInteger(message.maxItems.low) && $util.isInteger(message.maxItems.high))
          )
            return 'maxItems: integer|Long expected'
        return null
      }

      /**
       * Creates a NestedBlock message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.Schema.NestedBlock
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.Schema.NestedBlock} NestedBlock
       */
      NestedBlock.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.Schema.NestedBlock) return object
        var message = new $root.tfplugin5.Schema.NestedBlock()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.block != null) {
          if (typeof object.block !== 'object') throw TypeError('.tfplugin5.Schema.NestedBlock.block: object expected')
          message.block = $root.tfplugin5.Schema.Block.fromObject(object.block)
        }
        switch (object.nesting) {
          case 'INVALID':
          case 0:
            message.nesting = 0
            break
          case 'SINGLE':
          case 1:
            message.nesting = 1
            break
          case 'LIST':
          case 2:
            message.nesting = 2
            break
          case 'SET':
          case 3:
            message.nesting = 3
            break
          case 'MAP':
          case 4:
            message.nesting = 4
            break
          case 'GROUP':
          case 5:
            message.nesting = 5
            break
        }
        if (object.minItems != null)
          if ($util.Long) (message.minItems = $util.Long.fromValue(object.minItems)).unsigned = false
          else if (typeof object.minItems === 'string') message.minItems = parseInt(object.minItems, 10)
          else if (typeof object.minItems === 'number') message.minItems = object.minItems
          else if (typeof object.minItems === 'object')
            message.minItems = new $util.LongBits(object.minItems.low >>> 0, object.minItems.high >>> 0).toNumber()
        if (object.maxItems != null)
          if ($util.Long) (message.maxItems = $util.Long.fromValue(object.maxItems)).unsigned = false
          else if (typeof object.maxItems === 'string') message.maxItems = parseInt(object.maxItems, 10)
          else if (typeof object.maxItems === 'number') message.maxItems = object.maxItems
          else if (typeof object.maxItems === 'object')
            message.maxItems = new $util.LongBits(object.maxItems.low >>> 0, object.maxItems.high >>> 0).toNumber()
        return message
      }

      /**
       * Creates a plain object from a NestedBlock message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.Schema.NestedBlock
       * @static
       * @param {tfplugin5.Schema.NestedBlock} message NestedBlock
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      NestedBlock.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          object.block = null
          object.nesting = options.enums === String ? 'INVALID' : 0
          if ($util.Long) {
            var long = new $util.Long(0, 0, false)
            object.minItems =
              options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
          } else object.minItems = options.longs === String ? '0' : 0
          if ($util.Long) {
            var long = new $util.Long(0, 0, false)
            object.maxItems =
              options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
          } else object.maxItems = options.longs === String ? '0' : 0
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.block != null && message.hasOwnProperty('block'))
          object.block = $root.tfplugin5.Schema.Block.toObject(message.block, options)
        if (message.nesting != null && message.hasOwnProperty('nesting'))
          object.nesting =
            options.enums === String ? $root.tfplugin5.Schema.NestedBlock.NestingMode[message.nesting] : message.nesting
        if (message.minItems != null && message.hasOwnProperty('minItems'))
          if (typeof message.minItems === 'number')
            object.minItems = options.longs === String ? String(message.minItems) : message.minItems
          else
            object.minItems =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.minItems)
                : options.longs === Number
                ? new $util.LongBits(message.minItems.low >>> 0, message.minItems.high >>> 0).toNumber()
                : message.minItems
        if (message.maxItems != null && message.hasOwnProperty('maxItems'))
          if (typeof message.maxItems === 'number')
            object.maxItems = options.longs === String ? String(message.maxItems) : message.maxItems
          else
            object.maxItems =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.maxItems)
                : options.longs === Number
                ? new $util.LongBits(message.maxItems.low >>> 0, message.maxItems.high >>> 0).toNumber()
                : message.maxItems
        return object
      }

      /**
       * Converts this NestedBlock to JSON.
       * @function toJSON
       * @memberof tfplugin5.Schema.NestedBlock
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      NestedBlock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * NestingMode enum.
       * @name tfplugin5.Schema.NestedBlock.NestingMode
       * @enum {number}
       * @property {number} INVALID=0 INVALID value
       * @property {number} SINGLE=1 SINGLE value
       * @property {number} LIST=2 LIST value
       * @property {number} SET=3 SET value
       * @property {number} MAP=4 MAP value
       * @property {number} GROUP=5 GROUP value
       */
      NestedBlock.NestingMode = (function () {
        var valuesById = {},
          values = Object.create(valuesById)
        values[(valuesById[0] = 'INVALID')] = 0
        values[(valuesById[1] = 'SINGLE')] = 1
        values[(valuesById[2] = 'LIST')] = 2
        values[(valuesById[3] = 'SET')] = 3
        values[(valuesById[4] = 'MAP')] = 4
        values[(valuesById[5] = 'GROUP')] = 5
        return values
      })()

      return NestedBlock
    })()

    return Schema
  })()

  tfplugin5.Provider = (function () {
    /**
     * Constructs a new Provider service.
     * @memberof tfplugin5
     * @classdesc Represents a Provider
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Provider(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    ;(Provider.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Provider

    /**
     * Creates new Provider service using the specified rpc implementation.
     * @function create
     * @memberof tfplugin5.Provider
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Provider} RPC service. Useful where requests and/or responses are streamed.
     */
    Provider.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
     * Callback as used by {@link tfplugin5.Provider#getSchema}.
     * @memberof tfplugin5.Provider
     * @typedef GetSchemaCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.GetProviderSchema.Response} [response] Response
     */

    /**
     * Information about what a provider supports/expects
     * @function getSchema
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.GetProviderSchema.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.GetSchemaCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.getSchema = function getSchema(request, callback) {
        return this.rpcCall(
          getSchema,
          $root.tfplugin5.GetProviderSchema.Request,
          $root.tfplugin5.GetProviderSchema.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'GetSchema'},
    )

    /**
     * Information about what a provider supports/expects
     * @function getSchema
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.GetProviderSchema.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.GetProviderSchema.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#prepareProviderConfig}.
     * @memberof tfplugin5.Provider
     * @typedef PrepareProviderConfigCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.PrepareProviderConfig.Response} [response] Response
     */

    /**
     * Calls PrepareProviderConfig.
     * @function prepareProviderConfig
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.PrepareProviderConfig.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.PrepareProviderConfigCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.prepareProviderConfig = function prepareProviderConfig(request, callback) {
        return this.rpcCall(
          prepareProviderConfig,
          $root.tfplugin5.PrepareProviderConfig.Request,
          $root.tfplugin5.PrepareProviderConfig.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'PrepareProviderConfig'},
    )

    /**
     * Calls PrepareProviderConfig.
     * @function prepareProviderConfig
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.PrepareProviderConfig.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.PrepareProviderConfig.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#validateResourceTypeConfig}.
     * @memberof tfplugin5.Provider
     * @typedef ValidateResourceTypeConfigCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.ValidateResourceTypeConfig.Response} [response] Response
     */

    /**
     * Calls ValidateResourceTypeConfig.
     * @function validateResourceTypeConfig
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ValidateResourceTypeConfig.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.ValidateResourceTypeConfigCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.validateResourceTypeConfig = function validateResourceTypeConfig(request, callback) {
        return this.rpcCall(
          validateResourceTypeConfig,
          $root.tfplugin5.ValidateResourceTypeConfig.Request,
          $root.tfplugin5.ValidateResourceTypeConfig.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'ValidateResourceTypeConfig'},
    )

    /**
     * Calls ValidateResourceTypeConfig.
     * @function validateResourceTypeConfig
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ValidateResourceTypeConfig.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.ValidateResourceTypeConfig.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#validateDataSourceConfig}.
     * @memberof tfplugin5.Provider
     * @typedef ValidateDataSourceConfigCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.ValidateDataSourceConfig.Response} [response] Response
     */

    /**
     * Calls ValidateDataSourceConfig.
     * @function validateDataSourceConfig
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ValidateDataSourceConfig.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.ValidateDataSourceConfigCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.validateDataSourceConfig = function validateDataSourceConfig(request, callback) {
        return this.rpcCall(
          validateDataSourceConfig,
          $root.tfplugin5.ValidateDataSourceConfig.Request,
          $root.tfplugin5.ValidateDataSourceConfig.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'ValidateDataSourceConfig'},
    )

    /**
     * Calls ValidateDataSourceConfig.
     * @function validateDataSourceConfig
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ValidateDataSourceConfig.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.ValidateDataSourceConfig.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#upgradeResourceState}.
     * @memberof tfplugin5.Provider
     * @typedef UpgradeResourceStateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.UpgradeResourceState.Response} [response] Response
     */

    /**
     * Calls UpgradeResourceState.
     * @function upgradeResourceState
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.UpgradeResourceState.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.UpgradeResourceStateCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.upgradeResourceState = function upgradeResourceState(request, callback) {
        return this.rpcCall(
          upgradeResourceState,
          $root.tfplugin5.UpgradeResourceState.Request,
          $root.tfplugin5.UpgradeResourceState.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'UpgradeResourceState'},
    )

    /**
     * Calls UpgradeResourceState.
     * @function upgradeResourceState
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.UpgradeResourceState.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.UpgradeResourceState.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#configure}.
     * @memberof tfplugin5.Provider
     * @typedef ConfigureCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.Configure.Response} [response] Response
     */

    /**
     * One-time initialization, called before other functions below
     * @function configure
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.Configure.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.ConfigureCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.configure = function configure(request, callback) {
        return this.rpcCall(
          configure,
          $root.tfplugin5.Configure.Request,
          $root.tfplugin5.Configure.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'Configure'},
    )

    /**
     * One-time initialization, called before other functions below
     * @function configure
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.Configure.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.Configure.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#readResource}.
     * @memberof tfplugin5.Provider
     * @typedef ReadResourceCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.ReadResource.Response} [response] Response
     */

    /**
     * Managed Resource Lifecycle
     * @function readResource
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ReadResource.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.ReadResourceCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.readResource = function readResource(request, callback) {
        return this.rpcCall(
          readResource,
          $root.tfplugin5.ReadResource.Request,
          $root.tfplugin5.ReadResource.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'ReadResource'},
    )

    /**
     * Managed Resource Lifecycle
     * @function readResource
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ReadResource.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.ReadResource.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#planResourceChange}.
     * @memberof tfplugin5.Provider
     * @typedef PlanResourceChangeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.PlanResourceChange.Response} [response] Response
     */

    /**
     * Calls PlanResourceChange.
     * @function planResourceChange
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.PlanResourceChange.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.PlanResourceChangeCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.planResourceChange = function planResourceChange(request, callback) {
        return this.rpcCall(
          planResourceChange,
          $root.tfplugin5.PlanResourceChange.Request,
          $root.tfplugin5.PlanResourceChange.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'PlanResourceChange'},
    )

    /**
     * Calls PlanResourceChange.
     * @function planResourceChange
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.PlanResourceChange.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.PlanResourceChange.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#applyResourceChange}.
     * @memberof tfplugin5.Provider
     * @typedef ApplyResourceChangeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.ApplyResourceChange.Response} [response] Response
     */

    /**
     * Calls ApplyResourceChange.
     * @function applyResourceChange
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ApplyResourceChange.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.ApplyResourceChangeCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.applyResourceChange = function applyResourceChange(request, callback) {
        return this.rpcCall(
          applyResourceChange,
          $root.tfplugin5.ApplyResourceChange.Request,
          $root.tfplugin5.ApplyResourceChange.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'ApplyResourceChange'},
    )

    /**
     * Calls ApplyResourceChange.
     * @function applyResourceChange
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ApplyResourceChange.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.ApplyResourceChange.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#importResourceState}.
     * @memberof tfplugin5.Provider
     * @typedef ImportResourceStateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.ImportResourceState.Response} [response] Response
     */

    /**
     * Calls ImportResourceState.
     * @function importResourceState
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ImportResourceState.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.ImportResourceStateCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.importResourceState = function importResourceState(request, callback) {
        return this.rpcCall(
          importResourceState,
          $root.tfplugin5.ImportResourceState.Request,
          $root.tfplugin5.ImportResourceState.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'ImportResourceState'},
    )

    /**
     * Calls ImportResourceState.
     * @function importResourceState
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ImportResourceState.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.ImportResourceState.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#readDataSource}.
     * @memberof tfplugin5.Provider
     * @typedef ReadDataSourceCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.ReadDataSource.Response} [response] Response
     */

    /**
     * Calls ReadDataSource.
     * @function readDataSource
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ReadDataSource.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.ReadDataSourceCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.readDataSource = function readDataSource(request, callback) {
        return this.rpcCall(
          readDataSource,
          $root.tfplugin5.ReadDataSource.Request,
          $root.tfplugin5.ReadDataSource.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'ReadDataSource'},
    )

    /**
     * Calls ReadDataSource.
     * @function readDataSource
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.ReadDataSource.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.ReadDataSource.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provider#stop}.
     * @memberof tfplugin5.Provider
     * @typedef StopCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.Stop.Response} [response] Response
     */

    /**
     * Graceful Shutdown
     * @function stop
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.Stop.IRequest} request Request message or plain object
     * @param {tfplugin5.Provider.StopCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provider.prototype.stop = function stop(request, callback) {
        return this.rpcCall(stop, $root.tfplugin5.Stop.Request, $root.tfplugin5.Stop.Response, request, callback)
      }),
      'name',
      {value: 'Stop'},
    )

    /**
     * Graceful Shutdown
     * @function stop
     * @memberof tfplugin5.Provider
     * @instance
     * @param {tfplugin5.Stop.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.Stop.Response>} Promise
     * @variation 2
     */

    return Provider
  })()

  tfplugin5.GetProviderSchema = (function () {
    /**
     * Properties of a GetProviderSchema.
     * @memberof tfplugin5
     * @interface IGetProviderSchema
     */

    /**
     * Constructs a new GetProviderSchema.
     * @memberof tfplugin5
     * @classdesc Represents a GetProviderSchema.
     * @implements IGetProviderSchema
     * @constructor
     * @param {tfplugin5.IGetProviderSchema=} [properties] Properties to set
     */
    function GetProviderSchema(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new GetProviderSchema instance using the specified properties.
     * @function create
     * @memberof tfplugin5.GetProviderSchema
     * @static
     * @param {tfplugin5.IGetProviderSchema=} [properties] Properties to set
     * @returns {tfplugin5.GetProviderSchema} GetProviderSchema instance
     */
    GetProviderSchema.create = function create(properties) {
      return new GetProviderSchema(properties)
    }

    /**
     * Encodes the specified GetProviderSchema message. Does not implicitly {@link tfplugin5.GetProviderSchema.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.GetProviderSchema
     * @static
     * @param {tfplugin5.IGetProviderSchema} message GetProviderSchema message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetProviderSchema.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified GetProviderSchema message, length delimited. Does not implicitly {@link tfplugin5.GetProviderSchema.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.GetProviderSchema
     * @static
     * @param {tfplugin5.IGetProviderSchema} message GetProviderSchema message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetProviderSchema.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a GetProviderSchema message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.GetProviderSchema
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.GetProviderSchema} GetProviderSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetProviderSchema.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.GetProviderSchema()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a GetProviderSchema message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.GetProviderSchema
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.GetProviderSchema} GetProviderSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetProviderSchema.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a GetProviderSchema message.
     * @function verify
     * @memberof tfplugin5.GetProviderSchema
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetProviderSchema.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a GetProviderSchema message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.GetProviderSchema
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.GetProviderSchema} GetProviderSchema
     */
    GetProviderSchema.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.GetProviderSchema) return object
      return new $root.tfplugin5.GetProviderSchema()
    }

    /**
     * Creates a plain object from a GetProviderSchema message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.GetProviderSchema
     * @static
     * @param {tfplugin5.GetProviderSchema} message GetProviderSchema
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetProviderSchema.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this GetProviderSchema to JSON.
     * @function toJSON
     * @memberof tfplugin5.GetProviderSchema
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetProviderSchema.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    GetProviderSchema.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.GetProviderSchema
       * @interface IRequest
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.GetProviderSchema
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.GetProviderSchema.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.GetProviderSchema.Request
       * @static
       * @param {tfplugin5.GetProviderSchema.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.GetProviderSchema.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.GetProviderSchema.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.GetProviderSchema.Request
       * @static
       * @param {tfplugin5.GetProviderSchema.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.GetProviderSchema.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.GetProviderSchema.Request
       * @static
       * @param {tfplugin5.GetProviderSchema.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.GetProviderSchema.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.GetProviderSchema.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.GetProviderSchema.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.GetProviderSchema.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.GetProviderSchema.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.GetProviderSchema.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.GetProviderSchema.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.GetProviderSchema.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.GetProviderSchema.Request) return object
        return new $root.tfplugin5.GetProviderSchema.Request()
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.GetProviderSchema.Request
       * @static
       * @param {tfplugin5.GetProviderSchema.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject() {
        return {}
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.GetProviderSchema.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    GetProviderSchema.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.GetProviderSchema
       * @interface IResponse
       * @property {tfplugin5.ISchema|null} [provider] Response provider
       * @property {Object.<string,tfplugin5.ISchema>|null} [resourceSchemas] Response resourceSchemas
       * @property {Object.<string,tfplugin5.ISchema>|null} [dataSourceSchemas] Response dataSourceSchemas
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       * @property {tfplugin5.ISchema|null} [providerMeta] Response providerMeta
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.GetProviderSchema
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.GetProviderSchema.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.resourceSchemas = {}
        this.dataSourceSchemas = {}
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response provider.
       * @member {tfplugin5.ISchema|null|undefined} provider
       * @memberof tfplugin5.GetProviderSchema.Response
       * @instance
       */
      Response.prototype.provider = null

      /**
       * Response resourceSchemas.
       * @member {Object.<string,tfplugin5.ISchema>} resourceSchemas
       * @memberof tfplugin5.GetProviderSchema.Response
       * @instance
       */
      Response.prototype.resourceSchemas = $util.emptyObject

      /**
       * Response dataSourceSchemas.
       * @member {Object.<string,tfplugin5.ISchema>} dataSourceSchemas
       * @memberof tfplugin5.GetProviderSchema.Response
       * @instance
       */
      Response.prototype.dataSourceSchemas = $util.emptyObject

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.GetProviderSchema.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Response providerMeta.
       * @member {tfplugin5.ISchema|null|undefined} providerMeta
       * @memberof tfplugin5.GetProviderSchema.Response
       * @instance
       */
      Response.prototype.providerMeta = null

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.GetProviderSchema.Response
       * @static
       * @param {tfplugin5.GetProviderSchema.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.GetProviderSchema.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.GetProviderSchema.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.GetProviderSchema.Response
       * @static
       * @param {tfplugin5.GetProviderSchema.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.provider != null && Object.hasOwnProperty.call(message, 'provider'))
          $root.tfplugin5.Schema.encode(message.provider, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim()
        if (message.resourceSchemas != null && Object.hasOwnProperty.call(message, 'resourceSchemas'))
          for (var keys = Object.keys(message.resourceSchemas), i = 0; i < keys.length; ++i) {
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork().uint32(/* id 1, wireType 2 =*/ 10).string(keys[i])
            $root.tfplugin5.Schema.encode(
              message.resourceSchemas[keys[i]],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            )
              .ldelim()
              .ldelim()
          }
        if (message.dataSourceSchemas != null && Object.hasOwnProperty.call(message, 'dataSourceSchemas'))
          for (var keys = Object.keys(message.dataSourceSchemas), i = 0; i < keys.length; ++i) {
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork().uint32(/* id 1, wireType 2 =*/ 10).string(keys[i])
            $root.tfplugin5.Schema.encode(
              message.dataSourceSchemas[keys[i]],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            )
              .ldelim()
              .ldelim()
          }
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
            ).ldelim()
        if (message.providerMeta != null && Object.hasOwnProperty.call(message, 'providerMeta'))
          $root.tfplugin5.Schema.encode(message.providerMeta, writer.uint32(/* id 5, wireType 2 =*/ 42).fork()).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.GetProviderSchema.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.GetProviderSchema.Response
       * @static
       * @param {tfplugin5.GetProviderSchema.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.GetProviderSchema.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.GetProviderSchema.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.GetProviderSchema.Response(),
          key
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.provider = $root.tfplugin5.Schema.decode(reader, reader.uint32())
              break
            case 2:
              reader.skip().pos++
              if (message.resourceSchemas === $util.emptyObject) message.resourceSchemas = {}
              key = reader.string()
              reader.pos++
              message.resourceSchemas[key] = $root.tfplugin5.Schema.decode(reader, reader.uint32())
              break
            case 3:
              reader.skip().pos++
              if (message.dataSourceSchemas === $util.emptyObject) message.dataSourceSchemas = {}
              key = reader.string()
              reader.pos++
              message.dataSourceSchemas[key] = $root.tfplugin5.Schema.decode(reader, reader.uint32())
              break
            case 4:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            case 5:
              message.providerMeta = $root.tfplugin5.Schema.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.GetProviderSchema.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.GetProviderSchema.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.GetProviderSchema.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.provider != null && message.hasOwnProperty('provider')) {
          var error = $root.tfplugin5.Schema.verify(message.provider)
          if (error) return 'provider.' + error
        }
        if (message.resourceSchemas != null && message.hasOwnProperty('resourceSchemas')) {
          if (!$util.isObject(message.resourceSchemas)) return 'resourceSchemas: object expected'
          var key = Object.keys(message.resourceSchemas)
          for (var i = 0; i < key.length; ++i) {
            var error = $root.tfplugin5.Schema.verify(message.resourceSchemas[key[i]])
            if (error) return 'resourceSchemas.' + error
          }
        }
        if (message.dataSourceSchemas != null && message.hasOwnProperty('dataSourceSchemas')) {
          if (!$util.isObject(message.dataSourceSchemas)) return 'dataSourceSchemas: object expected'
          var key = Object.keys(message.dataSourceSchemas)
          for (var i = 0; i < key.length; ++i) {
            var error = $root.tfplugin5.Schema.verify(message.dataSourceSchemas[key[i]])
            if (error) return 'dataSourceSchemas.' + error
          }
        }
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta')) {
          var error = $root.tfplugin5.Schema.verify(message.providerMeta)
          if (error) return 'providerMeta.' + error
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.GetProviderSchema.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.GetProviderSchema.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.GetProviderSchema.Response) return object
        var message = new $root.tfplugin5.GetProviderSchema.Response()
        if (object.provider != null) {
          if (typeof object.provider !== 'object')
            throw TypeError('.tfplugin5.GetProviderSchema.Response.provider: object expected')
          message.provider = $root.tfplugin5.Schema.fromObject(object.provider)
        }
        if (object.resourceSchemas) {
          if (typeof object.resourceSchemas !== 'object')
            throw TypeError('.tfplugin5.GetProviderSchema.Response.resourceSchemas: object expected')
          message.resourceSchemas = {}
          for (var keys = Object.keys(object.resourceSchemas), i = 0; i < keys.length; ++i) {
            if (typeof object.resourceSchemas[keys[i]] !== 'object')
              throw TypeError('.tfplugin5.GetProviderSchema.Response.resourceSchemas: object expected')
            message.resourceSchemas[keys[i]] = $root.tfplugin5.Schema.fromObject(object.resourceSchemas[keys[i]])
          }
        }
        if (object.dataSourceSchemas) {
          if (typeof object.dataSourceSchemas !== 'object')
            throw TypeError('.tfplugin5.GetProviderSchema.Response.dataSourceSchemas: object expected')
          message.dataSourceSchemas = {}
          for (var keys = Object.keys(object.dataSourceSchemas), i = 0; i < keys.length; ++i) {
            if (typeof object.dataSourceSchemas[keys[i]] !== 'object')
              throw TypeError('.tfplugin5.GetProviderSchema.Response.dataSourceSchemas: object expected')
            message.dataSourceSchemas[keys[i]] = $root.tfplugin5.Schema.fromObject(object.dataSourceSchemas[keys[i]])
          }
        }
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.GetProviderSchema.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.GetProviderSchema.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        if (object.providerMeta != null) {
          if (typeof object.providerMeta !== 'object')
            throw TypeError('.tfplugin5.GetProviderSchema.Response.providerMeta: object expected')
          message.providerMeta = $root.tfplugin5.Schema.fromObject(object.providerMeta)
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.GetProviderSchema.Response
       * @static
       * @param {tfplugin5.GetProviderSchema.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (options.objects || options.defaults) {
          object.resourceSchemas = {}
          object.dataSourceSchemas = {}
        }
        if (options.defaults) {
          object.provider = null
          object.providerMeta = null
        }
        if (message.provider != null && message.hasOwnProperty('provider'))
          object.provider = $root.tfplugin5.Schema.toObject(message.provider, options)
        var keys2
        if (message.resourceSchemas && (keys2 = Object.keys(message.resourceSchemas)).length) {
          object.resourceSchemas = {}
          for (var j = 0; j < keys2.length; ++j)
            object.resourceSchemas[keys2[j]] = $root.tfplugin5.Schema.toObject(
              message.resourceSchemas[keys2[j]],
              options,
            )
        }
        if (message.dataSourceSchemas && (keys2 = Object.keys(message.dataSourceSchemas)).length) {
          object.dataSourceSchemas = {}
          for (var j = 0; j < keys2.length; ++j)
            object.dataSourceSchemas[keys2[j]] = $root.tfplugin5.Schema.toObject(
              message.dataSourceSchemas[keys2[j]],
              options,
            )
        }
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta'))
          object.providerMeta = $root.tfplugin5.Schema.toObject(message.providerMeta, options)
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.GetProviderSchema.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return GetProviderSchema
  })()

  tfplugin5.PrepareProviderConfig = (function () {
    /**
     * Properties of a PrepareProviderConfig.
     * @memberof tfplugin5
     * @interface IPrepareProviderConfig
     */

    /**
     * Constructs a new PrepareProviderConfig.
     * @memberof tfplugin5
     * @classdesc Represents a PrepareProviderConfig.
     * @implements IPrepareProviderConfig
     * @constructor
     * @param {tfplugin5.IPrepareProviderConfig=} [properties] Properties to set
     */
    function PrepareProviderConfig(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new PrepareProviderConfig instance using the specified properties.
     * @function create
     * @memberof tfplugin5.PrepareProviderConfig
     * @static
     * @param {tfplugin5.IPrepareProviderConfig=} [properties] Properties to set
     * @returns {tfplugin5.PrepareProviderConfig} PrepareProviderConfig instance
     */
    PrepareProviderConfig.create = function create(properties) {
      return new PrepareProviderConfig(properties)
    }

    /**
     * Encodes the specified PrepareProviderConfig message. Does not implicitly {@link tfplugin5.PrepareProviderConfig.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.PrepareProviderConfig
     * @static
     * @param {tfplugin5.IPrepareProviderConfig} message PrepareProviderConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PrepareProviderConfig.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified PrepareProviderConfig message, length delimited. Does not implicitly {@link tfplugin5.PrepareProviderConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.PrepareProviderConfig
     * @static
     * @param {tfplugin5.IPrepareProviderConfig} message PrepareProviderConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PrepareProviderConfig.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a PrepareProviderConfig message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.PrepareProviderConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.PrepareProviderConfig} PrepareProviderConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PrepareProviderConfig.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.PrepareProviderConfig()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a PrepareProviderConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.PrepareProviderConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.PrepareProviderConfig} PrepareProviderConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PrepareProviderConfig.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a PrepareProviderConfig message.
     * @function verify
     * @memberof tfplugin5.PrepareProviderConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PrepareProviderConfig.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a PrepareProviderConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.PrepareProviderConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.PrepareProviderConfig} PrepareProviderConfig
     */
    PrepareProviderConfig.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.PrepareProviderConfig) return object
      return new $root.tfplugin5.PrepareProviderConfig()
    }

    /**
     * Creates a plain object from a PrepareProviderConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.PrepareProviderConfig
     * @static
     * @param {tfplugin5.PrepareProviderConfig} message PrepareProviderConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PrepareProviderConfig.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this PrepareProviderConfig to JSON.
     * @function toJSON
     * @memberof tfplugin5.PrepareProviderConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PrepareProviderConfig.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    PrepareProviderConfig.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.PrepareProviderConfig
       * @interface IRequest
       * @property {tfplugin5.IDynamicValue|null} [config] Request config
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.PrepareProviderConfig
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.PrepareProviderConfig.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request config.
       * @member {tfplugin5.IDynamicValue|null|undefined} config
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @instance
       */
      Request.prototype.config = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @static
       * @param {tfplugin5.PrepareProviderConfig.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.PrepareProviderConfig.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.PrepareProviderConfig.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @static
       * @param {tfplugin5.PrepareProviderConfig.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.config != null && Object.hasOwnProperty.call(message, 'config'))
          $root.tfplugin5.DynamicValue.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.PrepareProviderConfig.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @static
       * @param {tfplugin5.PrepareProviderConfig.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.PrepareProviderConfig.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.PrepareProviderConfig.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.config = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.PrepareProviderConfig.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.config != null && message.hasOwnProperty('config')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.config)
          if (error) return 'config.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.PrepareProviderConfig.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.PrepareProviderConfig.Request) return object
        var message = new $root.tfplugin5.PrepareProviderConfig.Request()
        if (object.config != null) {
          if (typeof object.config !== 'object')
            throw TypeError('.tfplugin5.PrepareProviderConfig.Request.config: object expected')
          message.config = $root.tfplugin5.DynamicValue.fromObject(object.config)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @static
       * @param {tfplugin5.PrepareProviderConfig.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) object.config = null
        if (message.config != null && message.hasOwnProperty('config'))
          object.config = $root.tfplugin5.DynamicValue.toObject(message.config, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.PrepareProviderConfig.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    PrepareProviderConfig.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.PrepareProviderConfig
       * @interface IResponse
       * @property {tfplugin5.IDynamicValue|null} [preparedConfig] Response preparedConfig
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.PrepareProviderConfig
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.PrepareProviderConfig.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response preparedConfig.
       * @member {tfplugin5.IDynamicValue|null|undefined} preparedConfig
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @instance
       */
      Response.prototype.preparedConfig = null

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @static
       * @param {tfplugin5.PrepareProviderConfig.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.PrepareProviderConfig.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.PrepareProviderConfig.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @static
       * @param {tfplugin5.PrepareProviderConfig.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.preparedConfig != null && Object.hasOwnProperty.call(message, 'preparedConfig'))
          $root.tfplugin5.DynamicValue.encode(
            message.preparedConfig,
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
          ).ldelim()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.PrepareProviderConfig.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @static
       * @param {tfplugin5.PrepareProviderConfig.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.PrepareProviderConfig.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.PrepareProviderConfig.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.preparedConfig = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 2:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.PrepareProviderConfig.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.preparedConfig != null && message.hasOwnProperty('preparedConfig')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.preparedConfig)
          if (error) return 'preparedConfig.' + error
        }
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.PrepareProviderConfig.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.PrepareProviderConfig.Response) return object
        var message = new $root.tfplugin5.PrepareProviderConfig.Response()
        if (object.preparedConfig != null) {
          if (typeof object.preparedConfig !== 'object')
            throw TypeError('.tfplugin5.PrepareProviderConfig.Response.preparedConfig: object expected')
          message.preparedConfig = $root.tfplugin5.DynamicValue.fromObject(object.preparedConfig)
        }
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.PrepareProviderConfig.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.PrepareProviderConfig.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @static
       * @param {tfplugin5.PrepareProviderConfig.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (options.defaults) object.preparedConfig = null
        if (message.preparedConfig != null && message.hasOwnProperty('preparedConfig'))
          object.preparedConfig = $root.tfplugin5.DynamicValue.toObject(message.preparedConfig, options)
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.PrepareProviderConfig.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return PrepareProviderConfig
  })()

  tfplugin5.UpgradeResourceState = (function () {
    /**
     * Properties of an UpgradeResourceState.
     * @memberof tfplugin5
     * @interface IUpgradeResourceState
     */

    /**
     * Constructs a new UpgradeResourceState.
     * @memberof tfplugin5
     * @classdesc Represents an UpgradeResourceState.
     * @implements IUpgradeResourceState
     * @constructor
     * @param {tfplugin5.IUpgradeResourceState=} [properties] Properties to set
     */
    function UpgradeResourceState(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new UpgradeResourceState instance using the specified properties.
     * @function create
     * @memberof tfplugin5.UpgradeResourceState
     * @static
     * @param {tfplugin5.IUpgradeResourceState=} [properties] Properties to set
     * @returns {tfplugin5.UpgradeResourceState} UpgradeResourceState instance
     */
    UpgradeResourceState.create = function create(properties) {
      return new UpgradeResourceState(properties)
    }

    /**
     * Encodes the specified UpgradeResourceState message. Does not implicitly {@link tfplugin5.UpgradeResourceState.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.UpgradeResourceState
     * @static
     * @param {tfplugin5.IUpgradeResourceState} message UpgradeResourceState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpgradeResourceState.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified UpgradeResourceState message, length delimited. Does not implicitly {@link tfplugin5.UpgradeResourceState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.UpgradeResourceState
     * @static
     * @param {tfplugin5.IUpgradeResourceState} message UpgradeResourceState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpgradeResourceState.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an UpgradeResourceState message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.UpgradeResourceState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.UpgradeResourceState} UpgradeResourceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpgradeResourceState.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.UpgradeResourceState()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an UpgradeResourceState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.UpgradeResourceState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.UpgradeResourceState} UpgradeResourceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpgradeResourceState.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an UpgradeResourceState message.
     * @function verify
     * @memberof tfplugin5.UpgradeResourceState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpgradeResourceState.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates an UpgradeResourceState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.UpgradeResourceState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.UpgradeResourceState} UpgradeResourceState
     */
    UpgradeResourceState.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.UpgradeResourceState) return object
      return new $root.tfplugin5.UpgradeResourceState()
    }

    /**
     * Creates a plain object from an UpgradeResourceState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.UpgradeResourceState
     * @static
     * @param {tfplugin5.UpgradeResourceState} message UpgradeResourceState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpgradeResourceState.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this UpgradeResourceState to JSON.
     * @function toJSON
     * @memberof tfplugin5.UpgradeResourceState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpgradeResourceState.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    UpgradeResourceState.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.UpgradeResourceState
       * @interface IRequest
       * @property {string|null} [typeName] Request typeName
       * @property {number|null} [version] Request version
       * @property {tfplugin5.IRawState|null} [rawState] Request rawState
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.UpgradeResourceState
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.UpgradeResourceState.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request typeName.
       * @member {string} typeName
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @instance
       */
      Request.prototype.typeName = ''

      /**
       * Request version.
       * @member {number} version
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @instance
       */
      Request.prototype.version = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

      /**
       * Request rawState.
       * @member {tfplugin5.IRawState|null|undefined} rawState
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @instance
       */
      Request.prototype.rawState = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @static
       * @param {tfplugin5.UpgradeResourceState.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.UpgradeResourceState.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.UpgradeResourceState.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @static
       * @param {tfplugin5.UpgradeResourceState.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.version != null && Object.hasOwnProperty.call(message, 'version'))
          writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.version)
        if (message.rawState != null && Object.hasOwnProperty.call(message, 'rawState'))
          $root.tfplugin5.RawState.encode(message.rawState, writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.UpgradeResourceState.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @static
       * @param {tfplugin5.UpgradeResourceState.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.UpgradeResourceState.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.UpgradeResourceState.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.version = reader.int64().toNumber()
              break
            case 3:
              message.rawState = $root.tfplugin5.RawState.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.UpgradeResourceState.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.version != null && message.hasOwnProperty('version'))
          if (
            !$util.isInteger(message.version) &&
            !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high))
          )
            return 'version: integer|Long expected'
        if (message.rawState != null && message.hasOwnProperty('rawState')) {
          var error = $root.tfplugin5.RawState.verify(message.rawState)
          if (error) return 'rawState.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.UpgradeResourceState.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.UpgradeResourceState.Request) return object
        var message = new $root.tfplugin5.UpgradeResourceState.Request()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.version != null)
          if ($util.Long) (message.version = $util.Long.fromValue(object.version)).unsigned = false
          else if (typeof object.version === 'string') message.version = parseInt(object.version, 10)
          else if (typeof object.version === 'number') message.version = object.version
          else if (typeof object.version === 'object')
            message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber()
        if (object.rawState != null) {
          if (typeof object.rawState !== 'object')
            throw TypeError('.tfplugin5.UpgradeResourceState.Request.rawState: object expected')
          message.rawState = $root.tfplugin5.RawState.fromObject(object.rawState)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @static
       * @param {tfplugin5.UpgradeResourceState.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          if ($util.Long) {
            var long = new $util.Long(0, 0, false)
            object.version =
              options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
          } else object.version = options.longs === String ? '0' : 0
          object.rawState = null
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.version != null && message.hasOwnProperty('version'))
          if (typeof message.version === 'number')
            object.version = options.longs === String ? String(message.version) : message.version
          else
            object.version =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.version)
                : options.longs === Number
                ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber()
                : message.version
        if (message.rawState != null && message.hasOwnProperty('rawState'))
          object.rawState = $root.tfplugin5.RawState.toObject(message.rawState, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.UpgradeResourceState.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    UpgradeResourceState.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.UpgradeResourceState
       * @interface IResponse
       * @property {tfplugin5.IDynamicValue|null} [upgradedState] Response upgradedState
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.UpgradeResourceState
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.UpgradeResourceState.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response upgradedState.
       * @member {tfplugin5.IDynamicValue|null|undefined} upgradedState
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @instance
       */
      Response.prototype.upgradedState = null

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @static
       * @param {tfplugin5.UpgradeResourceState.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.UpgradeResourceState.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.UpgradeResourceState.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @static
       * @param {tfplugin5.UpgradeResourceState.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.upgradedState != null && Object.hasOwnProperty.call(message, 'upgradedState'))
          $root.tfplugin5.DynamicValue.encode(
            message.upgradedState,
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
          ).ldelim()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.UpgradeResourceState.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @static
       * @param {tfplugin5.UpgradeResourceState.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.UpgradeResourceState.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.UpgradeResourceState.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.upgradedState = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 2:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.UpgradeResourceState.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.upgradedState != null && message.hasOwnProperty('upgradedState')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.upgradedState)
          if (error) return 'upgradedState.' + error
        }
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.UpgradeResourceState.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.UpgradeResourceState.Response) return object
        var message = new $root.tfplugin5.UpgradeResourceState.Response()
        if (object.upgradedState != null) {
          if (typeof object.upgradedState !== 'object')
            throw TypeError('.tfplugin5.UpgradeResourceState.Response.upgradedState: object expected')
          message.upgradedState = $root.tfplugin5.DynamicValue.fromObject(object.upgradedState)
        }
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.UpgradeResourceState.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.UpgradeResourceState.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @static
       * @param {tfplugin5.UpgradeResourceState.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (options.defaults) object.upgradedState = null
        if (message.upgradedState != null && message.hasOwnProperty('upgradedState'))
          object.upgradedState = $root.tfplugin5.DynamicValue.toObject(message.upgradedState, options)
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.UpgradeResourceState.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return UpgradeResourceState
  })()

  tfplugin5.ValidateResourceTypeConfig = (function () {
    /**
     * Properties of a ValidateResourceTypeConfig.
     * @memberof tfplugin5
     * @interface IValidateResourceTypeConfig
     */

    /**
     * Constructs a new ValidateResourceTypeConfig.
     * @memberof tfplugin5
     * @classdesc Represents a ValidateResourceTypeConfig.
     * @implements IValidateResourceTypeConfig
     * @constructor
     * @param {tfplugin5.IValidateResourceTypeConfig=} [properties] Properties to set
     */
    function ValidateResourceTypeConfig(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new ValidateResourceTypeConfig instance using the specified properties.
     * @function create
     * @memberof tfplugin5.ValidateResourceTypeConfig
     * @static
     * @param {tfplugin5.IValidateResourceTypeConfig=} [properties] Properties to set
     * @returns {tfplugin5.ValidateResourceTypeConfig} ValidateResourceTypeConfig instance
     */
    ValidateResourceTypeConfig.create = function create(properties) {
      return new ValidateResourceTypeConfig(properties)
    }

    /**
     * Encodes the specified ValidateResourceTypeConfig message. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.ValidateResourceTypeConfig
     * @static
     * @param {tfplugin5.IValidateResourceTypeConfig} message ValidateResourceTypeConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValidateResourceTypeConfig.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified ValidateResourceTypeConfig message, length delimited. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.ValidateResourceTypeConfig
     * @static
     * @param {tfplugin5.IValidateResourceTypeConfig} message ValidateResourceTypeConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValidateResourceTypeConfig.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a ValidateResourceTypeConfig message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.ValidateResourceTypeConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.ValidateResourceTypeConfig} ValidateResourceTypeConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValidateResourceTypeConfig.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.ValidateResourceTypeConfig()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a ValidateResourceTypeConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.ValidateResourceTypeConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.ValidateResourceTypeConfig} ValidateResourceTypeConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValidateResourceTypeConfig.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a ValidateResourceTypeConfig message.
     * @function verify
     * @memberof tfplugin5.ValidateResourceTypeConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ValidateResourceTypeConfig.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a ValidateResourceTypeConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.ValidateResourceTypeConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.ValidateResourceTypeConfig} ValidateResourceTypeConfig
     */
    ValidateResourceTypeConfig.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.ValidateResourceTypeConfig) return object
      return new $root.tfplugin5.ValidateResourceTypeConfig()
    }

    /**
     * Creates a plain object from a ValidateResourceTypeConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.ValidateResourceTypeConfig
     * @static
     * @param {tfplugin5.ValidateResourceTypeConfig} message ValidateResourceTypeConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ValidateResourceTypeConfig.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this ValidateResourceTypeConfig to JSON.
     * @function toJSON
     * @memberof tfplugin5.ValidateResourceTypeConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ValidateResourceTypeConfig.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    ValidateResourceTypeConfig.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.ValidateResourceTypeConfig
       * @interface IRequest
       * @property {string|null} [typeName] Request typeName
       * @property {tfplugin5.IDynamicValue|null} [config] Request config
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.ValidateResourceTypeConfig
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.ValidateResourceTypeConfig.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request typeName.
       * @member {string} typeName
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @instance
       */
      Request.prototype.typeName = ''

      /**
       * Request config.
       * @member {tfplugin5.IDynamicValue|null|undefined} config
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @instance
       */
      Request.prototype.config = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @static
       * @param {tfplugin5.ValidateResourceTypeConfig.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.ValidateResourceTypeConfig.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @static
       * @param {tfplugin5.ValidateResourceTypeConfig.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.config != null && Object.hasOwnProperty.call(message, 'config'))
          $root.tfplugin5.DynamicValue.encode(message.config, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @static
       * @param {tfplugin5.ValidateResourceTypeConfig.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ValidateResourceTypeConfig.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ValidateResourceTypeConfig.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.config = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ValidateResourceTypeConfig.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.config != null && message.hasOwnProperty('config')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.config)
          if (error) return 'config.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ValidateResourceTypeConfig.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ValidateResourceTypeConfig.Request) return object
        var message = new $root.tfplugin5.ValidateResourceTypeConfig.Request()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.config != null) {
          if (typeof object.config !== 'object')
            throw TypeError('.tfplugin5.ValidateResourceTypeConfig.Request.config: object expected')
          message.config = $root.tfplugin5.DynamicValue.fromObject(object.config)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @static
       * @param {tfplugin5.ValidateResourceTypeConfig.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          object.config = null
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.config != null && message.hasOwnProperty('config'))
          object.config = $root.tfplugin5.DynamicValue.toObject(message.config, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.ValidateResourceTypeConfig.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    ValidateResourceTypeConfig.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.ValidateResourceTypeConfig
       * @interface IResponse
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.ValidateResourceTypeConfig
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.ValidateResourceTypeConfig.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @static
       * @param {tfplugin5.ValidateResourceTypeConfig.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.ValidateResourceTypeConfig.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @static
       * @param {tfplugin5.ValidateResourceTypeConfig.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ValidateResourceTypeConfig.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @static
       * @param {tfplugin5.ValidateResourceTypeConfig.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ValidateResourceTypeConfig.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ValidateResourceTypeConfig.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ValidateResourceTypeConfig.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ValidateResourceTypeConfig.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ValidateResourceTypeConfig.Response) return object
        var message = new $root.tfplugin5.ValidateResourceTypeConfig.Response()
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.ValidateResourceTypeConfig.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.ValidateResourceTypeConfig.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @static
       * @param {tfplugin5.ValidateResourceTypeConfig.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.ValidateResourceTypeConfig.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return ValidateResourceTypeConfig
  })()

  tfplugin5.ValidateDataSourceConfig = (function () {
    /**
     * Properties of a ValidateDataSourceConfig.
     * @memberof tfplugin5
     * @interface IValidateDataSourceConfig
     */

    /**
     * Constructs a new ValidateDataSourceConfig.
     * @memberof tfplugin5
     * @classdesc Represents a ValidateDataSourceConfig.
     * @implements IValidateDataSourceConfig
     * @constructor
     * @param {tfplugin5.IValidateDataSourceConfig=} [properties] Properties to set
     */
    function ValidateDataSourceConfig(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new ValidateDataSourceConfig instance using the specified properties.
     * @function create
     * @memberof tfplugin5.ValidateDataSourceConfig
     * @static
     * @param {tfplugin5.IValidateDataSourceConfig=} [properties] Properties to set
     * @returns {tfplugin5.ValidateDataSourceConfig} ValidateDataSourceConfig instance
     */
    ValidateDataSourceConfig.create = function create(properties) {
      return new ValidateDataSourceConfig(properties)
    }

    /**
     * Encodes the specified ValidateDataSourceConfig message. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.ValidateDataSourceConfig
     * @static
     * @param {tfplugin5.IValidateDataSourceConfig} message ValidateDataSourceConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValidateDataSourceConfig.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified ValidateDataSourceConfig message, length delimited. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.ValidateDataSourceConfig
     * @static
     * @param {tfplugin5.IValidateDataSourceConfig} message ValidateDataSourceConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValidateDataSourceConfig.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a ValidateDataSourceConfig message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.ValidateDataSourceConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.ValidateDataSourceConfig} ValidateDataSourceConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValidateDataSourceConfig.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.ValidateDataSourceConfig()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a ValidateDataSourceConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.ValidateDataSourceConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.ValidateDataSourceConfig} ValidateDataSourceConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValidateDataSourceConfig.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a ValidateDataSourceConfig message.
     * @function verify
     * @memberof tfplugin5.ValidateDataSourceConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ValidateDataSourceConfig.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a ValidateDataSourceConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.ValidateDataSourceConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.ValidateDataSourceConfig} ValidateDataSourceConfig
     */
    ValidateDataSourceConfig.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.ValidateDataSourceConfig) return object
      return new $root.tfplugin5.ValidateDataSourceConfig()
    }

    /**
     * Creates a plain object from a ValidateDataSourceConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.ValidateDataSourceConfig
     * @static
     * @param {tfplugin5.ValidateDataSourceConfig} message ValidateDataSourceConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ValidateDataSourceConfig.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this ValidateDataSourceConfig to JSON.
     * @function toJSON
     * @memberof tfplugin5.ValidateDataSourceConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ValidateDataSourceConfig.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    ValidateDataSourceConfig.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.ValidateDataSourceConfig
       * @interface IRequest
       * @property {string|null} [typeName] Request typeName
       * @property {tfplugin5.IDynamicValue|null} [config] Request config
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.ValidateDataSourceConfig
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.ValidateDataSourceConfig.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request typeName.
       * @member {string} typeName
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @instance
       */
      Request.prototype.typeName = ''

      /**
       * Request config.
       * @member {tfplugin5.IDynamicValue|null|undefined} config
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @instance
       */
      Request.prototype.config = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @static
       * @param {tfplugin5.ValidateDataSourceConfig.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.ValidateDataSourceConfig.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @static
       * @param {tfplugin5.ValidateDataSourceConfig.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.config != null && Object.hasOwnProperty.call(message, 'config'))
          $root.tfplugin5.DynamicValue.encode(message.config, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @static
       * @param {tfplugin5.ValidateDataSourceConfig.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ValidateDataSourceConfig.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ValidateDataSourceConfig.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.config = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ValidateDataSourceConfig.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.config != null && message.hasOwnProperty('config')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.config)
          if (error) return 'config.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ValidateDataSourceConfig.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ValidateDataSourceConfig.Request) return object
        var message = new $root.tfplugin5.ValidateDataSourceConfig.Request()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.config != null) {
          if (typeof object.config !== 'object')
            throw TypeError('.tfplugin5.ValidateDataSourceConfig.Request.config: object expected')
          message.config = $root.tfplugin5.DynamicValue.fromObject(object.config)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @static
       * @param {tfplugin5.ValidateDataSourceConfig.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          object.config = null
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.config != null && message.hasOwnProperty('config'))
          object.config = $root.tfplugin5.DynamicValue.toObject(message.config, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.ValidateDataSourceConfig.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    ValidateDataSourceConfig.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.ValidateDataSourceConfig
       * @interface IResponse
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.ValidateDataSourceConfig
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.ValidateDataSourceConfig.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @static
       * @param {tfplugin5.ValidateDataSourceConfig.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.ValidateDataSourceConfig.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @static
       * @param {tfplugin5.ValidateDataSourceConfig.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ValidateDataSourceConfig.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @static
       * @param {tfplugin5.ValidateDataSourceConfig.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ValidateDataSourceConfig.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ValidateDataSourceConfig.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ValidateDataSourceConfig.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ValidateDataSourceConfig.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ValidateDataSourceConfig.Response) return object
        var message = new $root.tfplugin5.ValidateDataSourceConfig.Response()
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.ValidateDataSourceConfig.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.ValidateDataSourceConfig.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @static
       * @param {tfplugin5.ValidateDataSourceConfig.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.ValidateDataSourceConfig.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return ValidateDataSourceConfig
  })()

  tfplugin5.Configure = (function () {
    /**
     * Properties of a Configure.
     * @memberof tfplugin5
     * @interface IConfigure
     */

    /**
     * Constructs a new Configure.
     * @memberof tfplugin5
     * @classdesc Represents a Configure.
     * @implements IConfigure
     * @constructor
     * @param {tfplugin5.IConfigure=} [properties] Properties to set
     */
    function Configure(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new Configure instance using the specified properties.
     * @function create
     * @memberof tfplugin5.Configure
     * @static
     * @param {tfplugin5.IConfigure=} [properties] Properties to set
     * @returns {tfplugin5.Configure} Configure instance
     */
    Configure.create = function create(properties) {
      return new Configure(properties)
    }

    /**
     * Encodes the specified Configure message. Does not implicitly {@link tfplugin5.Configure.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.Configure
     * @static
     * @param {tfplugin5.IConfigure} message Configure message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Configure.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified Configure message, length delimited. Does not implicitly {@link tfplugin5.Configure.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.Configure
     * @static
     * @param {tfplugin5.IConfigure} message Configure message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Configure.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a Configure message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.Configure
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.Configure} Configure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Configure.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.Configure()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a Configure message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.Configure
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.Configure} Configure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Configure.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a Configure message.
     * @function verify
     * @memberof tfplugin5.Configure
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Configure.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a Configure message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.Configure
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.Configure} Configure
     */
    Configure.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.Configure) return object
      return new $root.tfplugin5.Configure()
    }

    /**
     * Creates a plain object from a Configure message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.Configure
     * @static
     * @param {tfplugin5.Configure} message Configure
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Configure.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this Configure to JSON.
     * @function toJSON
     * @memberof tfplugin5.Configure
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Configure.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    Configure.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.Configure
       * @interface IRequest
       * @property {string|null} [terraformVersion] Request terraformVersion
       * @property {tfplugin5.IDynamicValue|null} [config] Request config
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.Configure
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.Configure.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request terraformVersion.
       * @member {string} terraformVersion
       * @memberof tfplugin5.Configure.Request
       * @instance
       */
      Request.prototype.terraformVersion = ''

      /**
       * Request config.
       * @member {tfplugin5.IDynamicValue|null|undefined} config
       * @memberof tfplugin5.Configure.Request
       * @instance
       */
      Request.prototype.config = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.Configure.Request
       * @static
       * @param {tfplugin5.Configure.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.Configure.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.Configure.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.Configure.Request
       * @static
       * @param {tfplugin5.Configure.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.terraformVersion != null && Object.hasOwnProperty.call(message, 'terraformVersion'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.terraformVersion)
        if (message.config != null && Object.hasOwnProperty.call(message, 'config'))
          $root.tfplugin5.DynamicValue.encode(message.config, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.Configure.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.Configure.Request
       * @static
       * @param {tfplugin5.Configure.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.Configure.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.Configure.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.Configure.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.terraformVersion = reader.string()
              break
            case 2:
              message.config = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.Configure.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.Configure.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.Configure.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.terraformVersion != null && message.hasOwnProperty('terraformVersion'))
          if (!$util.isString(message.terraformVersion)) return 'terraformVersion: string expected'
        if (message.config != null && message.hasOwnProperty('config')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.config)
          if (error) return 'config.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.Configure.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.Configure.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.Configure.Request) return object
        var message = new $root.tfplugin5.Configure.Request()
        if (object.terraformVersion != null) message.terraformVersion = String(object.terraformVersion)
        if (object.config != null) {
          if (typeof object.config !== 'object') throw TypeError('.tfplugin5.Configure.Request.config: object expected')
          message.config = $root.tfplugin5.DynamicValue.fromObject(object.config)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.Configure.Request
       * @static
       * @param {tfplugin5.Configure.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.terraformVersion = ''
          object.config = null
        }
        if (message.terraformVersion != null && message.hasOwnProperty('terraformVersion'))
          object.terraformVersion = message.terraformVersion
        if (message.config != null && message.hasOwnProperty('config'))
          object.config = $root.tfplugin5.DynamicValue.toObject(message.config, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.Configure.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    Configure.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.Configure
       * @interface IResponse
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.Configure
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.Configure.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.Configure.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.Configure.Response
       * @static
       * @param {tfplugin5.Configure.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.Configure.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.Configure.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.Configure.Response
       * @static
       * @param {tfplugin5.Configure.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.Configure.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.Configure.Response
       * @static
       * @param {tfplugin5.Configure.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.Configure.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.Configure.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.Configure.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.Configure.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.Configure.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.Configure.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.Configure.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.Configure.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.Configure.Response) return object
        var message = new $root.tfplugin5.Configure.Response()
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.Configure.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.Configure.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.Configure.Response
       * @static
       * @param {tfplugin5.Configure.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.Configure.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return Configure
  })()

  tfplugin5.ReadResource = (function () {
    /**
     * Properties of a ReadResource.
     * @memberof tfplugin5
     * @interface IReadResource
     */

    /**
     * Constructs a new ReadResource.
     * @memberof tfplugin5
     * @classdesc Represents a ReadResource.
     * @implements IReadResource
     * @constructor
     * @param {tfplugin5.IReadResource=} [properties] Properties to set
     */
    function ReadResource(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new ReadResource instance using the specified properties.
     * @function create
     * @memberof tfplugin5.ReadResource
     * @static
     * @param {tfplugin5.IReadResource=} [properties] Properties to set
     * @returns {tfplugin5.ReadResource} ReadResource instance
     */
    ReadResource.create = function create(properties) {
      return new ReadResource(properties)
    }

    /**
     * Encodes the specified ReadResource message. Does not implicitly {@link tfplugin5.ReadResource.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.ReadResource
     * @static
     * @param {tfplugin5.IReadResource} message ReadResource message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadResource.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified ReadResource message, length delimited. Does not implicitly {@link tfplugin5.ReadResource.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.ReadResource
     * @static
     * @param {tfplugin5.IReadResource} message ReadResource message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadResource.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a ReadResource message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.ReadResource
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.ReadResource} ReadResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadResource.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.ReadResource()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a ReadResource message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.ReadResource
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.ReadResource} ReadResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadResource.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a ReadResource message.
     * @function verify
     * @memberof tfplugin5.ReadResource
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReadResource.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a ReadResource message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.ReadResource
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.ReadResource} ReadResource
     */
    ReadResource.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.ReadResource) return object
      return new $root.tfplugin5.ReadResource()
    }

    /**
     * Creates a plain object from a ReadResource message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.ReadResource
     * @static
     * @param {tfplugin5.ReadResource} message ReadResource
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReadResource.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this ReadResource to JSON.
     * @function toJSON
     * @memberof tfplugin5.ReadResource
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReadResource.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    ReadResource.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.ReadResource
       * @interface IRequest
       * @property {string|null} [typeName] Request typeName
       * @property {tfplugin5.IDynamicValue|null} [currentState] Request currentState
       * @property {Uint8Array|null} ["private"] Request private
       * @property {tfplugin5.IDynamicValue|null} [providerMeta] Request providerMeta
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.ReadResource
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.ReadResource.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request typeName.
       * @member {string} typeName
       * @memberof tfplugin5.ReadResource.Request
       * @instance
       */
      Request.prototype.typeName = ''

      /**
       * Request currentState.
       * @member {tfplugin5.IDynamicValue|null|undefined} currentState
       * @memberof tfplugin5.ReadResource.Request
       * @instance
       */
      Request.prototype.currentState = null

      /**
       * Request private.
       * @member {Uint8Array} private
       * @memberof tfplugin5.ReadResource.Request
       * @instance
       */
      Request.prototype['private'] = $util.newBuffer([])

      /**
       * Request providerMeta.
       * @member {tfplugin5.IDynamicValue|null|undefined} providerMeta
       * @memberof tfplugin5.ReadResource.Request
       * @instance
       */
      Request.prototype.providerMeta = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ReadResource.Request
       * @static
       * @param {tfplugin5.ReadResource.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.ReadResource.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ReadResource.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ReadResource.Request
       * @static
       * @param {tfplugin5.ReadResource.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.currentState != null && Object.hasOwnProperty.call(message, 'currentState'))
          $root.tfplugin5.DynamicValue.encode(
            message.currentState,
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
          ).ldelim()
        if (message['private'] != null && Object.hasOwnProperty.call(message, 'private'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message['private'])
        if (message.providerMeta != null && Object.hasOwnProperty.call(message, 'providerMeta'))
          $root.tfplugin5.DynamicValue.encode(
            message.providerMeta,
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
          ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ReadResource.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ReadResource.Request
       * @static
       * @param {tfplugin5.ReadResource.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ReadResource.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ReadResource.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ReadResource.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.currentState = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 3:
              message['private'] = reader.bytes()
              break
            case 4:
              message.providerMeta = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ReadResource.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ReadResource.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.ReadResource.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.currentState != null && message.hasOwnProperty('currentState')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.currentState)
          if (error) return 'currentState.' + error
        }
        if (message['private'] != null && message.hasOwnProperty('private'))
          if (
            !(
              (message['private'] && typeof message['private'].length === 'number') ||
              $util.isString(message['private'])
            )
          )
            return 'private: buffer expected'
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.providerMeta)
          if (error) return 'providerMeta.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ReadResource.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ReadResource.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ReadResource.Request) return object
        var message = new $root.tfplugin5.ReadResource.Request()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.currentState != null) {
          if (typeof object.currentState !== 'object')
            throw TypeError('.tfplugin5.ReadResource.Request.currentState: object expected')
          message.currentState = $root.tfplugin5.DynamicValue.fromObject(object.currentState)
        }
        if (object['private'] != null)
          if (typeof object['private'] === 'string')
            $util.base64.decode(
              object['private'],
              (message['private'] = $util.newBuffer($util.base64.length(object['private']))),
              0,
            )
          else if (object['private'].length) message['private'] = object['private']
        if (object.providerMeta != null) {
          if (typeof object.providerMeta !== 'object')
            throw TypeError('.tfplugin5.ReadResource.Request.providerMeta: object expected')
          message.providerMeta = $root.tfplugin5.DynamicValue.fromObject(object.providerMeta)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ReadResource.Request
       * @static
       * @param {tfplugin5.ReadResource.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          object.currentState = null
          if (options.bytes === String) object['private'] = ''
          else {
            object['private'] = []
            if (options.bytes !== Array) object['private'] = $util.newBuffer(object['private'])
          }
          object.providerMeta = null
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.currentState != null && message.hasOwnProperty('currentState'))
          object.currentState = $root.tfplugin5.DynamicValue.toObject(message.currentState, options)
        if (message['private'] != null && message.hasOwnProperty('private'))
          object['private'] =
            options.bytes === String
              ? $util.base64.encode(message['private'], 0, message['private'].length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message['private'])
              : message['private']
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta'))
          object.providerMeta = $root.tfplugin5.DynamicValue.toObject(message.providerMeta, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.ReadResource.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    ReadResource.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.ReadResource
       * @interface IResponse
       * @property {tfplugin5.IDynamicValue|null} [newState] Response newState
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       * @property {Uint8Array|null} ["private"] Response private
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.ReadResource
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.ReadResource.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response newState.
       * @member {tfplugin5.IDynamicValue|null|undefined} newState
       * @memberof tfplugin5.ReadResource.Response
       * @instance
       */
      Response.prototype.newState = null

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.ReadResource.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Response private.
       * @member {Uint8Array} private
       * @memberof tfplugin5.ReadResource.Response
       * @instance
       */
      Response.prototype['private'] = $util.newBuffer([])

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ReadResource.Response
       * @static
       * @param {tfplugin5.ReadResource.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.ReadResource.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ReadResource.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ReadResource.Response
       * @static
       * @param {tfplugin5.ReadResource.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.newState != null && Object.hasOwnProperty.call(message, 'newState'))
          $root.tfplugin5.DynamicValue.encode(
            message.newState,
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
          ).ldelim()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            ).ldelim()
        if (message['private'] != null && Object.hasOwnProperty.call(message, 'private'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message['private'])
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ReadResource.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ReadResource.Response
       * @static
       * @param {tfplugin5.ReadResource.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ReadResource.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ReadResource.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ReadResource.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.newState = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 2:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            case 3:
              message['private'] = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ReadResource.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ReadResource.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.ReadResource.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.newState != null && message.hasOwnProperty('newState')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.newState)
          if (error) return 'newState.' + error
        }
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        if (message['private'] != null && message.hasOwnProperty('private'))
          if (
            !(
              (message['private'] && typeof message['private'].length === 'number') ||
              $util.isString(message['private'])
            )
          )
            return 'private: buffer expected'
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ReadResource.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ReadResource.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ReadResource.Response) return object
        var message = new $root.tfplugin5.ReadResource.Response()
        if (object.newState != null) {
          if (typeof object.newState !== 'object')
            throw TypeError('.tfplugin5.ReadResource.Response.newState: object expected')
          message.newState = $root.tfplugin5.DynamicValue.fromObject(object.newState)
        }
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.ReadResource.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.ReadResource.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        if (object['private'] != null)
          if (typeof object['private'] === 'string')
            $util.base64.decode(
              object['private'],
              (message['private'] = $util.newBuffer($util.base64.length(object['private']))),
              0,
            )
          else if (object['private'].length) message['private'] = object['private']
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ReadResource.Response
       * @static
       * @param {tfplugin5.ReadResource.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (options.defaults) {
          object.newState = null
          if (options.bytes === String) object['private'] = ''
          else {
            object['private'] = []
            if (options.bytes !== Array) object['private'] = $util.newBuffer(object['private'])
          }
        }
        if (message.newState != null && message.hasOwnProperty('newState'))
          object.newState = $root.tfplugin5.DynamicValue.toObject(message.newState, options)
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        if (message['private'] != null && message.hasOwnProperty('private'))
          object['private'] =
            options.bytes === String
              ? $util.base64.encode(message['private'], 0, message['private'].length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message['private'])
              : message['private']
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.ReadResource.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return ReadResource
  })()

  tfplugin5.PlanResourceChange = (function () {
    /**
     * Properties of a PlanResourceChange.
     * @memberof tfplugin5
     * @interface IPlanResourceChange
     */

    /**
     * Constructs a new PlanResourceChange.
     * @memberof tfplugin5
     * @classdesc Represents a PlanResourceChange.
     * @implements IPlanResourceChange
     * @constructor
     * @param {tfplugin5.IPlanResourceChange=} [properties] Properties to set
     */
    function PlanResourceChange(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new PlanResourceChange instance using the specified properties.
     * @function create
     * @memberof tfplugin5.PlanResourceChange
     * @static
     * @param {tfplugin5.IPlanResourceChange=} [properties] Properties to set
     * @returns {tfplugin5.PlanResourceChange} PlanResourceChange instance
     */
    PlanResourceChange.create = function create(properties) {
      return new PlanResourceChange(properties)
    }

    /**
     * Encodes the specified PlanResourceChange message. Does not implicitly {@link tfplugin5.PlanResourceChange.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.PlanResourceChange
     * @static
     * @param {tfplugin5.IPlanResourceChange} message PlanResourceChange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanResourceChange.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified PlanResourceChange message, length delimited. Does not implicitly {@link tfplugin5.PlanResourceChange.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.PlanResourceChange
     * @static
     * @param {tfplugin5.IPlanResourceChange} message PlanResourceChange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanResourceChange.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a PlanResourceChange message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.PlanResourceChange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.PlanResourceChange} PlanResourceChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanResourceChange.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.PlanResourceChange()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a PlanResourceChange message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.PlanResourceChange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.PlanResourceChange} PlanResourceChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanResourceChange.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a PlanResourceChange message.
     * @function verify
     * @memberof tfplugin5.PlanResourceChange
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlanResourceChange.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a PlanResourceChange message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.PlanResourceChange
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.PlanResourceChange} PlanResourceChange
     */
    PlanResourceChange.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.PlanResourceChange) return object
      return new $root.tfplugin5.PlanResourceChange()
    }

    /**
     * Creates a plain object from a PlanResourceChange message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.PlanResourceChange
     * @static
     * @param {tfplugin5.PlanResourceChange} message PlanResourceChange
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlanResourceChange.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this PlanResourceChange to JSON.
     * @function toJSON
     * @memberof tfplugin5.PlanResourceChange
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlanResourceChange.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    PlanResourceChange.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.PlanResourceChange
       * @interface IRequest
       * @property {string|null} [typeName] Request typeName
       * @property {tfplugin5.IDynamicValue|null} [priorState] Request priorState
       * @property {tfplugin5.IDynamicValue|null} [proposedNewState] Request proposedNewState
       * @property {tfplugin5.IDynamicValue|null} [config] Request config
       * @property {Uint8Array|null} [priorPrivate] Request priorPrivate
       * @property {tfplugin5.IDynamicValue|null} [providerMeta] Request providerMeta
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.PlanResourceChange
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.PlanResourceChange.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request typeName.
       * @member {string} typeName
       * @memberof tfplugin5.PlanResourceChange.Request
       * @instance
       */
      Request.prototype.typeName = ''

      /**
       * Request priorState.
       * @member {tfplugin5.IDynamicValue|null|undefined} priorState
       * @memberof tfplugin5.PlanResourceChange.Request
       * @instance
       */
      Request.prototype.priorState = null

      /**
       * Request proposedNewState.
       * @member {tfplugin5.IDynamicValue|null|undefined} proposedNewState
       * @memberof tfplugin5.PlanResourceChange.Request
       * @instance
       */
      Request.prototype.proposedNewState = null

      /**
       * Request config.
       * @member {tfplugin5.IDynamicValue|null|undefined} config
       * @memberof tfplugin5.PlanResourceChange.Request
       * @instance
       */
      Request.prototype.config = null

      /**
       * Request priorPrivate.
       * @member {Uint8Array} priorPrivate
       * @memberof tfplugin5.PlanResourceChange.Request
       * @instance
       */
      Request.prototype.priorPrivate = $util.newBuffer([])

      /**
       * Request providerMeta.
       * @member {tfplugin5.IDynamicValue|null|undefined} providerMeta
       * @memberof tfplugin5.PlanResourceChange.Request
       * @instance
       */
      Request.prototype.providerMeta = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.PlanResourceChange.Request
       * @static
       * @param {tfplugin5.PlanResourceChange.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.PlanResourceChange.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.PlanResourceChange.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.PlanResourceChange.Request
       * @static
       * @param {tfplugin5.PlanResourceChange.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.priorState != null && Object.hasOwnProperty.call(message, 'priorState'))
          $root.tfplugin5.DynamicValue.encode(
            message.priorState,
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
          ).ldelim()
        if (message.proposedNewState != null && Object.hasOwnProperty.call(message, 'proposedNewState'))
          $root.tfplugin5.DynamicValue.encode(
            message.proposedNewState,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim()
        if (message.config != null && Object.hasOwnProperty.call(message, 'config'))
          $root.tfplugin5.DynamicValue.encode(message.config, writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim()
        if (message.priorPrivate != null && Object.hasOwnProperty.call(message, 'priorPrivate'))
          writer.uint32(/* id 5, wireType 2 =*/ 42).bytes(message.priorPrivate)
        if (message.providerMeta != null && Object.hasOwnProperty.call(message, 'providerMeta'))
          $root.tfplugin5.DynamicValue.encode(
            message.providerMeta,
            writer.uint32(/* id 6, wireType 2 =*/ 50).fork(),
          ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.PlanResourceChange.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.PlanResourceChange.Request
       * @static
       * @param {tfplugin5.PlanResourceChange.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.PlanResourceChange.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.PlanResourceChange.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.PlanResourceChange.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.priorState = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 3:
              message.proposedNewState = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 4:
              message.config = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 5:
              message.priorPrivate = reader.bytes()
              break
            case 6:
              message.providerMeta = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.PlanResourceChange.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.PlanResourceChange.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.PlanResourceChange.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.priorState != null && message.hasOwnProperty('priorState')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.priorState)
          if (error) return 'priorState.' + error
        }
        if (message.proposedNewState != null && message.hasOwnProperty('proposedNewState')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.proposedNewState)
          if (error) return 'proposedNewState.' + error
        }
        if (message.config != null && message.hasOwnProperty('config')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.config)
          if (error) return 'config.' + error
        }
        if (message.priorPrivate != null && message.hasOwnProperty('priorPrivate'))
          if (
            !(
              (message.priorPrivate && typeof message.priorPrivate.length === 'number') ||
              $util.isString(message.priorPrivate)
            )
          )
            return 'priorPrivate: buffer expected'
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.providerMeta)
          if (error) return 'providerMeta.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.PlanResourceChange.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.PlanResourceChange.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.PlanResourceChange.Request) return object
        var message = new $root.tfplugin5.PlanResourceChange.Request()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.priorState != null) {
          if (typeof object.priorState !== 'object')
            throw TypeError('.tfplugin5.PlanResourceChange.Request.priorState: object expected')
          message.priorState = $root.tfplugin5.DynamicValue.fromObject(object.priorState)
        }
        if (object.proposedNewState != null) {
          if (typeof object.proposedNewState !== 'object')
            throw TypeError('.tfplugin5.PlanResourceChange.Request.proposedNewState: object expected')
          message.proposedNewState = $root.tfplugin5.DynamicValue.fromObject(object.proposedNewState)
        }
        if (object.config != null) {
          if (typeof object.config !== 'object')
            throw TypeError('.tfplugin5.PlanResourceChange.Request.config: object expected')
          message.config = $root.tfplugin5.DynamicValue.fromObject(object.config)
        }
        if (object.priorPrivate != null)
          if (typeof object.priorPrivate === 'string')
            $util.base64.decode(
              object.priorPrivate,
              (message.priorPrivate = $util.newBuffer($util.base64.length(object.priorPrivate))),
              0,
            )
          else if (object.priorPrivate.length) message.priorPrivate = object.priorPrivate
        if (object.providerMeta != null) {
          if (typeof object.providerMeta !== 'object')
            throw TypeError('.tfplugin5.PlanResourceChange.Request.providerMeta: object expected')
          message.providerMeta = $root.tfplugin5.DynamicValue.fromObject(object.providerMeta)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.PlanResourceChange.Request
       * @static
       * @param {tfplugin5.PlanResourceChange.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          object.priorState = null
          object.proposedNewState = null
          object.config = null
          if (options.bytes === String) object.priorPrivate = ''
          else {
            object.priorPrivate = []
            if (options.bytes !== Array) object.priorPrivate = $util.newBuffer(object.priorPrivate)
          }
          object.providerMeta = null
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.priorState != null && message.hasOwnProperty('priorState'))
          object.priorState = $root.tfplugin5.DynamicValue.toObject(message.priorState, options)
        if (message.proposedNewState != null && message.hasOwnProperty('proposedNewState'))
          object.proposedNewState = $root.tfplugin5.DynamicValue.toObject(message.proposedNewState, options)
        if (message.config != null && message.hasOwnProperty('config'))
          object.config = $root.tfplugin5.DynamicValue.toObject(message.config, options)
        if (message.priorPrivate != null && message.hasOwnProperty('priorPrivate'))
          object.priorPrivate =
            options.bytes === String
              ? $util.base64.encode(message.priorPrivate, 0, message.priorPrivate.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.priorPrivate)
              : message.priorPrivate
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta'))
          object.providerMeta = $root.tfplugin5.DynamicValue.toObject(message.providerMeta, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.PlanResourceChange.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    PlanResourceChange.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.PlanResourceChange
       * @interface IResponse
       * @property {tfplugin5.IDynamicValue|null} [plannedState] Response plannedState
       * @property {Array.<tfplugin5.IAttributePath>|null} [requiresReplace] Response requiresReplace
       * @property {Uint8Array|null} [plannedPrivate] Response plannedPrivate
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       * @property {boolean|null} [legacyTypeSystem] Response legacyTypeSystem
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.PlanResourceChange
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.PlanResourceChange.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.requiresReplace = []
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response plannedState.
       * @member {tfplugin5.IDynamicValue|null|undefined} plannedState
       * @memberof tfplugin5.PlanResourceChange.Response
       * @instance
       */
      Response.prototype.plannedState = null

      /**
       * Response requiresReplace.
       * @member {Array.<tfplugin5.IAttributePath>} requiresReplace
       * @memberof tfplugin5.PlanResourceChange.Response
       * @instance
       */
      Response.prototype.requiresReplace = $util.emptyArray

      /**
       * Response plannedPrivate.
       * @member {Uint8Array} plannedPrivate
       * @memberof tfplugin5.PlanResourceChange.Response
       * @instance
       */
      Response.prototype.plannedPrivate = $util.newBuffer([])

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.PlanResourceChange.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Response legacyTypeSystem.
       * @member {boolean} legacyTypeSystem
       * @memberof tfplugin5.PlanResourceChange.Response
       * @instance
       */
      Response.prototype.legacyTypeSystem = false

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.PlanResourceChange.Response
       * @static
       * @param {tfplugin5.PlanResourceChange.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.PlanResourceChange.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.PlanResourceChange.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.PlanResourceChange.Response
       * @static
       * @param {tfplugin5.PlanResourceChange.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.plannedState != null && Object.hasOwnProperty.call(message, 'plannedState'))
          $root.tfplugin5.DynamicValue.encode(
            message.plannedState,
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
          ).ldelim()
        if (message.requiresReplace != null && message.requiresReplace.length)
          for (var i = 0; i < message.requiresReplace.length; ++i)
            $root.tfplugin5.AttributePath.encode(
              message.requiresReplace[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            ).ldelim()
        if (message.plannedPrivate != null && Object.hasOwnProperty.call(message, 'plannedPrivate'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.plannedPrivate)
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
            ).ldelim()
        if (message.legacyTypeSystem != null && Object.hasOwnProperty.call(message, 'legacyTypeSystem'))
          writer.uint32(/* id 5, wireType 0 =*/ 40).bool(message.legacyTypeSystem)
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.PlanResourceChange.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.PlanResourceChange.Response
       * @static
       * @param {tfplugin5.PlanResourceChange.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.PlanResourceChange.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.PlanResourceChange.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.PlanResourceChange.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.plannedState = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 2:
              if (!(message.requiresReplace && message.requiresReplace.length)) message.requiresReplace = []
              message.requiresReplace.push($root.tfplugin5.AttributePath.decode(reader, reader.uint32()))
              break
            case 3:
              message.plannedPrivate = reader.bytes()
              break
            case 4:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            case 5:
              message.legacyTypeSystem = reader.bool()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.PlanResourceChange.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.PlanResourceChange.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.PlanResourceChange.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.plannedState != null && message.hasOwnProperty('plannedState')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.plannedState)
          if (error) return 'plannedState.' + error
        }
        if (message.requiresReplace != null && message.hasOwnProperty('requiresReplace')) {
          if (!Array.isArray(message.requiresReplace)) return 'requiresReplace: array expected'
          for (var i = 0; i < message.requiresReplace.length; ++i) {
            var error = $root.tfplugin5.AttributePath.verify(message.requiresReplace[i])
            if (error) return 'requiresReplace.' + error
          }
        }
        if (message.plannedPrivate != null && message.hasOwnProperty('plannedPrivate'))
          if (
            !(
              (message.plannedPrivate && typeof message.plannedPrivate.length === 'number') ||
              $util.isString(message.plannedPrivate)
            )
          )
            return 'plannedPrivate: buffer expected'
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        if (message.legacyTypeSystem != null && message.hasOwnProperty('legacyTypeSystem'))
          if (typeof message.legacyTypeSystem !== 'boolean') return 'legacyTypeSystem: boolean expected'
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.PlanResourceChange.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.PlanResourceChange.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.PlanResourceChange.Response) return object
        var message = new $root.tfplugin5.PlanResourceChange.Response()
        if (object.plannedState != null) {
          if (typeof object.plannedState !== 'object')
            throw TypeError('.tfplugin5.PlanResourceChange.Response.plannedState: object expected')
          message.plannedState = $root.tfplugin5.DynamicValue.fromObject(object.plannedState)
        }
        if (object.requiresReplace) {
          if (!Array.isArray(object.requiresReplace))
            throw TypeError('.tfplugin5.PlanResourceChange.Response.requiresReplace: array expected')
          message.requiresReplace = []
          for (var i = 0; i < object.requiresReplace.length; ++i) {
            if (typeof object.requiresReplace[i] !== 'object')
              throw TypeError('.tfplugin5.PlanResourceChange.Response.requiresReplace: object expected')
            message.requiresReplace[i] = $root.tfplugin5.AttributePath.fromObject(object.requiresReplace[i])
          }
        }
        if (object.plannedPrivate != null)
          if (typeof object.plannedPrivate === 'string')
            $util.base64.decode(
              object.plannedPrivate,
              (message.plannedPrivate = $util.newBuffer($util.base64.length(object.plannedPrivate))),
              0,
            )
          else if (object.plannedPrivate.length) message.plannedPrivate = object.plannedPrivate
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.PlanResourceChange.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.PlanResourceChange.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        if (object.legacyTypeSystem != null) message.legacyTypeSystem = Boolean(object.legacyTypeSystem)
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.PlanResourceChange.Response
       * @static
       * @param {tfplugin5.PlanResourceChange.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) {
          object.requiresReplace = []
          object.diagnostics = []
        }
        if (options.defaults) {
          object.plannedState = null
          if (options.bytes === String) object.plannedPrivate = ''
          else {
            object.plannedPrivate = []
            if (options.bytes !== Array) object.plannedPrivate = $util.newBuffer(object.plannedPrivate)
          }
          object.legacyTypeSystem = false
        }
        if (message.plannedState != null && message.hasOwnProperty('plannedState'))
          object.plannedState = $root.tfplugin5.DynamicValue.toObject(message.plannedState, options)
        if (message.requiresReplace && message.requiresReplace.length) {
          object.requiresReplace = []
          for (var j = 0; j < message.requiresReplace.length; ++j)
            object.requiresReplace[j] = $root.tfplugin5.AttributePath.toObject(message.requiresReplace[j], options)
        }
        if (message.plannedPrivate != null && message.hasOwnProperty('plannedPrivate'))
          object.plannedPrivate =
            options.bytes === String
              ? $util.base64.encode(message.plannedPrivate, 0, message.plannedPrivate.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.plannedPrivate)
              : message.plannedPrivate
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        if (message.legacyTypeSystem != null && message.hasOwnProperty('legacyTypeSystem'))
          object.legacyTypeSystem = message.legacyTypeSystem
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.PlanResourceChange.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return PlanResourceChange
  })()

  tfplugin5.ApplyResourceChange = (function () {
    /**
     * Properties of an ApplyResourceChange.
     * @memberof tfplugin5
     * @interface IApplyResourceChange
     */

    /**
     * Constructs a new ApplyResourceChange.
     * @memberof tfplugin5
     * @classdesc Represents an ApplyResourceChange.
     * @implements IApplyResourceChange
     * @constructor
     * @param {tfplugin5.IApplyResourceChange=} [properties] Properties to set
     */
    function ApplyResourceChange(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new ApplyResourceChange instance using the specified properties.
     * @function create
     * @memberof tfplugin5.ApplyResourceChange
     * @static
     * @param {tfplugin5.IApplyResourceChange=} [properties] Properties to set
     * @returns {tfplugin5.ApplyResourceChange} ApplyResourceChange instance
     */
    ApplyResourceChange.create = function create(properties) {
      return new ApplyResourceChange(properties)
    }

    /**
     * Encodes the specified ApplyResourceChange message. Does not implicitly {@link tfplugin5.ApplyResourceChange.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.ApplyResourceChange
     * @static
     * @param {tfplugin5.IApplyResourceChange} message ApplyResourceChange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyResourceChange.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified ApplyResourceChange message, length delimited. Does not implicitly {@link tfplugin5.ApplyResourceChange.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.ApplyResourceChange
     * @static
     * @param {tfplugin5.IApplyResourceChange} message ApplyResourceChange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyResourceChange.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an ApplyResourceChange message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.ApplyResourceChange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.ApplyResourceChange} ApplyResourceChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyResourceChange.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.ApplyResourceChange()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an ApplyResourceChange message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.ApplyResourceChange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.ApplyResourceChange} ApplyResourceChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyResourceChange.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an ApplyResourceChange message.
     * @function verify
     * @memberof tfplugin5.ApplyResourceChange
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ApplyResourceChange.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates an ApplyResourceChange message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.ApplyResourceChange
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.ApplyResourceChange} ApplyResourceChange
     */
    ApplyResourceChange.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.ApplyResourceChange) return object
      return new $root.tfplugin5.ApplyResourceChange()
    }

    /**
     * Creates a plain object from an ApplyResourceChange message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.ApplyResourceChange
     * @static
     * @param {tfplugin5.ApplyResourceChange} message ApplyResourceChange
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ApplyResourceChange.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this ApplyResourceChange to JSON.
     * @function toJSON
     * @memberof tfplugin5.ApplyResourceChange
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ApplyResourceChange.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    ApplyResourceChange.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.ApplyResourceChange
       * @interface IRequest
       * @property {string|null} [typeName] Request typeName
       * @property {tfplugin5.IDynamicValue|null} [priorState] Request priorState
       * @property {tfplugin5.IDynamicValue|null} [plannedState] Request plannedState
       * @property {tfplugin5.IDynamicValue|null} [config] Request config
       * @property {Uint8Array|null} [plannedPrivate] Request plannedPrivate
       * @property {tfplugin5.IDynamicValue|null} [providerMeta] Request providerMeta
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.ApplyResourceChange
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.ApplyResourceChange.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request typeName.
       * @member {string} typeName
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @instance
       */
      Request.prototype.typeName = ''

      /**
       * Request priorState.
       * @member {tfplugin5.IDynamicValue|null|undefined} priorState
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @instance
       */
      Request.prototype.priorState = null

      /**
       * Request plannedState.
       * @member {tfplugin5.IDynamicValue|null|undefined} plannedState
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @instance
       */
      Request.prototype.plannedState = null

      /**
       * Request config.
       * @member {tfplugin5.IDynamicValue|null|undefined} config
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @instance
       */
      Request.prototype.config = null

      /**
       * Request plannedPrivate.
       * @member {Uint8Array} plannedPrivate
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @instance
       */
      Request.prototype.plannedPrivate = $util.newBuffer([])

      /**
       * Request providerMeta.
       * @member {tfplugin5.IDynamicValue|null|undefined} providerMeta
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @instance
       */
      Request.prototype.providerMeta = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @static
       * @param {tfplugin5.ApplyResourceChange.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.ApplyResourceChange.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ApplyResourceChange.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @static
       * @param {tfplugin5.ApplyResourceChange.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.priorState != null && Object.hasOwnProperty.call(message, 'priorState'))
          $root.tfplugin5.DynamicValue.encode(
            message.priorState,
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
          ).ldelim()
        if (message.plannedState != null && Object.hasOwnProperty.call(message, 'plannedState'))
          $root.tfplugin5.DynamicValue.encode(
            message.plannedState,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim()
        if (message.config != null && Object.hasOwnProperty.call(message, 'config'))
          $root.tfplugin5.DynamicValue.encode(message.config, writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim()
        if (message.plannedPrivate != null && Object.hasOwnProperty.call(message, 'plannedPrivate'))
          writer.uint32(/* id 5, wireType 2 =*/ 42).bytes(message.plannedPrivate)
        if (message.providerMeta != null && Object.hasOwnProperty.call(message, 'providerMeta'))
          $root.tfplugin5.DynamicValue.encode(
            message.providerMeta,
            writer.uint32(/* id 6, wireType 2 =*/ 50).fork(),
          ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ApplyResourceChange.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @static
       * @param {tfplugin5.ApplyResourceChange.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ApplyResourceChange.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ApplyResourceChange.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.priorState = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 3:
              message.plannedState = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 4:
              message.config = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 5:
              message.plannedPrivate = reader.bytes()
              break
            case 6:
              message.providerMeta = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ApplyResourceChange.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.priorState != null && message.hasOwnProperty('priorState')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.priorState)
          if (error) return 'priorState.' + error
        }
        if (message.plannedState != null && message.hasOwnProperty('plannedState')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.plannedState)
          if (error) return 'plannedState.' + error
        }
        if (message.config != null && message.hasOwnProperty('config')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.config)
          if (error) return 'config.' + error
        }
        if (message.plannedPrivate != null && message.hasOwnProperty('plannedPrivate'))
          if (
            !(
              (message.plannedPrivate && typeof message.plannedPrivate.length === 'number') ||
              $util.isString(message.plannedPrivate)
            )
          )
            return 'plannedPrivate: buffer expected'
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.providerMeta)
          if (error) return 'providerMeta.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ApplyResourceChange.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ApplyResourceChange.Request) return object
        var message = new $root.tfplugin5.ApplyResourceChange.Request()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.priorState != null) {
          if (typeof object.priorState !== 'object')
            throw TypeError('.tfplugin5.ApplyResourceChange.Request.priorState: object expected')
          message.priorState = $root.tfplugin5.DynamicValue.fromObject(object.priorState)
        }
        if (object.plannedState != null) {
          if (typeof object.plannedState !== 'object')
            throw TypeError('.tfplugin5.ApplyResourceChange.Request.plannedState: object expected')
          message.plannedState = $root.tfplugin5.DynamicValue.fromObject(object.plannedState)
        }
        if (object.config != null) {
          if (typeof object.config !== 'object')
            throw TypeError('.tfplugin5.ApplyResourceChange.Request.config: object expected')
          message.config = $root.tfplugin5.DynamicValue.fromObject(object.config)
        }
        if (object.plannedPrivate != null)
          if (typeof object.plannedPrivate === 'string')
            $util.base64.decode(
              object.plannedPrivate,
              (message.plannedPrivate = $util.newBuffer($util.base64.length(object.plannedPrivate))),
              0,
            )
          else if (object.plannedPrivate.length) message.plannedPrivate = object.plannedPrivate
        if (object.providerMeta != null) {
          if (typeof object.providerMeta !== 'object')
            throw TypeError('.tfplugin5.ApplyResourceChange.Request.providerMeta: object expected')
          message.providerMeta = $root.tfplugin5.DynamicValue.fromObject(object.providerMeta)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @static
       * @param {tfplugin5.ApplyResourceChange.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          object.priorState = null
          object.plannedState = null
          object.config = null
          if (options.bytes === String) object.plannedPrivate = ''
          else {
            object.plannedPrivate = []
            if (options.bytes !== Array) object.plannedPrivate = $util.newBuffer(object.plannedPrivate)
          }
          object.providerMeta = null
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.priorState != null && message.hasOwnProperty('priorState'))
          object.priorState = $root.tfplugin5.DynamicValue.toObject(message.priorState, options)
        if (message.plannedState != null && message.hasOwnProperty('plannedState'))
          object.plannedState = $root.tfplugin5.DynamicValue.toObject(message.plannedState, options)
        if (message.config != null && message.hasOwnProperty('config'))
          object.config = $root.tfplugin5.DynamicValue.toObject(message.config, options)
        if (message.plannedPrivate != null && message.hasOwnProperty('plannedPrivate'))
          object.plannedPrivate =
            options.bytes === String
              ? $util.base64.encode(message.plannedPrivate, 0, message.plannedPrivate.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.plannedPrivate)
              : message.plannedPrivate
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta'))
          object.providerMeta = $root.tfplugin5.DynamicValue.toObject(message.providerMeta, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.ApplyResourceChange.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    ApplyResourceChange.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.ApplyResourceChange
       * @interface IResponse
       * @property {tfplugin5.IDynamicValue|null} [newState] Response newState
       * @property {Uint8Array|null} ["private"] Response private
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       * @property {boolean|null} [legacyTypeSystem] Response legacyTypeSystem
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.ApplyResourceChange
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.ApplyResourceChange.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response newState.
       * @member {tfplugin5.IDynamicValue|null|undefined} newState
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @instance
       */
      Response.prototype.newState = null

      /**
       * Response private.
       * @member {Uint8Array} private
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @instance
       */
      Response.prototype['private'] = $util.newBuffer([])

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Response legacyTypeSystem.
       * @member {boolean} legacyTypeSystem
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @instance
       */
      Response.prototype.legacyTypeSystem = false

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @static
       * @param {tfplugin5.ApplyResourceChange.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.ApplyResourceChange.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ApplyResourceChange.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @static
       * @param {tfplugin5.ApplyResourceChange.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.newState != null && Object.hasOwnProperty.call(message, 'newState'))
          $root.tfplugin5.DynamicValue.encode(
            message.newState,
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
          ).ldelim()
        if (message['private'] != null && Object.hasOwnProperty.call(message, 'private'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message['private'])
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
            ).ldelim()
        if (message.legacyTypeSystem != null && Object.hasOwnProperty.call(message, 'legacyTypeSystem'))
          writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.legacyTypeSystem)
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ApplyResourceChange.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @static
       * @param {tfplugin5.ApplyResourceChange.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ApplyResourceChange.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ApplyResourceChange.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.newState = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 2:
              message['private'] = reader.bytes()
              break
            case 3:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            case 4:
              message.legacyTypeSystem = reader.bool()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ApplyResourceChange.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.newState != null && message.hasOwnProperty('newState')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.newState)
          if (error) return 'newState.' + error
        }
        if (message['private'] != null && message.hasOwnProperty('private'))
          if (
            !(
              (message['private'] && typeof message['private'].length === 'number') ||
              $util.isString(message['private'])
            )
          )
            return 'private: buffer expected'
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        if (message.legacyTypeSystem != null && message.hasOwnProperty('legacyTypeSystem'))
          if (typeof message.legacyTypeSystem !== 'boolean') return 'legacyTypeSystem: boolean expected'
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ApplyResourceChange.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ApplyResourceChange.Response) return object
        var message = new $root.tfplugin5.ApplyResourceChange.Response()
        if (object.newState != null) {
          if (typeof object.newState !== 'object')
            throw TypeError('.tfplugin5.ApplyResourceChange.Response.newState: object expected')
          message.newState = $root.tfplugin5.DynamicValue.fromObject(object.newState)
        }
        if (object['private'] != null)
          if (typeof object['private'] === 'string')
            $util.base64.decode(
              object['private'],
              (message['private'] = $util.newBuffer($util.base64.length(object['private']))),
              0,
            )
          else if (object['private'].length) message['private'] = object['private']
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.ApplyResourceChange.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.ApplyResourceChange.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        if (object.legacyTypeSystem != null) message.legacyTypeSystem = Boolean(object.legacyTypeSystem)
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @static
       * @param {tfplugin5.ApplyResourceChange.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (options.defaults) {
          object.newState = null
          if (options.bytes === String) object['private'] = ''
          else {
            object['private'] = []
            if (options.bytes !== Array) object['private'] = $util.newBuffer(object['private'])
          }
          object.legacyTypeSystem = false
        }
        if (message.newState != null && message.hasOwnProperty('newState'))
          object.newState = $root.tfplugin5.DynamicValue.toObject(message.newState, options)
        if (message['private'] != null && message.hasOwnProperty('private'))
          object['private'] =
            options.bytes === String
              ? $util.base64.encode(message['private'], 0, message['private'].length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message['private'])
              : message['private']
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        if (message.legacyTypeSystem != null && message.hasOwnProperty('legacyTypeSystem'))
          object.legacyTypeSystem = message.legacyTypeSystem
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.ApplyResourceChange.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return ApplyResourceChange
  })()

  tfplugin5.ImportResourceState = (function () {
    /**
     * Properties of an ImportResourceState.
     * @memberof tfplugin5
     * @interface IImportResourceState
     */

    /**
     * Constructs a new ImportResourceState.
     * @memberof tfplugin5
     * @classdesc Represents an ImportResourceState.
     * @implements IImportResourceState
     * @constructor
     * @param {tfplugin5.IImportResourceState=} [properties] Properties to set
     */
    function ImportResourceState(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new ImportResourceState instance using the specified properties.
     * @function create
     * @memberof tfplugin5.ImportResourceState
     * @static
     * @param {tfplugin5.IImportResourceState=} [properties] Properties to set
     * @returns {tfplugin5.ImportResourceState} ImportResourceState instance
     */
    ImportResourceState.create = function create(properties) {
      return new ImportResourceState(properties)
    }

    /**
     * Encodes the specified ImportResourceState message. Does not implicitly {@link tfplugin5.ImportResourceState.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.ImportResourceState
     * @static
     * @param {tfplugin5.IImportResourceState} message ImportResourceState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImportResourceState.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified ImportResourceState message, length delimited. Does not implicitly {@link tfplugin5.ImportResourceState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.ImportResourceState
     * @static
     * @param {tfplugin5.IImportResourceState} message ImportResourceState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImportResourceState.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an ImportResourceState message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.ImportResourceState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.ImportResourceState} ImportResourceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImportResourceState.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.ImportResourceState()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an ImportResourceState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.ImportResourceState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.ImportResourceState} ImportResourceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImportResourceState.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an ImportResourceState message.
     * @function verify
     * @memberof tfplugin5.ImportResourceState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ImportResourceState.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates an ImportResourceState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.ImportResourceState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.ImportResourceState} ImportResourceState
     */
    ImportResourceState.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.ImportResourceState) return object
      return new $root.tfplugin5.ImportResourceState()
    }

    /**
     * Creates a plain object from an ImportResourceState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.ImportResourceState
     * @static
     * @param {tfplugin5.ImportResourceState} message ImportResourceState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ImportResourceState.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this ImportResourceState to JSON.
     * @function toJSON
     * @memberof tfplugin5.ImportResourceState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ImportResourceState.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    ImportResourceState.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.ImportResourceState
       * @interface IRequest
       * @property {string|null} [typeName] Request typeName
       * @property {string|null} [id] Request id
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.ImportResourceState
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.ImportResourceState.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request typeName.
       * @member {string} typeName
       * @memberof tfplugin5.ImportResourceState.Request
       * @instance
       */
      Request.prototype.typeName = ''

      /**
       * Request id.
       * @member {string} id
       * @memberof tfplugin5.ImportResourceState.Request
       * @instance
       */
      Request.prototype.id = ''

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ImportResourceState.Request
       * @static
       * @param {tfplugin5.ImportResourceState.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.ImportResourceState.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ImportResourceState.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ImportResourceState.Request
       * @static
       * @param {tfplugin5.ImportResourceState.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.id)
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ImportResourceState.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ImportResourceState.Request
       * @static
       * @param {tfplugin5.ImportResourceState.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ImportResourceState.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ImportResourceState.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ImportResourceState.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.id = reader.string()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ImportResourceState.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ImportResourceState.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.ImportResourceState.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.id != null && message.hasOwnProperty('id'))
          if (!$util.isString(message.id)) return 'id: string expected'
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ImportResourceState.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ImportResourceState.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ImportResourceState.Request) return object
        var message = new $root.tfplugin5.ImportResourceState.Request()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.id != null) message.id = String(object.id)
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ImportResourceState.Request
       * @static
       * @param {tfplugin5.ImportResourceState.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          object.id = ''
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.id != null && message.hasOwnProperty('id')) object.id = message.id
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.ImportResourceState.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    ImportResourceState.ImportedResource = (function () {
      /**
       * Properties of an ImportedResource.
       * @memberof tfplugin5.ImportResourceState
       * @interface IImportedResource
       * @property {string|null} [typeName] ImportedResource typeName
       * @property {tfplugin5.IDynamicValue|null} [state] ImportedResource state
       * @property {Uint8Array|null} ["private"] ImportedResource private
       */

      /**
       * Constructs a new ImportedResource.
       * @memberof tfplugin5.ImportResourceState
       * @classdesc Represents an ImportedResource.
       * @implements IImportedResource
       * @constructor
       * @param {tfplugin5.ImportResourceState.IImportedResource=} [properties] Properties to set
       */
      function ImportedResource(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * ImportedResource typeName.
       * @member {string} typeName
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @instance
       */
      ImportedResource.prototype.typeName = ''

      /**
       * ImportedResource state.
       * @member {tfplugin5.IDynamicValue|null|undefined} state
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @instance
       */
      ImportedResource.prototype.state = null

      /**
       * ImportedResource private.
       * @member {Uint8Array} private
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @instance
       */
      ImportedResource.prototype['private'] = $util.newBuffer([])

      /**
       * Creates a new ImportedResource instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @static
       * @param {tfplugin5.ImportResourceState.IImportedResource=} [properties] Properties to set
       * @returns {tfplugin5.ImportResourceState.ImportedResource} ImportedResource instance
       */
      ImportedResource.create = function create(properties) {
        return new ImportedResource(properties)
      }

      /**
       * Encodes the specified ImportedResource message. Does not implicitly {@link tfplugin5.ImportResourceState.ImportedResource.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @static
       * @param {tfplugin5.ImportResourceState.IImportedResource} message ImportedResource message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ImportedResource.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.state != null && Object.hasOwnProperty.call(message, 'state'))
          $root.tfplugin5.DynamicValue.encode(message.state, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim()
        if (message['private'] != null && Object.hasOwnProperty.call(message, 'private'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message['private'])
        return writer
      }

      /**
       * Encodes the specified ImportedResource message, length delimited. Does not implicitly {@link tfplugin5.ImportResourceState.ImportedResource.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @static
       * @param {tfplugin5.ImportResourceState.IImportedResource} message ImportedResource message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ImportedResource.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes an ImportedResource message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ImportResourceState.ImportedResource} ImportedResource
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ImportedResource.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ImportResourceState.ImportedResource()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.state = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 3:
              message['private'] = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes an ImportedResource message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ImportResourceState.ImportedResource} ImportedResource
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ImportedResource.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies an ImportedResource message.
       * @function verify
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ImportedResource.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.state != null && message.hasOwnProperty('state')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.state)
          if (error) return 'state.' + error
        }
        if (message['private'] != null && message.hasOwnProperty('private'))
          if (
            !(
              (message['private'] && typeof message['private'].length === 'number') ||
              $util.isString(message['private'])
            )
          )
            return 'private: buffer expected'
        return null
      }

      /**
       * Creates an ImportedResource message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ImportResourceState.ImportedResource} ImportedResource
       */
      ImportedResource.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ImportResourceState.ImportedResource) return object
        var message = new $root.tfplugin5.ImportResourceState.ImportedResource()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.state != null) {
          if (typeof object.state !== 'object')
            throw TypeError('.tfplugin5.ImportResourceState.ImportedResource.state: object expected')
          message.state = $root.tfplugin5.DynamicValue.fromObject(object.state)
        }
        if (object['private'] != null)
          if (typeof object['private'] === 'string')
            $util.base64.decode(
              object['private'],
              (message['private'] = $util.newBuffer($util.base64.length(object['private']))),
              0,
            )
          else if (object['private'].length) message['private'] = object['private']
        return message
      }

      /**
       * Creates a plain object from an ImportedResource message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @static
       * @param {tfplugin5.ImportResourceState.ImportedResource} message ImportedResource
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ImportedResource.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          object.state = null
          if (options.bytes === String) object['private'] = ''
          else {
            object['private'] = []
            if (options.bytes !== Array) object['private'] = $util.newBuffer(object['private'])
          }
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.state != null && message.hasOwnProperty('state'))
          object.state = $root.tfplugin5.DynamicValue.toObject(message.state, options)
        if (message['private'] != null && message.hasOwnProperty('private'))
          object['private'] =
            options.bytes === String
              ? $util.base64.encode(message['private'], 0, message['private'].length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message['private'])
              : message['private']
        return object
      }

      /**
       * Converts this ImportedResource to JSON.
       * @function toJSON
       * @memberof tfplugin5.ImportResourceState.ImportedResource
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ImportedResource.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return ImportedResource
    })()

    ImportResourceState.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.ImportResourceState
       * @interface IResponse
       * @property {Array.<tfplugin5.ImportResourceState.IImportedResource>|null} [importedResources] Response importedResources
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.ImportResourceState
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.ImportResourceState.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.importedResources = []
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response importedResources.
       * @member {Array.<tfplugin5.ImportResourceState.IImportedResource>} importedResources
       * @memberof tfplugin5.ImportResourceState.Response
       * @instance
       */
      Response.prototype.importedResources = $util.emptyArray

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.ImportResourceState.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ImportResourceState.Response
       * @static
       * @param {tfplugin5.ImportResourceState.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.ImportResourceState.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ImportResourceState.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ImportResourceState.Response
       * @static
       * @param {tfplugin5.ImportResourceState.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.importedResources != null && message.importedResources.length)
          for (var i = 0; i < message.importedResources.length; ++i)
            $root.tfplugin5.ImportResourceState.ImportedResource.encode(
              message.importedResources[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
            ).ldelim()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ImportResourceState.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ImportResourceState.Response
       * @static
       * @param {tfplugin5.ImportResourceState.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ImportResourceState.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ImportResourceState.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ImportResourceState.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              if (!(message.importedResources && message.importedResources.length)) message.importedResources = []
              message.importedResources.push(
                $root.tfplugin5.ImportResourceState.ImportedResource.decode(reader, reader.uint32()),
              )
              break
            case 2:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ImportResourceState.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ImportResourceState.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.ImportResourceState.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.importedResources != null && message.hasOwnProperty('importedResources')) {
          if (!Array.isArray(message.importedResources)) return 'importedResources: array expected'
          for (var i = 0; i < message.importedResources.length; ++i) {
            var error = $root.tfplugin5.ImportResourceState.ImportedResource.verify(message.importedResources[i])
            if (error) return 'importedResources.' + error
          }
        }
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ImportResourceState.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ImportResourceState.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ImportResourceState.Response) return object
        var message = new $root.tfplugin5.ImportResourceState.Response()
        if (object.importedResources) {
          if (!Array.isArray(object.importedResources))
            throw TypeError('.tfplugin5.ImportResourceState.Response.importedResources: array expected')
          message.importedResources = []
          for (var i = 0; i < object.importedResources.length; ++i) {
            if (typeof object.importedResources[i] !== 'object')
              throw TypeError('.tfplugin5.ImportResourceState.Response.importedResources: object expected')
            message.importedResources[i] = $root.tfplugin5.ImportResourceState.ImportedResource.fromObject(
              object.importedResources[i],
            )
          }
        }
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.ImportResourceState.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.ImportResourceState.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ImportResourceState.Response
       * @static
       * @param {tfplugin5.ImportResourceState.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) {
          object.importedResources = []
          object.diagnostics = []
        }
        if (message.importedResources && message.importedResources.length) {
          object.importedResources = []
          for (var j = 0; j < message.importedResources.length; ++j)
            object.importedResources[j] = $root.tfplugin5.ImportResourceState.ImportedResource.toObject(
              message.importedResources[j],
              options,
            )
        }
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.ImportResourceState.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return ImportResourceState
  })()

  tfplugin5.ReadDataSource = (function () {
    /**
     * Properties of a ReadDataSource.
     * @memberof tfplugin5
     * @interface IReadDataSource
     */

    /**
     * Constructs a new ReadDataSource.
     * @memberof tfplugin5
     * @classdesc Represents a ReadDataSource.
     * @implements IReadDataSource
     * @constructor
     * @param {tfplugin5.IReadDataSource=} [properties] Properties to set
     */
    function ReadDataSource(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new ReadDataSource instance using the specified properties.
     * @function create
     * @memberof tfplugin5.ReadDataSource
     * @static
     * @param {tfplugin5.IReadDataSource=} [properties] Properties to set
     * @returns {tfplugin5.ReadDataSource} ReadDataSource instance
     */
    ReadDataSource.create = function create(properties) {
      return new ReadDataSource(properties)
    }

    /**
     * Encodes the specified ReadDataSource message. Does not implicitly {@link tfplugin5.ReadDataSource.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.ReadDataSource
     * @static
     * @param {tfplugin5.IReadDataSource} message ReadDataSource message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadDataSource.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified ReadDataSource message, length delimited. Does not implicitly {@link tfplugin5.ReadDataSource.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.ReadDataSource
     * @static
     * @param {tfplugin5.IReadDataSource} message ReadDataSource message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadDataSource.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a ReadDataSource message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.ReadDataSource
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.ReadDataSource} ReadDataSource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadDataSource.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.ReadDataSource()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a ReadDataSource message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.ReadDataSource
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.ReadDataSource} ReadDataSource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadDataSource.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a ReadDataSource message.
     * @function verify
     * @memberof tfplugin5.ReadDataSource
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReadDataSource.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a ReadDataSource message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.ReadDataSource
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.ReadDataSource} ReadDataSource
     */
    ReadDataSource.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.ReadDataSource) return object
      return new $root.tfplugin5.ReadDataSource()
    }

    /**
     * Creates a plain object from a ReadDataSource message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.ReadDataSource
     * @static
     * @param {tfplugin5.ReadDataSource} message ReadDataSource
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReadDataSource.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this ReadDataSource to JSON.
     * @function toJSON
     * @memberof tfplugin5.ReadDataSource
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReadDataSource.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    ReadDataSource.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.ReadDataSource
       * @interface IRequest
       * @property {string|null} [typeName] Request typeName
       * @property {tfplugin5.IDynamicValue|null} [config] Request config
       * @property {tfplugin5.IDynamicValue|null} [providerMeta] Request providerMeta
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.ReadDataSource
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.ReadDataSource.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request typeName.
       * @member {string} typeName
       * @memberof tfplugin5.ReadDataSource.Request
       * @instance
       */
      Request.prototype.typeName = ''

      /**
       * Request config.
       * @member {tfplugin5.IDynamicValue|null|undefined} config
       * @memberof tfplugin5.ReadDataSource.Request
       * @instance
       */
      Request.prototype.config = null

      /**
       * Request providerMeta.
       * @member {tfplugin5.IDynamicValue|null|undefined} providerMeta
       * @memberof tfplugin5.ReadDataSource.Request
       * @instance
       */
      Request.prototype.providerMeta = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ReadDataSource.Request
       * @static
       * @param {tfplugin5.ReadDataSource.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.ReadDataSource.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ReadDataSource.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ReadDataSource.Request
       * @static
       * @param {tfplugin5.ReadDataSource.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.typeName != null && Object.hasOwnProperty.call(message, 'typeName'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName)
        if (message.config != null && Object.hasOwnProperty.call(message, 'config'))
          $root.tfplugin5.DynamicValue.encode(message.config, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim()
        if (message.providerMeta != null && Object.hasOwnProperty.call(message, 'providerMeta'))
          $root.tfplugin5.DynamicValue.encode(
            message.providerMeta,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ReadDataSource.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ReadDataSource.Request
       * @static
       * @param {tfplugin5.ReadDataSource.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ReadDataSource.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ReadDataSource.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ReadDataSource.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.typeName = reader.string()
              break
            case 2:
              message.config = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 3:
              message.providerMeta = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ReadDataSource.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ReadDataSource.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.ReadDataSource.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.typeName != null && message.hasOwnProperty('typeName'))
          if (!$util.isString(message.typeName)) return 'typeName: string expected'
        if (message.config != null && message.hasOwnProperty('config')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.config)
          if (error) return 'config.' + error
        }
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.providerMeta)
          if (error) return 'providerMeta.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ReadDataSource.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ReadDataSource.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ReadDataSource.Request) return object
        var message = new $root.tfplugin5.ReadDataSource.Request()
        if (object.typeName != null) message.typeName = String(object.typeName)
        if (object.config != null) {
          if (typeof object.config !== 'object')
            throw TypeError('.tfplugin5.ReadDataSource.Request.config: object expected')
          message.config = $root.tfplugin5.DynamicValue.fromObject(object.config)
        }
        if (object.providerMeta != null) {
          if (typeof object.providerMeta !== 'object')
            throw TypeError('.tfplugin5.ReadDataSource.Request.providerMeta: object expected')
          message.providerMeta = $root.tfplugin5.DynamicValue.fromObject(object.providerMeta)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ReadDataSource.Request
       * @static
       * @param {tfplugin5.ReadDataSource.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.typeName = ''
          object.config = null
          object.providerMeta = null
        }
        if (message.typeName != null && message.hasOwnProperty('typeName')) object.typeName = message.typeName
        if (message.config != null && message.hasOwnProperty('config'))
          object.config = $root.tfplugin5.DynamicValue.toObject(message.config, options)
        if (message.providerMeta != null && message.hasOwnProperty('providerMeta'))
          object.providerMeta = $root.tfplugin5.DynamicValue.toObject(message.providerMeta, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.ReadDataSource.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    ReadDataSource.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.ReadDataSource
       * @interface IResponse
       * @property {tfplugin5.IDynamicValue|null} [state] Response state
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.ReadDataSource
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.ReadDataSource.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response state.
       * @member {tfplugin5.IDynamicValue|null|undefined} state
       * @memberof tfplugin5.ReadDataSource.Response
       * @instance
       */
      Response.prototype.state = null

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.ReadDataSource.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ReadDataSource.Response
       * @static
       * @param {tfplugin5.ReadDataSource.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.ReadDataSource.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ReadDataSource.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ReadDataSource.Response
       * @static
       * @param {tfplugin5.ReadDataSource.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.state != null && Object.hasOwnProperty.call(message, 'state'))
          $root.tfplugin5.DynamicValue.encode(message.state, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ReadDataSource.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ReadDataSource.Response
       * @static
       * @param {tfplugin5.ReadDataSource.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ReadDataSource.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ReadDataSource.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ReadDataSource.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.state = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 2:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ReadDataSource.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ReadDataSource.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.ReadDataSource.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.state != null && message.hasOwnProperty('state')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.state)
          if (error) return 'state.' + error
        }
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ReadDataSource.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ReadDataSource.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ReadDataSource.Response) return object
        var message = new $root.tfplugin5.ReadDataSource.Response()
        if (object.state != null) {
          if (typeof object.state !== 'object')
            throw TypeError('.tfplugin5.ReadDataSource.Response.state: object expected')
          message.state = $root.tfplugin5.DynamicValue.fromObject(object.state)
        }
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.ReadDataSource.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.ReadDataSource.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ReadDataSource.Response
       * @static
       * @param {tfplugin5.ReadDataSource.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (options.defaults) object.state = null
        if (message.state != null && message.hasOwnProperty('state'))
          object.state = $root.tfplugin5.DynamicValue.toObject(message.state, options)
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.ReadDataSource.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return ReadDataSource
  })()

  tfplugin5.Provisioner = (function () {
    /**
     * Constructs a new Provisioner service.
     * @memberof tfplugin5
     * @classdesc Represents a Provisioner
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Provisioner(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    ;(Provisioner.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Provisioner

    /**
     * Creates new Provisioner service using the specified rpc implementation.
     * @function create
     * @memberof tfplugin5.Provisioner
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Provisioner} RPC service. Useful where requests and/or responses are streamed.
     */
    Provisioner.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
     * Callback as used by {@link tfplugin5.Provisioner#getSchema}.
     * @memberof tfplugin5.Provisioner
     * @typedef GetSchemaCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.GetProvisionerSchema.Response} [response] Response
     */

    /**
     * Calls GetSchema.
     * @function getSchema
     * @memberof tfplugin5.Provisioner
     * @instance
     * @param {tfplugin5.GetProvisionerSchema.IRequest} request Request message or plain object
     * @param {tfplugin5.Provisioner.GetSchemaCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provisioner.prototype.getSchema = function getSchema(request, callback) {
        return this.rpcCall(
          getSchema,
          $root.tfplugin5.GetProvisionerSchema.Request,
          $root.tfplugin5.GetProvisionerSchema.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'GetSchema'},
    )

    /**
     * Calls GetSchema.
     * @function getSchema
     * @memberof tfplugin5.Provisioner
     * @instance
     * @param {tfplugin5.GetProvisionerSchema.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.GetProvisionerSchema.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provisioner#validateProvisionerConfig}.
     * @memberof tfplugin5.Provisioner
     * @typedef ValidateProvisionerConfigCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.ValidateProvisionerConfig.Response} [response] Response
     */

    /**
     * Calls ValidateProvisionerConfig.
     * @function validateProvisionerConfig
     * @memberof tfplugin5.Provisioner
     * @instance
     * @param {tfplugin5.ValidateProvisionerConfig.IRequest} request Request message or plain object
     * @param {tfplugin5.Provisioner.ValidateProvisionerConfigCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provisioner.prototype.validateProvisionerConfig = function validateProvisionerConfig(request, callback) {
        return this.rpcCall(
          validateProvisionerConfig,
          $root.tfplugin5.ValidateProvisionerConfig.Request,
          $root.tfplugin5.ValidateProvisionerConfig.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'ValidateProvisionerConfig'},
    )

    /**
     * Calls ValidateProvisionerConfig.
     * @function validateProvisionerConfig
     * @memberof tfplugin5.Provisioner
     * @instance
     * @param {tfplugin5.ValidateProvisionerConfig.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.ValidateProvisionerConfig.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provisioner#provisionResource}.
     * @memberof tfplugin5.Provisioner
     * @typedef ProvisionResourceCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.ProvisionResource.Response} [response] Response
     */

    /**
     * Calls ProvisionResource.
     * @function provisionResource
     * @memberof tfplugin5.Provisioner
     * @instance
     * @param {tfplugin5.ProvisionResource.IRequest} request Request message or plain object
     * @param {tfplugin5.Provisioner.ProvisionResourceCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provisioner.prototype.provisionResource = function provisionResource(request, callback) {
        return this.rpcCall(
          provisionResource,
          $root.tfplugin5.ProvisionResource.Request,
          $root.tfplugin5.ProvisionResource.Response,
          request,
          callback,
        )
      }),
      'name',
      {value: 'ProvisionResource'},
    )

    /**
     * Calls ProvisionResource.
     * @function provisionResource
     * @memberof tfplugin5.Provisioner
     * @instance
     * @param {tfplugin5.ProvisionResource.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.ProvisionResource.Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link tfplugin5.Provisioner#stop}.
     * @memberof tfplugin5.Provisioner
     * @typedef StopCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {tfplugin5.Stop.Response} [response] Response
     */

    /**
     * Calls Stop.
     * @function stop
     * @memberof tfplugin5.Provisioner
     * @instance
     * @param {tfplugin5.Stop.IRequest} request Request message or plain object
     * @param {tfplugin5.Provisioner.StopCallback} callback Node-style callback called with the error, if any, and Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (Provisioner.prototype.stop = function stop(request, callback) {
        return this.rpcCall(stop, $root.tfplugin5.Stop.Request, $root.tfplugin5.Stop.Response, request, callback)
      }),
      'name',
      {value: 'Stop'},
    )

    /**
     * Calls Stop.
     * @function stop
     * @memberof tfplugin5.Provisioner
     * @instance
     * @param {tfplugin5.Stop.IRequest} request Request message or plain object
     * @returns {Promise<tfplugin5.Stop.Response>} Promise
     * @variation 2
     */

    return Provisioner
  })()

  tfplugin5.GetProvisionerSchema = (function () {
    /**
     * Properties of a GetProvisionerSchema.
     * @memberof tfplugin5
     * @interface IGetProvisionerSchema
     */

    /**
     * Constructs a new GetProvisionerSchema.
     * @memberof tfplugin5
     * @classdesc Represents a GetProvisionerSchema.
     * @implements IGetProvisionerSchema
     * @constructor
     * @param {tfplugin5.IGetProvisionerSchema=} [properties] Properties to set
     */
    function GetProvisionerSchema(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new GetProvisionerSchema instance using the specified properties.
     * @function create
     * @memberof tfplugin5.GetProvisionerSchema
     * @static
     * @param {tfplugin5.IGetProvisionerSchema=} [properties] Properties to set
     * @returns {tfplugin5.GetProvisionerSchema} GetProvisionerSchema instance
     */
    GetProvisionerSchema.create = function create(properties) {
      return new GetProvisionerSchema(properties)
    }

    /**
     * Encodes the specified GetProvisionerSchema message. Does not implicitly {@link tfplugin5.GetProvisionerSchema.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.GetProvisionerSchema
     * @static
     * @param {tfplugin5.IGetProvisionerSchema} message GetProvisionerSchema message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetProvisionerSchema.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified GetProvisionerSchema message, length delimited. Does not implicitly {@link tfplugin5.GetProvisionerSchema.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.GetProvisionerSchema
     * @static
     * @param {tfplugin5.IGetProvisionerSchema} message GetProvisionerSchema message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetProvisionerSchema.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a GetProvisionerSchema message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.GetProvisionerSchema
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.GetProvisionerSchema} GetProvisionerSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetProvisionerSchema.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.GetProvisionerSchema()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a GetProvisionerSchema message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.GetProvisionerSchema
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.GetProvisionerSchema} GetProvisionerSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetProvisionerSchema.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a GetProvisionerSchema message.
     * @function verify
     * @memberof tfplugin5.GetProvisionerSchema
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetProvisionerSchema.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a GetProvisionerSchema message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.GetProvisionerSchema
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.GetProvisionerSchema} GetProvisionerSchema
     */
    GetProvisionerSchema.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.GetProvisionerSchema) return object
      return new $root.tfplugin5.GetProvisionerSchema()
    }

    /**
     * Creates a plain object from a GetProvisionerSchema message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.GetProvisionerSchema
     * @static
     * @param {tfplugin5.GetProvisionerSchema} message GetProvisionerSchema
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetProvisionerSchema.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this GetProvisionerSchema to JSON.
     * @function toJSON
     * @memberof tfplugin5.GetProvisionerSchema
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetProvisionerSchema.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    GetProvisionerSchema.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.GetProvisionerSchema
       * @interface IRequest
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.GetProvisionerSchema
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.GetProvisionerSchema.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.GetProvisionerSchema.Request
       * @static
       * @param {tfplugin5.GetProvisionerSchema.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.GetProvisionerSchema.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.GetProvisionerSchema.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.GetProvisionerSchema.Request
       * @static
       * @param {tfplugin5.GetProvisionerSchema.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.GetProvisionerSchema.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.GetProvisionerSchema.Request
       * @static
       * @param {tfplugin5.GetProvisionerSchema.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.GetProvisionerSchema.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.GetProvisionerSchema.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.GetProvisionerSchema.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.GetProvisionerSchema.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.GetProvisionerSchema.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.GetProvisionerSchema.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.GetProvisionerSchema.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.GetProvisionerSchema.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.GetProvisionerSchema.Request) return object
        return new $root.tfplugin5.GetProvisionerSchema.Request()
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.GetProvisionerSchema.Request
       * @static
       * @param {tfplugin5.GetProvisionerSchema.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject() {
        return {}
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.GetProvisionerSchema.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    GetProvisionerSchema.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.GetProvisionerSchema
       * @interface IResponse
       * @property {tfplugin5.ISchema|null} [provisioner] Response provisioner
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.GetProvisionerSchema
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.GetProvisionerSchema.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response provisioner.
       * @member {tfplugin5.ISchema|null|undefined} provisioner
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @instance
       */
      Response.prototype.provisioner = null

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @static
       * @param {tfplugin5.GetProvisionerSchema.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.GetProvisionerSchema.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.GetProvisionerSchema.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @static
       * @param {tfplugin5.GetProvisionerSchema.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.provisioner != null && Object.hasOwnProperty.call(message, 'provisioner'))
          $root.tfplugin5.Schema.encode(message.provisioner, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.GetProvisionerSchema.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @static
       * @param {tfplugin5.GetProvisionerSchema.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.GetProvisionerSchema.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.GetProvisionerSchema.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.provisioner = $root.tfplugin5.Schema.decode(reader, reader.uint32())
              break
            case 2:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.GetProvisionerSchema.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.provisioner != null && message.hasOwnProperty('provisioner')) {
          var error = $root.tfplugin5.Schema.verify(message.provisioner)
          if (error) return 'provisioner.' + error
        }
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.GetProvisionerSchema.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.GetProvisionerSchema.Response) return object
        var message = new $root.tfplugin5.GetProvisionerSchema.Response()
        if (object.provisioner != null) {
          if (typeof object.provisioner !== 'object')
            throw TypeError('.tfplugin5.GetProvisionerSchema.Response.provisioner: object expected')
          message.provisioner = $root.tfplugin5.Schema.fromObject(object.provisioner)
        }
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.GetProvisionerSchema.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.GetProvisionerSchema.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @static
       * @param {tfplugin5.GetProvisionerSchema.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (options.defaults) object.provisioner = null
        if (message.provisioner != null && message.hasOwnProperty('provisioner'))
          object.provisioner = $root.tfplugin5.Schema.toObject(message.provisioner, options)
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.GetProvisionerSchema.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return GetProvisionerSchema
  })()

  tfplugin5.ValidateProvisionerConfig = (function () {
    /**
     * Properties of a ValidateProvisionerConfig.
     * @memberof tfplugin5
     * @interface IValidateProvisionerConfig
     */

    /**
     * Constructs a new ValidateProvisionerConfig.
     * @memberof tfplugin5
     * @classdesc Represents a ValidateProvisionerConfig.
     * @implements IValidateProvisionerConfig
     * @constructor
     * @param {tfplugin5.IValidateProvisionerConfig=} [properties] Properties to set
     */
    function ValidateProvisionerConfig(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new ValidateProvisionerConfig instance using the specified properties.
     * @function create
     * @memberof tfplugin5.ValidateProvisionerConfig
     * @static
     * @param {tfplugin5.IValidateProvisionerConfig=} [properties] Properties to set
     * @returns {tfplugin5.ValidateProvisionerConfig} ValidateProvisionerConfig instance
     */
    ValidateProvisionerConfig.create = function create(properties) {
      return new ValidateProvisionerConfig(properties)
    }

    /**
     * Encodes the specified ValidateProvisionerConfig message. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.ValidateProvisionerConfig
     * @static
     * @param {tfplugin5.IValidateProvisionerConfig} message ValidateProvisionerConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValidateProvisionerConfig.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified ValidateProvisionerConfig message, length delimited. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.ValidateProvisionerConfig
     * @static
     * @param {tfplugin5.IValidateProvisionerConfig} message ValidateProvisionerConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValidateProvisionerConfig.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a ValidateProvisionerConfig message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.ValidateProvisionerConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.ValidateProvisionerConfig} ValidateProvisionerConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValidateProvisionerConfig.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.ValidateProvisionerConfig()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a ValidateProvisionerConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.ValidateProvisionerConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.ValidateProvisionerConfig} ValidateProvisionerConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValidateProvisionerConfig.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a ValidateProvisionerConfig message.
     * @function verify
     * @memberof tfplugin5.ValidateProvisionerConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ValidateProvisionerConfig.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a ValidateProvisionerConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.ValidateProvisionerConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.ValidateProvisionerConfig} ValidateProvisionerConfig
     */
    ValidateProvisionerConfig.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.ValidateProvisionerConfig) return object
      return new $root.tfplugin5.ValidateProvisionerConfig()
    }

    /**
     * Creates a plain object from a ValidateProvisionerConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.ValidateProvisionerConfig
     * @static
     * @param {tfplugin5.ValidateProvisionerConfig} message ValidateProvisionerConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ValidateProvisionerConfig.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this ValidateProvisionerConfig to JSON.
     * @function toJSON
     * @memberof tfplugin5.ValidateProvisionerConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ValidateProvisionerConfig.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    ValidateProvisionerConfig.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.ValidateProvisionerConfig
       * @interface IRequest
       * @property {tfplugin5.IDynamicValue|null} [config] Request config
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.ValidateProvisionerConfig
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.ValidateProvisionerConfig.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request config.
       * @member {tfplugin5.IDynamicValue|null|undefined} config
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @instance
       */
      Request.prototype.config = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @static
       * @param {tfplugin5.ValidateProvisionerConfig.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.ValidateProvisionerConfig.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @static
       * @param {tfplugin5.ValidateProvisionerConfig.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.config != null && Object.hasOwnProperty.call(message, 'config'))
          $root.tfplugin5.DynamicValue.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @static
       * @param {tfplugin5.ValidateProvisionerConfig.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ValidateProvisionerConfig.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ValidateProvisionerConfig.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.config = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ValidateProvisionerConfig.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.config != null && message.hasOwnProperty('config')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.config)
          if (error) return 'config.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ValidateProvisionerConfig.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ValidateProvisionerConfig.Request) return object
        var message = new $root.tfplugin5.ValidateProvisionerConfig.Request()
        if (object.config != null) {
          if (typeof object.config !== 'object')
            throw TypeError('.tfplugin5.ValidateProvisionerConfig.Request.config: object expected')
          message.config = $root.tfplugin5.DynamicValue.fromObject(object.config)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @static
       * @param {tfplugin5.ValidateProvisionerConfig.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) object.config = null
        if (message.config != null && message.hasOwnProperty('config'))
          object.config = $root.tfplugin5.DynamicValue.toObject(message.config, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.ValidateProvisionerConfig.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    ValidateProvisionerConfig.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.ValidateProvisionerConfig
       * @interface IResponse
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.ValidateProvisionerConfig
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.ValidateProvisionerConfig.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @static
       * @param {tfplugin5.ValidateProvisionerConfig.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.ValidateProvisionerConfig.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @static
       * @param {tfplugin5.ValidateProvisionerConfig.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ValidateProvisionerConfig.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @static
       * @param {tfplugin5.ValidateProvisionerConfig.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ValidateProvisionerConfig.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ValidateProvisionerConfig.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ValidateProvisionerConfig.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ValidateProvisionerConfig.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ValidateProvisionerConfig.Response) return object
        var message = new $root.tfplugin5.ValidateProvisionerConfig.Response()
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.ValidateProvisionerConfig.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.ValidateProvisionerConfig.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @static
       * @param {tfplugin5.ValidateProvisionerConfig.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.ValidateProvisionerConfig.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return ValidateProvisionerConfig
  })()

  tfplugin5.ProvisionResource = (function () {
    /**
     * Properties of a ProvisionResource.
     * @memberof tfplugin5
     * @interface IProvisionResource
     */

    /**
     * Constructs a new ProvisionResource.
     * @memberof tfplugin5
     * @classdesc Represents a ProvisionResource.
     * @implements IProvisionResource
     * @constructor
     * @param {tfplugin5.IProvisionResource=} [properties] Properties to set
     */
    function ProvisionResource(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
    }

    /**
     * Creates a new ProvisionResource instance using the specified properties.
     * @function create
     * @memberof tfplugin5.ProvisionResource
     * @static
     * @param {tfplugin5.IProvisionResource=} [properties] Properties to set
     * @returns {tfplugin5.ProvisionResource} ProvisionResource instance
     */
    ProvisionResource.create = function create(properties) {
      return new ProvisionResource(properties)
    }

    /**
     * Encodes the specified ProvisionResource message. Does not implicitly {@link tfplugin5.ProvisionResource.verify|verify} messages.
     * @function encode
     * @memberof tfplugin5.ProvisionResource
     * @static
     * @param {tfplugin5.IProvisionResource} message ProvisionResource message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProvisionResource.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create()
      return writer
    }

    /**
     * Encodes the specified ProvisionResource message, length delimited. Does not implicitly {@link tfplugin5.ProvisionResource.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tfplugin5.ProvisionResource
     * @static
     * @param {tfplugin5.IProvisionResource} message ProvisionResource message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProvisionResource.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a ProvisionResource message from the specified reader or buffer.
     * @function decode
     * @memberof tfplugin5.ProvisionResource
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tfplugin5.ProvisionResource} ProvisionResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProvisionResource.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.tfplugin5.ProvisionResource()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a ProvisionResource message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tfplugin5.ProvisionResource
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tfplugin5.ProvisionResource} ProvisionResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProvisionResource.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader)
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a ProvisionResource message.
     * @function verify
     * @memberof tfplugin5.ProvisionResource
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProvisionResource.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected'
      return null
    }

    /**
     * Creates a ProvisionResource message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tfplugin5.ProvisionResource
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tfplugin5.ProvisionResource} ProvisionResource
     */
    ProvisionResource.fromObject = function fromObject(object) {
      if (object instanceof $root.tfplugin5.ProvisionResource) return object
      return new $root.tfplugin5.ProvisionResource()
    }

    /**
     * Creates a plain object from a ProvisionResource message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tfplugin5.ProvisionResource
     * @static
     * @param {tfplugin5.ProvisionResource} message ProvisionResource
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProvisionResource.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this ProvisionResource to JSON.
     * @function toJSON
     * @memberof tfplugin5.ProvisionResource
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProvisionResource.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    ProvisionResource.Request = (function () {
      /**
       * Properties of a Request.
       * @memberof tfplugin5.ProvisionResource
       * @interface IRequest
       * @property {tfplugin5.IDynamicValue|null} [config] Request config
       * @property {tfplugin5.IDynamicValue|null} [connection] Request connection
       */

      /**
       * Constructs a new Request.
       * @memberof tfplugin5.ProvisionResource
       * @classdesc Represents a Request.
       * @implements IRequest
       * @constructor
       * @param {tfplugin5.ProvisionResource.IRequest=} [properties] Properties to set
       */
      function Request(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Request config.
       * @member {tfplugin5.IDynamicValue|null|undefined} config
       * @memberof tfplugin5.ProvisionResource.Request
       * @instance
       */
      Request.prototype.config = null

      /**
       * Request connection.
       * @member {tfplugin5.IDynamicValue|null|undefined} connection
       * @memberof tfplugin5.ProvisionResource.Request
       * @instance
       */
      Request.prototype.connection = null

      /**
       * Creates a new Request instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ProvisionResource.Request
       * @static
       * @param {tfplugin5.ProvisionResource.IRequest=} [properties] Properties to set
       * @returns {tfplugin5.ProvisionResource.Request} Request instance
       */
      Request.create = function create(properties) {
        return new Request(properties)
      }

      /**
       * Encodes the specified Request message. Does not implicitly {@link tfplugin5.ProvisionResource.Request.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ProvisionResource.Request
       * @static
       * @param {tfplugin5.ProvisionResource.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.config != null && Object.hasOwnProperty.call(message, 'config'))
          $root.tfplugin5.DynamicValue.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim()
        if (message.connection != null && Object.hasOwnProperty.call(message, 'connection'))
          $root.tfplugin5.DynamicValue.encode(
            message.connection,
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
          ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link tfplugin5.ProvisionResource.Request.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ProvisionResource.Request
       * @static
       * @param {tfplugin5.ProvisionResource.IRequest} message Request message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ProvisionResource.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ProvisionResource.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ProvisionResource.Request()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.config = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            case 2:
              message.connection = $root.tfplugin5.DynamicValue.decode(reader, reader.uint32())
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ProvisionResource.Request
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ProvisionResource.Request} Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Request message.
       * @function verify
       * @memberof tfplugin5.ProvisionResource.Request
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Request.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.config != null && message.hasOwnProperty('config')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.config)
          if (error) return 'config.' + error
        }
        if (message.connection != null && message.hasOwnProperty('connection')) {
          var error = $root.tfplugin5.DynamicValue.verify(message.connection)
          if (error) return 'connection.' + error
        }
        return null
      }

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ProvisionResource.Request
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ProvisionResource.Request} Request
       */
      Request.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ProvisionResource.Request) return object
        var message = new $root.tfplugin5.ProvisionResource.Request()
        if (object.config != null) {
          if (typeof object.config !== 'object')
            throw TypeError('.tfplugin5.ProvisionResource.Request.config: object expected')
          message.config = $root.tfplugin5.DynamicValue.fromObject(object.config)
        }
        if (object.connection != null) {
          if (typeof object.connection !== 'object')
            throw TypeError('.tfplugin5.ProvisionResource.Request.connection: object expected')
          message.connection = $root.tfplugin5.DynamicValue.fromObject(object.connection)
        }
        return message
      }

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ProvisionResource.Request
       * @static
       * @param {tfplugin5.ProvisionResource.Request} message Request
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Request.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.defaults) {
          object.config = null
          object.connection = null
        }
        if (message.config != null && message.hasOwnProperty('config'))
          object.config = $root.tfplugin5.DynamicValue.toObject(message.config, options)
        if (message.connection != null && message.hasOwnProperty('connection'))
          object.connection = $root.tfplugin5.DynamicValue.toObject(message.connection, options)
        return object
      }

      /**
       * Converts this Request to JSON.
       * @function toJSON
       * @memberof tfplugin5.ProvisionResource.Request
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Request
    })()

    ProvisionResource.Response = (function () {
      /**
       * Properties of a Response.
       * @memberof tfplugin5.ProvisionResource
       * @interface IResponse
       * @property {string|null} [output] Response output
       * @property {Array.<tfplugin5.IDiagnostic>|null} [diagnostics] Response diagnostics
       */

      /**
       * Constructs a new Response.
       * @memberof tfplugin5.ProvisionResource
       * @classdesc Represents a Response.
       * @implements IResponse
       * @constructor
       * @param {tfplugin5.ProvisionResource.IResponse=} [properties] Properties to set
       */
      function Response(properties) {
        this.diagnostics = []
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
      }

      /**
       * Response output.
       * @member {string} output
       * @memberof tfplugin5.ProvisionResource.Response
       * @instance
       */
      Response.prototype.output = ''

      /**
       * Response diagnostics.
       * @member {Array.<tfplugin5.IDiagnostic>} diagnostics
       * @memberof tfplugin5.ProvisionResource.Response
       * @instance
       */
      Response.prototype.diagnostics = $util.emptyArray

      /**
       * Creates a new Response instance using the specified properties.
       * @function create
       * @memberof tfplugin5.ProvisionResource.Response
       * @static
       * @param {tfplugin5.ProvisionResource.IResponse=} [properties] Properties to set
       * @returns {tfplugin5.ProvisionResource.Response} Response instance
       */
      Response.create = function create(properties) {
        return new Response(properties)
      }

      /**
       * Encodes the specified Response message. Does not implicitly {@link tfplugin5.ProvisionResource.Response.verify|verify} messages.
       * @function encode
       * @memberof tfplugin5.ProvisionResource.Response
       * @static
       * @param {tfplugin5.ProvisionResource.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create()
        if (message.output != null && Object.hasOwnProperty.call(message, 'output'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.output)
        if (message.diagnostics != null && message.diagnostics.length)
          for (var i = 0; i < message.diagnostics.length; ++i)
            $root.tfplugin5.Diagnostic.encode(
              message.diagnostics[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
            ).ldelim()
        return writer
      }

      /**
       * Encodes the specified Response message, length delimited. Does not implicitly {@link tfplugin5.ProvisionResource.Response.verify|verify} messages.
       * @function encodeDelimited
       * @memberof tfplugin5.ProvisionResource.Response
       * @static
       * @param {tfplugin5.ProvisionResource.IResponse} message Response message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Response message from the specified reader or buffer.
       * @function decode
       * @memberof tfplugin5.ProvisionResource.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {tfplugin5.ProvisionResource.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.tfplugin5.ProvisionResource.Response()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.output = reader.string()
              break
            case 2:
              if (!(message.diagnostics && message.diagnostics.length)) message.diagnostics = []
              message.diagnostics.push($root.tfplugin5.Diagnostic.decode(reader, reader.uint32()))
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Response message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof tfplugin5.ProvisionResource.Response
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {tfplugin5.ProvisionResource.Response} Response
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Response message.
       * @function verify
       * @memberof tfplugin5.ProvisionResource.Response
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Response.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected'
        if (message.output != null && message.hasOwnProperty('output'))
          if (!$util.isString(message.output)) return 'output: string expected'
        if (message.diagnostics != null && message.hasOwnProperty('diagnostics')) {
          if (!Array.isArray(message.diagnostics)) return 'diagnostics: array expected'
          for (var i = 0; i < message.diagnostics.length; ++i) {
            var error = $root.tfplugin5.Diagnostic.verify(message.diagnostics[i])
            if (error) return 'diagnostics.' + error
          }
        }
        return null
      }

      /**
       * Creates a Response message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof tfplugin5.ProvisionResource.Response
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {tfplugin5.ProvisionResource.Response} Response
       */
      Response.fromObject = function fromObject(object) {
        if (object instanceof $root.tfplugin5.ProvisionResource.Response) return object
        var message = new $root.tfplugin5.ProvisionResource.Response()
        if (object.output != null) message.output = String(object.output)
        if (object.diagnostics) {
          if (!Array.isArray(object.diagnostics))
            throw TypeError('.tfplugin5.ProvisionResource.Response.diagnostics: array expected')
          message.diagnostics = []
          for (var i = 0; i < object.diagnostics.length; ++i) {
            if (typeof object.diagnostics[i] !== 'object')
              throw TypeError('.tfplugin5.ProvisionResource.Response.diagnostics: object expected')
            message.diagnostics[i] = $root.tfplugin5.Diagnostic.fromObject(object.diagnostics[i])
          }
        }
        return message
      }

      /**
       * Creates a plain object from a Response message. Also converts values to other types if specified.
       * @function toObject
       * @memberof tfplugin5.ProvisionResource.Response
       * @static
       * @param {tfplugin5.ProvisionResource.Response} message Response
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Response.toObject = function toObject(message, options) {
        if (!options) options = {}
        var object = {}
        if (options.arrays || options.defaults) object.diagnostics = []
        if (options.defaults) object.output = ''
        if (message.output != null && message.hasOwnProperty('output')) object.output = message.output
        if (message.diagnostics && message.diagnostics.length) {
          object.diagnostics = []
          for (var j = 0; j < message.diagnostics.length; ++j)
            object.diagnostics[j] = $root.tfplugin5.Diagnostic.toObject(message.diagnostics[j], options)
        }
        return object
      }

      /**
       * Converts this Response to JSON.
       * @function toJSON
       * @memberof tfplugin5.ProvisionResource.Response
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Response
    })()

    return ProvisionResource
  })()

  return tfplugin5
})()

module.exports = $root
