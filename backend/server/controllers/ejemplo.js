ref *2> IncomingMessage {
    _events: {
      close: undefined,
      error: undefined,
      data: undefined,
      end: undefined,
      readable: undefined,
      aborted: undefined
    },
    _readableState: ReadableState {
      highWaterMark: 16384,
      buffer: [],
      bufferIndex: 0,
      length: 0,
      pipes: [],
      awaitDrainWriters: null,
      [Symbol(kState)]: 60294924
    },
    _maxListeners: undefined,
    socket: <ref *1> Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _closeAfterHandlingError: false,
      _events: {
        close: [Array],
        error: [Array],
        prefinish: undefined,
        finish: undefined,
        drain: [Function: bound socketOnDrain],
        data: [Function: bound socketOnData],
        end: [Array],
        readable: undefined,
        timeout: [Function: socketOnTimeout],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause]
      },
      _readableState: ReadableState {
        highWaterMark: 16384,
        buffer: [],
        bufferIndex: 0,
        length: 0,
        pipes: [],
        awaitDrainWriters: null,
        [Symbol(kState)]: 193997060
      },
      _writableState: WritableState {
        highWaterMark: 16384,
        length: 0,
        corked: 0,
        onwrite: [Function: bound onwrite],
        writelen: 0,
        bufferedIndex: 0,
        pendingcb: 0,
        [Symbol(kState)]: 17564420,
        [Symbol(kBufferedValue)]: null
      },
      allowHalfOpen: true,
      _maxListeners: undefined,
      _eventsCount: 8,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        requestTimeout: 300000,
        headersTimeout: 60000,
        keepAliveTimeout: 5000,
        connectionsCheckingInterval: 30000,
        requireHostHeader: true,
        joinDuplicateHeaders: undefined,
        rejectNonStandardBodyWrites: false,
        _events: [Object: null prototype],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        _listeningId: 1,
        allowHalfOpen: true,
        pauseOnConnect: false,
        noDelay: true,
        keepAlive: false,
        keepAliveInitialDelay: 0,
        highWaterMark: 16384,
        httpAllowHalfOpen: false,
        timeout: 0,
        maxHeadersCount: null,
        maxRequestsPerSocket: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 151,
        [Symbol(kUniqueHeaders)]: null,
        [Symbol(http.server.connections)]: ConnectionsList {},
        [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
          _idleTimeout: 30000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 30349,
          _onTimeout: [Function: bound checkConnections],
          _timerArgs: undefined,
          _repeat: 30000,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 154,
          [Symbol(triggerId)]: 152
        }
      },
      _server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        requestTimeout: 300000,
        headersTimeout: 60000,
        keepAliveTimeout: 5000,
        connectionsCheckingInterval: 30000,
        requireHostHeader: true,
        joinDuplicateHeaders: undefined,
        rejectNonStandardBodyWrites: false,
        _events: [Object: null prototype],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        _listeningId: 1,
        allowHalfOpen: true,
        pauseOnConnect: false,
        noDelay: true,
        keepAlive: false,
        keepAliveInitialDelay: 0,
        highWaterMark: 16384,
        httpAllowHalfOpen: false,
        timeout: 0,
        maxHeadersCount: null,
        maxRequestsPerSocket: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 151,
        [Symbol(kUniqueHeaders)]: null,
        [Symbol(http.server.connections)]: ConnectionsList {},
        [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
          _idleTimeout: 30000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 30349,
          _onTimeout: [Function: bound checkConnections],
          _timerArgs: undefined,
          _repeat: 30000,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 154,
          [Symbol(triggerId)]: 152
        }
      },
      parser: HTTPParser {
        '0': null,
        '1': [Function: parserOnHeaders],
        '2': [Function: parserOnHeadersComplete],
        '3': [Function: parserOnBody],
        '4': [Function: parserOnMessageComplete],
        '5': [Function: bound onParserExecute],
        '6': [Function: bound onParserTimeout],
        _headers: [],
        _url: '',
        socket: [Circular *1],
        incoming: [Circular *2],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        joinDuplicateHeaders: null,
        [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
      },
      on: [Function: socketListenerWrap],
      addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
      setEncoding: [Function: socketSetEncoding],
      _paused: false,
      _httpMessage: ServerResponse {
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: false,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        maxRequestsOnConnectionReached: false,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        strictContentLength: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        _closed: false,
        _header: null,
        _keepAliveTimeout: 5000,
        _onPendingData: [Function: bound updateOutgoingData],
        req: [Circular *2],
        _sent100: false,
        _expect_continue: false,
        _maxRequestsPerSocket: 0,
        locals: [Object: null prototype] {},
        _startAt: undefined,
        _startTime: undefined,
        writeHead: [Function: writeHead],
        __onFinished: [Function],
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kChunkedBuffer)]: [],
        [Symbol(kChunkedLength)]: 0,
        [Symbol(kSocket)]: [Circular *1],
        [Symbol(kOutHeaders)]: [Object: null prototype],
        [Symbol(errored)]: null,
        [Symbol(kHighWaterMark)]: 16384,
        [Symbol(kRejectNonStandardBodyWrites)]: false,
        [Symbol(kUniqueHeaders)]: null
      },
      _peername: { address: '::1', family: 'IPv6', port: 59475 },
      [Symbol(async_id_symbol)]: 384,
      [Symbol(kHandle)]: TCP {
        reading: true,
        onconnection: null,
        _consumed: true,
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(shapeMode)]: true,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: true,
      [Symbol(kSetKeepAlive)]: false,
      [Symbol(kSetKeepAliveInitialDelay)]: 0,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    rawHeaders: [
      'Host',
      'localhost:3000',
      'Connection',
      'keep-alive',
      'Content-Length',
      '136',
      'sec-ch-ua',
      '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
      'Accept',
      'application/json, text/plain, */*',
      'Content-Type',
      'application/json',
      'DNT',
      '1',
      'sec-ch-ua-mobile',
      '?0',
      'User-Agent',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      'sec-ch-ua-platform',
      '"macOS"',
      'Origin',
      'http://localhost:5173',
      'Sec-Fetch-Site',
      'same-site',
      'Sec-Fetch-Mode',
      'cors',
      'Sec-Fetch-Dest',
      'empty',
      'Referer',
      'http://localhost:5173/',
      'Accept-Encoding',
      'gzip, deflate, br, zstd',
      'Accept-Language',
      'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7',
      'Cookie',
      'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjI5OWM3MTI4YjlkZDU5M2UxZTAwNSIsImlhdCI6MTcxMzk4NDQ0OSwiZXhwIjoxNzE0MDcwODQ5fQ.7b3fUy3Yi53r0OS7xiBkuXGO8mPxrtsGvVihvNkNpyU'
    ],
    rawTrailers: [],
    joinDuplicateHeaders: null,
    aborted: false,
    upgrade: false,
    url: '/pets',
    method: 'POST',
    statusCode: null,
    statusMessage: null,
    client: <ref *1> Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _closeAfterHandlingError: false,
      _events: {
        close: [Array],
        error: [Array],
        prefinish: undefined,
        finish: undefined,
        drain: [Function: bound socketOnDrain],
        data: [Function: bound socketOnData],
        end: [Array],
        readable: undefined,
        timeout: [Function: socketOnTimeout],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause]
      },
      _readableState: ReadableState {
        highWaterMark: 16384,
        buffer: [],
        bufferIndex: 0,
        length: 0,
        pipes: [],
        awaitDrainWriters: null,
        [Symbol(kState)]: 193997060
      },
      _writableState: WritableState {
        highWaterMark: 16384,
        length: 0,
        corked: 0,
        onwrite: [Function: bound onwrite],
        writelen: 0,
        bufferedIndex: 0,
        pendingcb: 0,
        [Symbol(kState)]: 17564420,
        [Symbol(kBufferedValue)]: null
      },
      allowHalfOpen: true,
      _maxListeners: undefined,
      _eventsCount: 8,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        requestTimeout: 300000,
        headersTimeout: 60000,
        keepAliveTimeout: 5000,
        connectionsCheckingInterval: 30000,
        requireHostHeader: true,
        joinDuplicateHeaders: undefined,
        rejectNonStandardBodyWrites: false,
        _events: [Object: null prototype],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        _listeningId: 1,
        allowHalfOpen: true,
        pauseOnConnect: false,
        noDelay: true,
        keepAlive: false,
        keepAliveInitialDelay: 0,
        highWaterMark: 16384,
        httpAllowHalfOpen: false,
        timeout: 0,
        maxHeadersCount: null,
        maxRequestsPerSocket: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 151,
        [Symbol(kUniqueHeaders)]: null,
        [Symbol(http.server.connections)]: ConnectionsList {},
        [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
          _idleTimeout: 30000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 30349,
          _onTimeout: [Function: bound checkConnections],
          _timerArgs: undefined,
          _repeat: 30000,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 154,
          [Symbol(triggerId)]: 152
        }
      },
      _server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        requestTimeout: 300000,
        headersTimeout: 60000,
        keepAliveTimeout: 5000,
        connectionsCheckingInterval: 30000,
        requireHostHeader: true,
        joinDuplicateHeaders: undefined,
        rejectNonStandardBodyWrites: false,
        _events: [Object: null prototype],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        _listeningId: 1,
        allowHalfOpen: true,
        pauseOnConnect: false,
        noDelay: true,
        keepAlive: false,
        keepAliveInitialDelay: 0,
        highWaterMark: 16384,
        httpAllowHalfOpen: false,
        timeout: 0,
        maxHeadersCount: null,
        maxRequestsPerSocket: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 151,
        [Symbol(kUniqueHeaders)]: null,
        [Symbol(http.server.connections)]: ConnectionsList {},
        [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
          _idleTimeout: 30000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 30349,
          _onTimeout: [Function: bound checkConnections],
          _timerArgs: undefined,
          _repeat: 30000,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 154,
          [Symbol(triggerId)]: 152
        }
      },
      parser: HTTPParser {
        '0': null,
        '1': [Function: parserOnHeaders],
        '2': [Function: parserOnHeadersComplete],
        '3': [Function: parserOnBody],
        '4': [Function: parserOnMessageComplete],
        '5': [Function: bound onParserExecute],
        '6': [Function: bound onParserTimeout],
        _headers: [],
        _url: '',
        socket: [Circular *1],
        incoming: [Circular *2],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        joinDuplicateHeaders: null,
        [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
      },
      on: [Function: socketListenerWrap],
      addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
      setEncoding: [Function: socketSetEncoding],
      _paused: false,
      _httpMessage: ServerResponse {
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: false,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        maxRequestsOnConnectionReached: false,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        strictContentLength: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        _closed: false,
        _header: null,
        _keepAliveTimeout: 5000,
        _onPendingData: [Function: bound updateOutgoingData],
        req: [Circular *2],
        _sent100: false,
        _expect_continue: false,
        _maxRequestsPerSocket: 0,
        locals: [Object: null prototype] {},
        _startAt: undefined,
        _startTime: undefined,
        writeHead: [Function: writeHead],
        __onFinished: [Function],
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kChunkedBuffer)]: [],
        [Symbol(kChunkedLength)]: 0,
        [Symbol(kSocket)]: [Circular *1],
        [Symbol(kOutHeaders)]: [Object: null prototype],
        [Symbol(errored)]: null,
        [Symbol(kHighWaterMark)]: 16384,
        [Symbol(kRejectNonStandardBodyWrites)]: false,
        [Symbol(kUniqueHeaders)]: null
      },
      _peername: { address: '::1', family: 'IPv6', port: 59475 },
      [Symbol(async_id_symbol)]: 384,
      [Symbol(kHandle)]: TCP {
        reading: true,
        onconnection: null,
        _consumed: true,
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(shapeMode)]: true,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: true,
      [Symbol(kSetKeepAlive)]: false,
      [Symbol(kSetKeepAliveInitialDelay)]: 0,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _consuming: true,
    _dumped: false,
    next: [Function: next],
    baseUrl: '/api',
    originalUrl: '/api/pets',
    _parsedUrl: Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: null,
      pathname: '/pets',
      path: '/pets',
      href: '/pets',
      _raw: '/pets'
    },
    params: {},
    query: {},
    res: <ref *3> ServerResponse {
      _events: [Object: null prototype] {
        finish: [Array],
        end: [Function: onevent]
      },
      _eventsCount: 2,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      _closed: false,
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      req: [Circular *2],
      _sent100: false,
      _expect_continue: false,
      _maxRequestsPerSocket: 0,
      locals: [Object: null prototype] {},
      _startAt: undefined,
      _startTime: undefined,
      writeHead: [Function: writeHead],
      __onFinished: [Function: listener] { queue: [Array] },
      [Symbol(shapeMode)]: false,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kChunkedBuffer)]: [],
      [Symbol(kChunkedLength)]: 0,
      [Symbol(kSocket)]: <ref *1> Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _closeAfterHandlingError: false,
        _events: [Object],
        _readableState: [ReadableState],
        _writableState: [WritableState],
        allowHalfOpen: true,
        _maxListeners: undefined,
        _eventsCount: 8,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [Circular *3],
        _peername: [Object],
        [Symbol(async_id_symbol)]: 384,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(shapeMode)]: true,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: true,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      [Symbol(kOutHeaders)]: [Object: null prototype] {
        'x-powered-by': [Array],
        'access-control-allow-origin': [Array],
        vary: [Array],
        'access-control-allow-credentials': [Array]
      },
      [Symbol(errored)]: null,
      [Symbol(kHighWaterMark)]: 16384,
      [Symbol(kRejectNonStandardBodyWrites)]: false,
      [Symbol(kUniqueHeaders)]: null
    },
    _startAt: [ 869051, 46389458 ],
    _startTime: 2024-04-25T01:03:15.404Z,
    _remoteAddress: '::1',
    body: {
      petName: 'Acho',
      petType: 'Gato',
      petWeight: '5',
      petAge: '34',
      petNotes: 'Rascarle la guatita',
      petOwner: '662299c7128b9dd593e1e005'
    },
    _body: true,
    length: undefined,
    _eventsCount: 0,
    secret: undefined,
    cookies: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjI5OWM3MTI4YjlkZDU5M2UxZTAwNSIsImlhdCI6MTcxMzk4NDQ0OSwiZXhwIjoxNzE0MDcwODQ5fQ.7b3fUy3Yi53r0OS7xiBkuXGO8mPxrtsGvVihvNkNpyU'
    },
    signedCookies: [Object: null prototype] {},
    route: Route { path: '/pets', stack: [ [Layer] ], methods: { post: true } },
    [Symbol(shapeMode)]: true,
    [Symbol(kCapture)]: false,
    [Symbol(kHeaders)]: {
      host: 'localhost:3000',
      connection: 'keep-alive',
      'content-length': '136',
      'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
      accept: 'application/json, text/plain, */*',
      'content-type': 'application/json',
      dnt: '1',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      origin: 'http://localhost:5173',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      referer: 'http://localhost:5173/',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7',
      cookie: 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjI5OWM3MTI4YjlkZDU5M2UxZTAwNSIsImlhdCI6MTcxMzk4NDQ0OSwiZXhwIjoxNzE0MDcwODQ5fQ.7b3fUy3Yi53r0OS7xiBkuXGO8mPxrtsGvVihvNkNpyU'
    },
    [Symbol(kHeadersCount)]: 36,
    [Symbol(kTrailers)]: null,
    [Symbol(kTrailersCount)]: 0
  }
  ErrorCannot read properties of undefined (reading 'id')
  POST /api/pets 400 24.007 ms - 44
  GET /api/pets 304 16.025 ms - -
  GET /api/pets 304 6.590 m