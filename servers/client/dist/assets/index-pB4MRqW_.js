function d0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const a in r)
        if (a !== 'default' && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(r, a)
          o &&
            Object.defineProperty(
              e,
              a,
              o.get ? o : { enumerable: !0, get: () => r[a] },
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a)
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(a) {
    const o = {}
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(a) {
    if (a.ep) return
    a.ep = !0
    const o = n(a)
    fetch(a.href, o)
  }
})()
var kr =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {}
function Rr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var f0 = { exports: {} },
  Yu = {},
  g0 = { exports: {} },
  ze = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fl = Symbol.for('react.element'),
  zC = Symbol.for('react.portal'),
  HC = Symbol.for('react.fragment'),
  VC = Symbol.for('react.strict_mode'),
  BC = Symbol.for('react.profiler'),
  WC = Symbol.for('react.provider'),
  UC = Symbol.for('react.context'),
  YC = Symbol.for('react.forward_ref'),
  qC = Symbol.for('react.suspense'),
  KC = Symbol.for('react.memo'),
  GC = Symbol.for('react.lazy'),
  pm = Symbol.iterator
function QC(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (pm && e[pm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var h0 = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  m0 = Object.assign,
  v0 = {}
function ci(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = v0),
    (this.updater = n || h0)
}
ci.prototype.isReactComponent = {}
ci.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
ci.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function p0() {}
p0.prototype = ci.prototype
function Lg(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = v0),
    (this.updater = n || h0)
}
var Ag = (Lg.prototype = new p0())
Ag.constructor = Lg
m0(Ag, ci.prototype)
Ag.isPureReactComponent = !0
var ym = Array.isArray,
  y0 = Object.prototype.hasOwnProperty,
  jg = { current: null },
  S0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function b0(e, t, n) {
  var r,
    a = {},
    o = null,
    i = null
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      y0.call(t, r) && !S0.hasOwnProperty(r) && (a[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) a.children = n
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2]
    a.children = s
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) a[r] === void 0 && (a[r] = l[r])
  return { $$typeof: Fl, type: e, key: o, ref: i, props: a, _owner: jg.current }
}
function XC(e, t) {
  return {
    $$typeof: Fl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function zg(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Fl
}
function JC(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Sm = /\/+/g
function Zc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? JC('' + e.key)
    : t.toString(36)
}
function js(e, t, n, r, a) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var i = !1
  if (e === null) i = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Fl:
          case zC:
            i = !0
        }
    }
  if (i)
    return (
      (i = e),
      (a = a(i)),
      (e = r === '' ? '.' + Zc(i, 0) : r),
      ym(a)
        ? ((n = ''),
          e != null && (n = e.replace(Sm, '$&/') + '/'),
          js(a, t, n, '', function (u) {
            return u
          }))
        : a != null &&
          (zg(a) &&
            (a = XC(
              a,
              n +
                (!a.key || (i && i.key === a.key)
                  ? ''
                  : ('' + a.key).replace(Sm, '$&/') + '/') +
                e,
            )),
          t.push(a)),
      1
    )
  if (((i = 0), (r = r === '' ? '.' : r + ':'), ym(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l]
      var s = r + Zc(o, l)
      i += js(o, t, n, s, a)
    }
  else if (((s = QC(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Zc(o, l++)), (i += js(o, t, n, s, a))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return i
}
function as(e, t, n) {
  if (e == null) return e
  var r = [],
    a = 0
  return (
    js(e, r, '', '', function (o) {
      return t.call(n, o, a++)
    }),
    r
  )
}
function ZC(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var on = { current: null },
  zs = { transition: null },
  ew = {
    ReactCurrentDispatcher: on,
    ReactCurrentBatchConfig: zs,
    ReactCurrentOwner: jg,
  }
function C0() {
  throw Error('act(...) is not supported in production builds of React.')
}
ze.Children = {
  map: as,
  forEach: function (e, t, n) {
    as(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      as(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      as(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!zg(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
ze.Component = ci
ze.Fragment = HC
ze.Profiler = BC
ze.PureComponent = Lg
ze.StrictMode = VC
ze.Suspense = qC
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ew
ze.act = C0
ze.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = m0({}, e.props),
    a = e.key,
    o = e.ref,
    i = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = jg.current)),
      t.key !== void 0 && (a = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (s in t)
      y0.call(t, s) &&
        !S0.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    l = Array(s)
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: Fl, type: e.type, key: a, ref: o, props: r, _owner: i }
}
ze.createContext = function (e) {
  return (
    (e = {
      $$typeof: UC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: WC, _context: e }),
    (e.Consumer = e)
  )
}
ze.createElement = b0
ze.createFactory = function (e) {
  var t = b0.bind(null, e)
  return (t.type = e), t
}
ze.createRef = function () {
  return { current: null }
}
ze.forwardRef = function (e) {
  return { $$typeof: YC, render: e }
}
ze.isValidElement = zg
ze.lazy = function (e) {
  return { $$typeof: GC, _payload: { _status: -1, _result: e }, _init: ZC }
}
ze.memo = function (e, t) {
  return { $$typeof: KC, type: e, compare: t === void 0 ? null : t }
}
ze.startTransition = function (e) {
  var t = zs.transition
  zs.transition = {}
  try {
    e()
  } finally {
    zs.transition = t
  }
}
ze.unstable_act = C0
ze.useCallback = function (e, t) {
  return on.current.useCallback(e, t)
}
ze.useContext = function (e) {
  return on.current.useContext(e)
}
ze.useDebugValue = function () {}
ze.useDeferredValue = function (e) {
  return on.current.useDeferredValue(e)
}
ze.useEffect = function (e, t) {
  return on.current.useEffect(e, t)
}
ze.useId = function () {
  return on.current.useId()
}
ze.useImperativeHandle = function (e, t, n) {
  return on.current.useImperativeHandle(e, t, n)
}
ze.useInsertionEffect = function (e, t) {
  return on.current.useInsertionEffect(e, t)
}
ze.useLayoutEffect = function (e, t) {
  return on.current.useLayoutEffect(e, t)
}
ze.useMemo = function (e, t) {
  return on.current.useMemo(e, t)
}
ze.useReducer = function (e, t, n) {
  return on.current.useReducer(e, t, n)
}
ze.useRef = function (e) {
  return on.current.useRef(e)
}
ze.useState = function (e) {
  return on.current.useState(e)
}
ze.useSyncExternalStore = function (e, t, n) {
  return on.current.useSyncExternalStore(e, t, n)
}
ze.useTransition = function () {
  return on.current.useTransition()
}
ze.version = '18.3.1'
g0.exports = ze
var g = g0.exports
const Oe = Rr(g),
  qu = d0({ __proto__: null, default: Oe }, [g])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tw = g,
  nw = Symbol.for('react.element'),
  rw = Symbol.for('react.fragment'),
  aw = Object.prototype.hasOwnProperty,
  ow = tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  iw = { key: !0, ref: !0, __self: !0, __source: !0 }
function w0(e, t, n) {
  var r,
    a = {},
    o = null,
    i = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref)
  for (r in t) aw.call(t, r) && !iw.hasOwnProperty(r) && (a[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) a[r] === void 0 && (a[r] = t[r])
  return { $$typeof: nw, type: e, key: o, ref: i, props: a, _owner: ow.current }
}
Yu.Fragment = rw
Yu.jsx = w0
Yu.jsxs = w0
f0.exports = Yu
var ia = f0.exports,
  Xd = {},
  x0 = { exports: {} },
  Ln = {},
  E0 = { exports: {} },
  $0 = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t($, M) {
    var O = $.length
    $.push(M)
    e: for (; 0 < O; ) {
      var D = (O - 1) >>> 1,
        L = $[D]
      if (0 < a(L, M)) ($[D] = M), ($[O] = L), (O = D)
      else break e
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0]
  }
  function r($) {
    if ($.length === 0) return null
    var M = $[0],
      O = $.pop()
    if (O !== M) {
      $[0] = O
      e: for (var D = 0, L = $.length, W = L >>> 1; D < W; ) {
        var B = 2 * (D + 1) - 1,
          U = $[B],
          K = B + 1,
          Y = $[K]
        if (0 > a(U, O))
          K < L && 0 > a(Y, U)
            ? (($[D] = Y), ($[K] = O), (D = K))
            : (($[D] = U), ($[B] = O), (D = B))
        else if (K < L && 0 > a(Y, O)) ($[D] = Y), ($[K] = O), (D = K)
        else break e
      }
    }
    return M
  }
  function a($, M) {
    var O = $.sortIndex - M.sortIndex
    return O !== 0 ? O : $.id - M.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var i = Date,
      l = i.now()
    e.unstable_now = function () {
      return i.now() - l
    }
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    y = !1,
    v = !1,
    p = !1,
    b = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function S($) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u)
      else if (M.startTime <= $) r(u), (M.sortIndex = M.expirationTime), t(s, M)
      else break
      M = n(u)
    }
  }
  function C($) {
    if (((p = !1), S($), !v))
      if (n(s) !== null) (v = !0), P(w)
      else {
        var M = n(u)
        M !== null && k(C, M.startTime - $)
      }
  }
  function w($, M) {
    ;(v = !1), p && ((p = !1), m(R), (R = -1)), (y = !0)
    var O = f
    try {
      for (
        S(M), d = n(s);
        d !== null && (!(d.expirationTime > M) || ($ && !T()));

      ) {
        var D = d.callback
        if (typeof D == 'function') {
          ;(d.callback = null), (f = d.priorityLevel)
          var L = D(d.expirationTime <= M)
          ;(M = e.unstable_now()),
            typeof L == 'function' ? (d.callback = L) : d === n(s) && r(s),
            S(M)
        } else r(s)
        d = n(s)
      }
      if (d !== null) var W = !0
      else {
        var B = n(u)
        B !== null && k(C, B.startTime - M), (W = !1)
      }
      return W
    } finally {
      ;(d = null), (f = O), (y = !1)
    }
  }
  var E = !1,
    x = null,
    R = -1,
    F = 5,
    _ = -1
  function T() {
    return !(e.unstable_now() - _ < F)
  }
  function j() {
    if (x !== null) {
      var $ = e.unstable_now()
      _ = $
      var M = !0
      try {
        M = x(!0, $)
      } finally {
        M ? A() : ((E = !1), (x = null))
      }
    } else E = !1
  }
  var A
  if (typeof h == 'function')
    A = function () {
      h(j)
    }
  else if (typeof MessageChannel < 'u') {
    var I = new MessageChannel(),
      N = I.port2
    ;(I.port1.onmessage = j),
      (A = function () {
        N.postMessage(null)
      })
  } else
    A = function () {
      b(j, 0)
    }
  function P($) {
    ;(x = $), E || ((E = !0), A())
  }
  function k($, M) {
    R = b(function () {
      $(e.unstable_now())
    }, M)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), P(w))
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (F = 0 < $ ? Math.floor(1e3 / $) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function ($) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var M = 3
          break
        default:
          M = f
      }
      var O = f
      f = M
      try {
        return $()
      } finally {
        f = O
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, M) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          $ = 3
      }
      var O = f
      f = $
      try {
        return M()
      } finally {
        f = O
      }
    }),
    (e.unstable_scheduleCallback = function ($, M, O) {
      var D = e.unstable_now()
      switch (
        (typeof O == 'object' && O !== null
          ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? D + O : D))
          : (O = D),
        $)
      ) {
        case 1:
          var L = -1
          break
        case 2:
          L = 250
          break
        case 5:
          L = 1073741823
          break
        case 4:
          L = 1e4
          break
        default:
          L = 5e3
      }
      return (
        (L = O + L),
        ($ = {
          id: c++,
          callback: M,
          priorityLevel: $,
          startTime: O,
          expirationTime: L,
          sortIndex: -1,
        }),
        O > D
          ? (($.sortIndex = O),
            t(u, $),
            n(s) === null &&
              $ === n(u) &&
              (p ? (m(R), (R = -1)) : (p = !0), k(C, O - D)))
          : (($.sortIndex = L), t(s, $), v || y || ((v = !0), P(w))),
        $
      )
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function ($) {
      var M = f
      return function () {
        var O = f
        f = M
        try {
          return $.apply(this, arguments)
        } finally {
          f = O
        }
      }
    })
})($0)
E0.exports = $0
var lw = E0.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sw = g,
  Fn = lw
function G(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var P0 = new Set(),
  ll = {}
function so(e, t) {
  Xo(e, t), Xo(e + 'Capture', t)
}
function Xo(e, t) {
  for (ll[e] = t, e = 0; e < t.length; e++) P0.add(t[e])
}
var Br = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Jd = Object.prototype.hasOwnProperty,
  uw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bm = {},
  Cm = {}
function cw(e) {
  return Jd.call(Cm, e)
    ? !0
    : Jd.call(bm, e)
      ? !1
      : uw.test(e)
        ? (Cm[e] = !0)
        : ((bm[e] = !0), !1)
}
function dw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function fw(e, t, n, r) {
  if (t === null || typeof t > 'u' || dw(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ln(e, t, n, r, a, o, i) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i)
}
var Ut = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ut[e] = new ln(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Ut[t] = new ln(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ut[e] = new ln(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ut[e] = new ln(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ut[e] = new ln(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ut[e] = new ln(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Ut[e] = new ln(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ut[e] = new ln(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Ut[e] = new ln(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Hg = /[\-:]([a-z])/g
function Vg(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Hg, Vg)
    Ut[t] = new ln(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Hg, Vg)
    Ut[t] = new ln(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Hg, Vg)
  Ut[t] = new ln(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ut[e] = new ln(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Ut.xlinkHref = new ln(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ut[e] = new ln(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Bg(e, t, n, r) {
  var a = Ut.hasOwnProperty(t) ? Ut[t] : null
  ;(a !== null
    ? a.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (fw(t, n, a, r) && (n = null),
    r || a === null
      ? cw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : a.mustUseProperty
        ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : '') : n)
        : ((t = a.attributeName),
          (r = a.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (n = a === 3 || (a === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Gr = sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  os = Symbol.for('react.element'),
  ko = Symbol.for('react.portal'),
  Ro = Symbol.for('react.fragment'),
  Wg = Symbol.for('react.strict_mode'),
  Zd = Symbol.for('react.profiler'),
  k0 = Symbol.for('react.provider'),
  R0 = Symbol.for('react.context'),
  Ug = Symbol.for('react.forward_ref'),
  ef = Symbol.for('react.suspense'),
  tf = Symbol.for('react.suspense_list'),
  Yg = Symbol.for('react.memo'),
  la = Symbol.for('react.lazy'),
  M0 = Symbol.for('react.offscreen'),
  wm = Symbol.iterator
function Ci(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (wm && e[wm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var mt = Object.assign,
  ed
function Ai(e) {
  if (ed === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      ed = (t && t[1]) || ''
    }
  return (
    `
` +
    ed +
    e
  )
}
var td = !1
function nd(e, t) {
  if (!e || td) return ''
  td = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var a = u.stack.split(`
`),
          o = r.stack.split(`
`),
          i = a.length - 1,
          l = o.length - 1;
        1 <= i && 0 <= l && a[i] !== o[l];

      )
        l--
      for (; 1 <= i && 0 <= l; i--, l--)
        if (a[i] !== o[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || a[i] !== o[l])) {
                var s =
                  `
` + a[i].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                )
              }
            while (1 <= i && 0 <= l)
          break
        }
    }
  } finally {
    ;(td = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Ai(e) : ''
}
function gw(e) {
  switch (e.tag) {
    case 5:
      return Ai(e.type)
    case 16:
      return Ai('Lazy')
    case 13:
      return Ai('Suspense')
    case 19:
      return Ai('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = nd(e.type, !1)), e
    case 11:
      return (e = nd(e.type.render, !1)), e
    case 1:
      return (e = nd(e.type, !0)), e
    default:
      return ''
  }
}
function nf(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Ro:
      return 'Fragment'
    case ko:
      return 'Portal'
    case Zd:
      return 'Profiler'
    case Wg:
      return 'StrictMode'
    case ef:
      return 'Suspense'
    case tf:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case R0:
        return (e.displayName || 'Context') + '.Consumer'
      case k0:
        return (e._context.displayName || 'Context') + '.Provider'
      case Ug:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Yg:
        return (
          (t = e.displayName || null), t !== null ? t : nf(e.type) || 'Memo'
        )
      case la:
        ;(t = e._payload), (e = e._init)
        try {
          return nf(e(t))
        } catch {}
    }
  return null
}
function hw(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return nf(t)
    case 8:
      return t === Wg ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function $a(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function O0(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function mw(e) {
  var t = O0(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var a = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this)
        },
        set: function (i) {
          ;(r = '' + i), o.call(this, i)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (i) {
          r = '' + i
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function is(e) {
  e._valueTracker || (e._valueTracker = mw(e))
}
function _0(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = O0(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function iu(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function rf(e, t) {
  var n = t.checked
  return mt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function xm(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = $a(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function I0(e, t) {
  ;(t = t.checked), t != null && Bg(e, 'checked', t, !1)
}
function af(e, t) {
  I0(e, t)
  var n = $a(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? of(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && of(e, t.type, $a(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Em(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function of(e, t, n) {
  ;(t !== 'number' || iu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var ji = Array.isArray
function Vo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + $a(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        ;(e[a].selected = !0), r && (e[a].defaultSelected = !0)
        return
      }
      t !== null || e[a].disabled || (t = e[a])
    }
    t !== null && (t.selected = !0)
  }
}
function lf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(G(91))
  return mt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function $m(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(G(92))
      if (ji(n)) {
        if (1 < n.length) throw Error(G(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: $a(n) }
}
function T0(e, t) {
  var n = $a(t.value),
    r = $a(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Pm(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function F0(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function sf(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? F0(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var ls,
  N0 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, a)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ls = ls || document.createElement('div'),
          ls.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ls.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function sl(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Ui = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  vw = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Ui).forEach(function (e) {
  vw.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ui[t] = Ui[e])
  })
})
function D0(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ui.hasOwnProperty(e) && Ui[e])
      ? ('' + t).trim()
      : t + 'px'
}
function L0(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        a = D0(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a)
    }
}
var pw = mt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function uf(e, t) {
  if (t) {
    if (pw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(G(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(G(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(G(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(G(62))
  }
}
function cf(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var df = null
function qg(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var ff = null,
  Bo = null,
  Wo = null
function km(e) {
  if ((e = Ll(e))) {
    if (typeof ff != 'function') throw Error(G(280))
    var t = e.stateNode
    t && ((t = Ju(t)), ff(e.stateNode, e.type, t))
  }
}
function A0(e) {
  Bo ? (Wo ? Wo.push(e) : (Wo = [e])) : (Bo = e)
}
function j0() {
  if (Bo) {
    var e = Bo,
      t = Wo
    if (((Wo = Bo = null), km(e), t)) for (e = 0; e < t.length; e++) km(t[e])
  }
}
function z0(e, t) {
  return e(t)
}
function H0() {}
var rd = !1
function V0(e, t, n) {
  if (rd) return e(t, n)
  rd = !0
  try {
    return z0(e, t, n)
  } finally {
    ;(rd = !1), (Bo !== null || Wo !== null) && (H0(), j0())
  }
}
function ul(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Ju(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(G(231, t, typeof n))
  return n
}
var gf = !1
if (Br)
  try {
    var wi = {}
    Object.defineProperty(wi, 'passive', {
      get: function () {
        gf = !0
      },
    }),
      window.addEventListener('test', wi, wi),
      window.removeEventListener('test', wi, wi)
  } catch {
    gf = !1
  }
function yw(e, t, n, r, a, o, i, l, s) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var Yi = !1,
  lu = null,
  su = !1,
  hf = null,
  Sw = {
    onError: function (e) {
      ;(Yi = !0), (lu = e)
    },
  }
function bw(e, t, n, r, a, o, i, l, s) {
  ;(Yi = !1), (lu = null), yw.apply(Sw, arguments)
}
function Cw(e, t, n, r, a, o, i, l, s) {
  if ((bw.apply(this, arguments), Yi)) {
    if (Yi) {
      var u = lu
      ;(Yi = !1), (lu = null)
    } else throw Error(G(198))
    su || ((su = !0), (hf = u))
  }
}
function uo(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function B0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Rm(e) {
  if (uo(e) !== e) throw Error(G(188))
}
function ww(e) {
  var t = e.alternate
  if (!t) {
    if (((t = uo(e)), t === null)) throw Error(G(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var a = n.return
    if (a === null) break
    var o = a.alternate
    if (o === null) {
      if (((r = a.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (a.child === o.child) {
      for (o = a.child; o; ) {
        if (o === n) return Rm(a), e
        if (o === r) return Rm(a), t
        o = o.sibling
      }
      throw Error(G(188))
    }
    if (n.return !== r.return) (n = a), (r = o)
    else {
      for (var i = !1, l = a.child; l; ) {
        if (l === n) {
          ;(i = !0), (n = a), (r = o)
          break
        }
        if (l === r) {
          ;(i = !0), (r = a), (n = o)
          break
        }
        l = l.sibling
      }
      if (!i) {
        for (l = o.child; l; ) {
          if (l === n) {
            ;(i = !0), (n = o), (r = a)
            break
          }
          if (l === r) {
            ;(i = !0), (r = o), (n = a)
            break
          }
          l = l.sibling
        }
        if (!i) throw Error(G(189))
      }
    }
    if (n.alternate !== r) throw Error(G(190))
  }
  if (n.tag !== 3) throw Error(G(188))
  return n.stateNode.current === n ? e : t
}
function W0(e) {
  return (e = ww(e)), e !== null ? U0(e) : null
}
function U0(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = U0(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Y0 = Fn.unstable_scheduleCallback,
  Mm = Fn.unstable_cancelCallback,
  xw = Fn.unstable_shouldYield,
  Ew = Fn.unstable_requestPaint,
  wt = Fn.unstable_now,
  $w = Fn.unstable_getCurrentPriorityLevel,
  Kg = Fn.unstable_ImmediatePriority,
  q0 = Fn.unstable_UserBlockingPriority,
  uu = Fn.unstable_NormalPriority,
  Pw = Fn.unstable_LowPriority,
  K0 = Fn.unstable_IdlePriority,
  Ku = null,
  $r = null
function kw(e) {
  if ($r && typeof $r.onCommitFiberRoot == 'function')
    try {
      $r.onCommitFiberRoot(Ku, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var cr = Math.clz32 ? Math.clz32 : Ow,
  Rw = Math.log,
  Mw = Math.LN2
function Ow(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rw(e) / Mw) | 0)) | 0
}
var ss = 64,
  us = 4194304
function zi(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function cu(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    a = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455
  if (i !== 0) {
    var l = i & ~a
    l !== 0 ? (r = zi(l)) : ((o &= i), o !== 0 && (r = zi(o)))
  } else (i = n & ~a), i !== 0 ? (r = zi(i)) : o !== 0 && (r = zi(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & a) &&
    ((a = r & -r), (o = t & -t), a >= o || (a === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - cr(t)), (a = 1 << n), (r |= e[n]), (t &= ~a)
  return r
}
function _w(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Iw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      a = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - cr(o),
      l = 1 << i,
      s = a[i]
    s === -1
      ? (!(l & n) || l & r) && (a[i] = _w(l, t))
      : s <= t && (e.expiredLanes |= l),
      (o &= ~l)
  }
}
function mf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function G0() {
  var e = ss
  return (ss <<= 1), !(ss & 4194240) && (ss = 64), e
}
function ad(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Nl(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - cr(t)),
    (e[t] = n)
}
function Tw(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - cr(n),
      o = 1 << a
    ;(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o)
  }
}
function Gg(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - cr(n),
      a = 1 << r
    ;(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a)
  }
}
var nt = 0
function Q0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var X0,
  Qg,
  J0,
  Z0,
  ey,
  vf = !1,
  cs = [],
  va = null,
  pa = null,
  ya = null,
  cl = new Map(),
  dl = new Map(),
  ua = [],
  Fw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function Om(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      va = null
      break
    case 'dragenter':
    case 'dragleave':
      pa = null
      break
    case 'mouseover':
    case 'mouseout':
      ya = null
      break
    case 'pointerover':
    case 'pointerout':
      cl.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      dl.delete(t.pointerId)
  }
}
function xi(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [a],
      }),
      t !== null && ((t = Ll(t)), t !== null && Qg(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      a !== null && t.indexOf(a) === -1 && t.push(a),
      e)
}
function Nw(e, t, n, r, a) {
  switch (t) {
    case 'focusin':
      return (va = xi(va, e, t, n, r, a)), !0
    case 'dragenter':
      return (pa = xi(pa, e, t, n, r, a)), !0
    case 'mouseover':
      return (ya = xi(ya, e, t, n, r, a)), !0
    case 'pointerover':
      var o = a.pointerId
      return cl.set(o, xi(cl.get(o) || null, e, t, n, r, a)), !0
    case 'gotpointercapture':
      return (
        (o = a.pointerId), dl.set(o, xi(dl.get(o) || null, e, t, n, r, a)), !0
      )
  }
  return !1
}
function ty(e) {
  var t = Ba(e.target)
  if (t !== null) {
    var n = uo(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = B0(n)), t !== null)) {
          ;(e.blockedOn = t),
            ey(e.priority, function () {
              J0(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Hs(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(df = r), n.target.dispatchEvent(r), (df = null)
    } else return (t = Ll(n)), t !== null && Qg(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function _m(e, t, n) {
  Hs(e) && n.delete(t)
}
function Dw() {
  ;(vf = !1),
    va !== null && Hs(va) && (va = null),
    pa !== null && Hs(pa) && (pa = null),
    ya !== null && Hs(ya) && (ya = null),
    cl.forEach(_m),
    dl.forEach(_m)
}
function Ei(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vf ||
      ((vf = !0), Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority, Dw)))
}
function fl(e) {
  function t(a) {
    return Ei(a, e)
  }
  if (0 < cs.length) {
    Ei(cs[0], e)
    for (var n = 1; n < cs.length; n++) {
      var r = cs[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    va !== null && Ei(va, e),
      pa !== null && Ei(pa, e),
      ya !== null && Ei(ya, e),
      cl.forEach(t),
      dl.forEach(t),
      n = 0;
    n < ua.length;
    n++
  )
    (r = ua[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < ua.length && ((n = ua[0]), n.blockedOn === null); )
    ty(n), n.blockedOn === null && ua.shift()
}
var Uo = Gr.ReactCurrentBatchConfig,
  du = !0
function Lw(e, t, n, r) {
  var a = nt,
    o = Uo.transition
  Uo.transition = null
  try {
    ;(nt = 1), Xg(e, t, n, r)
  } finally {
    ;(nt = a), (Uo.transition = o)
  }
}
function Aw(e, t, n, r) {
  var a = nt,
    o = Uo.transition
  Uo.transition = null
  try {
    ;(nt = 4), Xg(e, t, n, r)
  } finally {
    ;(nt = a), (Uo.transition = o)
  }
}
function Xg(e, t, n, r) {
  if (du) {
    var a = pf(e, t, n, r)
    if (a === null) hd(e, t, r, fu, n), Om(e, r)
    else if (Nw(a, e, t, n, r)) r.stopPropagation()
    else if ((Om(e, r), t & 4 && -1 < Fw.indexOf(e))) {
      for (; a !== null; ) {
        var o = Ll(a)
        if (
          (o !== null && X0(o),
          (o = pf(e, t, n, r)),
          o === null && hd(e, t, r, fu, n),
          o === a)
        )
          break
        a = o
      }
      a !== null && r.stopPropagation()
    } else hd(e, t, r, null, n)
  }
}
var fu = null
function pf(e, t, n, r) {
  if (((fu = null), (e = qg(r)), (e = Ba(e)), e !== null))
    if (((t = uo(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = B0(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (fu = e), null
}
function ny(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch ($w()) {
        case Kg:
          return 1
        case q0:
          return 4
        case uu:
        case Pw:
          return 16
        case K0:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var da = null,
  Jg = null,
  Vs = null
function ry() {
  if (Vs) return Vs
  var e,
    t = Jg,
    n = t.length,
    r,
    a = 'value' in da ? da.value : da.textContent,
    o = a.length
  for (e = 0; e < n && t[e] === a[e]; e++);
  var i = n - e
  for (r = 1; r <= i && t[n - r] === a[o - r]; r++);
  return (Vs = a.slice(e, 1 < r ? 1 - r : void 0))
}
function Bs(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function ds() {
  return !0
}
function Im() {
  return !1
}
function An(e) {
  function t(n, r, a, o, i) {
    ;(this._reactName = n),
      (this._targetInst = a),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null)
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ds
        : Im),
      (this.isPropagationStopped = Im),
      this
    )
  }
  return (
    mt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ds))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ds))
      },
      persist: function () {},
      isPersistent: ds,
    }),
    t
  )
}
var di = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zg = An(di),
  Dl = mt({}, di, { view: 0, detail: 0 }),
  jw = An(Dl),
  od,
  id,
  $i,
  Gu = mt({}, Dl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: eh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== $i &&
            ($i && e.type === 'mousemove'
              ? ((od = e.screenX - $i.screenX), (id = e.screenY - $i.screenY))
              : (id = od = 0),
            ($i = e)),
          od)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : id
    },
  }),
  Tm = An(Gu),
  zw = mt({}, Gu, { dataTransfer: 0 }),
  Hw = An(zw),
  Vw = mt({}, Dl, { relatedTarget: 0 }),
  ld = An(Vw),
  Bw = mt({}, di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ww = An(Bw),
  Uw = mt({}, di, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Yw = An(Uw),
  qw = mt({}, di, { data: 0 }),
  Fm = An(qw),
  Kw = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Gw = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Qw = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Xw(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Qw[e]) ? !!t[e] : !1
}
function eh() {
  return Xw
}
var Jw = mt({}, Dl, {
    key: function (e) {
      if (e.key) {
        var t = Kw[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Bs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Gw[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: eh,
    charCode: function (e) {
      return e.type === 'keypress' ? Bs(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Bs(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    },
  }),
  Zw = An(Jw),
  ex = mt({}, Gu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Nm = An(ex),
  tx = mt({}, Dl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: eh,
  }),
  nx = An(tx),
  rx = mt({}, di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ax = An(rx),
  ox = mt({}, Gu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ix = An(ox),
  lx = [9, 13, 27, 32],
  th = Br && 'CompositionEvent' in window,
  qi = null
Br && 'documentMode' in document && (qi = document.documentMode)
var sx = Br && 'TextEvent' in window && !qi,
  ay = Br && (!th || (qi && 8 < qi && 11 >= qi)),
  Dm = ' ',
  Lm = !1
function oy(e, t) {
  switch (e) {
    case 'keyup':
      return lx.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function iy(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Mo = !1
function ux(e, t) {
  switch (e) {
    case 'compositionend':
      return iy(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Lm = !0), Dm)
    case 'textInput':
      return (e = t.data), e === Dm && Lm ? null : e
    default:
      return null
  }
}
function cx(e, t) {
  if (Mo)
    return e === 'compositionend' || (!th && oy(e, t))
      ? ((e = ry()), (Vs = Jg = da = null), (Mo = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return ay && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var dx = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Am(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!dx[e.type] : t === 'textarea'
}
function ly(e, t, n, r) {
  A0(r),
    (t = gu(t, 'onChange')),
    0 < t.length &&
      ((n = new Zg('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var Ki = null,
  gl = null
function fx(e) {
  yy(e, 0)
}
function Qu(e) {
  var t = Io(e)
  if (_0(t)) return e
}
function gx(e, t) {
  if (e === 'change') return t
}
var sy = !1
if (Br) {
  var sd
  if (Br) {
    var ud = 'oninput' in document
    if (!ud) {
      var jm = document.createElement('div')
      jm.setAttribute('oninput', 'return;'),
        (ud = typeof jm.oninput == 'function')
    }
    sd = ud
  } else sd = !1
  sy = sd && (!document.documentMode || 9 < document.documentMode)
}
function zm() {
  Ki && (Ki.detachEvent('onpropertychange', uy), (gl = Ki = null))
}
function uy(e) {
  if (e.propertyName === 'value' && Qu(gl)) {
    var t = []
    ly(t, gl, e, qg(e)), V0(fx, t)
  }
}
function hx(e, t, n) {
  e === 'focusin'
    ? (zm(), (Ki = t), (gl = n), Ki.attachEvent('onpropertychange', uy))
    : e === 'focusout' && zm()
}
function mx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Qu(gl)
}
function vx(e, t) {
  if (e === 'click') return Qu(t)
}
function px(e, t) {
  if (e === 'input' || e === 'change') return Qu(t)
}
function yx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var hr = typeof Object.is == 'function' ? Object.is : yx
function hl(e, t) {
  if (hr(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var a = n[r]
    if (!Jd.call(t, a) || !hr(e[a], t[a])) return !1
  }
  return !0
}
function Hm(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Vm(e, t) {
  var n = Hm(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Hm(n)
  }
}
function cy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? cy(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function dy() {
  for (var e = window, t = iu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = iu(e.document)
  }
  return t
}
function nh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Sx(e) {
  var t = dy(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    cy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && nh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var a = n.textContent.length,
          o = Math.min(r.start, a)
        ;(r = r.end === void 0 ? o : Math.min(r.end, a)),
          !e.extend && o > r && ((a = r), (r = o), (o = a)),
          (a = Vm(n, o))
        var i = Vm(n, r)
        a &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(a.node, a.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var bx = Br && 'documentMode' in document && 11 >= document.documentMode,
  Oo = null,
  yf = null,
  Gi = null,
  Sf = !1
function Bm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Sf ||
    Oo == null ||
    Oo !== iu(r) ||
    ((r = Oo),
    'selectionStart' in r && nh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gi && hl(Gi, r)) ||
      ((Gi = r),
      (r = gu(yf, 'onSelect')),
      0 < r.length &&
        ((t = new Zg('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Oo))))
}
function fs(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var _o = {
    animationend: fs('Animation', 'AnimationEnd'),
    animationiteration: fs('Animation', 'AnimationIteration'),
    animationstart: fs('Animation', 'AnimationStart'),
    transitionend: fs('Transition', 'TransitionEnd'),
  },
  cd = {},
  fy = {}
Br &&
  ((fy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete _o.animationend.animation,
    delete _o.animationiteration.animation,
    delete _o.animationstart.animation),
  'TransitionEvent' in window || delete _o.transitionend.transition)
function Xu(e) {
  if (cd[e]) return cd[e]
  if (!_o[e]) return e
  var t = _o[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in fy) return (cd[e] = t[n])
  return e
}
var gy = Xu('animationend'),
  hy = Xu('animationiteration'),
  my = Xu('animationstart'),
  vy = Xu('transitionend'),
  py = new Map(),
  Wm =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function ka(e, t) {
  py.set(e, t), so(t, [e])
}
for (var dd = 0; dd < Wm.length; dd++) {
  var fd = Wm[dd],
    Cx = fd.toLowerCase(),
    wx = fd[0].toUpperCase() + fd.slice(1)
  ka(Cx, 'on' + wx)
}
ka(gy, 'onAnimationEnd')
ka(hy, 'onAnimationIteration')
ka(my, 'onAnimationStart')
ka('dblclick', 'onDoubleClick')
ka('focusin', 'onFocus')
ka('focusout', 'onBlur')
ka(vy, 'onTransitionEnd')
Xo('onMouseEnter', ['mouseout', 'mouseover'])
Xo('onMouseLeave', ['mouseout', 'mouseover'])
Xo('onPointerEnter', ['pointerout', 'pointerover'])
Xo('onPointerLeave', ['pointerout', 'pointerover'])
so(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
so(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
so('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
so(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
so(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
so(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var Hi =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  xx = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Hi))
function Um(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Cw(r, t, void 0, e), (e.currentTarget = null)
}
function yy(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      a = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            s = l.instance,
            u = l.currentTarget
          if (((l = l.listener), s !== o && a.isPropagationStopped())) break e
          Um(a, l, u), (o = s)
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== o && a.isPropagationStopped())
          )
            break e
          Um(a, l, u), (o = s)
        }
    }
  }
  if (su) throw ((e = hf), (su = !1), (hf = null), e)
}
function st(e, t) {
  var n = t[Ef]
  n === void 0 && (n = t[Ef] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Sy(t, e, 2, !1), n.add(r))
}
function gd(e, t, n) {
  var r = 0
  t && (r |= 4), Sy(n, e, r, t)
}
var gs = '_reactListening' + Math.random().toString(36).slice(2)
function ml(e) {
  if (!e[gs]) {
    ;(e[gs] = !0),
      P0.forEach(function (n) {
        n !== 'selectionchange' && (xx.has(n) || gd(n, !1, e), gd(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[gs] || ((t[gs] = !0), gd('selectionchange', !1, t))
  }
}
function Sy(e, t, n, r) {
  switch (ny(t)) {
    case 1:
      var a = Lw
      break
    case 4:
      a = Aw
      break
    default:
      a = Xg
  }
  ;(n = a.bind(null, t, n, e)),
    (a = void 0),
    !gf ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (a = !0),
    r
      ? a !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : a !== void 0
        ? e.addEventListener(t, n, { passive: a })
        : e.addEventListener(t, n, !1)
}
function hd(e, t, n, r, a) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var i = r.tag
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo
        if (l === a || (l.nodeType === 8 && l.parentNode === a)) break
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === a || (s.nodeType === 8 && s.parentNode === a))
            )
              return
            i = i.return
          }
        for (; l !== null; ) {
          if (((i = Ba(l)), i === null)) return
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  V0(function () {
    var u = o,
      c = qg(n),
      d = []
    e: {
      var f = py.get(e)
      if (f !== void 0) {
        var y = Zg,
          v = e
        switch (e) {
          case 'keypress':
            if (Bs(n) === 0) break e
          case 'keydown':
          case 'keyup':
            y = Zw
            break
          case 'focusin':
            ;(v = 'focus'), (y = ld)
            break
          case 'focusout':
            ;(v = 'blur'), (y = ld)
            break
          case 'beforeblur':
          case 'afterblur':
            y = ld
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = Tm
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Hw
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = nx
            break
          case gy:
          case hy:
          case my:
            y = Ww
            break
          case vy:
            y = ax
            break
          case 'scroll':
            y = jw
            break
          case 'wheel':
            y = ix
            break
          case 'copy':
          case 'cut':
          case 'paste':
            y = Yw
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = Nm
        }
        var p = (t & 4) !== 0,
          b = !p && e === 'scroll',
          m = p ? (f !== null ? f + 'Capture' : null) : f
        p = []
        for (var h = u, S; h !== null; ) {
          S = h
          var C = S.stateNode
          if (
            (S.tag === 5 &&
              C !== null &&
              ((S = C),
              m !== null && ((C = ul(h, m)), C != null && p.push(vl(h, C, S)))),
            b)
          )
            break
          h = h.return
        }
        0 < p.length &&
          ((f = new y(f, v, null, n, c)), d.push({ event: f, listeners: p }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== df &&
            (v = n.relatedTarget || n.fromElement) &&
            (Ba(v) || v[Wr]))
        )
          break e
        if (
          (y || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Ba(v) : null),
              v !== null &&
                ((b = uo(v)), v !== b || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((p = Tm),
            (C = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((p = Nm),
              (C = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (h = 'pointer')),
            (b = y == null ? f : Io(y)),
            (S = v == null ? f : Io(v)),
            (f = new p(C, h + 'leave', y, n, c)),
            (f.target = b),
            (f.relatedTarget = S),
            (C = null),
            Ba(c) === u &&
              ((p = new p(m, h + 'enter', v, n, c)),
              (p.target = S),
              (p.relatedTarget = b),
              (C = p)),
            (b = C),
            y && v)
          )
            t: {
              for (p = y, m = v, h = 0, S = p; S; S = yo(S)) h++
              for (S = 0, C = m; C; C = yo(C)) S++
              for (; 0 < h - S; ) (p = yo(p)), h--
              for (; 0 < S - h; ) (m = yo(m)), S--
              for (; h--; ) {
                if (p === m || (m !== null && p === m.alternate)) break t
                ;(p = yo(p)), (m = yo(m))
              }
              p = null
            }
          else p = null
          y !== null && Ym(d, f, y, p, !1),
            v !== null && b !== null && Ym(d, b, v, p, !0)
        }
      }
      e: {
        if (
          ((f = u ? Io(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && f.type === 'file'))
        )
          var w = gx
        else if (Am(f))
          if (sy) w = px
          else {
            w = mx
            var E = hx
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (w = vx)
        if (w && (w = w(e, u))) {
          ly(d, w, n, c)
          break e
        }
        E && E(e, f, u),
          e === 'focusout' &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === 'number' &&
            of(f, 'number', f.value)
      }
      switch (((E = u ? Io(u) : window), e)) {
        case 'focusin':
          ;(Am(E) || E.contentEditable === 'true') &&
            ((Oo = E), (yf = u), (Gi = null))
          break
        case 'focusout':
          Gi = yf = Oo = null
          break
        case 'mousedown':
          Sf = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Sf = !1), Bm(d, n, c)
          break
        case 'selectionchange':
          if (bx) break
        case 'keydown':
        case 'keyup':
          Bm(d, n, c)
      }
      var x
      if (th)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart'
              break e
            case 'compositionend':
              R = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              R = 'onCompositionUpdate'
              break e
          }
          R = void 0
        }
      else
        Mo
          ? oy(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart')
      R &&
        (ay &&
          n.locale !== 'ko' &&
          (Mo || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && Mo && (x = ry())
            : ((da = c),
              (Jg = 'value' in da ? da.value : da.textContent),
              (Mo = !0))),
        (E = gu(u, R)),
        0 < E.length &&
          ((R = new Fm(R, e, null, n, c)),
          d.push({ event: R, listeners: E }),
          x ? (R.data = x) : ((x = iy(n)), x !== null && (R.data = x)))),
        (x = sx ? ux(e, n) : cx(e, n)) &&
          ((u = gu(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Fm('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = x)))
    }
    yy(d, t)
  })
}
function vl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function gu(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var a = e,
      o = a.stateNode
    a.tag === 5 &&
      o !== null &&
      ((a = o),
      (o = ul(e, n)),
      o != null && r.unshift(vl(e, o, a)),
      (o = ul(e, t)),
      o != null && r.push(vl(e, o, a))),
      (e = e.return)
  }
  return r
}
function yo(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Ym(e, t, n, r, a) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode
    if (s !== null && s === r) break
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      a
        ? ((s = ul(n, o)), s != null && i.unshift(vl(n, s, l)))
        : a || ((s = ul(n, o)), s != null && i.push(vl(n, s, l)))),
      (n = n.return)
  }
  i.length !== 0 && e.push({ event: t, listeners: i })
}
var Ex = /\r\n?/g,
  $x = /\u0000|\uFFFD/g
function qm(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Ex,
      `
`,
    )
    .replace($x, '')
}
function hs(e, t, n) {
  if (((t = qm(t)), qm(e) !== t && n)) throw Error(G(425))
}
function hu() {}
var bf = null,
  Cf = null
function wf(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var xf = typeof setTimeout == 'function' ? setTimeout : void 0,
  Px = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Km = typeof Promise == 'function' ? Promise : void 0,
  kx =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Km < 'u'
        ? function (e) {
            return Km.resolve(null).then(e).catch(Rx)
          }
        : xf
function Rx(e) {
  setTimeout(function () {
    throw e
  })
}
function md(e, t) {
  var n = t,
    r = 0
  do {
    var a = n.nextSibling
    if ((e.removeChild(n), a && a.nodeType === 8))
      if (((n = a.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(a), fl(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = a
  } while (n)
  fl(t)
}
function Sa(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Gm(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var fi = Math.random().toString(36).slice(2),
  wr = '__reactFiber$' + fi,
  pl = '__reactProps$' + fi,
  Wr = '__reactContainer$' + fi,
  Ef = '__reactEvents$' + fi,
  Mx = '__reactListeners$' + fi,
  Ox = '__reactHandles$' + fi
function Ba(e) {
  var t = e[wr]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Wr] || n[wr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gm(e); e !== null; ) {
          if ((n = e[wr])) return n
          e = Gm(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Ll(e) {
  return (
    (e = e[wr] || e[Wr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Io(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(G(33))
}
function Ju(e) {
  return e[pl] || null
}
var $f = [],
  To = -1
function Ra(e) {
  return { current: e }
}
function ut(e) {
  0 > To || ((e.current = $f[To]), ($f[To] = null), To--)
}
function lt(e, t) {
  To++, ($f[To] = e.current), (e.current = t)
}
var Pa = {},
  Jt = Ra(Pa),
  hn = Ra(!1),
  Ja = Pa
function Jo(e, t) {
  var n = e.type.contextTypes
  if (!n) return Pa
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var a = {},
    o
  for (o in n) a[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  )
}
function mn(e) {
  return (e = e.childContextTypes), e != null
}
function mu() {
  ut(hn), ut(Jt)
}
function Qm(e, t, n) {
  if (Jt.current !== Pa) throw Error(G(168))
  lt(Jt, t), lt(hn, n)
}
function by(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var a in r) if (!(a in t)) throw Error(G(108, hw(e) || 'Unknown', a))
  return mt({}, n, r)
}
function vu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pa),
    (Ja = Jt.current),
    lt(Jt, e),
    lt(hn, hn.current),
    !0
  )
}
function Xm(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(G(169))
  n
    ? ((e = by(e, t, Ja)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ut(hn),
      ut(Jt),
      lt(Jt, e))
    : ut(hn),
    lt(hn, n)
}
var Lr = null,
  Zu = !1,
  vd = !1
function Cy(e) {
  Lr === null ? (Lr = [e]) : Lr.push(e)
}
function _x(e) {
  ;(Zu = !0), Cy(e)
}
function Ma() {
  if (!vd && Lr !== null) {
    vd = !0
    var e = 0,
      t = nt
    try {
      var n = Lr
      for (nt = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Lr = null), (Zu = !1)
    } catch (a) {
      throw (Lr !== null && (Lr = Lr.slice(e + 1)), Y0(Kg, Ma), a)
    } finally {
      ;(nt = t), (vd = !1)
    }
  }
  return null
}
var Fo = [],
  No = 0,
  pu = null,
  yu = 0,
  Un = [],
  Yn = 0,
  Za = null,
  jr = 1,
  zr = ''
function ja(e, t) {
  ;(Fo[No++] = yu), (Fo[No++] = pu), (pu = e), (yu = t)
}
function wy(e, t, n) {
  ;(Un[Yn++] = jr), (Un[Yn++] = zr), (Un[Yn++] = Za), (Za = e)
  var r = jr
  e = zr
  var a = 32 - cr(r) - 1
  ;(r &= ~(1 << a)), (n += 1)
  var o = 32 - cr(t) + a
  if (30 < o) {
    var i = a - (a % 5)
    ;(o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (a -= i),
      (jr = (1 << (32 - cr(t) + a)) | (n << a) | r),
      (zr = o + e)
  } else (jr = (1 << o) | (n << a) | r), (zr = e)
}
function rh(e) {
  e.return !== null && (ja(e, 1), wy(e, 1, 0))
}
function ah(e) {
  for (; e === pu; )
    (pu = Fo[--No]), (Fo[No] = null), (yu = Fo[--No]), (Fo[No] = null)
  for (; e === Za; )
    (Za = Un[--Yn]),
      (Un[Yn] = null),
      (zr = Un[--Yn]),
      (Un[Yn] = null),
      (jr = Un[--Yn]),
      (Un[Yn] = null)
}
var Tn = null,
  _n = null,
  dt = !1,
  ur = null
function xy(e, t) {
  var n = qn(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Jm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Tn = e), (_n = Sa(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Tn = e), (_n = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Za !== null ? { id: jr, overflow: zr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = qn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Tn = e),
            (_n = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Pf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function kf(e) {
  if (dt) {
    var t = _n
    if (t) {
      var n = t
      if (!Jm(e, t)) {
        if (Pf(e)) throw Error(G(418))
        t = Sa(n.nextSibling)
        var r = Tn
        t && Jm(e, t)
          ? xy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (dt = !1), (Tn = e))
      }
    } else {
      if (Pf(e)) throw Error(G(418))
      ;(e.flags = (e.flags & -4097) | 2), (dt = !1), (Tn = e)
    }
  }
}
function Zm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Tn = e
}
function ms(e) {
  if (e !== Tn) return !1
  if (!dt) return Zm(e), (dt = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !wf(e.type, e.memoizedProps))),
    t && (t = _n))
  ) {
    if (Pf(e)) throw (Ey(), Error(G(418)))
    for (; t; ) xy(e, t), (t = Sa(t.nextSibling))
  }
  if ((Zm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(G(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              _n = Sa(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      _n = null
    }
  } else _n = Tn ? Sa(e.stateNode.nextSibling) : null
  return !0
}
function Ey() {
  for (var e = _n; e; ) e = Sa(e.nextSibling)
}
function Zo() {
  ;(_n = Tn = null), (dt = !1)
}
function oh(e) {
  ur === null ? (ur = [e]) : ur.push(e)
}
var Ix = Gr.ReactCurrentBatchConfig
function Pi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(G(309))
        var r = n.stateNode
      }
      if (!r) throw Error(G(147, e))
      var a = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var l = a.refs
            i === null ? delete l[o] : (l[o] = i)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(G(284))
    if (!n._owner) throw Error(G(290, e))
  }
  return e
}
function vs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      G(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function ev(e) {
  var t = e._init
  return t(e._payload)
}
function $y(e) {
  function t(m, h) {
    if (e) {
      var S = m.deletions
      S === null ? ((m.deletions = [h]), (m.flags |= 16)) : S.push(h)
    }
  }
  function n(m, h) {
    if (!e) return null
    for (; h !== null; ) t(m, h), (h = h.sibling)
    return null
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling)
    return m
  }
  function a(m, h) {
    return (m = xa(m, h)), (m.index = 0), (m.sibling = null), m
  }
  function o(m, h, S) {
    return (
      (m.index = S),
      e
        ? ((S = m.alternate),
          S !== null
            ? ((S = S.index), S < h ? ((m.flags |= 2), h) : S)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    )
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function l(m, h, S, C) {
    return h === null || h.tag !== 6
      ? ((h = xd(S, m.mode, C)), (h.return = m), h)
      : ((h = a(h, S)), (h.return = m), h)
  }
  function s(m, h, S, C) {
    var w = S.type
    return w === Ro
      ? c(m, h, S.props.children, C, S.key)
      : h !== null &&
          (h.elementType === w ||
            (typeof w == 'object' &&
              w !== null &&
              w.$$typeof === la &&
              ev(w) === h.type))
        ? ((C = a(h, S.props)), (C.ref = Pi(m, h, S)), (C.return = m), C)
        : ((C = Qs(S.type, S.key, S.props, null, m.mode, C)),
          (C.ref = Pi(m, h, S)),
          (C.return = m),
          C)
  }
  function u(m, h, S, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== S.containerInfo ||
      h.stateNode.implementation !== S.implementation
      ? ((h = Ed(S, m.mode, C)), (h.return = m), h)
      : ((h = a(h, S.children || [])), (h.return = m), h)
  }
  function c(m, h, S, C, w) {
    return h === null || h.tag !== 7
      ? ((h = Ga(S, m.mode, C, w)), (h.return = m), h)
      : ((h = a(h, S)), (h.return = m), h)
  }
  function d(m, h, S) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = xd('' + h, m.mode, S)), (h.return = m), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case os:
          return (
            (S = Qs(h.type, h.key, h.props, null, m.mode, S)),
            (S.ref = Pi(m, null, h)),
            (S.return = m),
            S
          )
        case ko:
          return (h = Ed(h, m.mode, S)), (h.return = m), h
        case la:
          var C = h._init
          return d(m, C(h._payload), S)
      }
      if (ji(h) || Ci(h)) return (h = Ga(h, m.mode, S, null)), (h.return = m), h
      vs(m, h)
    }
    return null
  }
  function f(m, h, S, C) {
    var w = h !== null ? h.key : null
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return w !== null ? null : l(m, h, '' + S, C)
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case os:
          return S.key === w ? s(m, h, S, C) : null
        case ko:
          return S.key === w ? u(m, h, S, C) : null
        case la:
          return (w = S._init), f(m, h, w(S._payload), C)
      }
      if (ji(S) || Ci(S)) return w !== null ? null : c(m, h, S, C, null)
      vs(m, S)
    }
    return null
  }
  function y(m, h, S, C, w) {
    if ((typeof C == 'string' && C !== '') || typeof C == 'number')
      return (m = m.get(S) || null), l(h, m, '' + C, w)
    if (typeof C == 'object' && C !== null) {
      switch (C.$$typeof) {
        case os:
          return (m = m.get(C.key === null ? S : C.key) || null), s(h, m, C, w)
        case ko:
          return (m = m.get(C.key === null ? S : C.key) || null), u(h, m, C, w)
        case la:
          var E = C._init
          return y(m, h, S, E(C._payload), w)
      }
      if (ji(C) || Ci(C)) return (m = m.get(S) || null), c(h, m, C, w, null)
      vs(h, C)
    }
    return null
  }
  function v(m, h, S, C) {
    for (
      var w = null, E = null, x = h, R = (h = 0), F = null;
      x !== null && R < S.length;
      R++
    ) {
      x.index > R ? ((F = x), (x = null)) : (F = x.sibling)
      var _ = f(m, x, S[R], C)
      if (_ === null) {
        x === null && (x = F)
        break
      }
      e && x && _.alternate === null && t(m, x),
        (h = o(_, h, R)),
        E === null ? (w = _) : (E.sibling = _),
        (E = _),
        (x = F)
    }
    if (R === S.length) return n(m, x), dt && ja(m, R), w
    if (x === null) {
      for (; R < S.length; R++)
        (x = d(m, S[R], C)),
          x !== null &&
            ((h = o(x, h, R)), E === null ? (w = x) : (E.sibling = x), (E = x))
      return dt && ja(m, R), w
    }
    for (x = r(m, x); R < S.length; R++)
      (F = y(x, m, R, S[R], C)),
        F !== null &&
          (e && F.alternate !== null && x.delete(F.key === null ? R : F.key),
          (h = o(F, h, R)),
          E === null ? (w = F) : (E.sibling = F),
          (E = F))
    return (
      e &&
        x.forEach(function (T) {
          return t(m, T)
        }),
      dt && ja(m, R),
      w
    )
  }
  function p(m, h, S, C) {
    var w = Ci(S)
    if (typeof w != 'function') throw Error(G(150))
    if (((S = w.call(S)), S == null)) throw Error(G(151))
    for (
      var E = (w = null), x = h, R = (h = 0), F = null, _ = S.next();
      x !== null && !_.done;
      R++, _ = S.next()
    ) {
      x.index > R ? ((F = x), (x = null)) : (F = x.sibling)
      var T = f(m, x, _.value, C)
      if (T === null) {
        x === null && (x = F)
        break
      }
      e && x && T.alternate === null && t(m, x),
        (h = o(T, h, R)),
        E === null ? (w = T) : (E.sibling = T),
        (E = T),
        (x = F)
    }
    if (_.done) return n(m, x), dt && ja(m, R), w
    if (x === null) {
      for (; !_.done; R++, _ = S.next())
        (_ = d(m, _.value, C)),
          _ !== null &&
            ((h = o(_, h, R)), E === null ? (w = _) : (E.sibling = _), (E = _))
      return dt && ja(m, R), w
    }
    for (x = r(m, x); !_.done; R++, _ = S.next())
      (_ = y(x, m, R, _.value, C)),
        _ !== null &&
          (e && _.alternate !== null && x.delete(_.key === null ? R : _.key),
          (h = o(_, h, R)),
          E === null ? (w = _) : (E.sibling = _),
          (E = _))
    return (
      e &&
        x.forEach(function (j) {
          return t(m, j)
        }),
      dt && ja(m, R),
      w
    )
  }
  function b(m, h, S, C) {
    if (
      (typeof S == 'object' &&
        S !== null &&
        S.type === Ro &&
        S.key === null &&
        (S = S.props.children),
      typeof S == 'object' && S !== null)
    ) {
      switch (S.$$typeof) {
        case os:
          e: {
            for (var w = S.key, E = h; E !== null; ) {
              if (E.key === w) {
                if (((w = S.type), w === Ro)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (h = a(E, S.props.children)),
                      (h.return = m),
                      (m = h)
                    break e
                  }
                } else if (
                  E.elementType === w ||
                  (typeof w == 'object' &&
                    w !== null &&
                    w.$$typeof === la &&
                    ev(w) === E.type)
                ) {
                  n(m, E.sibling),
                    (h = a(E, S.props)),
                    (h.ref = Pi(m, E, S)),
                    (h.return = m),
                    (m = h)
                  break e
                }
                n(m, E)
                break
              } else t(m, E)
              E = E.sibling
            }
            S.type === Ro
              ? ((h = Ga(S.props.children, m.mode, C, S.key)),
                (h.return = m),
                (m = h))
              : ((C = Qs(S.type, S.key, S.props, null, m.mode, C)),
                (C.ref = Pi(m, h, S)),
                (C.return = m),
                (m = C))
          }
          return i(m)
        case ko:
          e: {
            for (E = S.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === S.containerInfo &&
                  h.stateNode.implementation === S.implementation
                ) {
                  n(m, h.sibling),
                    (h = a(h, S.children || [])),
                    (h.return = m),
                    (m = h)
                  break e
                } else {
                  n(m, h)
                  break
                }
              else t(m, h)
              h = h.sibling
            }
            ;(h = Ed(S, m.mode, C)), (h.return = m), (m = h)
          }
          return i(m)
        case la:
          return (E = S._init), b(m, h, E(S._payload), C)
      }
      if (ji(S)) return v(m, h, S, C)
      if (Ci(S)) return p(m, h, S, C)
      vs(m, S)
    }
    return (typeof S == 'string' && S !== '') || typeof S == 'number'
      ? ((S = '' + S),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = a(h, S)), (h.return = m), (m = h))
          : (n(m, h), (h = xd(S, m.mode, C)), (h.return = m), (m = h)),
        i(m))
      : n(m, h)
  }
  return b
}
var ei = $y(!0),
  Py = $y(!1),
  Su = Ra(null),
  bu = null,
  Do = null,
  ih = null
function lh() {
  ih = Do = bu = null
}
function sh(e) {
  var t = Su.current
  ut(Su), (e._currentValue = t)
}
function Rf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Yo(e, t) {
  ;(bu = e),
    (ih = Do = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (gn = !0), (e.firstContext = null))
}
function Qn(e) {
  var t = e._currentValue
  if (ih !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Do === null)) {
      if (bu === null) throw Error(G(308))
      ;(Do = e), (bu.dependencies = { lanes: 0, firstContext: e })
    } else Do = Do.next = e
  return t
}
var Wa = null
function uh(e) {
  Wa === null ? (Wa = [e]) : Wa.push(e)
}
function ky(e, t, n, r) {
  var a = t.interleaved
  return (
    a === null ? ((n.next = n), uh(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    Ur(e, r)
  )
}
function Ur(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var sa = !1
function ch(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Ry(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Hr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function ba(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), Ge & 2)) {
    var a = r.pending
    return (
      a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (r.pending = t),
      Ur(e, n)
    )
  }
  return (
    (a = r.interleaved),
    a === null ? ((t.next = t), uh(r)) : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    Ur(e, n)
  )
}
function Ws(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gg(e, n)
  }
}
function tv(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var a = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (a = o = i) : (o = o.next = i), (n = n.next)
      } while (n !== null)
      o === null ? (a = o = t) : (o = o.next = t)
    } else a = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Cu(e, t, n, r) {
  var a = e.updateQueue
  sa = !1
  var o = a.firstBaseUpdate,
    i = a.lastBaseUpdate,
    l = a.shared.pending
  if (l !== null) {
    a.shared.pending = null
    var s = l,
      u = s.next
    ;(s.next = null), i === null ? (o = u) : (i.next = u), (i = s)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== i &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)))
  }
  if (o !== null) {
    var d = a.baseState
    ;(i = 0), (c = u = s = null), (l = o)
    do {
      var f = l.lane,
        y = l.eventTime
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            })
        e: {
          var v = e,
            p = l
          switch (((f = t), (y = n), p.tag)) {
            case 1:
              if (((v = p.payload), typeof v == 'function')) {
                d = v.call(y, d, f)
                break e
              }
              d = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (
                ((v = p.payload),
                (f = typeof v == 'function' ? v.call(y, d, f) : v),
                f == null)
              )
                break e
              d = mt({}, d, f)
              break e
            case 2:
              sa = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = a.effects),
          f === null ? (a.effects = [l]) : f.push(l))
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (s = d)) : (c = c.next = y),
          (i |= f)
      if (((l = l.next), l === null)) {
        if (((l = a.shared.pending), l === null)) break
        ;(f = l),
          (l = f.next),
          (f.next = null),
          (a.lastBaseUpdate = f),
          (a.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (s = d),
      (a.baseState = s),
      (a.firstBaseUpdate = u),
      (a.lastBaseUpdate = c),
      (t = a.shared.interleaved),
      t !== null)
    ) {
      a = t
      do (i |= a.lane), (a = a.next)
      while (a !== t)
    } else o === null && (a.shared.lanes = 0)
    ;(to |= i), (e.lanes = i), (e.memoizedState = d)
  }
}
function nv(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback
      if (a !== null) {
        if (((r.callback = null), (r = n), typeof a != 'function'))
          throw Error(G(191, a))
        a.call(r)
      }
    }
}
var Al = {},
  Pr = Ra(Al),
  yl = Ra(Al),
  Sl = Ra(Al)
function Ua(e) {
  if (e === Al) throw Error(G(174))
  return e
}
function dh(e, t) {
  switch ((lt(Sl, t), lt(yl, e), lt(Pr, Al), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : sf(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = sf(t, e))
  }
  ut(Pr), lt(Pr, t)
}
function ti() {
  ut(Pr), ut(yl), ut(Sl)
}
function My(e) {
  Ua(Sl.current)
  var t = Ua(Pr.current),
    n = sf(t, e.type)
  t !== n && (lt(yl, e), lt(Pr, n))
}
function fh(e) {
  yl.current === e && (ut(Pr), ut(yl))
}
var gt = Ra(0)
function wu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var pd = []
function gh() {
  for (var e = 0; e < pd.length; e++) pd[e]._workInProgressVersionPrimary = null
  pd.length = 0
}
var Us = Gr.ReactCurrentDispatcher,
  yd = Gr.ReactCurrentBatchConfig,
  eo = 0,
  ht = null,
  It = null,
  Dt = null,
  xu = !1,
  Qi = !1,
  bl = 0,
  Tx = 0
function Kt() {
  throw Error(G(321))
}
function hh(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!hr(e[n], t[n])) return !1
  return !0
}
function mh(e, t, n, r, a, o) {
  if (
    ((eo = o),
    (ht = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Us.current = e === null || e.memoizedState === null ? Lx : Ax),
    (e = n(r, a)),
    Qi)
  ) {
    o = 0
    do {
      if (((Qi = !1), (bl = 0), 25 <= o)) throw Error(G(301))
      ;(o += 1),
        (Dt = It = null),
        (t.updateQueue = null),
        (Us.current = jx),
        (e = n(r, a))
    } while (Qi)
  }
  if (
    ((Us.current = Eu),
    (t = It !== null && It.next !== null),
    (eo = 0),
    (Dt = It = ht = null),
    (xu = !1),
    t)
  )
    throw Error(G(300))
  return e
}
function vh() {
  var e = bl !== 0
  return (bl = 0), e
}
function Cr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return Dt === null ? (ht.memoizedState = Dt = e) : (Dt = Dt.next = e), Dt
}
function Xn() {
  if (It === null) {
    var e = ht.alternate
    e = e !== null ? e.memoizedState : null
  } else e = It.next
  var t = Dt === null ? ht.memoizedState : Dt.next
  if (t !== null) (Dt = t), (It = e)
  else {
    if (e === null) throw Error(G(310))
    ;(It = e),
      (e = {
        memoizedState: It.memoizedState,
        baseState: It.baseState,
        baseQueue: It.baseQueue,
        queue: It.queue,
        next: null,
      }),
      Dt === null ? (ht.memoizedState = Dt = e) : (Dt = Dt.next = e)
  }
  return Dt
}
function Cl(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Sd(e) {
  var t = Xn(),
    n = t.queue
  if (n === null) throw Error(G(311))
  n.lastRenderedReducer = e
  var r = It,
    a = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (a !== null) {
      var i = a.next
      ;(a.next = o.next), (o.next = i)
    }
    ;(r.baseQueue = a = o), (n.pending = null)
  }
  if (a !== null) {
    ;(o = a.next), (r = r.baseState)
    var l = (i = null),
      s = null,
      u = o
    do {
      var c = u.lane
      if ((eo & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        s === null ? ((l = s = d), (i = r)) : (s = s.next = d),
          (ht.lanes |= c),
          (to |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    s === null ? (i = r) : (s.next = l),
      hr(r, t.memoizedState) || (gn = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    a = e
    do (o = a.lane), (ht.lanes |= o), (to |= o), (a = a.next)
    while (a !== e)
  } else a === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function bd(e) {
  var t = Xn(),
    n = t.queue
  if (n === null) throw Error(G(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    a = n.pending,
    o = t.memoizedState
  if (a !== null) {
    n.pending = null
    var i = (a = a.next)
    do (o = e(o, i.action)), (i = i.next)
    while (i !== a)
    hr(o, t.memoizedState) || (gn = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function Oy() {}
function _y(e, t) {
  var n = ht,
    r = Xn(),
    a = t(),
    o = !hr(r.memoizedState, a)
  if (
    (o && ((r.memoizedState = a), (gn = !0)),
    (r = r.queue),
    ph(Fy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Dt !== null && Dt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wl(9, Ty.bind(null, n, r, a, t), void 0, null),
      Lt === null)
    )
      throw Error(G(349))
    eo & 30 || Iy(n, t, a)
  }
  return a
}
function Iy(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ht.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ht.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Ty(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Ny(t) && Dy(e)
}
function Fy(e, t, n) {
  return n(function () {
    Ny(t) && Dy(e)
  })
}
function Ny(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !hr(e, n)
  } catch {
    return !0
  }
}
function Dy(e) {
  var t = Ur(e, 1)
  t !== null && dr(t, e, 1, -1)
}
function rv(e) {
  var t = Cr()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Dx.bind(null, ht, e)),
    [t.memoizedState, e]
  )
}
function wl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ht.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ht.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Ly() {
  return Xn().memoizedState
}
function Ys(e, t, n, r) {
  var a = Cr()
  ;(ht.flags |= e),
    (a.memoizedState = wl(1 | t, n, void 0, r === void 0 ? null : r))
}
function ec(e, t, n, r) {
  var a = Xn()
  r = r === void 0 ? null : r
  var o = void 0
  if (It !== null) {
    var i = It.memoizedState
    if (((o = i.destroy), r !== null && hh(r, i.deps))) {
      a.memoizedState = wl(t, n, o, r)
      return
    }
  }
  ;(ht.flags |= e), (a.memoizedState = wl(1 | t, n, o, r))
}
function av(e, t) {
  return Ys(8390656, 8, e, t)
}
function ph(e, t) {
  return ec(2048, 8, e, t)
}
function Ay(e, t) {
  return ec(4, 2, e, t)
}
function jy(e, t) {
  return ec(4, 4, e, t)
}
function zy(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Hy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ec(4, 4, zy.bind(null, t, e), n)
  )
}
function yh() {}
function Vy(e, t) {
  var n = Xn()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && hh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function By(e, t) {
  var n = Xn()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && hh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Wy(e, t, n) {
  return eo & 21
    ? (hr(n, t) || ((n = G0()), (ht.lanes |= n), (to |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (gn = !0)), (e.memoizedState = n))
}
function Fx(e, t) {
  var n = nt
  ;(nt = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = yd.transition
  yd.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(nt = n), (yd.transition = r)
  }
}
function Uy() {
  return Xn().memoizedState
}
function Nx(e, t, n) {
  var r = wa(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yy(e))
  )
    qy(t, n)
  else if (((n = ky(e, t, n, r)), n !== null)) {
    var a = rn()
    dr(n, e, r, a), Ky(n, t, r)
  }
}
function Dx(e, t, n) {
  var r = wa(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Yy(e)) qy(t, a)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = o(i, n)
        if (((a.hasEagerState = !0), (a.eagerState = l), hr(l, i))) {
          var s = t.interleaved
          s === null
            ? ((a.next = a), uh(t))
            : ((a.next = s.next), (s.next = a)),
            (t.interleaved = a)
          return
        }
      } catch {
      } finally {
      }
    ;(n = ky(e, t, a, r)),
      n !== null && ((a = rn()), dr(n, e, r, a), Ky(n, t, r))
  }
}
function Yy(e) {
  var t = e.alternate
  return e === ht || (t !== null && t === ht)
}
function qy(e, t) {
  Qi = xu = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Ky(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gg(e, n)
  }
}
var Eu = {
    readContext: Qn,
    useCallback: Kt,
    useContext: Kt,
    useEffect: Kt,
    useImperativeHandle: Kt,
    useInsertionEffect: Kt,
    useLayoutEffect: Kt,
    useMemo: Kt,
    useReducer: Kt,
    useRef: Kt,
    useState: Kt,
    useDebugValue: Kt,
    useDeferredValue: Kt,
    useTransition: Kt,
    useMutableSource: Kt,
    useSyncExternalStore: Kt,
    useId: Kt,
    unstable_isNewReconciler: !1,
  },
  Lx = {
    readContext: Qn,
    useCallback: function (e, t) {
      return (Cr().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Qn,
    useEffect: av,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ys(4194308, 4, zy.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Ys(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ys(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Cr()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Cr()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Nx.bind(null, ht, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Cr()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: rv,
    useDebugValue: yh,
    useDeferredValue: function (e) {
      return (Cr().memoizedState = e)
    },
    useTransition: function () {
      var e = rv(!1),
        t = e[0]
      return (e = Fx.bind(null, e[1])), (Cr().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ht,
        a = Cr()
      if (dt) {
        if (n === void 0) throw Error(G(407))
        n = n()
      } else {
        if (((n = t()), Lt === null)) throw Error(G(349))
        eo & 30 || Iy(r, t, n)
      }
      a.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (a.queue = o),
        av(Fy.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        wl(9, Ty.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Cr(),
        t = Lt.identifierPrefix
      if (dt) {
        var n = zr,
          r = jr
        ;(n = (r & ~(1 << (32 - cr(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = bl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Tx++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Ax = {
    readContext: Qn,
    useCallback: Vy,
    useContext: Qn,
    useEffect: ph,
    useImperativeHandle: Hy,
    useInsertionEffect: Ay,
    useLayoutEffect: jy,
    useMemo: By,
    useReducer: Sd,
    useRef: Ly,
    useState: function () {
      return Sd(Cl)
    },
    useDebugValue: yh,
    useDeferredValue: function (e) {
      var t = Xn()
      return Wy(t, It.memoizedState, e)
    },
    useTransition: function () {
      var e = Sd(Cl)[0],
        t = Xn().memoizedState
      return [e, t]
    },
    useMutableSource: Oy,
    useSyncExternalStore: _y,
    useId: Uy,
    unstable_isNewReconciler: !1,
  },
  jx = {
    readContext: Qn,
    useCallback: Vy,
    useContext: Qn,
    useEffect: ph,
    useImperativeHandle: Hy,
    useInsertionEffect: Ay,
    useLayoutEffect: jy,
    useMemo: By,
    useReducer: bd,
    useRef: Ly,
    useState: function () {
      return bd(Cl)
    },
    useDebugValue: yh,
    useDeferredValue: function (e) {
      var t = Xn()
      return It === null ? (t.memoizedState = e) : Wy(t, It.memoizedState, e)
    },
    useTransition: function () {
      var e = bd(Cl)[0],
        t = Xn().memoizedState
      return [e, t]
    },
    useMutableSource: Oy,
    useSyncExternalStore: _y,
    useId: Uy,
    unstable_isNewReconciler: !1,
  }
function or(e, t) {
  if (e && e.defaultProps) {
    ;(t = mt({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Mf(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : mt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var tc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? uo(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = rn(),
      a = wa(e),
      o = Hr(r, a)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = ba(e, o, a)),
      t !== null && (dr(t, e, a, r), Ws(t, e, a))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = rn(),
      a = wa(e),
      o = Hr(r, a)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ba(e, o, a)),
      t !== null && (dr(t, e, a, r), Ws(t, e, a))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = rn(),
      r = wa(e),
      a = Hr(n, r)
    ;(a.tag = 2),
      t != null && (a.callback = t),
      (t = ba(e, a, r)),
      t !== null && (dr(t, e, r, n), Ws(t, e, r))
  },
}
function ov(e, t, n, r, a, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !hl(n, r) || !hl(a, o)
        : !0
  )
}
function Gy(e, t, n) {
  var r = !1,
    a = Pa,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = Qn(o))
      : ((a = mn(t) ? Ja : Jt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Jo(e, a) : Pa)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = tc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function iv(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && tc.enqueueReplaceState(t, t.state, null)
}
function Of(e, t, n, r) {
  var a = e.stateNode
  ;(a.props = n), (a.state = e.memoizedState), (a.refs = {}), ch(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (a.context = Qn(o))
    : ((o = mn(t) ? Ja : Jt.current), (a.context = Jo(e, o))),
    (a.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Mf(e, t, o, n), (a.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function' ||
      (typeof a.UNSAFE_componentWillMount != 'function' &&
        typeof a.componentWillMount != 'function') ||
      ((t = a.state),
      typeof a.componentWillMount == 'function' && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == 'function' &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && tc.enqueueReplaceState(a, a.state, null),
      Cu(e, n, a, r),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == 'function' && (e.flags |= 4194308)
}
function ni(e, t) {
  try {
    var n = '',
      r = t
    do (n += gw(r)), (r = r.return)
    while (r)
    var a = n
  } catch (o) {
    a =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: a, digest: null }
}
function Cd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function _f(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var zx = typeof WeakMap == 'function' ? WeakMap : Map
function Qy(e, t, n) {
  ;(n = Hr(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Pu || ((Pu = !0), (Hf = r)), _f(e, t)
    }),
    n
  )
}
function Xy(e, t, n) {
  ;(n = Hr(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var a = t.value
    ;(n.payload = function () {
      return r(a)
    }),
      (n.callback = function () {
        _f(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        _f(e, t),
          typeof r != 'function' &&
            (Ca === null ? (Ca = new Set([this])) : Ca.add(this))
        var i = t.stack
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' })
      }),
    n
  )
}
function lv(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new zx()
    var a = new Set()
    r.set(t, a)
  } else (a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a))
  a.has(n) || (a.add(n), (e = eE.bind(null, e, t, n)), t.then(e, e))
}
function sv(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function uv(e, t, n, r, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Hr(-1, 1)), (t.tag = 2), ba(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Hx = Gr.ReactCurrentOwner,
  gn = !1
function nn(e, t, n, r) {
  t.child = e === null ? Py(t, null, n, r) : ei(t, e.child, n, r)
}
function cv(e, t, n, r, a) {
  n = n.render
  var o = t.ref
  return (
    Yo(t, a),
    (r = mh(e, t, n, r, o, a)),
    (n = vh()),
    e !== null && !gn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Yr(e, t, a))
      : (dt && n && rh(t), (t.flags |= 1), nn(e, t, r, a), t.child)
  )
}
function dv(e, t, n, r, a) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !Ph(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Jy(e, t, o, r, a))
      : ((e = Qs(n.type, null, r, t, t.mode, a)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & a))) {
    var i = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : hl), n(i, r) && e.ref === t.ref)
    )
      return Yr(e, t, a)
  }
  return (
    (t.flags |= 1),
    (e = xa(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Jy(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps
    if (hl(o, r) && e.ref === t.ref)
      if (((gn = !1), (t.pendingProps = r = o), (e.lanes & a) !== 0))
        e.flags & 131072 && (gn = !0)
      else return (t.lanes = e.lanes), Yr(e, t, a)
  }
  return If(e, t, n, r, a)
}
function Zy(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        lt(Ao, On),
        (On |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          lt(Ao, On),
          (On |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        lt(Ao, On),
        (On |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      lt(Ao, On),
      (On |= r)
  return nn(e, t, a, n), t.child
}
function e1(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function If(e, t, n, r, a) {
  var o = mn(n) ? Ja : Jt.current
  return (
    (o = Jo(t, o)),
    Yo(t, a),
    (n = mh(e, t, n, r, o, a)),
    (r = vh()),
    e !== null && !gn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Yr(e, t, a))
      : (dt && r && rh(t), (t.flags |= 1), nn(e, t, n, a), t.child)
  )
}
function fv(e, t, n, r, a) {
  if (mn(n)) {
    var o = !0
    vu(t)
  } else o = !1
  if ((Yo(t, a), t.stateNode === null))
    qs(e, t), Gy(t, n, r), Of(t, n, r, a), (r = !0)
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps
    i.props = l
    var s = i.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = Qn(u))
      : ((u = mn(n) ? Ja : Jt.current), (u = Jo(t, u)))
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && iv(t, i, r, u)),
      (sa = !1)
    var f = t.memoizedState
    ;(i.state = f),
      Cu(t, r, i, a),
      (s = t.memoizedState),
      l !== r || f !== s || hn.current || sa
        ? (typeof c == 'function' && (Mf(t, n, c, r), (s = t.memoizedState)),
          (l = sa || ov(t, n, l, r, f, s, u))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(i = t.stateNode),
      Ry(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : or(t.type, l)),
      (i.props = u),
      (d = t.pendingProps),
      (f = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Qn(s))
        : ((s = mn(n) ? Ja : Jt.current), (s = Jo(t, s)))
    var y = n.getDerivedStateFromProps
    ;(c =
      typeof y == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== d || f !== s) && iv(t, i, r, s)),
      (sa = !1),
      (f = t.memoizedState),
      (i.state = f),
      Cu(t, r, i, a)
    var v = t.memoizedState
    l !== d || f !== v || hn.current || sa
      ? (typeof y == 'function' && (Mf(t, n, y, r), (v = t.memoizedState)),
        (u = sa || ov(t, n, u, r, f, v, s) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, v, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, v, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Tf(e, t, n, r, o, a)
}
function Tf(e, t, n, r, a, o) {
  e1(e, t)
  var i = (t.flags & 128) !== 0
  if (!r && !i) return a && Xm(t, n, !1), Yr(e, t, o)
  ;(r = t.stateNode), (Hx.current = t)
  var l =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ei(t, e.child, null, o)), (t.child = ei(t, null, l, o)))
      : nn(e, t, l, o),
    (t.memoizedState = r.state),
    a && Xm(t, n, !0),
    t.child
  )
}
function t1(e) {
  var t = e.stateNode
  t.pendingContext
    ? Qm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qm(e, t.context, !1),
    dh(e, t.containerInfo)
}
function gv(e, t, n, r, a) {
  return Zo(), oh(a), (t.flags |= 256), nn(e, t, n, r), t.child
}
var Ff = { dehydrated: null, treeContext: null, retryLane: 0 }
function Nf(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function n1(e, t, n) {
  var r = t.pendingProps,
    a = gt.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    l
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    lt(gt, a & 1),
    e === null)
  )
    return (
      kf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ac(i, r, 0, null)),
              (e = Ga(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Nf(n)),
              (t.memoizedState = Ff),
              e)
            : Sh(t, i))
    )
  if (((a = e.memoizedState), a !== null && ((l = a.dehydrated), l !== null)))
    return Vx(e, t, i, r, l, a, n)
  if (o) {
    ;(o = r.fallback), (i = t.mode), (a = e.child), (l = a.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(i & 1) && t.child !== a
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = xa(a, s)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
      l !== null ? (o = xa(l, o)) : ((o = Ga(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Nf(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ff),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = xa(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Sh(e, t) {
  return (
    (t = ac({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function ps(e, t, n, r) {
  return (
    r !== null && oh(r),
    ei(t, e.child, null, n),
    (e = Sh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Vx(e, t, n, r, a, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Cd(Error(G(422)))), ps(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (a = t.mode),
          (r = ac({ mode: 'visible', children: r.children }, a, 0, null)),
          (o = Ga(o, a, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && ei(t, e.child, null, i),
          (t.child.memoizedState = Nf(i)),
          (t.memoizedState = Ff),
          o)
  if (!(t.mode & 1)) return ps(e, t, i, null)
  if (a.data === '$!') {
    if (((r = a.nextSibling && a.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (o = Error(G(419))), (r = Cd(o, r, void 0)), ps(e, t, i, r)
  }
  if (((l = (i & e.childLanes) !== 0), gn || l)) {
    if (((r = Lt), r !== null)) {
      switch (i & -i) {
        case 4:
          a = 2
          break
        case 16:
          a = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32
          break
        case 536870912:
          a = 268435456
          break
        default:
          a = 0
      }
      ;(a = a & (r.suspendedLanes | i) ? 0 : a),
        a !== 0 &&
          a !== o.retryLane &&
          ((o.retryLane = a), Ur(e, a), dr(r, e, a, -1))
    }
    return $h(), (r = Cd(Error(G(421)))), ps(e, t, i, r)
  }
  return a.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = tE.bind(null, e)),
      (a._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (_n = Sa(a.nextSibling)),
      (Tn = t),
      (dt = !0),
      (ur = null),
      e !== null &&
        ((Un[Yn++] = jr),
        (Un[Yn++] = zr),
        (Un[Yn++] = Za),
        (jr = e.id),
        (zr = e.overflow),
        (Za = t)),
      (t = Sh(t, r.children)),
      (t.flags |= 4096),
      t)
}
function hv(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Rf(e.return, t, n)
}
function wd(e, t, n, r, a) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = a))
}
function r1(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    o = r.tail
  if ((nn(e, t, r.children, n), (r = gt.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hv(e, n, t)
        else if (e.tag === 19) hv(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((lt(gt, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (a) {
      case 'forwards':
        for (n = t.child, a = null; n !== null; )
          (e = n.alternate),
            e !== null && wu(e) === null && (a = n),
            (n = n.sibling)
        ;(n = a),
          n === null
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
          wd(t, !1, a, n, o)
        break
      case 'backwards':
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && wu(e) === null)) {
            t.child = a
            break
          }
          ;(e = a.sibling), (a.sibling = n), (n = a), (a = e)
        }
        wd(t, !0, n, null, o)
        break
      case 'together':
        wd(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function qs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Yr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (to |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(G(153))
  if (t.child !== null) {
    for (
      e = t.child, n = xa(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xa(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Bx(e, t, n) {
  switch (t.tag) {
    case 3:
      t1(t), Zo()
      break
    case 5:
      My(t)
      break
    case 1:
      mn(t.type) && vu(t)
      break
    case 4:
      dh(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        a = t.memoizedProps.value
      lt(Su, r._currentValue), (r._currentValue = a)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (lt(gt, gt.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? n1(e, t, n)
            : (lt(gt, gt.current & 1),
              (e = Yr(e, t, n)),
              e !== null ? e.sibling : null)
      lt(gt, gt.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return r1(e, t, n)
        t.flags |= 128
      }
      if (
        ((a = t.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        lt(gt, gt.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Zy(e, t, n)
  }
  return Yr(e, t, n)
}
var a1, Df, o1, i1
a1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Df = function () {}
o1 = function (e, t, n, r) {
  var a = e.memoizedProps
  if (a !== r) {
    ;(e = t.stateNode), Ua(Pr.current)
    var o = null
    switch (n) {
      case 'input':
        ;(a = rf(e, a)), (r = rf(e, r)), (o = [])
        break
      case 'select':
        ;(a = mt({}, a, { value: void 0 })),
          (r = mt({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(a = lf(e, a)), (r = lf(e, r)), (o = [])
        break
      default:
        typeof a.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = hu)
    }
    uf(n, r)
    var i
    n = null
    for (u in a)
      if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null)
        if (u === 'style') {
          var l = a[u]
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (ll.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in r) {
      var s = r[u]
      if (
        ((l = a != null ? a[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''))
            for (i in s)
              s.hasOwnProperty(i) &&
                l[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]))
          } else n || (o || (o = []), o.push(u, n)), (n = s)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (o = o || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (o = o || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (ll.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && st('scroll', e),
                    o || l === s || (o = []))
                  : (o = o || []).push(u, s))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
i1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function ki(e, t) {
  if (!dt)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Gt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags & 14680064),
        (r |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling)
  else
    for (a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags),
        (r |= a.flags),
        (a.return = e),
        (a = a.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Wx(e, t, n) {
  var r = t.pendingProps
  switch ((ah(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Gt(t), null
    case 1:
      return mn(t.type) && mu(), Gt(t), null
    case 3:
      return (
        (r = t.stateNode),
        ti(),
        ut(hn),
        ut(Jt),
        gh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ms(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ur !== null && (Wf(ur), (ur = null)))),
        Df(e, t),
        Gt(t),
        null
      )
    case 5:
      fh(t)
      var a = Ua(Sl.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        o1(e, t, n, r, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(G(166))
          return Gt(t), null
        }
        if (((e = Ua(Pr.current)), ms(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[wr] = t), (r[pl] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              st('cancel', r), st('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              st('load', r)
              break
            case 'video':
            case 'audio':
              for (a = 0; a < Hi.length; a++) st(Hi[a], r)
              break
            case 'source':
              st('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              st('error', r), st('load', r)
              break
            case 'details':
              st('toggle', r)
              break
            case 'input':
              xm(r, o), st('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                st('invalid', r)
              break
            case 'textarea':
              $m(r, o), st('invalid', r)
          }
          uf(n, o), (a = null)
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var l = o[i]
              i === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hs(r.textContent, l, e),
                    (a = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hs(r.textContent, l, e),
                    (a = ['children', '' + l]))
                : ll.hasOwnProperty(i) &&
                  l != null &&
                  i === 'onScroll' &&
                  st('scroll', r)
            }
          switch (n) {
            case 'input':
              is(r), Em(r, o, !0)
              break
            case 'textarea':
              is(r), Pm(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = hu)
          }
          ;(r = a), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(i = a.nodeType === 9 ? a : a.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = F0(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[wr] = t),
            (e[pl] = r),
            a1(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((i = cf(n, r)), n)) {
              case 'dialog':
                st('cancel', e), st('close', e), (a = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                st('load', e), (a = r)
                break
              case 'video':
              case 'audio':
                for (a = 0; a < Hi.length; a++) st(Hi[a], e)
                a = r
                break
              case 'source':
                st('error', e), (a = r)
                break
              case 'img':
              case 'image':
              case 'link':
                st('error', e), st('load', e), (a = r)
                break
              case 'details':
                st('toggle', e), (a = r)
                break
              case 'input':
                xm(e, r), (a = rf(e, r)), st('invalid', e)
                break
              case 'option':
                a = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = mt({}, r, { value: void 0 })),
                  st('invalid', e)
                break
              case 'textarea':
                $m(e, r), (a = lf(e, r)), st('invalid', e)
                break
              default:
                a = r
            }
            uf(n, a), (l = a)
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o]
                o === 'style'
                  ? L0(e, s)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && N0(e, s))
                    : o === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && sl(e, s)
                        : typeof s == 'number' && sl(e, '' + s)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (ll.hasOwnProperty(o)
                          ? s != null && o === 'onScroll' && st('scroll', e)
                          : s != null && Bg(e, o, s, i))
              }
            switch (n) {
              case 'input':
                is(e), Em(e, r, !1)
                break
              case 'textarea':
                is(e), Pm(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + $a(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Vo(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Vo(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof a.onClick == 'function' && (e.onclick = hu)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Gt(t), null
    case 6:
      if (e && t.stateNode != null) i1(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(G(166))
        if (((n = Ua(Sl.current)), Ua(Pr.current), ms(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wr] = t),
            (o = r.nodeValue !== n) && ((e = Tn), e !== null))
          )
            switch (e.tag) {
              case 3:
                hs(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hs(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wr] = t),
            (t.stateNode = r)
      }
      return Gt(t), null
    case 13:
      if (
        (ut(gt),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (dt && _n !== null && t.mode & 1 && !(t.flags & 128))
          Ey(), Zo(), (t.flags |= 98560), (o = !1)
        else if (((o = ms(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(G(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(G(317))
            o[wr] = t
          } else
            Zo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Gt(t), (o = !1)
        } else ur !== null && (Wf(ur), (ur = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || gt.current & 1 ? Tt === 0 && (Tt = 3) : $h())),
          t.updateQueue !== null && (t.flags |= 4),
          Gt(t),
          null)
    case 4:
      return (
        ti(), Df(e, t), e === null && ml(t.stateNode.containerInfo), Gt(t), null
      )
    case 10:
      return sh(t.type._context), Gt(t), null
    case 17:
      return mn(t.type) && mu(), Gt(t), null
    case 19:
      if ((ut(gt), (o = t.memoizedState), o === null)) return Gt(t), null
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) ki(o, !1)
        else {
          if (Tt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = wu(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ki(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return lt(gt, (gt.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            wt() > ri &&
            ((t.flags |= 128), (r = !0), ki(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = wu(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ki(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !dt)
            )
              return Gt(t), null
          } else
            2 * wt() - o.renderingStartTime > ri &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ki(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = wt()),
          (t.sibling = null),
          (n = gt.current),
          lt(gt, r ? (n & 1) | 2 : n & 1),
          t)
        : (Gt(t), null)
    case 22:
    case 23:
      return (
        Eh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? On & 1073741824 && (Gt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Gt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(G(156, t.tag))
}
function Ux(e, t) {
  switch ((ah(t), t.tag)) {
    case 1:
      return (
        mn(t.type) && mu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        ti(),
        ut(hn),
        ut(Jt),
        gh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return fh(t), null
    case 13:
      if (
        (ut(gt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(G(340))
        Zo()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ut(gt), null
    case 4:
      return ti(), null
    case 10:
      return sh(t.type._context), null
    case 22:
    case 23:
      return Eh(), null
    case 24:
      return null
    default:
      return null
  }
}
var ys = !1,
  Qt = !1,
  Yx = typeof WeakSet == 'function' ? WeakSet : Set,
  le = null
function Lo(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        St(e, t, r)
      }
    else n.current = null
}
function Lf(e, t, n) {
  try {
    n()
  } catch (r) {
    St(e, t, r)
  }
}
var mv = !1
function qx(e, t) {
  if (((bf = du), (e = dy()), nh(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var a = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var i = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            f = null
          t: for (;;) {
            for (
              var y;
              d !== n || (a !== 0 && d.nodeType !== 3) || (l = i + a),
                d !== o || (r !== 0 && d.nodeType !== 3) || (s = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (f = d), (d = y)
            for (;;) {
              if (d === e) break t
              if (
                (f === n && ++u === a && (l = i),
                f === o && ++c === r && (s = i),
                (y = d.nextSibling) !== null)
              )
                break
              ;(d = f), (f = d.parentNode)
            }
            d = y
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (
    Cf = { focusedElem: e, selectionRange: n }, du = !1, le = t;
    le !== null;

  )
    if (((t = le), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (le = e)
    else
      for (; le !== null; ) {
        t = le
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var p = v.memoizedProps,
                    b = v.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? p : or(t.type, p),
                      b,
                    )
                  m.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var S = t.stateNode.containerInfo
                S.nodeType === 1
                  ? (S.textContent = '')
                  : S.nodeType === 9 &&
                    S.documentElement &&
                    S.removeChild(S.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(G(163))
            }
        } catch (C) {
          St(t, t.return, C)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (le = e)
          break
        }
        le = t.return
      }
  return (v = mv), (mv = !1), v
}
function Xi(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var a = (r = r.next)
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy
        ;(a.destroy = void 0), o !== void 0 && Lf(t, n, o)
      }
      a = a.next
    } while (a !== r)
  }
}
function nc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Af(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function l1(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), l1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wr], delete t[pl], delete t[Ef], delete t[Mx], delete t[Ox])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function s1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function vv(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || s1(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function jf(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hu))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jf(e, t, n), e = e.sibling; e !== null; ) jf(e, t, n), (e = e.sibling)
}
function zf(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zf(e, t, n), e = e.sibling; e !== null; ) zf(e, t, n), (e = e.sibling)
}
var jt = null,
  ir = !1
function na(e, t, n) {
  for (n = n.child; n !== null; ) u1(e, t, n), (n = n.sibling)
}
function u1(e, t, n) {
  if ($r && typeof $r.onCommitFiberUnmount == 'function')
    try {
      $r.onCommitFiberUnmount(Ku, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Qt || Lo(n, t)
    case 6:
      var r = jt,
        a = ir
      ;(jt = null),
        na(e, t, n),
        (jt = r),
        (ir = a),
        jt !== null &&
          (ir
            ? ((e = jt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : jt.removeChild(n.stateNode))
      break
    case 18:
      jt !== null &&
        (ir
          ? ((e = jt),
            (n = n.stateNode),
            e.nodeType === 8
              ? md(e.parentNode, n)
              : e.nodeType === 1 && md(e, n),
            fl(e))
          : md(jt, n.stateNode))
      break
    case 4:
      ;(r = jt),
        (a = ir),
        (jt = n.stateNode.containerInfo),
        (ir = !0),
        na(e, t, n),
        (jt = r),
        (ir = a)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Qt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        a = r = r.next
        do {
          var o = a,
            i = o.destroy
          ;(o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Lf(n, t, i),
            (a = a.next)
        } while (a !== r)
      }
      na(e, t, n)
      break
    case 1:
      if (
        !Qt &&
        (Lo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (l) {
          St(n, t, l)
        }
      na(e, t, n)
      break
    case 21:
      na(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Qt = (r = Qt) || n.memoizedState !== null), na(e, t, n), (Qt = r))
        : na(e, t, n)
      break
    default:
      na(e, t, n)
  }
}
function pv(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Yx()),
      t.forEach(function (r) {
        var a = nE.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(a, a))
      })
  }
}
function rr(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r]
      try {
        var o = e,
          i = t,
          l = i
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(jt = l.stateNode), (ir = !1)
              break e
            case 3:
              ;(jt = l.stateNode.containerInfo), (ir = !0)
              break e
            case 4:
              ;(jt = l.stateNode.containerInfo), (ir = !0)
              break e
          }
          l = l.return
        }
        if (jt === null) throw Error(G(160))
        u1(o, i, a), (jt = null), (ir = !1)
        var s = a.alternate
        s !== null && (s.return = null), (a.return = null)
      } catch (u) {
        St(a, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) c1(t, e), (t = t.sibling)
}
function c1(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((rr(t, e), br(e), r & 4)) {
        try {
          Xi(3, e, e.return), nc(3, e)
        } catch (p) {
          St(e, e.return, p)
        }
        try {
          Xi(5, e, e.return)
        } catch (p) {
          St(e, e.return, p)
        }
      }
      break
    case 1:
      rr(t, e), br(e), r & 512 && n !== null && Lo(n, n.return)
      break
    case 5:
      if (
        (rr(t, e),
        br(e),
        r & 512 && n !== null && Lo(n, n.return),
        e.flags & 32)
      ) {
        var a = e.stateNode
        try {
          sl(a, '')
        } catch (p) {
          St(e, e.return, p)
        }
      }
      if (r & 4 && ((a = e.stateNode), a != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          l = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && I0(a, o),
              cf(l, i)
            var u = cf(l, o)
            for (i = 0; i < s.length; i += 2) {
              var c = s[i],
                d = s[i + 1]
              c === 'style'
                ? L0(a, d)
                : c === 'dangerouslySetInnerHTML'
                  ? N0(a, d)
                  : c === 'children'
                    ? sl(a, d)
                    : Bg(a, c, d, u)
            }
            switch (l) {
              case 'input':
                af(a, o)
                break
              case 'textarea':
                T0(a, o)
                break
              case 'select':
                var f = a._wrapperState.wasMultiple
                a._wrapperState.wasMultiple = !!o.multiple
                var y = o.value
                y != null
                  ? Vo(a, !!o.multiple, y, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Vo(a, !!o.multiple, o.defaultValue, !0)
                      : Vo(a, !!o.multiple, o.multiple ? [] : '', !1))
            }
            a[pl] = o
          } catch (p) {
            St(e, e.return, p)
          }
      }
      break
    case 6:
      if ((rr(t, e), br(e), r & 4)) {
        if (e.stateNode === null) throw Error(G(162))
        ;(a = e.stateNode), (o = e.memoizedProps)
        try {
          a.nodeValue = o
        } catch (p) {
          St(e, e.return, p)
        }
      }
      break
    case 3:
      if (
        (rr(t, e), br(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          fl(t.containerInfo)
        } catch (p) {
          St(e, e.return, p)
        }
      break
    case 4:
      rr(t, e), br(e)
      break
    case 13:
      rr(t, e),
        br(e),
        (a = e.child),
        a.flags & 8192 &&
          ((o = a.memoizedState !== null),
          (a.stateNode.isHidden = o),
          !o ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (wh = wt())),
        r & 4 && pv(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Qt = (u = Qt) || c), rr(t, e), (Qt = u)) : rr(t, e),
        br(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (le = e, c = e.child; c !== null; ) {
            for (d = le = c; le !== null; ) {
              switch (((f = le), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xi(4, f, f.return)
                  break
                case 1:
                  Lo(f, f.return)
                  var v = f.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;(r = f), (n = f.return)
                    try {
                      ;(t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount()
                    } catch (p) {
                      St(r, n, p)
                    }
                  }
                  break
                case 5:
                  Lo(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    Sv(d)
                    continue
                  }
              }
              y !== null ? ((y.return = f), (le = y)) : Sv(d)
            }
            c = c.sibling
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d
              try {
                ;(a = d.stateNode),
                  u
                    ? ((o = a.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (l.style.display = D0('display', i)))
              } catch (p) {
                St(e, e.return, p)
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps
              } catch (p) {
                St(e, e.return, p)
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ;(d.child.return = d), (d = d.child)
            continue
          }
          if (d === e) break e
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e
            c === d && (c = null), (d = d.return)
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling)
        }
      }
      break
    case 19:
      rr(t, e), br(e), r & 4 && pv(e)
      break
    case 21:
      break
    default:
      rr(t, e), br(e)
  }
}
function br(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (s1(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(G(160))
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode
          r.flags & 32 && (sl(a, ''), (r.flags &= -33))
          var o = vv(e)
          zf(e, o, a)
          break
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = vv(e)
          jf(e, l, i)
          break
        default:
          throw Error(G(161))
      }
    } catch (s) {
      St(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Kx(e, t, n) {
  ;(le = e), d1(e)
}
function d1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; le !== null; ) {
    var a = le,
      o = a.child
    if (a.tag === 22 && r) {
      var i = a.memoizedState !== null || ys
      if (!i) {
        var l = a.alternate,
          s = (l !== null && l.memoizedState !== null) || Qt
        l = ys
        var u = Qt
        if (((ys = i), (Qt = s) && !u))
          for (le = a; le !== null; )
            (i = le),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? bv(a)
                : s !== null
                  ? ((s.return = i), (le = s))
                  : bv(a)
        for (; o !== null; ) (le = o), d1(o), (o = o.sibling)
        ;(le = a), (ys = l), (Qt = u)
      }
      yv(e)
    } else
      a.subtreeFlags & 8772 && o !== null ? ((o.return = a), (le = o)) : yv(e)
  }
}
function yv(e) {
  for (; le !== null; ) {
    var t = le
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qt || nc(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Qt)
                if (n === null) r.componentDidMount()
                else {
                  var a =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : or(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    a,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var o = t.updateQueue
              o !== null && nv(t, o, r)
              break
            case 3:
              var i = t.updateQueue
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                nv(t, i, n)
              }
              break
            case 5:
              var l = t.stateNode
              if (n === null && t.flags & 4) {
                n = l
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var d = c.dehydrated
                    d !== null && fl(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(G(163))
          }
        Qt || (t.flags & 512 && Af(t))
      } catch (f) {
        St(t, t.return, f)
      }
    }
    if (t === e) {
      le = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (le = n)
      break
    }
    le = t.return
  }
}
function Sv(e) {
  for (; le !== null; ) {
    var t = le
    if (t === e) {
      le = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (le = n)
      break
    }
    le = t.return
  }
}
function bv(e) {
  for (; le !== null; ) {
    var t = le
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            nc(4, t)
          } catch (s) {
            St(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var a = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              St(t, a, s)
            }
          }
          var o = t.return
          try {
            Af(t)
          } catch (s) {
            St(t, o, s)
          }
          break
        case 5:
          var i = t.return
          try {
            Af(t)
          } catch (s) {
            St(t, i, s)
          }
      }
    } catch (s) {
      St(t, t.return, s)
    }
    if (t === e) {
      le = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (le = l)
      break
    }
    le = t.return
  }
}
var Gx = Math.ceil,
  $u = Gr.ReactCurrentDispatcher,
  bh = Gr.ReactCurrentOwner,
  Kn = Gr.ReactCurrentBatchConfig,
  Ge = 0,
  Lt = null,
  kt = null,
  Vt = 0,
  On = 0,
  Ao = Ra(0),
  Tt = 0,
  xl = null,
  to = 0,
  rc = 0,
  Ch = 0,
  Ji = null,
  fn = null,
  wh = 0,
  ri = 1 / 0,
  Dr = null,
  Pu = !1,
  Hf = null,
  Ca = null,
  Ss = !1,
  fa = null,
  ku = 0,
  Zi = 0,
  Vf = null,
  Ks = -1,
  Gs = 0
function rn() {
  return Ge & 6 ? wt() : Ks !== -1 ? Ks : (Ks = wt())
}
function wa(e) {
  return e.mode & 1
    ? Ge & 2 && Vt !== 0
      ? Vt & -Vt
      : Ix.transition !== null
        ? (Gs === 0 && (Gs = G0()), Gs)
        : ((e = nt),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ny(e.type))),
          e)
    : 1
}
function dr(e, t, n, r) {
  if (50 < Zi) throw ((Zi = 0), (Vf = null), Error(G(185)))
  Nl(e, n, r),
    (!(Ge & 2) || e !== Lt) &&
      (e === Lt && (!(Ge & 2) && (rc |= n), Tt === 4 && ca(e, Vt)),
      vn(e, r),
      n === 1 && Ge === 0 && !(t.mode & 1) && ((ri = wt() + 500), Zu && Ma()))
}
function vn(e, t) {
  var n = e.callbackNode
  Iw(e, t)
  var r = cu(e, e === Lt ? Vt : 0)
  if (r === 0)
    n !== null && Mm(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mm(n), t === 1))
      e.tag === 0 ? _x(Cv.bind(null, e)) : Cy(Cv.bind(null, e)),
        kx(function () {
          !(Ge & 6) && Ma()
        }),
        (n = null)
    else {
      switch (Q0(r)) {
        case 1:
          n = Kg
          break
        case 4:
          n = q0
          break
        case 16:
          n = uu
          break
        case 536870912:
          n = K0
          break
        default:
          n = uu
      }
      n = S1(n, f1.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function f1(e, t) {
  if (((Ks = -1), (Gs = 0), Ge & 6)) throw Error(G(327))
  var n = e.callbackNode
  if (qo() && e.callbackNode !== n) return null
  var r = cu(e, e === Lt ? Vt : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Ru(e, r)
  else {
    t = r
    var a = Ge
    Ge |= 2
    var o = h1()
    ;(Lt !== e || Vt !== t) && ((Dr = null), (ri = wt() + 500), Ka(e, t))
    do
      try {
        Jx()
        break
      } catch (l) {
        g1(e, l)
      }
    while (!0)
    lh(),
      ($u.current = o),
      (Ge = a),
      kt !== null ? (t = 0) : ((Lt = null), (Vt = 0), (t = Tt))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((a = mf(e)), a !== 0 && ((r = a), (t = Bf(e, a)))), t === 1)
    )
      throw ((n = xl), Ka(e, 0), ca(e, r), vn(e, wt()), n)
    if (t === 6) ca(e, r)
    else {
      if (
        ((a = e.current.alternate),
        !(r & 30) &&
          !Qx(a) &&
          ((t = Ru(e, r)),
          t === 2 && ((o = mf(e)), o !== 0 && ((r = o), (t = Bf(e, o)))),
          t === 1))
      )
        throw ((n = xl), Ka(e, 0), ca(e, r), vn(e, wt()), n)
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(G(345))
        case 2:
          za(e, fn, Dr)
          break
        case 3:
          if (
            (ca(e, r), (r & 130023424) === r && ((t = wh + 500 - wt()), 10 < t))
          ) {
            if (cu(e, 0) !== 0) break
            if (((a = e.suspendedLanes), (a & r) !== r)) {
              rn(), (e.pingedLanes |= e.suspendedLanes & a)
              break
            }
            e.timeoutHandle = xf(za.bind(null, e, fn, Dr), t)
            break
          }
          za(e, fn, Dr)
          break
        case 4:
          if ((ca(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var i = 31 - cr(r)
            ;(o = 1 << i), (i = t[i]), i > a && (a = i), (r &= ~o)
          }
          if (
            ((r = a),
            (r = wt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Gx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xf(za.bind(null, e, fn, Dr), r)
            break
          }
          za(e, fn, Dr)
          break
        case 5:
          za(e, fn, Dr)
          break
        default:
          throw Error(G(329))
      }
    }
  }
  return vn(e, wt()), e.callbackNode === n ? f1.bind(null, e) : null
}
function Bf(e, t) {
  var n = Ji
  return (
    e.current.memoizedState.isDehydrated && (Ka(e, t).flags |= 256),
    (e = Ru(e, t)),
    e !== 2 && ((t = fn), (fn = n), t !== null && Wf(t)),
    e
  )
}
function Wf(e) {
  fn === null ? (fn = e) : fn.push.apply(fn, e)
}
function Qx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = a.getSnapshot
          a = a.value
          try {
            if (!hr(o(), a)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function ca(e, t) {
  for (
    t &= ~Ch,
      t &= ~rc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - cr(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Cv(e) {
  if (Ge & 6) throw Error(G(327))
  qo()
  var t = cu(e, 0)
  if (!(t & 1)) return vn(e, wt()), null
  var n = Ru(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = mf(e)
    r !== 0 && ((t = r), (n = Bf(e, r)))
  }
  if (n === 1) throw ((n = xl), Ka(e, 0), ca(e, t), vn(e, wt()), n)
  if (n === 6) throw Error(G(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    za(e, fn, Dr),
    vn(e, wt()),
    null
  )
}
function xh(e, t) {
  var n = Ge
  Ge |= 1
  try {
    return e(t)
  } finally {
    ;(Ge = n), Ge === 0 && ((ri = wt() + 500), Zu && Ma())
  }
}
function no(e) {
  fa !== null && fa.tag === 0 && !(Ge & 6) && qo()
  var t = Ge
  Ge |= 1
  var n = Kn.transition,
    r = nt
  try {
    if (((Kn.transition = null), (nt = 1), e)) return e()
  } finally {
    ;(nt = r), (Kn.transition = n), (Ge = t), !(Ge & 6) && Ma()
  }
}
function Eh() {
  ;(On = Ao.current), ut(Ao)
}
function Ka(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Px(n)), kt !== null))
    for (n = kt.return; n !== null; ) {
      var r = n
      switch ((ah(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && mu()
          break
        case 3:
          ti(), ut(hn), ut(Jt), gh()
          break
        case 5:
          fh(r)
          break
        case 4:
          ti()
          break
        case 13:
          ut(gt)
          break
        case 19:
          ut(gt)
          break
        case 10:
          sh(r.type._context)
          break
        case 22:
        case 23:
          Eh()
      }
      n = n.return
    }
  if (
    ((Lt = e),
    (kt = e = xa(e.current, null)),
    (Vt = On = t),
    (Tt = 0),
    (xl = null),
    (Ch = rc = to = 0),
    (fn = Ji = null),
    Wa !== null)
  ) {
    for (t = 0; t < Wa.length; t++)
      if (((n = Wa[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var a = r.next,
          o = n.pending
        if (o !== null) {
          var i = o.next
          ;(o.next = a), (r.next = i)
        }
        n.pending = r
      }
    Wa = null
  }
  return e
}
function g1(e, t) {
  do {
    var n = kt
    try {
      if ((lh(), (Us.current = Eu), xu)) {
        for (var r = ht.memoizedState; r !== null; ) {
          var a = r.queue
          a !== null && (a.pending = null), (r = r.next)
        }
        xu = !1
      }
      if (
        ((eo = 0),
        (Dt = It = ht = null),
        (Qi = !1),
        (bl = 0),
        (bh.current = null),
        n === null || n.return === null)
      ) {
        ;(Tt = 1), (xl = t), (kt = null)
        break
      }
      e: {
        var o = e,
          i = n.return,
          l = n,
          s = t
        if (
          ((t = Vt),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            c = l,
            d = c.tag
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var y = sv(i)
          if (y !== null) {
            ;(y.flags &= -257),
              uv(y, i, l, o, t),
              y.mode & 1 && lv(o, u, t),
              (t = y),
              (s = u)
            var v = t.updateQueue
            if (v === null) {
              var p = new Set()
              p.add(s), (t.updateQueue = p)
            } else v.add(s)
            break e
          } else {
            if (!(t & 1)) {
              lv(o, u, t), $h()
              break e
            }
            s = Error(G(426))
          }
        } else if (dt && l.mode & 1) {
          var b = sv(i)
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              uv(b, i, l, o, t),
              oh(ni(s, l))
            break e
          }
        }
        ;(o = s = ni(s, l)),
          Tt !== 4 && (Tt = 2),
          Ji === null ? (Ji = [o]) : Ji.push(o),
          (o = i)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var m = Qy(o, s, t)
              tv(o, m)
              break e
            case 1:
              l = s
              var h = o.type,
                S = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (S !== null &&
                    typeof S.componentDidCatch == 'function' &&
                    (Ca === null || !Ca.has(S))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var C = Xy(o, l, t)
                tv(o, C)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      v1(n)
    } catch (w) {
      ;(t = w), kt === n && n !== null && (kt = n = n.return)
      continue
    }
    break
  } while (!0)
}
function h1() {
  var e = $u.current
  return ($u.current = Eu), e === null ? Eu : e
}
function $h() {
  ;(Tt === 0 || Tt === 3 || Tt === 2) && (Tt = 4),
    Lt === null || (!(to & 268435455) && !(rc & 268435455)) || ca(Lt, Vt)
}
function Ru(e, t) {
  var n = Ge
  Ge |= 2
  var r = h1()
  ;(Lt !== e || Vt !== t) && ((Dr = null), Ka(e, t))
  do
    try {
      Xx()
      break
    } catch (a) {
      g1(e, a)
    }
  while (!0)
  if ((lh(), (Ge = n), ($u.current = r), kt !== null)) throw Error(G(261))
  return (Lt = null), (Vt = 0), Tt
}
function Xx() {
  for (; kt !== null; ) m1(kt)
}
function Jx() {
  for (; kt !== null && !xw(); ) m1(kt)
}
function m1(e) {
  var t = y1(e.alternate, e, On)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? v1(e) : (kt = t),
    (bh.current = null)
}
function v1(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ux(n, t)), n !== null)) {
        ;(n.flags &= 32767), (kt = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Tt = 6), (kt = null)
        return
      }
    } else if (((n = Wx(n, t, On)), n !== null)) {
      kt = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      kt = t
      return
    }
    kt = t = e
  } while (t !== null)
  Tt === 0 && (Tt = 5)
}
function za(e, t, n) {
  var r = nt,
    a = Kn.transition
  try {
    ;(Kn.transition = null), (nt = 1), Zx(e, t, n, r)
  } finally {
    ;(Kn.transition = a), (nt = r)
  }
  return null
}
function Zx(e, t, n, r) {
  do qo()
  while (fa !== null)
  if (Ge & 6) throw Error(G(327))
  n = e.finishedWork
  var a = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(G(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (Tw(e, o),
    e === Lt && ((kt = Lt = null), (Vt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ss ||
      ((Ss = !0),
      S1(uu, function () {
        return qo(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = Kn.transition), (Kn.transition = null)
    var i = nt
    nt = 1
    var l = Ge
    ;(Ge |= 4),
      (bh.current = null),
      qx(e, n),
      c1(n, e),
      Sx(Cf),
      (du = !!bf),
      (Cf = bf = null),
      (e.current = n),
      Kx(n),
      Ew(),
      (Ge = l),
      (nt = i),
      (Kn.transition = o)
  } else e.current = n
  if (
    (Ss && ((Ss = !1), (fa = e), (ku = a)),
    (o = e.pendingLanes),
    o === 0 && (Ca = null),
    kw(n.stateNode),
    vn(e, wt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest })
  if (Pu) throw ((Pu = !1), (e = Hf), (Hf = null), e)
  return (
    ku & 1 && e.tag !== 0 && qo(),
    (o = e.pendingLanes),
    o & 1 ? (e === Vf ? Zi++ : ((Zi = 0), (Vf = e))) : (Zi = 0),
    Ma(),
    null
  )
}
function qo() {
  if (fa !== null) {
    var e = Q0(ku),
      t = Kn.transition,
      n = nt
    try {
      if (((Kn.transition = null), (nt = 16 > e ? 16 : e), fa === null))
        var r = !1
      else {
        if (((e = fa), (fa = null), (ku = 0), Ge & 6)) throw Error(G(331))
        var a = Ge
        for (Ge |= 4, le = e.current; le !== null; ) {
          var o = le,
            i = o.child
          if (le.flags & 16) {
            var l = o.deletions
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s]
                for (le = u; le !== null; ) {
                  var c = le
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(8, c, o)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (le = d)
                  else
                    for (; le !== null; ) {
                      c = le
                      var f = c.sibling,
                        y = c.return
                      if ((l1(c), c === u)) {
                        le = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = y), (le = f)
                        break
                      }
                      le = y
                    }
                }
              }
              var v = o.alternate
              if (v !== null) {
                var p = v.child
                if (p !== null) {
                  v.child = null
                  do {
                    var b = p.sibling
                    ;(p.sibling = null), (p = b)
                  } while (p !== null)
                }
              }
              le = o
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (le = i)
          else
            e: for (; le !== null; ) {
              if (((o = le), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xi(9, o, o.return)
                }
              var m = o.sibling
              if (m !== null) {
                ;(m.return = o.return), (le = m)
                break e
              }
              le = o.return
            }
        }
        var h = e.current
        for (le = h; le !== null; ) {
          i = le
          var S = i.child
          if (i.subtreeFlags & 2064 && S !== null) (S.return = i), (le = S)
          else
            e: for (i = h; le !== null; ) {
              if (((l = le), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nc(9, l)
                  }
                } catch (w) {
                  St(l, l.return, w)
                }
              if (l === i) {
                le = null
                break e
              }
              var C = l.sibling
              if (C !== null) {
                ;(C.return = l.return), (le = C)
                break e
              }
              le = l.return
            }
        }
        if (
          ((Ge = a), Ma(), $r && typeof $r.onPostCommitFiberRoot == 'function')
        )
          try {
            $r.onPostCommitFiberRoot(Ku, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(nt = n), (Kn.transition = t)
    }
  }
  return !1
}
function wv(e, t, n) {
  ;(t = ni(n, t)),
    (t = Qy(e, t, 1)),
    (e = ba(e, t, 1)),
    (t = rn()),
    e !== null && (Nl(e, 1, t), vn(e, t))
}
function St(e, t, n) {
  if (e.tag === 3) wv(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wv(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Ca === null || !Ca.has(r)))
        ) {
          ;(e = ni(n, e)),
            (e = Xy(t, e, 1)),
            (t = ba(t, e, 1)),
            (e = rn()),
            t !== null && (Nl(t, 1, e), vn(t, e))
          break
        }
      }
      t = t.return
    }
}
function eE(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = rn()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Lt === e &&
      (Vt & n) === n &&
      (Tt === 4 || (Tt === 3 && (Vt & 130023424) === Vt && 500 > wt() - wh)
        ? Ka(e, 0)
        : (Ch |= n)),
    vn(e, t)
}
function p1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = us), (us <<= 1), !(us & 130023424) && (us = 4194304))
      : (t = 1))
  var n = rn()
  ;(e = Ur(e, t)), e !== null && (Nl(e, t, n), vn(e, n))
}
function tE(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), p1(e, n)
}
function nE(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        a = e.memoizedState
      a !== null && (n = a.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(G(314))
  }
  r !== null && r.delete(t), p1(e, n)
}
var y1
y1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || hn.current) gn = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (gn = !1), Bx(e, t, n)
      gn = !!(e.flags & 131072)
    }
  else (gn = !1), dt && t.flags & 1048576 && wy(t, yu, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      qs(e, t), (e = t.pendingProps)
      var a = Jo(t, Jt.current)
      Yo(t, n), (a = mh(null, t, r, e, a, n))
      var o = vh()
      return (
        (t.flags |= 1),
        typeof a == 'object' &&
        a !== null &&
        typeof a.render == 'function' &&
        a.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            mn(r) ? ((o = !0), vu(t)) : (o = !1),
            (t.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            ch(t),
            (a.updater = tc),
            (t.stateNode = a),
            (a._reactInternals = t),
            Of(t, r, e, n),
            (t = Tf(null, t, r, !0, o, n)))
          : ((t.tag = 0), dt && o && rh(t), nn(null, t, a, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (qs(e, t),
          (e = t.pendingProps),
          (a = r._init),
          (r = a(r._payload)),
          (t.type = r),
          (a = t.tag = aE(r)),
          (e = or(r, e)),
          a)
        ) {
          case 0:
            t = If(null, t, r, e, n)
            break e
          case 1:
            t = fv(null, t, r, e, n)
            break e
          case 11:
            t = cv(null, t, r, e, n)
            break e
          case 14:
            t = dv(null, t, r, or(r.type, e), n)
            break e
        }
        throw Error(G(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : or(r, a)),
        If(e, t, r, a, n)
      )
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : or(r, a)),
        fv(e, t, r, a, n)
      )
    case 3:
      e: {
        if ((t1(t), e === null)) throw Error(G(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (a = o.element),
          Ry(e, t),
          Cu(t, r, null, n)
        var i = t.memoizedState
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(a = ni(Error(G(423)), t)), (t = gv(e, t, r, n, a))
            break e
          } else if (r !== a) {
            ;(a = ni(Error(G(424)), t)), (t = gv(e, t, r, n, a))
            break e
          } else
            for (
              _n = Sa(t.stateNode.containerInfo.firstChild),
                Tn = t,
                dt = !0,
                ur = null,
                n = Py(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Zo(), r === a)) {
            t = Yr(e, t, n)
            break e
          }
          nn(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        My(t),
        e === null && kf(t),
        (r = t.type),
        (a = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = a.children),
        wf(r, a) ? (i = null) : o !== null && wf(r, o) && (t.flags |= 32),
        e1(e, t),
        nn(e, t, i, n),
        t.child
      )
    case 6:
      return e === null && kf(t), null
    case 13:
      return n1(e, t, n)
    case 4:
      return (
        dh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ei(t, null, r, n)) : nn(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : or(r, a)),
        cv(e, t, r, a, n)
      )
    case 7:
      return nn(e, t, t.pendingProps, n), t.child
    case 8:
      return nn(e, t, t.pendingProps.children, n), t.child
    case 12:
      return nn(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (o = t.memoizedProps),
          (i = a.value),
          lt(Su, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (hr(o.value, i)) {
            if (o.children === a.children && !hn.current) {
              t = Yr(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies
              if (l !== null) {
                i = o.child
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      ;(s = Hr(-1, n & -n)), (s.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s)
                      }
                    }
                    ;(o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Rf(o.return, n, t),
                      (l.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(G(341))
                ;(i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Rf(i, n, t),
                  (i = o.sibling)
              } else i = o.child
              if (i !== null) i.return = o
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null
                    break
                  }
                  if (((o = i.sibling), o !== null)) {
                    ;(o.return = i.return), (i = o)
                    break
                  }
                  i = i.return
                }
              o = i
            }
        nn(e, t, a.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        Yo(t, n),
        (a = Qn(a)),
        (r = r(a)),
        (t.flags |= 1),
        nn(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (a = or(r, t.pendingProps)),
        (a = or(r.type, a)),
        dv(e, t, r, a, n)
      )
    case 15:
      return Jy(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : or(r, a)),
        qs(e, t),
        (t.tag = 1),
        mn(r) ? ((e = !0), vu(t)) : (e = !1),
        Yo(t, n),
        Gy(t, r, a),
        Of(t, r, a, n),
        Tf(null, t, r, !0, e, n)
      )
    case 19:
      return r1(e, t, n)
    case 22:
      return Zy(e, t, n)
  }
  throw Error(G(156, t.tag))
}
function S1(e, t) {
  return Y0(e, t)
}
function rE(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function qn(e, t, n, r) {
  return new rE(e, t, n, r)
}
function Ph(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function aE(e) {
  if (typeof e == 'function') return Ph(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Ug)) return 11
    if (e === Yg) return 14
  }
  return 2
}
function xa(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = qn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Qs(e, t, n, r, a, o) {
  var i = 2
  if (((r = e), typeof e == 'function')) Ph(e) && (i = 1)
  else if (typeof e == 'string') i = 5
  else
    e: switch (e) {
      case Ro:
        return Ga(n.children, a, o, t)
      case Wg:
        ;(i = 8), (a |= 8)
        break
      case Zd:
        return (e = qn(12, n, t, a | 2)), (e.elementType = Zd), (e.lanes = o), e
      case ef:
        return (e = qn(13, n, t, a)), (e.elementType = ef), (e.lanes = o), e
      case tf:
        return (e = qn(19, n, t, a)), (e.elementType = tf), (e.lanes = o), e
      case M0:
        return ac(n, a, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case k0:
              i = 10
              break e
            case R0:
              i = 9
              break e
            case Ug:
              i = 11
              break e
            case Yg:
              i = 14
              break e
            case la:
              ;(i = 16), (r = null)
              break e
          }
        throw Error(G(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = qn(i, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function Ga(e, t, n, r) {
  return (e = qn(7, e, r, t)), (e.lanes = n), e
}
function ac(e, t, n, r) {
  return (
    (e = qn(22, e, r, t)),
    (e.elementType = M0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function xd(e, t, n) {
  return (e = qn(6, e, null, t)), (e.lanes = n), e
}
function Ed(e, t, n) {
  return (
    (t = qn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function oE(e, t, n, r, a) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ad(0)),
    (this.expirationTimes = ad(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ad(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null)
}
function kh(e, t, n, r, a, o, i, l, s) {
  return (
    (e = new oE(e, t, n, l, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = qn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ch(o),
    e
  )
}
function iE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: ko,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function b1(e) {
  if (!e) return Pa
  e = e._reactInternals
  e: {
    if (uo(e) !== e || e.tag !== 1) throw Error(G(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (mn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(G(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (mn(n)) return by(e, n, t)
  }
  return t
}
function C1(e, t, n, r, a, o, i, l, s) {
  return (
    (e = kh(n, r, !0, e, a, o, i, l, s)),
    (e.context = b1(null)),
    (n = e.current),
    (r = rn()),
    (a = wa(n)),
    (o = Hr(r, a)),
    (o.callback = t ?? null),
    ba(n, o, a),
    (e.current.lanes = a),
    Nl(e, a, r),
    vn(e, r),
    e
  )
}
function oc(e, t, n, r) {
  var a = t.current,
    o = rn(),
    i = wa(a)
  return (
    (n = b1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Hr(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ba(a, t, i)),
    e !== null && (dr(e, a, i, o), Ws(e, a, i)),
    i
  )
}
function Mu(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function xv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Rh(e, t) {
  xv(e, t), (e = e.alternate) && xv(e, t)
}
function lE() {
  return null
}
var w1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Mh(e) {
  this._internalRoot = e
}
ic.prototype.render = Mh.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(G(409))
  oc(e, t, null, null)
}
ic.prototype.unmount = Mh.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    no(function () {
      oc(null, e, null, null)
    }),
      (t[Wr] = null)
  }
}
function ic(e) {
  this._internalRoot = e
}
ic.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Z0()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < ua.length && t !== 0 && t < ua[n].priority; n++);
    ua.splice(n, 0, e), n === 0 && ty(e)
  }
}
function Oh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function lc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Ev() {}
function sE(e, t, n, r, a) {
  if (a) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = Mu(i)
        o.call(u)
      }
    }
    var i = C1(t, r, e, 0, null, !1, !1, '', Ev)
    return (
      (e._reactRootContainer = i),
      (e[Wr] = i.current),
      ml(e.nodeType === 8 ? e.parentNode : e),
      no(),
      i
    )
  }
  for (; (a = e.lastChild); ) e.removeChild(a)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = Mu(s)
      l.call(u)
    }
  }
  var s = kh(e, 0, !1, null, null, !1, !1, '', Ev)
  return (
    (e._reactRootContainer = s),
    (e[Wr] = s.current),
    ml(e.nodeType === 8 ? e.parentNode : e),
    no(function () {
      oc(t, s, n, r)
    }),
    s
  )
}
function sc(e, t, n, r, a) {
  var o = n._reactRootContainer
  if (o) {
    var i = o
    if (typeof a == 'function') {
      var l = a
      a = function () {
        var s = Mu(i)
        l.call(s)
      }
    }
    oc(t, i, e, a)
  } else i = sE(n, t, e, a, r)
  return Mu(i)
}
X0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = zi(t.pendingLanes)
        n !== 0 &&
          (Gg(t, n | 1), vn(t, wt()), !(Ge & 6) && ((ri = wt() + 500), Ma()))
      }
      break
    case 13:
      no(function () {
        var r = Ur(e, 1)
        if (r !== null) {
          var a = rn()
          dr(r, e, 1, a)
        }
      }),
        Rh(e, 1)
  }
}
Qg = function (e) {
  if (e.tag === 13) {
    var t = Ur(e, 134217728)
    if (t !== null) {
      var n = rn()
      dr(t, e, 134217728, n)
    }
    Rh(e, 134217728)
  }
}
J0 = function (e) {
  if (e.tag === 13) {
    var t = wa(e),
      n = Ur(e, t)
    if (n !== null) {
      var r = rn()
      dr(n, e, t, r)
    }
    Rh(e, t)
  }
}
Z0 = function () {
  return nt
}
ey = function (e, t) {
  var n = nt
  try {
    return (nt = e), t()
  } finally {
    nt = n
  }
}
ff = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((af(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var a = Ju(r)
            if (!a) throw Error(G(90))
            _0(r), af(r, a)
          }
        }
      }
      break
    case 'textarea':
      T0(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Vo(e, !!n.multiple, t, !1)
  }
}
z0 = xh
H0 = no
var uE = { usingClientEntryPoint: !1, Events: [Ll, Io, Ju, A0, j0, xh] },
  Ri = {
    findFiberByHostInstance: Ba,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  cE = {
    bundleType: Ri.bundleType,
    version: Ri.version,
    rendererPackageName: Ri.rendererPackageName,
    rendererConfig: Ri.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = W0(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ri.findFiberByHostInstance || lE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var bs = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!bs.isDisabled && bs.supportsFiber)
    try {
      ;(Ku = bs.inject(cE)), ($r = bs)
    } catch {}
}
Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uE
Ln.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Oh(t)) throw Error(G(200))
  return iE(e, t, null, n)
}
Ln.createRoot = function (e, t) {
  if (!Oh(e)) throw Error(G(299))
  var n = !1,
    r = '',
    a = w1
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (t = kh(e, 1, !1, null, null, n, !1, r, a)),
    (e[Wr] = t.current),
    ml(e.nodeType === 8 ? e.parentNode : e),
    new Mh(t)
  )
}
Ln.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(G(188))
      : ((e = Object.keys(e).join(',')), Error(G(268, e)))
  return (e = W0(t)), (e = e === null ? null : e.stateNode), e
}
Ln.flushSync = function (e) {
  return no(e)
}
Ln.hydrate = function (e, t, n) {
  if (!lc(t)) throw Error(G(200))
  return sc(null, e, t, !0, n)
}
Ln.hydrateRoot = function (e, t, n) {
  if (!Oh(e)) throw Error(G(405))
  var r = (n != null && n.hydratedSources) || null,
    a = !1,
    o = '',
    i = w1
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = C1(t, null, e, 1, n ?? null, a, !1, o, i)),
    (e[Wr] = t.current),
    ml(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (a = n._getVersion),
        (a = a(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, a])
          : t.mutableSourceEagerHydrationData.push(n, a)
  return new ic(t)
}
Ln.render = function (e, t, n) {
  if (!lc(t)) throw Error(G(200))
  return sc(null, e, t, !1, n)
}
Ln.unmountComponentAtNode = function (e) {
  if (!lc(e)) throw Error(G(40))
  return e._reactRootContainer
    ? (no(function () {
        sc(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Wr] = null)
        })
      }),
      !0)
    : !1
}
Ln.unstable_batchedUpdates = xh
Ln.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!lc(n)) throw Error(G(200))
  if (e == null || e._reactInternals === void 0) throw Error(G(38))
  return sc(e, t, n, !1, r)
}
Ln.version = '18.3.1-next-f1338f8080-20240426'
function x1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x1)
    } catch (e) {
      console.error(e)
    }
}
x1(), (x0.exports = Ln)
var jl = x0.exports
const Uf = Rr(jl),
  dE = d0({ __proto__: null, default: Uf }, [jl])
var $v = jl
;(Xd.createRoot = $v.createRoot), (Xd.hydrateRoot = $v.hydrateRoot)
var E1 = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function n() {
      for (var o = '', i = 0; i < arguments.length; i++) {
        var l = arguments[i]
        l && (o = a(o, r(l)))
      }
      return o
    }
    function r(o) {
      if (typeof o == 'string' || typeof o == 'number') return o
      if (typeof o != 'object') return ''
      if (Array.isArray(o)) return n.apply(null, o)
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes('[native code]')
      )
        return o.toString()
      var i = ''
      for (var l in o) t.call(o, l) && o[l] && (i = a(i, l))
      return i
    }
    function a(o, i) {
      return i ? (o ? o + ' ' + i : o + i) : o
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
  })()
})(E1)
var fE = E1.exports
const ke = Rr(fE)
function ve() {
  return (
    (ve = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ve.apply(null, arguments)
  )
}
var $1 = { exports: {} },
  rt = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _h = Symbol.for('react.element'),
  Ih = Symbol.for('react.portal'),
  uc = Symbol.for('react.fragment'),
  cc = Symbol.for('react.strict_mode'),
  dc = Symbol.for('react.profiler'),
  fc = Symbol.for('react.provider'),
  gc = Symbol.for('react.context'),
  gE = Symbol.for('react.server_context'),
  hc = Symbol.for('react.forward_ref'),
  mc = Symbol.for('react.suspense'),
  vc = Symbol.for('react.suspense_list'),
  pc = Symbol.for('react.memo'),
  yc = Symbol.for('react.lazy'),
  hE = Symbol.for('react.offscreen'),
  P1
P1 = Symbol.for('react.module.reference')
function Zn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case _h:
        switch (((e = e.type), e)) {
          case uc:
          case dc:
          case cc:
          case mc:
          case vc:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case gE:
              case gc:
              case hc:
              case yc:
              case pc:
              case fc:
                return e
              default:
                return t
            }
        }
      case Ih:
        return t
    }
  }
}
rt.ContextConsumer = gc
rt.ContextProvider = fc
rt.Element = _h
rt.ForwardRef = hc
rt.Fragment = uc
rt.Lazy = yc
rt.Memo = pc
rt.Portal = Ih
rt.Profiler = dc
rt.StrictMode = cc
rt.Suspense = mc
rt.SuspenseList = vc
rt.isAsyncMode = function () {
  return !1
}
rt.isConcurrentMode = function () {
  return !1
}
rt.isContextConsumer = function (e) {
  return Zn(e) === gc
}
rt.isContextProvider = function (e) {
  return Zn(e) === fc
}
rt.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === _h
}
rt.isForwardRef = function (e) {
  return Zn(e) === hc
}
rt.isFragment = function (e) {
  return Zn(e) === uc
}
rt.isLazy = function (e) {
  return Zn(e) === yc
}
rt.isMemo = function (e) {
  return Zn(e) === pc
}
rt.isPortal = function (e) {
  return Zn(e) === Ih
}
rt.isProfiler = function (e) {
  return Zn(e) === dc
}
rt.isStrictMode = function (e) {
  return Zn(e) === cc
}
rt.isSuspense = function (e) {
  return Zn(e) === mc
}
rt.isSuspenseList = function (e) {
  return Zn(e) === vc
}
rt.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === uc ||
    e === dc ||
    e === cc ||
    e === mc ||
    e === vc ||
    e === hE ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === yc ||
        e.$$typeof === pc ||
        e.$$typeof === fc ||
        e.$$typeof === gc ||
        e.$$typeof === hc ||
        e.$$typeof === P1 ||
        e.getModuleId !== void 0))
  )
}
rt.typeOf = Zn
$1.exports = rt
var el = $1.exports
function Ou(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = []
  return (
    Oe.Children.forEach(e, function (r) {
      ;(r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(Ou(r)))
          : el.isFragment(r) && r.props
            ? (n = n.concat(Ou(r.props.children, t)))
            : n.push(r))
    }),
    n
  )
}
var Yf = {},
  mE = function (t) {}
function vE(e, t) {}
function pE(e, t) {}
function yE() {
  Yf = {}
}
function k1(e, t, n) {
  !t && !Yf[n] && (e(!1, n), (Yf[n] = !0))
}
function pn(e, t) {
  k1(vE, e, t)
}
function R1(e, t) {
  k1(pE, e, t)
}
pn.preMessage = mE
pn.resetWarned = yE
pn.noteOnce = R1
function _e(e) {
  '@babel/helpers - typeof'
  return (
    (_e =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    _e(e)
  )
}
function SE(e, t) {
  if (_e(e) != 'object' || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (_e(r) != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function M1(e) {
  var t = SE(e, 'string')
  return _e(t) == 'symbol' ? t : t + ''
}
function z(e, t, n) {
  return (
    (t = M1(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function Pv(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Pv(Object(n), !0).forEach(function (r) {
          z(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Pv(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return e
}
function El(e) {
  return e instanceof HTMLElement || e instanceof SVGElement
}
function bE(e) {
  return e && _e(e) === 'object' && El(e.nativeElement)
    ? e.nativeElement
    : El(e)
      ? e
      : null
}
function Xs(e) {
  var t = bE(e)
  if (t) return t
  if (e instanceof Oe.Component) {
    var n
    return (n = Uf.findDOMNode) === null || n === void 0
      ? void 0
      : n.call(Uf, e)
  }
  return null
}
function Th(e, t, n) {
  var r = g.useRef({})
  return (
    (!('value' in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  )
}
var Fh = function (t, n) {
    typeof t == 'function'
      ? t(n)
      : _e(t) === 'object' && t && 'current' in t && (t.current = n)
  },
  gi = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    var a = n.filter(Boolean)
    return a.length <= 1
      ? a[0]
      : function (o) {
          n.forEach(function (i) {
            Fh(i, o)
          })
        }
  },
  Nh = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return Th(
      function () {
        return gi.apply(void 0, n)
      },
      n,
      function (a, o) {
        return (
          a.length !== o.length ||
          a.every(function (i, l) {
            return i !== o[l]
          })
        )
      },
    )
  },
  zl = function (t) {
    var n,
      r,
      a = el.isMemo(t) ? t.type.type : t.type
    return !(
      (typeof a == 'function' &&
        !((n = a.prototype) !== null && n !== void 0 && n.render) &&
        a.$$typeof !== el.ForwardRef) ||
      (typeof t == 'function' &&
        !((r = t.prototype) !== null && r !== void 0 && r.render) &&
        t.$$typeof !== el.ForwardRef)
    )
  }
function kv(e) {
  return g.isValidElement(e) && !el.isFragment(e)
}
Number(g.version.split('.')[0]) >= 19
var qf = g.createContext(null)
function CE(e) {
  var t = e.children,
    n = e.onBatchResize,
    r = g.useRef(0),
    a = g.useRef([]),
    o = g.useContext(qf),
    i = g.useCallback(
      function (l, s, u) {
        r.current += 1
        var c = r.current
        a.current.push({ size: l, element: s, data: u }),
          Promise.resolve().then(function () {
            c === r.current && (n == null || n(a.current), (a.current = []))
          }),
          o == null || o(l, s, u)
      },
      [n, o],
    )
  return g.createElement(qf.Provider, { value: i }, t)
}
var O1 = (function () {
    if (typeof Map < 'u') return Map
    function e(t, n) {
      var r = -1
      return (
        t.some(function (a, o) {
          return a[0] === n ? ((r = o), !0) : !1
        }),
        r
      )
    }
    return (function () {
      function t() {
        this.__entries__ = []
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            a = this.__entries__[r]
          return a && a[1]
        }),
        (t.prototype.set = function (n, r) {
          var a = e(this.__entries__, n)
          ~a ? (this.__entries__[a][1] = r) : this.__entries__.push([n, r])
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            a = e(r, n)
          ~a && r.splice(a, 1)
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n)
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0)
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null)
          for (var a = 0, o = this.__entries__; a < o.length; a++) {
            var i = o[a]
            n.call(r, i[1], i[0])
          }
        }),
        t
      )
    })()
  })(),
  Kf =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  _u = (function () {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
        ? self
        : typeof window < 'u' && window.Math === Math
          ? window
          : Function('return this')()
  })(),
  wE = (function () {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(_u)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now())
          }, 1e3 / 60)
        }
  })(),
  xE = 2
function EE(e, t) {
  var n = !1,
    r = !1,
    a = 0
  function o() {
    n && ((n = !1), e()), r && l()
  }
  function i() {
    wE(o)
  }
  function l() {
    var s = Date.now()
    if (n) {
      if (s - a < xE) return
      r = !0
    } else (n = !0), (r = !1), setTimeout(i, t)
    a = s
  }
  return l
}
var $E = 20,
  PE = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  kE = typeof MutationObserver < 'u',
  RE = (function () {
    function e() {
      ;(this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = EE(this.refresh.bind(this), $E))
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_()
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t)
        ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_()
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_()
        t && this.refresh()
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive()
        })
        return (
          t.forEach(function (n) {
            return n.broadcastActive()
          }),
          t.length > 0
        )
      }),
      (e.prototype.connect_ = function () {
        !Kf ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          kE
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0))
      }),
      (e.prototype.disconnect_ = function () {
        !Kf ||
          !this.connected_ ||
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1))
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? '' : n,
          a = PE.some(function (o) {
            return !!~r.indexOf(o)
          })
        a && this.refresh()
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_
      }),
      (e.instance_ = null),
      e
    )
  })(),
  _1 = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var a = r[n]
      Object.defineProperty(e, a, {
        value: t[a],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      })
    }
    return e
  },
  ai = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView
    return t || _u
  },
  I1 = Sc(0, 0, 0, 0)
function Iu(e) {
  return parseFloat(e) || 0
}
function Rv(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  return t.reduce(function (r, a) {
    var o = e['border-' + a + '-width']
    return r + Iu(o)
  }, 0)
}
function ME(e) {
  for (
    var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, a = t;
    r < a.length;
    r++
  ) {
    var o = a[r],
      i = e['padding-' + o]
    n[o] = Iu(i)
  }
  return n
}
function OE(e) {
  var t = e.getBBox()
  return Sc(0, 0, t.width, t.height)
}
function _E(e) {
  var t = e.clientWidth,
    n = e.clientHeight
  if (!t && !n) return I1
  var r = ai(e).getComputedStyle(e),
    a = ME(r),
    o = a.left + a.right,
    i = a.top + a.bottom,
    l = Iu(r.width),
    s = Iu(r.height)
  if (
    (r.boxSizing === 'border-box' &&
      (Math.round(l + o) !== t && (l -= Rv(r, 'left', 'right') + o),
      Math.round(s + i) !== n && (s -= Rv(r, 'top', 'bottom') + i)),
    !TE(e))
  ) {
    var u = Math.round(l + o) - t,
      c = Math.round(s + i) - n
    Math.abs(u) !== 1 && (l -= u), Math.abs(c) !== 1 && (s -= c)
  }
  return Sc(a.left, a.top, l, s)
}
var IE = (function () {
  return typeof SVGGraphicsElement < 'u'
    ? function (e) {
        return e instanceof ai(e).SVGGraphicsElement
      }
    : function (e) {
        return e instanceof ai(e).SVGElement && typeof e.getBBox == 'function'
      }
})()
function TE(e) {
  return e === ai(e).document.documentElement
}
function FE(e) {
  return Kf ? (IE(e) ? OE(e) : _E(e)) : I1
}
function NE(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    a = e.height,
    o = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    i = Object.create(o.prototype)
  return (
    _1(i, {
      x: t,
      y: n,
      width: r,
      height: a,
      top: n,
      right: t + r,
      bottom: a + n,
      left: t,
    }),
    i
  )
}
function Sc(e, t, n, r) {
  return { x: e, y: t, width: n, height: r }
}
var DE = (function () {
    function e(t) {
      ;(this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Sc(0, 0, 0, 0)),
        (this.target = t)
    }
    return (
      (e.prototype.isActive = function () {
        var t = FE(this.target)
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        )
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        )
      }),
      e
    )
  })(),
  LE = (function () {
    function e(t, n) {
      var r = NE(n)
      _1(this, { target: t, contentRect: r })
    }
    return e
  })(),
  AE = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new O1()),
        typeof t != 'function')
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.',
        )
      ;(this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r)
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof ai(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var n = this.observations_
          n.has(t) ||
            (n.set(t, new DE(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh())
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof ai(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var n = this.observations_
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this))
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this)
      }),
      (e.prototype.gatherActive = function () {
        var t = this
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n)
          })
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new LE(r.target, r.broadcastRect())
            })
          this.callback_.call(t, n, t), this.clearActive()
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
      }),
      e
    )
  })(),
  T1 = typeof WeakMap < 'u' ? new WeakMap() : new O1(),
  F1 = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.')
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.')
      var n = RE.getInstance(),
        r = new AE(t, n, this)
      T1.set(this, r)
    }
    return e
  })()
;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  F1.prototype[e] = function () {
    var t
    return (t = T1.get(this))[e].apply(t, arguments)
  }
})
var jE = (function () {
    return typeof _u.ResizeObserver < 'u' ? _u.ResizeObserver : F1
  })(),
  ga = new Map()
function zE(e) {
  e.forEach(function (t) {
    var n,
      r = t.target
    ;(n = ga.get(r)) === null ||
      n === void 0 ||
      n.forEach(function (a) {
        return a(r)
      })
  })
}
var N1 = new jE(zE)
function HE(e, t) {
  ga.has(e) || (ga.set(e, new Set()), N1.observe(e)), ga.get(e).add(t)
}
function VE(e, t) {
  ga.has(e) &&
    (ga.get(e).delete(t), ga.get(e).size || (N1.unobserve(e), ga.delete(e)))
}
function Yt(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function')
}
function Mv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, M1(r.key), r)
  }
}
function qt(e, t, n) {
  return (
    t && Mv(e.prototype, t),
    n && Mv(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  )
}
function $l(e, t) {
  return (
    ($l = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n
        }),
    $l(e, t)
  )
}
function co(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && $l(e, t)
}
function ro(e) {
  return (
    (ro = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    ro(e)
  )
}
function bc() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    )
  } catch {}
  return (bc = function () {
    return !!e
  })()
}
function Ue(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    )
  return e
}
function D1(e, t) {
  if (t && (_e(t) == 'object' || typeof t == 'function')) return t
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    )
  return Ue(e)
}
function Hl(e) {
  var t = bc()
  return function () {
    var n,
      r = ro(e)
    if (t) {
      var a = ro(this).constructor
      n = Reflect.construct(r, arguments, a)
    } else n = r.apply(this, arguments)
    return D1(this, n)
  }
}
var BE = (function (e) {
  co(n, e)
  var t = Hl(n)
  function n() {
    return Yt(this, n), t.apply(this, arguments)
  }
  return (
    qt(n, [
      {
        key: 'render',
        value: function () {
          return this.props.children
        },
      },
    ]),
    n
  )
})(g.Component)
function WE(e, t) {
  var n = e.children,
    r = e.disabled,
    a = g.useRef(null),
    o = g.useRef(null),
    i = g.useContext(qf),
    l = typeof n == 'function',
    s = l ? n(a) : n,
    u = g.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
    c = !l && g.isValidElement(s) && zl(s),
    d = c ? s.ref : null,
    f = Nh(d, a),
    y = function () {
      var m
      return (
        Xs(a.current) ||
        (a.current && _e(a.current) === 'object'
          ? Xs(
              (m = a.current) === null || m === void 0
                ? void 0
                : m.nativeElement,
            )
          : null) ||
        Xs(o.current)
      )
    }
  g.useImperativeHandle(t, function () {
    return y()
  })
  var v = g.useRef(e)
  v.current = e
  var p = g.useCallback(function (b) {
    var m = v.current,
      h = m.onResize,
      S = m.data,
      C = b.getBoundingClientRect(),
      w = C.width,
      E = C.height,
      x = b.offsetWidth,
      R = b.offsetHeight,
      F = Math.floor(w),
      _ = Math.floor(E)
    if (
      u.current.width !== F ||
      u.current.height !== _ ||
      u.current.offsetWidth !== x ||
      u.current.offsetHeight !== R
    ) {
      var T = { width: F, height: _, offsetWidth: x, offsetHeight: R }
      u.current = T
      var j = x === Math.round(w) ? w : x,
        A = R === Math.round(E) ? E : R,
        I = H(H({}, T), {}, { offsetWidth: j, offsetHeight: A })
      i == null || i(I, b, S),
        h &&
          Promise.resolve().then(function () {
            h(I, b)
          })
    }
  }, [])
  return (
    g.useEffect(
      function () {
        var b = y()
        return (
          b && !r && HE(b, p),
          function () {
            return VE(b, p)
          }
        )
      },
      [a.current, r],
    ),
    g.createElement(BE, { ref: o }, c ? g.cloneElement(s, { ref: f }) : s)
  )
}
var UE = g.forwardRef(WE),
  YE = 'rc-observer-key'
function qE(e, t) {
  var n = e.children,
    r = typeof n == 'function' ? [n] : Ou(n)
  return r.map(function (a, o) {
    var i = (a == null ? void 0 : a.key) || ''.concat(YE, '-').concat(o)
    return g.createElement(
      UE,
      ve({}, e, { key: i, ref: o === 0 ? t : void 0 }),
      a,
    )
  })
}
var fo = g.forwardRef(qE)
fo.Collection = CE
function Dh(e, t) {
  var n = Object.assign({}, e)
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r]
      }),
    n
  )
}
function Gf(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
  return r
}
function KE(e) {
  if (Array.isArray(e)) return Gf(e)
}
function L1(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e)
}
function Lh(e, t) {
  if (e) {
    if (typeof e == 'string') return Gf(e, t)
    var n = {}.toString.call(e).slice(8, -1)
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Gf(e, t)
          : void 0
    )
  }
}
function GE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function de(e) {
  return KE(e) || L1(e) || Lh(e) || GE()
}
var A1 = function (t) {
    return +setTimeout(t, 16)
  },
  j1 = function (t) {
    return clearTimeout(t)
  }
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((A1 = function (t) {
    return window.requestAnimationFrame(t)
  }),
  (j1 = function (t) {
    return window.cancelAnimationFrame(t)
  }))
var Ov = 0,
  Ah = new Map()
function z1(e) {
  Ah.delete(e)
}
var Bt = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  Ov += 1
  var r = Ov
  function a(o) {
    if (o === 0) z1(r), t()
    else {
      var i = A1(function () {
        a(o - 1)
      })
      Ah.set(r, i)
    }
  }
  return a(n), r
}
Bt.cancel = function (e) {
  var t = Ah.get(e)
  return z1(e), j1(t)
}
function H1(e) {
  if (Array.isArray(e)) return e
}
function QE(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (n != null) {
    var r,
      a,
      o,
      i,
      l = [],
      s = !0,
      u = !1
    try {
      if (((o = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return
        s = !1
      } else
        for (
          ;
          !(s = (r = o.call(n)).done) && (l.push(r.value), l.length !== t);
          s = !0
        );
    } catch (c) {
      ;(u = !0), (a = c)
    } finally {
      try {
        if (!s && n.return != null && ((i = n.return()), Object(i) !== i))
          return
      } finally {
        if (u) throw a
      }
    }
    return l
  }
}
function V1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function V(e, t) {
  return H1(e) || QE(e, t) || Lh(e, t) || V1()
}
function Pl(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
function Nn() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  )
}
function XE(e, t) {
  if (!e) return !1
  if (e.contains) return e.contains(t)
  for (var n = t; n; ) {
    if (n === e) return !0
    n = n.parentNode
  }
  return !1
}
var _v = 'data-rc-order',
  Iv = 'data-rc-priority',
  JE = 'rc-util-key',
  Qf = new Map()
function B1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : JE
}
function Cc(e) {
  if (e.attachTo) return e.attachTo
  var t = document.querySelector('head')
  return t || document.body
}
function ZE(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function jh(e) {
  return Array.from((Qf.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE'
  })
}
function W1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!Nn()) return null
  var n = t.csp,
    r = t.prepend,
    a = t.priority,
    o = a === void 0 ? 0 : a,
    i = ZE(r),
    l = i === 'prependQueue',
    s = document.createElement('style')
  s.setAttribute(_v, i),
    l && o && s.setAttribute(Iv, ''.concat(o)),
    n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce),
    (s.innerHTML = e)
  var u = Cc(t),
    c = u.firstChild
  if (r) {
    if (l) {
      var d = (t.styles || jh(u)).filter(function (f) {
        if (!['prepend', 'prependQueue'].includes(f.getAttribute(_v))) return !1
        var y = Number(f.getAttribute(Iv) || 0)
        return o >= y
      })
      if (d.length) return u.insertBefore(s, d[d.length - 1].nextSibling), s
    }
    u.insertBefore(s, c)
  } else u.appendChild(s)
  return s
}
function U1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Cc(t)
  return (t.styles || jh(n)).find(function (r) {
    return r.getAttribute(B1(t)) === e
  })
}
function kl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = U1(e, t)
  if (n) {
    var r = Cc(t)
    r.removeChild(n)
  }
}
function e$(e, t) {
  var n = Qf.get(e)
  if (!n || !XE(document, n)) {
    var r = W1('', t),
      a = r.parentNode
    Qf.set(e, a), e.removeChild(r)
  }
}
function Vr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Cc(n),
    a = jh(r),
    o = H(H({}, n), {}, { styles: a })
  e$(r, o)
  var i = U1(t, o)
  if (i) {
    var l, s
    if (
      (l = o.csp) !== null &&
      l !== void 0 &&
      l.nonce &&
      i.nonce !== ((s = o.csp) === null || s === void 0 ? void 0 : s.nonce)
    ) {
      var u
      i.nonce = (u = o.csp) === null || u === void 0 ? void 0 : u.nonce
    }
    return i.innerHTML !== e && (i.innerHTML = e), i
  }
  var c = W1(e, o)
  return c.setAttribute(B1(o), t), c
}
function t$(e, t) {
  if (e == null) return {}
  var n = {}
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue
      n[r] = e[r]
    }
  return n
}
function xt(e, t) {
  if (e == null) return {}
  var n,
    r,
    a = t$(e, t)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (r = 0; r < o.length; r++)
      (n = o[r]),
        t.indexOf(n) >= 0 ||
          ({}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]))
  }
  return a
}
function Xf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set()
  function a(o, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      s = r.has(o)
    if ((pn(!s, 'Warning: There may be circular references'), s)) return !1
    if (o === i) return !0
    if (n && l > 1) return !1
    r.add(o)
    var u = l + 1
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length) return !1
      for (var c = 0; c < o.length; c++) if (!a(o[c], i[c], u)) return !1
      return !0
    }
    if (o && i && _e(o) === 'object' && _e(i) === 'object') {
      var d = Object.keys(o)
      return d.length !== Object.keys(i).length
        ? !1
        : d.every(function (f) {
            return a(o[f], i[f], u)
          })
    }
    return !1
  }
  return a(e, t)
}
var n$ = '%'
function Jf(e) {
  return e.join(n$)
}
var r$ = (function () {
    function e(t) {
      Yt(this, e),
        z(this, 'instanceId', void 0),
        z(this, 'cache', new Map()),
        (this.instanceId = t)
    }
    return (
      qt(e, [
        {
          key: 'get',
          value: function (n) {
            return this.opGet(Jf(n))
          },
        },
        {
          key: 'opGet',
          value: function (n) {
            return this.cache.get(n) || null
          },
        },
        {
          key: 'update',
          value: function (n, r) {
            return this.opUpdate(Jf(n), r)
          },
        },
        {
          key: 'opUpdate',
          value: function (n, r) {
            var a = this.cache.get(n),
              o = r(a)
            o === null ? this.cache.delete(n) : this.cache.set(n, o)
          },
        },
      ]),
      e
    )
  })(),
  oi = 'data-token-hash',
  fr = 'data-css-hash',
  ha = '__cssinjs_instance__'
function a$() {
  var e = Math.random().toString(12).slice(2)
  if (typeof document < 'u' && document.head && document.body) {
    var t = document.body.querySelectorAll('style['.concat(fr, ']')) || [],
      n = document.head.firstChild
    Array.from(t).forEach(function (a) {
      ;(a[ha] = a[ha] || e), a[ha] === e && document.head.insertBefore(a, n)
    })
    var r = {}
    Array.from(document.querySelectorAll('style['.concat(fr, ']'))).forEach(
      function (a) {
        var o = a.getAttribute(fr)
        if (r[o]) {
          if (a[ha] === e) {
            var i
            ;(i = a.parentNode) === null || i === void 0 || i.removeChild(a)
          }
        } else r[o] = !0
      },
    )
  }
  return new r$(e)
}
var wc = g.createContext({ hashPriority: 'low', cache: a$(), defaultCache: !0 })
function o$(e, t) {
  if (e.length !== t.length) return !1
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
var zh = (function () {
  function e() {
    Yt(this, e),
      z(this, 'cache', void 0),
      z(this, 'keys', void 0),
      z(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0)
  }
  return (
    qt(e, [
      {
        key: 'size',
        value: function () {
          return this.keys.length
        },
      },
      {
        key: 'internalGet',
        value: function (n) {
          var r,
            a,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            i = { map: this.cache }
          return (
            n.forEach(function (l) {
              if (!i) i = void 0
              else {
                var s
                i =
                  (s = i) === null ||
                  s === void 0 ||
                  (s = s.map) === null ||
                  s === void 0
                    ? void 0
                    : s.get(l)
              }
            }),
            (r = i) !== null &&
              r !== void 0 &&
              r.value &&
              o &&
              (i.value[1] = this.cacheCallTimes++),
            (a = i) === null || a === void 0 ? void 0 : a.value
          )
        },
      },
      {
        key: 'get',
        value: function (n) {
          var r
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0]
        },
      },
      {
        key: 'has',
        value: function (n) {
          return !!this.internalGet(n)
        },
      },
      {
        key: 'set',
        value: function (n, r) {
          var a = this
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var o = this.keys.reduce(
                  function (u, c) {
                    var d = V(u, 2),
                      f = d[1]
                    return a.internalGet(c)[1] < f
                      ? [c, a.internalGet(c)[1]]
                      : u
                  },
                  [this.keys[0], this.cacheCallTimes],
                ),
                i = V(o, 1),
                l = i[0]
              this.delete(l)
            }
            this.keys.push(n)
          }
          var s = this.cache
          n.forEach(function (u, c) {
            if (c === n.length - 1) s.set(u, { value: [r, a.cacheCallTimes++] })
            else {
              var d = s.get(u)
              d ? d.map || (d.map = new Map()) : s.set(u, { map: new Map() }),
                (s = s.get(u).map)
            }
          })
        },
      },
      {
        key: 'deleteByPath',
        value: function (n, r) {
          var a = n.get(r[0])
          if (r.length === 1) {
            var o
            return (
              a.map ? n.set(r[0], { map: a.map }) : n.delete(r[0]),
              (o = a.value) === null || o === void 0 ? void 0 : o[0]
            )
          }
          var i = this.deleteByPath(a.map, r.slice(1))
          return (!a.map || a.map.size === 0) && !a.value && n.delete(r[0]), i
        },
      },
      {
        key: 'delete',
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !o$(r, n)
              })),
              this.deleteByPath(this.cache, n)
            )
        },
      },
    ]),
    e
  )
})()
z(zh, 'MAX_CACHE_SIZE', 20)
z(zh, 'MAX_CACHE_OFFSET', 5)
var Tv = 0,
  Y1 = (function () {
    function e(t) {
      Yt(this, e),
        z(this, 'derivatives', void 0),
        z(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = Tv),
        t.length === 0 && (t.length > 0, void 0),
        (Tv += 1)
    }
    return (
      qt(e, [
        {
          key: 'getDerivativeToken',
          value: function (n) {
            return this.derivatives.reduce(
              function (r, a) {
                return a(n, r)
              },
              void 0,
            )
          },
        },
      ]),
      e
    )
  })(),
  $d = new zh()
function Zf(e) {
  var t = Array.isArray(e) ? e : [e]
  return $d.has(t) || $d.set(t, new Y1(t)), $d.get(t)
}
var i$ = new WeakMap(),
  Pd = {}
function l$(e, t) {
  for (var n = i$, r = 0; r < t.length; r += 1) {
    var a = t[r]
    n.has(a) || n.set(a, new WeakMap()), (n = n.get(a))
  }
  return n.has(Pd) || n.set(Pd, e()), n.get(Pd)
}
var Fv = new WeakMap()
function tl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = Fv.get(e) || ''
  return (
    n ||
      (Object.keys(e).forEach(function (r) {
        var a = e[r]
        ;(n += r),
          a instanceof Y1
            ? (n += a.id)
            : a && _e(a) === 'object'
              ? (n += tl(a, t))
              : (n += a)
      }),
      t && (n = Pl(n)),
      Fv.set(e, n)),
    n
  )
}
function Nv(e, t) {
  return Pl(''.concat(t, '_').concat(tl(e, !0)))
}
var eg = Nn()
function ee(e) {
  return typeof e == 'number' ? ''.concat(e, 'px') : e
}
function Tu(e, t, n) {
  var r,
    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
  if (o) return e
  var i = H(H({}, a), {}, ((r = {}), z(r, oi, t), z(r, fr, n), r)),
    l = Object.keys(i)
      .map(function (s) {
        var u = i[s]
        return u ? ''.concat(s, '="').concat(u, '"') : null
      })
      .filter(function (s) {
        return s
      })
      .join(' ')
  return '<style '.concat(l, '>').concat(e, '</style>')
}
var Js = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    return '--'
      .concat(n ? ''.concat(n, '-') : '')
      .concat(t)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .toLowerCase()
  },
  s$ = function (t, n, r) {
    return Object.keys(t).length
      ? '.'
          .concat(n)
          .concat(r != null && r.scope ? '.'.concat(r.scope) : '', '{')
          .concat(
            Object.entries(t)
              .map(function (a) {
                var o = V(a, 2),
                  i = o[0],
                  l = o[1]
                return ''.concat(i, ':').concat(l, ';')
              })
              .join(''),
            '}',
          )
      : ''
  },
  q1 = function (t, n, r) {
    var a = {},
      o = {}
    return (
      Object.entries(t).forEach(function (i) {
        var l,
          s,
          u = V(i, 2),
          c = u[0],
          d = u[1]
        if (r != null && (l = r.preserve) !== null && l !== void 0 && l[c])
          o[c] = d
        else if (
          (typeof d == 'string' || typeof d == 'number') &&
          !(r != null && (s = r.ignore) !== null && s !== void 0 && s[c])
        ) {
          var f,
            y = Js(c, r == null ? void 0 : r.prefix)
          ;(a[y] =
            typeof d == 'number' &&
            !(r != null && (f = r.unitless) !== null && f !== void 0 && f[c])
              ? ''.concat(d, 'px')
              : String(d)),
            (o[c] = 'var('.concat(y, ')'))
        }
      }),
      [o, s$(a, n, { scope: r == null ? void 0 : r.scope })]
    )
  },
  Dv = Nn() ? g.useLayoutEffect : g.useEffect,
  ft = function (t, n) {
    var r = g.useRef(!0)
    Dv(function () {
      return t(r.current)
    }, n),
      Dv(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0
          }
        )
      }, [])
  },
  tg = function (t, n) {
    ft(function (r) {
      if (!r) return t()
    }, n)
  },
  u$ = H({}, qu),
  Lv = u$.useInsertionEffect,
  c$ = function (t, n, r) {
    g.useMemo(t, r),
      ft(function () {
        return n(!0)
      }, r)
  },
  d$ = Lv
    ? function (e, t, n) {
        return Lv(function () {
          return e(), t()
        }, n)
      }
    : c$,
  f$ = H({}, qu),
  g$ = f$.useInsertionEffect,
  h$ = function (t) {
    var n = [],
      r = !1
    function a(o) {
      r || n.push(o)
    }
    return (
      g.useEffect(function () {
        return (
          (r = !1),
          function () {
            ;(r = !0),
              n.length &&
                n.forEach(function (o) {
                  return o()
                })
          }
        )
      }, t),
      a
    )
  },
  m$ = function () {
    return function (t) {
      t()
    }
  },
  v$ = typeof g$ < 'u' ? h$ : m$
function Hh(e, t, n, r, a) {
  var o = g.useContext(wc),
    i = o.cache,
    l = [e].concat(de(t)),
    s = Jf(l),
    u = v$([s]),
    c = function (v) {
      i.opUpdate(s, function (p) {
        var b = p || [void 0, void 0],
          m = V(b, 2),
          h = m[0],
          S = h === void 0 ? 0 : h,
          C = m[1],
          w = C,
          E = w || n(),
          x = [S, E]
        return v ? v(x) : x
      })
    }
  g.useMemo(
    function () {
      c()
    },
    [s],
  )
  var d = i.opGet(s),
    f = d[1]
  return (
    d$(
      function () {
        a == null || a(f)
      },
      function (y) {
        return (
          c(function (v) {
            var p = V(v, 2),
              b = p[0],
              m = p[1]
            return y && b === 0 && (a == null || a(f)), [b + 1, m]
          }),
          function () {
            i.opUpdate(s, function (v) {
              var p = v || [],
                b = V(p, 2),
                m = b[0],
                h = m === void 0 ? 0 : m,
                S = b[1],
                C = h - 1
              return C === 0
                ? (u(function () {
                    ;(y || !i.opGet(s)) && (r == null || r(S, !1))
                  }),
                  null)
                : [h - 1, S]
            })
          }
        )
      },
      [s],
    ),
    f
  )
}
var p$ = {},
  y$ = 'css',
  Va = new Map()
function S$(e) {
  Va.set(e, (Va.get(e) || 0) + 1)
}
function b$(e, t) {
  if (typeof document < 'u') {
    var n = document.querySelectorAll('style['.concat(oi, '="').concat(e, '"]'))
    n.forEach(function (r) {
      if (r[ha] === t) {
        var a
        ;(a = r.parentNode) === null || a === void 0 || a.removeChild(r)
      }
    })
  }
}
var C$ = 0
function w$(e, t) {
  Va.set(e, (Va.get(e) || 0) - 1)
  var n = Array.from(Va.keys()),
    r = n.filter(function (a) {
      var o = Va.get(a) || 0
      return o <= 0
    })
  n.length - r.length > C$ &&
    r.forEach(function (a) {
      b$(a, t), Va.delete(a)
    })
}
var x$ = function (t, n, r, a) {
    var o = r.getDerivativeToken(t),
      i = H(H({}, o), n)
    return a && (i = a(i)), i
  },
  K1 = 'token'
function E$(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = g.useContext(wc),
    a = r.cache.instanceId,
    o = r.container,
    i = n.salt,
    l = i === void 0 ? '' : i,
    s = n.override,
    u = s === void 0 ? p$ : s,
    c = n.formatToken,
    d = n.getComputedToken,
    f = n.cssVar,
    y = l$(function () {
      return Object.assign.apply(Object, [{}].concat(de(t)))
    }, t),
    v = tl(y),
    p = tl(u),
    b = f ? tl(f) : '',
    m = Hh(
      K1,
      [l, e.id, v, p, b],
      function () {
        var h,
          S = d ? d(y, u, e) : x$(y, u, e, c),
          C = H({}, S),
          w = ''
        if (f) {
          var E = q1(S, f.key, {
              prefix: f.prefix,
              ignore: f.ignore,
              unitless: f.unitless,
              preserve: f.preserve,
            }),
            x = V(E, 2)
          ;(S = x[0]), (w = x[1])
        }
        var R = Nv(S, l)
        ;(S._tokenKey = R), (C._tokenKey = Nv(C, l))
        var F =
          (h = f == null ? void 0 : f.key) !== null && h !== void 0 ? h : R
        ;(S._themeKey = F), S$(F)
        var _ = ''.concat(y$, '-').concat(Pl(R))
        return (S._hashId = _), [S, _, C, w, (f == null ? void 0 : f.key) || '']
      },
      function (h) {
        w$(h[0]._themeKey, a)
      },
      function (h) {
        var S = V(h, 4),
          C = S[0],
          w = S[3]
        if (f && w) {
          var E = Vr(w, Pl('css-variables-'.concat(C._themeKey)), {
            mark: fr,
            prepend: 'queue',
            attachTo: o,
            priority: -999,
          })
          ;(E[ha] = a), E.setAttribute(oi, C._themeKey)
        }
      },
    )
  return m
}
var $$ = function (t, n, r) {
    var a = V(t, 5),
      o = a[2],
      i = a[3],
      l = a[4],
      s = r || {},
      u = s.plain
    if (!i) return null
    var c = o._tokenKey,
      d = -999,
      f = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(d) },
      y = Tu(i, l, c, f, u)
    return [d, c, y]
  },
  P$ = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  G1 = 'comm',
  Q1 = 'rule',
  X1 = 'decl',
  k$ = '@import',
  R$ = '@keyframes',
  M$ = '@layer',
  J1 = Math.abs,
  Vh = String.fromCharCode
function Z1(e) {
  return e.trim()
}
function Zs(e, t, n) {
  return e.replace(t, n)
}
function O$(e, t, n) {
  return e.indexOf(t, n)
}
function Rl(e, t) {
  return e.charCodeAt(t) | 0
}
function Ml(e, t, n) {
  return e.slice(t, n)
}
function Ar(e) {
  return e.length
}
function _$(e) {
  return e.length
}
function Cs(e, t) {
  return t.push(e), e
}
var xc = 1,
  ii = 1,
  eS = 0,
  Jn = 0,
  Pt = 0,
  hi = ''
function Bh(e, t, n, r, a, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: a,
    children: o,
    line: xc,
    column: ii,
    length: i,
    return: '',
    siblings: l,
  }
}
function I$() {
  return Pt
}
function T$() {
  return (
    (Pt = Jn > 0 ? Rl(hi, --Jn) : 0), ii--, Pt === 10 && ((ii = 1), xc--), Pt
  )
}
function gr() {
  return (
    (Pt = Jn < eS ? Rl(hi, Jn++) : 0), ii++, Pt === 10 && ((ii = 1), xc++), Pt
  )
}
function Qa() {
  return Rl(hi, Jn)
}
function eu() {
  return Jn
}
function Ec(e, t) {
  return Ml(hi, e, t)
}
function ng(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function F$(e) {
  return (xc = ii = 1), (eS = Ar((hi = e))), (Jn = 0), []
}
function N$(e) {
  return (hi = ''), e
}
function kd(e) {
  return Z1(Ec(Jn - 1, rg(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function D$(e) {
  for (; (Pt = Qa()) && Pt < 33; ) gr()
  return ng(e) > 2 || ng(Pt) > 3 ? '' : ' '
}
function L$(e, t) {
  for (
    ;
    --t &&
    gr() &&
    !(Pt < 48 || Pt > 102 || (Pt > 57 && Pt < 65) || (Pt > 70 && Pt < 97));

  );
  return Ec(e, eu() + (t < 6 && Qa() == 32 && gr() == 32))
}
function rg(e) {
  for (; gr(); )
    switch (Pt) {
      case e:
        return Jn
      case 34:
      case 39:
        e !== 34 && e !== 39 && rg(Pt)
        break
      case 40:
        e === 41 && rg(e)
        break
      case 92:
        gr()
        break
    }
  return Jn
}
function A$(e, t) {
  for (; gr() && e + Pt !== 57; ) if (e + Pt === 84 && Qa() === 47) break
  return '/*' + Ec(t, Jn - 1) + '*' + Vh(e === 47 ? e : gr())
}
function j$(e) {
  for (; !ng(Qa()); ) gr()
  return Ec(e, Jn)
}
function z$(e) {
  return N$(tu('', null, null, null, [''], (e = F$(e)), 0, [0], e))
}
function tu(e, t, n, r, a, o, i, l, s) {
  for (
    var u = 0,
      c = 0,
      d = i,
      f = 0,
      y = 0,
      v = 0,
      p = 1,
      b = 1,
      m = 1,
      h = 0,
      S = '',
      C = a,
      w = o,
      E = r,
      x = S;
    b;

  )
    switch (((v = h), (h = gr()))) {
      case 40:
        if (v != 108 && Rl(x, d - 1) == 58) {
          O$((x += Zs(kd(h), '&', '&\f')), '&\f', J1(u ? l[u - 1] : 0)) != -1 &&
            (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        x += kd(h)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        x += D$(v)
        break
      case 92:
        x += L$(eu() - 1, 7)
        continue
      case 47:
        switch (Qa()) {
          case 42:
          case 47:
            Cs(H$(A$(gr(), eu()), t, n, s), s)
            break
          default:
            x += '/'
        }
        break
      case 123 * p:
        l[u++] = Ar(x) * m
      case 125 * p:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            b = 0
          case 59 + c:
            m == -1 && (x = Zs(x, /\f/g, '')),
              y > 0 &&
                Ar(x) - d &&
                Cs(
                  y > 32
                    ? jv(x + ';', r, n, d - 1, s)
                    : jv(Zs(x, ' ', '') + ';', r, n, d - 2, s),
                  s,
                )
            break
          case 59:
            x += ';'
          default:
            if (
              (Cs(
                (E = Av(x, t, n, u, c, a, l, S, (C = []), (w = []), d, o)),
                o,
              ),
              h === 123)
            )
              if (c === 0) tu(x, t, E, E, C, o, d, l, w)
              else
                switch (f === 99 && Rl(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tu(
                      e,
                      E,
                      E,
                      r && Cs(Av(e, E, E, 0, 0, a, l, S, a, (C = []), d, w), w),
                      a,
                      w,
                      d,
                      l,
                      r ? C : w,
                    )
                    break
                  default:
                    tu(x, E, E, E, [''], w, 0, l, w)
                }
        }
        ;(u = c = y = 0), (p = m = 1), (S = x = ''), (d = i)
        break
      case 58:
        ;(d = 1 + Ar(x)), (y = v)
      default:
        if (p < 1) {
          if (h == 123) --p
          else if (h == 125 && p++ == 0 && T$() == 125) continue
        }
        switch (((x += Vh(h)), h * p)) {
          case 38:
            m = c > 0 ? 1 : ((x += '\f'), -1)
            break
          case 44:
            ;(l[u++] = (Ar(x) - 1) * m), (m = 1)
            break
          case 64:
            Qa() === 45 && (x += kd(gr())),
              (f = Qa()),
              (c = d = Ar((S = x += j$(eu())))),
              h++
            break
          case 45:
            v === 45 && Ar(x) == 2 && (p = 0)
        }
    }
  return o
}
function Av(e, t, n, r, a, o, i, l, s, u, c, d) {
  for (
    var f = a - 1, y = a === 0 ? o : [''], v = _$(y), p = 0, b = 0, m = 0;
    p < r;
    ++p
  )
    for (var h = 0, S = Ml(e, f + 1, (f = J1((b = i[p])))), C = e; h < v; ++h)
      (C = Z1(b > 0 ? y[h] + ' ' + S : Zs(S, /&\f/g, y[h]))) && (s[m++] = C)
  return Bh(e, t, n, a === 0 ? Q1 : l, s, u, c, d)
}
function H$(e, t, n, r) {
  return Bh(e, t, n, G1, Vh(I$()), Ml(e, 2, -2), 0, r)
}
function jv(e, t, n, r, a) {
  return Bh(e, t, n, X1, Ml(e, 0, r), Ml(e, r + 1, -1), r, a)
}
function ag(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || ''
  return n
}
function V$(e, t, n, r) {
  switch (e.type) {
    case M$:
      if (e.children.length) break
    case k$:
    case X1:
      return (e.return = e.return || e.value)
    case G1:
      return ''
    case R$:
      return (e.return = e.value + '{' + ag(e.children, r) + '}')
    case Q1:
      if (!Ar((e.value = e.props.join(',')))) return ''
  }
  return Ar((n = ag(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
var zv = 'data-ant-cssinjs-cache-path',
  tS = '_FILE_STYLE__',
  Xa,
  nS = !0
function B$() {
  if (!Xa && ((Xa = {}), Nn())) {
    var e = document.createElement('div')
    ;(e.className = zv),
      (e.style.position = 'fixed'),
      (e.style.visibility = 'hidden'),
      (e.style.top = '-9999px'),
      document.body.appendChild(e)
    var t = getComputedStyle(e).content || ''
    ;(t = t.replace(/^"/, '').replace(/"$/, '')),
      t.split(';').forEach(function (a) {
        var o = a.split(':'),
          i = V(o, 2),
          l = i[0],
          s = i[1]
        Xa[l] = s
      })
    var n = document.querySelector('style['.concat(zv, ']'))
    if (n) {
      var r
      ;(nS = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n)
    }
    document.body.removeChild(e)
  }
}
function W$(e) {
  return B$(), !!Xa[e]
}
function U$(e) {
  var t = Xa[e],
    n = null
  if (t && Nn())
    if (nS) n = tS
    else {
      var r = document.querySelector(
        'style['.concat(fr, '="').concat(Xa[e], '"]'),
      )
      r ? (n = r.innerHTML) : delete Xa[e]
    }
  return [n, t]
}
var Y$ = '_skip_check_',
  rS = '_multi_value_'
function nu(e) {
  var t = ag(z$(e), V$)
  return t.replace(/\{%%%\:[^;];}/g, ';')
}
function q$(e) {
  return _e(e) === 'object' && e && (Y$ in e || rS in e)
}
function K$(e, t, n) {
  if (!t) return e
  var r = '.'.concat(t),
    a = n === 'low' ? ':where('.concat(r, ')') : r,
    o = e.split(',').map(function (i) {
      var l,
        s = i.trim().split(/\s+/),
        u = s[0] || '',
        c =
          ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || ''
      return (
        (u = ''.concat(c).concat(a).concat(u.slice(c.length))),
        [u].concat(de(s.slice(1))).join(' ')
      )
    })
  return o.join(',')
}
var G$ = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    a = r.root,
    o = r.injectHash,
    i = r.parentSelectors,
    l = n.hashId,
    s = n.layer
  n.path
  var u = n.hashPriority,
    c = n.transformers,
    d = c === void 0 ? [] : c
  n.linters
  var f = '',
    y = {}
  function v(m) {
    var h = m.getName(l)
    if (!y[h]) {
      var S = e(m.style, n, { root: !1, parentSelectors: i }),
        C = V(S, 1),
        w = C[0]
      y[h] = '@keyframes '.concat(m.getName(l)).concat(w)
    }
  }
  function p(m) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
    return (
      m.forEach(function (S) {
        Array.isArray(S) ? p(S, h) : S && h.push(S)
      }),
      h
    )
  }
  var b = p(Array.isArray(t) ? t : [t])
  return (
    b.forEach(function (m) {
      var h = typeof m == 'string' && !a ? {} : m
      if (typeof h == 'string')
        f += ''.concat(
          h,
          `
`,
        )
      else if (h._keyframe) v(h)
      else {
        var S = d.reduce(function (C, w) {
          var E
          return (
            (w == null || (E = w.visit) === null || E === void 0
              ? void 0
              : E.call(w, C)) || C
          )
        }, h)
        Object.keys(S).forEach(function (C) {
          var w = S[C]
          if (
            _e(w) === 'object' &&
            w &&
            (C !== 'animationName' || !w._keyframe) &&
            !q$(w)
          ) {
            var E = !1,
              x = C.trim(),
              R = !1
            ;(a || o) && l
              ? x.startsWith('@')
                ? (E = !0)
                : (x = K$(C, l, u))
              : a && !l && (x === '&' || x === '') && ((x = ''), (R = !0))
            var F = e(w, n, {
                root: R,
                injectHash: E,
                parentSelectors: [].concat(de(i), [x]),
              }),
              _ = V(F, 2),
              T = _[0],
              j = _[1]
            ;(y = H(H({}, y), j)), (f += ''.concat(x).concat(T))
          } else {
            let N = function (P, k) {
              var $ = P.replace(/[A-Z]/g, function (O) {
                  return '-'.concat(O.toLowerCase())
                }),
                M = k
              !P$[P] &&
                typeof M == 'number' &&
                M !== 0 &&
                (M = ''.concat(M, 'px')),
                P === 'animationName' &&
                  k !== null &&
                  k !== void 0 &&
                  k._keyframe &&
                  (v(k), (M = k.getName(l))),
                (f += ''.concat($, ':').concat(M, ';'))
            }
            var A,
              I =
                (A = w == null ? void 0 : w.value) !== null && A !== void 0
                  ? A
                  : w
            _e(w) === 'object' &&
            w !== null &&
            w !== void 0 &&
            w[rS] &&
            Array.isArray(I)
              ? I.forEach(function (P) {
                  N(C, P)
                })
              : N(C, I)
          }
        })
      }
    }),
    a
      ? s &&
        ((f = '@layer '.concat(s.name, ' {').concat(f, '}')),
        s.dependencies &&
          (y['@layer '.concat(s.name)] = s.dependencies.map(function (m) {
            return '@layer '.concat(m, ', ').concat(s.name, ';')
          }).join(`
`)))
      : (f = '{'.concat(f, '}')),
    [f, y]
  )
}
function aS(e, t) {
  return Pl(''.concat(e.join('%')).concat(t))
}
function Q$() {
  return null
}
var oS = 'style'
function og(e, t) {
  var n = e.token,
    r = e.path,
    a = e.hashId,
    o = e.layer,
    i = e.nonce,
    l = e.clientOnly,
    s = e.order,
    u = s === void 0 ? 0 : s,
    c = g.useContext(wc),
    d = c.autoClear
  c.mock
  var f = c.defaultCache,
    y = c.hashPriority,
    v = c.container,
    p = c.ssrInline,
    b = c.transformers,
    m = c.linters,
    h = c.cache,
    S = c.layer,
    C = n._tokenKey,
    w = [C]
  S && w.push('layer'), w.push.apply(w, de(r))
  var E = eg,
    x = Hh(
      oS,
      w,
      function () {
        var j = w.join('|')
        if (W$(j)) {
          var A = U$(j),
            I = V(A, 2),
            N = I[0],
            P = I[1]
          if (N) return [N, C, P, {}, l, u]
        }
        var k = t(),
          $ = G$(k, {
            hashId: a,
            hashPriority: y,
            layer: S ? o : void 0,
            path: r.join('-'),
            transformers: b,
            linters: m,
          }),
          M = V($, 2),
          O = M[0],
          D = M[1],
          L = nu(O),
          W = aS(w, L)
        return [L, C, W, D, l, u]
      },
      function (j, A) {
        var I = V(j, 3),
          N = I[2]
        ;(A || d) && eg && kl(N, { mark: fr })
      },
      function (j) {
        var A = V(j, 4),
          I = A[0]
        A[1]
        var N = A[2],
          P = A[3]
        if (E && I !== tS) {
          var k = {
              mark: fr,
              prepend: S ? !1 : 'queue',
              attachTo: v,
              priority: u,
            },
            $ = typeof i == 'function' ? i() : i
          $ && (k.csp = { nonce: $ })
          var M = [],
            O = []
          Object.keys(P).forEach(function (L) {
            L.startsWith('@layer') ? M.push(L) : O.push(L)
          }),
            M.forEach(function (L) {
              Vr(
                nu(P[L]),
                '_layer-'.concat(L),
                H(H({}, k), {}, { prepend: !0 }),
              )
            })
          var D = Vr(I, N, k)
          ;(D[ha] = h.instanceId),
            D.setAttribute(oi, C),
            O.forEach(function (L) {
              Vr(nu(P[L]), '_effect-'.concat(L), k)
            })
        }
      },
    ),
    R = V(x, 3),
    F = R[0],
    _ = R[1],
    T = R[2]
  return function (j) {
    var A
    if (!p || E || !f) A = g.createElement(Q$, null)
    else {
      var I
      A = g.createElement(
        'style',
        ve({}, ((I = {}), z(I, oi, _), z(I, fr, T), I), {
          dangerouslySetInnerHTML: { __html: F },
        }),
      )
    }
    return g.createElement(g.Fragment, null, A, j)
  }
}
var X$ = function (t, n, r) {
    var a = V(t, 6),
      o = a[0],
      i = a[1],
      l = a[2],
      s = a[3],
      u = a[4],
      c = a[5],
      d = r || {},
      f = d.plain
    if (u) return null
    var y = o,
      v = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) }
    return (
      (y = Tu(o, i, l, v, f)),
      s &&
        Object.keys(s).forEach(function (p) {
          if (!n[p]) {
            n[p] = !0
            var b = nu(s[p]),
              m = Tu(b, i, '_effect-'.concat(p), v, f)
            p.startsWith('@layer') ? (y = m + y) : (y += m)
          }
        }),
      [c, l, y]
    )
  },
  iS = 'cssVar',
  J$ = function (t, n) {
    var r = t.key,
      a = t.prefix,
      o = t.unitless,
      i = t.ignore,
      l = t.token,
      s = t.scope,
      u = s === void 0 ? '' : s,
      c = g.useContext(wc),
      d = c.cache.instanceId,
      f = c.container,
      y = l._tokenKey,
      v = [].concat(de(t.path), [r, u, y]),
      p = Hh(
        iS,
        v,
        function () {
          var b = n(),
            m = q1(b, r, { prefix: a, unitless: o, ignore: i, scope: u }),
            h = V(m, 2),
            S = h[0],
            C = h[1],
            w = aS(v, C)
          return [S, C, w, r]
        },
        function (b) {
          var m = V(b, 3),
            h = m[2]
          eg && kl(h, { mark: fr })
        },
        function (b) {
          var m = V(b, 3),
            h = m[1],
            S = m[2]
          if (h) {
            var C = Vr(h, S, {
              mark: fr,
              prepend: 'queue',
              attachTo: f,
              priority: -999,
            })
            ;(C[ha] = d), C.setAttribute(oi, r)
          }
        },
      )
    return p
  },
  Z$ = function (t, n, r) {
    var a = V(t, 4),
      o = a[1],
      i = a[2],
      l = a[3],
      s = r || {},
      u = s.plain
    if (!o) return null
    var c = -999,
      d = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) },
      f = Tu(o, l, i, d, u)
    return [c, i, f]
  },
  Mi
;(Mi = {}), z(Mi, oS, X$), z(Mi, K1, $$), z(Mi, iS, Z$)
var Zt = (function () {
  function e(t, n) {
    Yt(this, e),
      z(this, 'name', void 0),
      z(this, 'style', void 0),
      z(this, '_keyframe', !0),
      (this.name = t),
      (this.style = n)
  }
  return (
    qt(e, [
      {
        key: 'getName',
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
          return n ? ''.concat(n, '-').concat(this.name) : this.name
        },
      },
    ]),
    e
  )
})()
function So(e) {
  return (e.notSplit = !0), e
}
So(['borderTop', 'borderBottom']),
  So(['borderTop']),
  So(['borderBottom']),
  So(['borderLeft', 'borderRight']),
  So(['borderLeft']),
  So(['borderRight'])
var Wh = g.createContext({})
function e2(e) {
  return H1(e) || L1(e) || Lh(e) || V1()
}
function xr(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return
    n = n[t[r]]
  }
  return n
}
function lS(e, t, n, r) {
  if (!t.length) return n
  var a = e2(t),
    o = a[0],
    i = a.slice(1),
    l
  return (
    !e && typeof o == 'number'
      ? (l = [])
      : Array.isArray(e)
        ? (l = de(e))
        : (l = H({}, e)),
    r && n === void 0 && i.length === 1
      ? delete l[o][i[0]]
      : (l[o] = lS(l[o], i, n, r)),
    l
  )
}
function lr(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
  return t.length && r && n === void 0 && !xr(e, t.slice(0, -1))
    ? e
    : lS(e, t, n, r)
}
function t2(e) {
  return (
    _e(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  )
}
function Hv(e) {
  return Array.isArray(e) ? [] : {}
}
var n2 = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys
function jo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = Hv(t[0])
  return (
    t.forEach(function (a) {
      function o(i, l) {
        var s = new Set(l),
          u = xr(a, i),
          c = Array.isArray(u)
        if (c || t2(u)) {
          if (!s.has(u)) {
            s.add(u)
            var d = xr(r, i)
            c
              ? (r = lr(r, i, []))
              : (!d || _e(d) !== 'object') && (r = lr(r, i, Hv(u))),
              n2(u).forEach(function (f) {
                o([].concat(de(i), [f]), s)
              })
          }
        } else r = lr(r, i, u)
      }
      o([])
    }),
    r
  )
}
const r2 = g.createContext({}),
  a2 = g.createContext(void 0)
var o2 = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size',
  },
  i2 = {
    locale: 'en_US',
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'OK',
    clear: 'Clear',
    month: 'Month',
    year: 'Year',
    timeSelect: 'select time',
    dateSelect: 'select date',
    weekSelect: 'Choose a week',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: !0,
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century',
  }
const sS = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  Fu = {
    lang: Object.assign(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      i2,
    ),
    timePickerLocale: Object.assign({}, sS),
  },
  En = '${label} is not a valid ${type}',
  li = {
    locale: 'en',
    Pagination: o2,
    DatePicker: Fu,
    TimePicker: sS,
    Calendar: Fu,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      deselectAll: 'Deselect all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: {
      edit: 'Edit',
      copy: 'Copy',
      copied: 'Copied',
      expand: 'Expand',
      collapse: 'Collapse',
    },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: En,
          method: En,
          array: En,
          object: En,
          number: En,
          date: En,
          boolean: En,
          integer: En,
          float: En,
          regexp: En,
          email: En,
          url: En,
          hex: En,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
    QRCode: {
      expired: 'QR code expired',
      refresh: 'Refresh',
      scanned: 'Scanned',
    },
    ColorPicker: { presetEmpty: 'Empty' },
  }
Object.assign({}, li.Modal)
let ru = []
const Vv = () =>
  ru.reduce((e, t) => Object.assign(Object.assign({}, e), t), li.Modal)
function l2(e) {
  if (e) {
    const t = Object.assign({}, e)
    return (
      ru.push(t),
      Vv(),
      () => {
        ;(ru = ru.filter((n) => n !== t)), Vv()
      }
    )
  }
  Object.assign({}, li.Modal)
}
const Uh = g.createContext(void 0),
  uS = (e, t) => {
    const n = g.useContext(Uh),
      r = g.useMemo(() => {
        var o
        const i = t || li[e],
          l = (o = n == null ? void 0 : n[e]) !== null && o !== void 0 ? o : {}
        return Object.assign(
          Object.assign({}, typeof i == 'function' ? i() : i),
          l || {},
        )
      }, [e, t, n]),
      a = g.useMemo(() => {
        const o = n == null ? void 0 : n.locale
        return n != null && n.exist && !o ? li.locale : o
      }, [n])
    return [r, a]
  },
  s2 = 'internalMark',
  u2 = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e
    g.useEffect(() => l2(t && t.Modal), [t])
    const a = g.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t],
    )
    return g.createElement(Uh.Provider, { value: a }, n)
  }
function Wt(e, t) {
  c2(e) && (e = '100%')
  var n = d2(e)
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  )
}
function ws(e) {
  return Math.min(1, Math.max(0, e))
}
function c2(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function d2(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1
}
function cS(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function xs(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e
}
function Ya(e) {
  return e.length === 1 ? '0' + e : String(e)
}
function f2(e, t, n) {
  return { r: Wt(e, 255) * 255, g: Wt(t, 255) * 255, b: Wt(n, 255) * 255 }
}
function Bv(e, t, n) {
  ;(e = Wt(e, 255)), (t = Wt(t, 255)), (n = Wt(n, 255))
  var r = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = 0,
    i = 0,
    l = (r + a) / 2
  if (r === a) (i = 0), (o = 0)
  else {
    var s = r - a
    switch (((i = l > 0.5 ? s / (2 - r - a) : s / (r + a)), r)) {
      case e:
        o = (t - n) / s + (t < n ? 6 : 0)
        break
      case t:
        o = (n - e) / s + 2
        break
      case n:
        o = (e - t) / s + 4
        break
    }
    o /= 6
  }
  return { h: o, s: i, l }
}
function Rd(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  )
}
function g2(e, t, n) {
  var r, a, o
  if (((e = Wt(e, 360)), (t = Wt(t, 100)), (n = Wt(n, 100)), t === 0))
    (a = n), (o = n), (r = n)
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - i
    ;(r = Rd(l, i, e + 1 / 3)), (a = Rd(l, i, e)), (o = Rd(l, i, e - 1 / 3))
  }
  return { r: r * 255, g: a * 255, b: o * 255 }
}
function ig(e, t, n) {
  ;(e = Wt(e, 255)), (t = Wt(t, 255)), (n = Wt(n, 255))
  var r = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = 0,
    i = r,
    l = r - a,
    s = r === 0 ? 0 : l / r
  if (r === a) o = 0
  else {
    switch (r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0)
        break
      case t:
        o = (n - e) / l + 2
        break
      case n:
        o = (e - t) / l + 4
        break
    }
    o /= 6
  }
  return { h: o, s, v: i }
}
function h2(e, t, n) {
  ;(e = Wt(e, 360) * 6), (t = Wt(t, 100)), (n = Wt(n, 100))
  var r = Math.floor(e),
    a = e - r,
    o = n * (1 - t),
    i = n * (1 - a * t),
    l = n * (1 - (1 - a) * t),
    s = r % 6,
    u = [n, i, o, o, l, n][s],
    c = [l, n, n, i, o, o][s],
    d = [o, o, l, n, n, i][s]
  return { r: u * 255, g: c * 255, b: d * 255 }
}
function lg(e, t, n, r) {
  var a = [
    Ya(Math.round(e).toString(16)),
    Ya(Math.round(t).toString(16)),
    Ya(Math.round(n).toString(16)),
  ]
  return r &&
    a[0].startsWith(a[0].charAt(1)) &&
    a[1].startsWith(a[1].charAt(1)) &&
    a[2].startsWith(a[2].charAt(1))
    ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
    : a.join('')
}
function m2(e, t, n, r, a) {
  var o = [
    Ya(Math.round(e).toString(16)),
    Ya(Math.round(t).toString(16)),
    Ya(Math.round(n).toString(16)),
    Ya(v2(r)),
  ]
  return a &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join('')
}
function v2(e) {
  return Math.round(parseFloat(e) * 255).toString(16)
}
function Wv(e) {
  return Mn(e) / 255
}
function Mn(e) {
  return parseInt(e, 16)
}
function p2(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 }
}
var sg = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
}
function Po(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    a = null,
    o = null,
    i = !1,
    l = !1
  return (
    typeof e == 'string' && (e = b2(e)),
    typeof e == 'object' &&
      (Fr(e.r) && Fr(e.g) && Fr(e.b)
        ? ((t = f2(e.r, e.g, e.b)),
          (i = !0),
          (l = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : Fr(e.h) && Fr(e.s) && Fr(e.v)
          ? ((r = xs(e.s)),
            (a = xs(e.v)),
            (t = h2(e.h, r, a)),
            (i = !0),
            (l = 'hsv'))
          : Fr(e.h) &&
            Fr(e.s) &&
            Fr(e.l) &&
            ((r = xs(e.s)),
            (o = xs(e.l)),
            (t = g2(e.h, r, o)),
            (i = !0),
            (l = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = cS(n)),
    {
      ok: i,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  )
}
var y2 = '[-\\+]?\\d+%?',
  S2 = '[-\\+]?\\d*\\.\\d+%?',
  ma = '(?:'.concat(S2, ')|(?:').concat(y2, ')'),
  Md = '[\\s|\\(]+('
    .concat(ma, ')[,|\\s]+(')
    .concat(ma, ')[,|\\s]+(')
    .concat(ma, ')\\s*\\)?'),
  Od = '[\\s|\\(]+('
    .concat(ma, ')[,|\\s]+(')
    .concat(ma, ')[,|\\s]+(')
    .concat(ma, ')[,|\\s]+(')
    .concat(ma, ')\\s*\\)?'),
  ar = {
    CSS_UNIT: new RegExp(ma),
    rgb: new RegExp('rgb' + Md),
    rgba: new RegExp('rgba' + Od),
    hsl: new RegExp('hsl' + Md),
    hsla: new RegExp('hsla' + Od),
    hsv: new RegExp('hsv' + Md),
    hsva: new RegExp('hsva' + Od),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  }
function b2(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
  var t = !1
  if (sg[e]) (e = sg[e]), (t = !0)
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
  var n = ar.rgb.exec(e)
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = ar.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = ar.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = ar.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = ar.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = ar.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = ar.hex8.exec(e)),
                          n
                            ? {
                                r: Mn(n[1]),
                                g: Mn(n[2]),
                                b: Mn(n[3]),
                                a: Wv(n[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((n = ar.hex6.exec(e)),
                              n
                                ? {
                                    r: Mn(n[1]),
                                    g: Mn(n[2]),
                                    b: Mn(n[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((n = ar.hex4.exec(e)),
                                  n
                                    ? {
                                        r: Mn(n[1] + n[1]),
                                        g: Mn(n[2] + n[2]),
                                        b: Mn(n[3] + n[3]),
                                        a: Wv(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((n = ar.hex3.exec(e)),
                                      n
                                        ? {
                                            r: Mn(n[1] + n[1]),
                                            g: Mn(n[2] + n[2]),
                                            b: Mn(n[3] + n[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))))
}
function Fr(e) {
  return !!ar.CSS_UNIT.exec(String(e))
}
var Ht = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {})
      var r
      if (t instanceof e) return t
      typeof t == 'number' && (t = p2(t)), (this.originalInput = t)
      var a = Po(t)
      ;(this.originalInput = t),
        (this.r = a.r),
        (this.g = a.g),
        (this.b = a.b),
        (this.a = a.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : a.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = a.ok)
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128
      }),
      (e.prototype.isLight = function () {
        return !this.isDark()
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb()
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          a,
          o = t.r / 255,
          i = t.g / 255,
          l = t.b / 255
        return (
          o <= 0.03928
            ? (n = o / 12.92)
            : (n = Math.pow((o + 0.055) / 1.055, 2.4)),
          i <= 0.03928
            ? (r = i / 12.92)
            : (r = Math.pow((i + 0.055) / 1.055, 2.4)),
          l <= 0.03928
            ? (a = l / 12.92)
            : (a = Math.pow((l + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * a
        )
      }),
      (e.prototype.getAlpha = function () {
        return this.a
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = cS(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        )
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s
        return t === 0
      }),
      (e.prototype.toHsv = function () {
        var t = ig(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
      }),
      (e.prototype.toHsvString = function () {
        var t = ig(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          a = Math.round(t.v * 100)
        return this.a === 1
          ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(a, '%)')
          : 'hsva('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(a, '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toHsl = function () {
        var t = Bv(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
      }),
      (e.prototype.toHslString = function () {
        var t = Bv(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          a = Math.round(t.l * 100)
        return this.a === 1
          ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(a, '%)')
          : 'hsla('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(a, '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), lg(this.r, this.g, this.b, t)
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t)
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), m2(this.r, this.g, this.b, this.a, t)
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t)
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        )
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        }
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b)
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(n, ', ')
              .concat(r, ', ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return ''.concat(Math.round(Wt(n, 255) * 100), '%')
        }
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Wt(n, 255) * 100)
        }
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return 'transparent'
        if (this.a < 1) return !1
        for (
          var t = '#' + lg(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(sg);
          n < r.length;
          n++
        ) {
          var a = r[n],
            o = a[0],
            i = a[1]
          if (t === i) return o
        }
        return !1
      }),
      (e.prototype.toString = function (t) {
        var n = !!t
        t = t ?? this.format
        var r = !1,
          a = this.a < 1 && this.a >= 0,
          o = !n && a && (t.startsWith('hex') || t === 'name')
        return o
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (r = this.toRgbString()),
            t === 'prgb' && (r = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
            t === 'hex3' && (r = this.toHexString(!0)),
            t === 'hex4' && (r = this.toHex8String(!0)),
            t === 'hex8' && (r = this.toHex8String()),
            t === 'name' && (r = this.toName()),
            t === 'hsl' && (r = this.toHslString()),
            t === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString())
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        )
      }),
      (e.prototype.clone = function () {
        return new e(this.toString())
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.l += t / 100), (n.l = ws(n.l)), new e(n)
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10)
        var n = this.toRgb()
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100))),
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100))),
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100))),
          )),
          new e(n)
        )
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.l -= t / 100), (n.l = ws(n.l)), new e(n)
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t)
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t)
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s -= t / 100), (n.s = ws(n.s)), new e(n)
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s += t / 100), (n.s = ws(n.s)), new e(n)
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100)
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360
        return (n.h = r < 0 ? 360 + r : r), new e(n)
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50)
        var r = this.toRgb(),
          a = new e(t).toRgb(),
          o = n / 100,
          i = {
            r: (a.r - r.r) * o + r.r,
            g: (a.g - r.g) * o + r.g,
            b: (a.b - r.b) * o + r.b,
            a: (a.a - r.a) * o + r.a,
          }
        return new e(i)
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30)
        var r = this.toHsl(),
          a = 360 / n,
          o = [this]
        for (r.h = (r.h - ((a * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + a) % 360), o.push(new e(r))
        return o
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl()
        return (t.h = (t.h + 180) % 360), new e(t)
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6)
        for (
          var n = this.toHsv(), r = n.h, a = n.s, o = n.v, i = [], l = 1 / t;
          t--;

        )
          i.push(new e({ h: r, s: a, v: o })), (o = (o + l) % 1)
        return i
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ]
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          a = n.a + r.a * (1 - n.a)
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / a,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / a,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / a,
          a,
        })
      }),
      (e.prototype.triad = function () {
        return this.polyad(3)
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4)
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, a = [this], o = 360 / t, i = 1;
          i < t;
          i++
        )
          a.push(new e({ h: (r + i * o) % 360, s: n.s, l: n.l }))
        return a
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString()
      }),
      e
    )
  })(),
  Es = 2,
  Uv = 0.16,
  C2 = 0.05,
  w2 = 0.05,
  x2 = 0.15,
  dS = 5,
  fS = 4,
  E2 = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ]
function Yv(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    a = ig(t, n, r)
  return { h: a.h * 360, s: a.s, v: a.v }
}
function $s(e) {
  var t = e.r,
    n = e.g,
    r = e.b
  return '#'.concat(lg(t, n, r, !1))
}
function $2(e, t, n) {
  var r = n / 100,
    a = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    }
  return a
}
function qv(e, t, n) {
  var r
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - Es * t : Math.round(e.h) + Es * t)
      : (r = n ? Math.round(e.h) + Es * t : Math.round(e.h) - Es * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  )
}
function Kv(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s
  var r
  return (
    n ? (r = e.s - Uv * t) : t === fS ? (r = e.s + Uv) : (r = e.s + C2 * t),
    r > 1 && (r = 1),
    n && t === dS && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  )
}
function Gv(e, t, n) {
  var r
  return (
    n ? (r = e.v + w2 * t) : (r = e.v - x2 * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  )
}
function ao(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Po(e),
      a = dS;
    a > 0;
    a -= 1
  ) {
    var o = Yv(r),
      i = $s(Po({ h: qv(o, a, !0), s: Kv(o, a, !0), v: Gv(o, a, !0) }))
    n.push(i)
  }
  n.push($s(r))
  for (var l = 1; l <= fS; l += 1) {
    var s = Yv(r),
      u = $s(Po({ h: qv(s, l), s: Kv(s, l), v: Gv(s, l) }))
    n.push(u)
  }
  return t.theme === 'dark'
    ? E2.map(function (c) {
        var d = c.index,
          f = c.opacity,
          y = $s($2(Po(t.backgroundColor || '#141414'), Po(n[d]), f * 100))
        return y
      })
    : n
}
var _d = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  au = {},
  Id = {}
Object.keys(_d).forEach(function (e) {
  ;(au[e] = ao(_d[e])),
    (au[e].primary = au[e][5]),
    (Id[e] = ao(_d[e], { theme: 'dark', backgroundColor: '#141414' })),
    (Id[e].primary = Id[e][5])
})
var P2 = au.blue
const gS = {
    blue: '#1677ff',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#eb2f96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911',
  },
  Ol = Object.assign(Object.assign({}, gS), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  })
function k2(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t
  const {
      colorSuccess: a,
      colorWarning: o,
      colorError: i,
      colorInfo: l,
      colorPrimary: s,
      colorBgBase: u,
      colorTextBase: c,
    } = e,
    d = n(s),
    f = n(a),
    y = n(o),
    v = n(i),
    p = n(l),
    b = r(u, c),
    m = e.colorLink || e.colorInfo,
    h = n(m)
  return Object.assign(Object.assign({}, b), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: v[1],
    colorErrorBgHover: v[2],
    colorErrorBgActive: v[3],
    colorErrorBorder: v[3],
    colorErrorBorderHover: v[4],
    colorErrorHover: v[5],
    colorError: v[6],
    colorErrorActive: v[7],
    colorErrorTextHover: v[8],
    colorErrorText: v[9],
    colorErrorTextActive: v[10],
    colorWarningBg: y[1],
    colorWarningBgHover: y[2],
    colorWarningBorder: y[3],
    colorWarningBorderHover: y[4],
    colorWarningHover: y[4],
    colorWarning: y[6],
    colorWarningActive: y[7],
    colorWarningTextHover: y[8],
    colorWarningText: y[9],
    colorWarningTextActive: y[10],
    colorInfoBg: p[1],
    colorInfoBgHover: p[2],
    colorInfoBorder: p[3],
    colorInfoBorderHover: p[4],
    colorInfoHover: p[4],
    colorInfo: p[6],
    colorInfoActive: p[7],
    colorInfoTextHover: p[8],
    colorInfoText: p[9],
    colorInfoTextActive: p[10],
    colorLinkHover: h[4],
    colorLink: h[6],
    colorLinkActive: h[7],
    colorBgMask: new Ht('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff',
  })
}
const R2 = (e) => {
  let t = e,
    n = e,
    r = e,
    a = e
  return (
    e < 6 && e >= 5
      ? (t = e + 1)
      : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
    e < 7 && e >= 5
      ? (n = 4)
      : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
          ? (n = 6)
          : e < 16 && e >= 14
            ? (n = 7)
            : e >= 16 && (n = 8),
    e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
    e > 4 && e < 8 ? (a = 4) : e >= 8 && (a = 6),
    {
      borderRadius: e,
      borderRadiusXS: r,
      borderRadiusSM: n,
      borderRadiusLG: t,
      borderRadiusOuter: a,
    }
  )
}
function M2(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: a } = e
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: a + 1,
    },
    R2(r),
  )
}
const O2 = (e) => {
  const { controlHeight: t } = e
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25,
  }
}
function ou(e) {
  return (e + 8) / e
}
function _2(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const a = r - 1,
      o = e * Math.pow(2.71828, a / 5),
      i = r > 1 ? Math.floor(o) : Math.ceil(o)
    return Math.floor(i / 2) * 2
  })
  return (t[1] = e), t.map((n) => ({ size: n, lineHeight: ou(n) }))
}
const I2 = (e) => {
  const t = _2(e),
    n = t.map((c) => c.size),
    r = t.map((c) => c.lineHeight),
    a = n[1],
    o = n[0],
    i = n[2],
    l = r[1],
    s = r[0],
    u = r[2]
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: i,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: l,
    lineHeightLG: u,
    lineHeightSM: s,
    fontHeight: Math.round(l * a),
    fontHeightLG: Math.round(u * i),
    fontHeightSM: Math.round(s * o),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2],
  }
}
function T2(e) {
  const { sizeUnit: t, sizeStep: n } = e
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  }
}
const Nr = (e, t) => new Ht(e).setAlpha(t).toRgbString(),
  Oi = (e, t) => new Ht(e).darken(t).toHexString(),
  F2 = (e) => {
    const t = ao(e)
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    }
  },
  N2 = (e, t) => {
    const n = e || '#fff',
      r = t || '#000'
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: Nr(r, 0.88),
      colorTextSecondary: Nr(r, 0.65),
      colorTextTertiary: Nr(r, 0.45),
      colorTextQuaternary: Nr(r, 0.25),
      colorFill: Nr(r, 0.15),
      colorFillSecondary: Nr(r, 0.06),
      colorFillTertiary: Nr(r, 0.04),
      colorFillQuaternary: Nr(r, 0.02),
      colorBgLayout: Oi(n, 4),
      colorBgContainer: Oi(n, 0),
      colorBgElevated: Oi(n, 0),
      colorBgSpotlight: Nr(r, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: Oi(n, 15),
      colorBorderSecondary: Oi(n, 6),
    }
  }
function D2(e) {
  const t = Object.keys(gS)
    .map((n) => {
      const r = ao(e[n])
      return new Array(10)
        .fill(1)
        .reduce(
          (a, o, i) => (
            (a[`${n}-${i + 1}`] = r[i]), (a[`${n}${i + 1}`] = r[i]), a
          ),
          {},
        )
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {})
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            k2(e, {
              generateColorPalettes: F2,
              generateNeutralColorPalettes: N2,
            }),
          ),
          I2(e.fontSize),
        ),
        T2(e),
      ),
      O2(e),
    ),
    M2(e),
  )
}
const hS = Zf(D2),
  ug = { token: Ol, override: { override: Ol }, hashed: !0 },
  mS = Oe.createContext(ug),
  vS = 'anticon',
  L2 = (e, t) => t || (e ? `ant-${e}` : 'ant'),
  yn = g.createContext({ getPrefixCls: L2, iconPrefixCls: vS }),
  A2 = `-ant-${Date.now()}-${Math.random()}`
function j2(e, t) {
  const n = {},
    r = (i, l) => {
      let s = i.clone()
      return (s = (l == null ? void 0 : l(s)) || s), s.toRgbString()
    },
    a = (i, l) => {
      const s = new Ht(i),
        u = ao(s.toRgbString())
      ;(n[`${l}-color`] = r(s)),
        (n[`${l}-color-disabled`] = u[1]),
        (n[`${l}-color-hover`] = u[4]),
        (n[`${l}-color-active`] = u[6]),
        (n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString()),
        (n[`${l}-color-deprecated-bg`] = u[0]),
        (n[`${l}-color-deprecated-border`] = u[2])
    }
  if (t.primaryColor) {
    a(t.primaryColor, 'primary')
    const i = new Ht(t.primaryColor),
      l = ao(i.toRgbString())
    l.forEach((u, c) => {
      n[`primary-${c + 1}`] = u
    }),
      (n['primary-color-deprecated-l-35'] = r(i, (u) => u.lighten(35))),
      (n['primary-color-deprecated-l-20'] = r(i, (u) => u.lighten(20))),
      (n['primary-color-deprecated-t-20'] = r(i, (u) => u.tint(20))),
      (n['primary-color-deprecated-t-50'] = r(i, (u) => u.tint(50))),
      (n['primary-color-deprecated-f-12'] = r(i, (u) =>
        u.setAlpha(u.getAlpha() * 0.12),
      ))
    const s = new Ht(l[0])
    ;(n['primary-color-active-deprecated-f-30'] = r(s, (u) =>
      u.setAlpha(u.getAlpha() * 0.3),
    )),
      (n['primary-color-active-deprecated-d-02'] = r(s, (u) => u.darken(2)))
  }
  return (
    t.successColor && a(t.successColor, 'success'),
    t.warningColor && a(t.warningColor, 'warning'),
    t.errorColor && a(t.errorColor, 'error'),
    t.infoColor && a(t.infoColor, 'info'),
    `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim()
  )
}
function z2(e, t) {
  const n = j2(e, t)
  Nn() && Vr(n, `${A2}-dynamic-theme`)
}
const oo = g.createContext(!1),
  H2 = (e) => {
    let { children: t, disabled: n } = e
    const r = g.useContext(oo)
    return g.createElement(oo.Provider, { value: n ?? r }, t)
  },
  si = g.createContext(void 0),
  V2 = (e) => {
    let { children: t, size: n } = e
    const r = g.useContext(si)
    return g.createElement(si.Provider, { value: n || r }, t)
  }
function B2() {
  const e = g.useContext(oo),
    t = g.useContext(si)
  return { componentDisabled: e, componentSize: t }
}
const W2 = '5.18.1'
function Td(e) {
  return e >= 0 && e <= 255
}
function Ps(e, t) {
  const { r: n, g: r, b: a, a: o } = new Ht(e).toRgb()
  if (o < 1) return e
  const { r: i, g: l, b: s } = new Ht(t).toRgb()
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - i * (1 - u)) / u),
      d = Math.round((r - l * (1 - u)) / u),
      f = Math.round((a - s * (1 - u)) / u)
    if (Td(c) && Td(d) && Td(f))
      return new Ht({
        r: c,
        g: d,
        b: f,
        a: Math.round(u * 100) / 100,
      }).toRgbString()
  }
  return new Ht({ r: n, g: r, b: a, a: 1 }).toRgbString()
}
var U2 = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]])
  return n
}
function pS(e) {
  const { override: t } = e,
    n = U2(e, ['override']),
    r = Object.assign({}, t)
  Object.keys(Ol).forEach((f) => {
    delete r[f]
  })
  const a = Object.assign(Object.assign({}, n), r),
    o = 480,
    i = 576,
    l = 768,
    s = 992,
    u = 1200,
    c = 1600
  if (a.motion === !1) {
    const f = '0s'
    ;(a.motionDurationFast = f),
      (a.motionDurationMid = f),
      (a.motionDurationSlow = f)
  }
  return Object.assign(
    Object.assign(Object.assign({}, a), {
      colorFillContent: a.colorFillSecondary,
      colorFillContentHover: a.colorFill,
      colorFillAlter: a.colorFillQuaternary,
      colorBgContainerDisabled: a.colorFillTertiary,
      colorBorderBg: a.colorBgContainer,
      colorSplit: Ps(a.colorBorderSecondary, a.colorBgContainer),
      colorTextPlaceholder: a.colorTextQuaternary,
      colorTextDisabled: a.colorTextQuaternary,
      colorTextHeading: a.colorText,
      colorTextLabel: a.colorTextSecondary,
      colorTextDescription: a.colorTextTertiary,
      colorTextLightSolid: a.colorWhite,
      colorHighlight: a.colorError,
      colorBgTextHover: a.colorFillSecondary,
      colorBgTextActive: a.colorFill,
      colorIcon: a.colorTextTertiary,
      colorIconHover: a.colorText,
      colorErrorOutline: Ps(a.colorErrorBg, a.colorBgContainer),
      colorWarningOutline: Ps(a.colorWarningBg, a.colorBgContainer),
      fontSizeIcon: a.fontSizeSM,
      lineWidthFocus: a.lineWidth * 4,
      lineWidth: a.lineWidth,
      controlOutlineWidth: a.lineWidth * 2,
      controlInteractiveSize: a.controlHeight / 2,
      controlItemBgHover: a.colorFillTertiary,
      controlItemBgActive: a.colorPrimaryBg,
      controlItemBgActiveHover: a.colorPrimaryBgHover,
      controlItemBgActiveDisabled: a.colorFill,
      controlTmpOutline: a.colorFillQuaternary,
      controlOutline: Ps(a.colorPrimaryBg, a.colorBgContainer),
      lineType: a.lineType,
      borderRadius: a.borderRadius,
      borderRadiusXS: a.borderRadiusXS,
      borderRadiusSM: a.borderRadiusSM,
      borderRadiusLG: a.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: a.sizeXXS,
      paddingXS: a.sizeXS,
      paddingSM: a.sizeSM,
      padding: a.size,
      paddingMD: a.sizeMD,
      paddingLG: a.sizeLG,
      paddingXL: a.sizeXL,
      paddingContentHorizontalLG: a.sizeLG,
      paddingContentVerticalLG: a.sizeMS,
      paddingContentHorizontal: a.sizeMS,
      paddingContentVertical: a.sizeSM,
      paddingContentHorizontalSM: a.size,
      paddingContentVerticalSM: a.sizeXS,
      marginXXS: a.sizeXXS,
      marginXS: a.sizeXS,
      marginSM: a.sizeSM,
      margin: a.size,
      marginMD: a.sizeMD,
      marginLG: a.sizeLG,
      marginXL: a.sizeXL,
      marginXXL: a.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: o,
      screenXSMin: o,
      screenXSMax: i - 1,
      screenSM: i,
      screenSMMin: i,
      screenSMMax: l - 1,
      screenMD: l,
      screenMDMin: l,
      screenMDMax: s - 1,
      screenLG: s,
      screenLGMin: s,
      screenLGMax: u - 1,
      screenXL: u,
      screenXLMin: u,
      screenXLMax: c - 1,
      screenXXL: c,
      screenXXLMin: c,
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      boxShadowCard: `
      0 1px 2px -2px ${new Ht('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new Ht('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new Ht('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
    }),
    r,
  )
}
var Qv = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]])
  return n
}
const yS = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0,
  },
  SS = {
    size: !0,
    sizeSM: !0,
    sizeLG: !0,
    sizeMD: !0,
    sizeXS: !0,
    sizeXXS: !0,
    sizeMS: !0,
    sizeXL: !0,
    sizeXXL: !0,
    sizeUnit: !0,
    sizeStep: !0,
    motionBase: !0,
    motionUnit: !0,
  },
  Y2 = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0,
  },
  bS = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: a } = t,
      o = Qv(t, ['override'])
    let i = Object.assign(Object.assign({}, r), { override: a })
    return (
      (i = pS(i)),
      o &&
        Object.entries(o).forEach((l) => {
          let [s, u] = l
          const { theme: c } = u,
            d = Qv(u, ['theme'])
          let f = d
          c &&
            (f = bS(
              Object.assign(Object.assign({}, i), d),
              { override: d },
              c,
            )),
            (i[s] = f)
        }),
      i
    )
  }
function qr() {
  const {
      token: e,
      hashed: t,
      theme: n,
      override: r,
      cssVar: a,
    } = Oe.useContext(mS),
    o = `${W2}-${t || ''}`,
    i = n || hS,
    [l, s, u] = E$(i, [Ol, e], {
      salt: o,
      override: r,
      getComputedToken: bS,
      formatToken: pS,
      cssVar: a && {
        prefix: a.prefix,
        key: a.key,
        unitless: yS,
        ignore: SS,
        preserve: Y2,
      },
    })
  return [i, u, t ? s : '', l, a]
}
function CS(e, t, n) {
  return (
    (t = ro(t)),
    D1(e, bc() ? Reflect.construct(t, [], ro(e).constructor) : t.apply(e, n))
  )
}
let wS = qt(function e() {
  Yt(this, e)
})
const xS = 'CALC_UNIT',
  q2 = new RegExp(xS, 'g')
function Fd(e) {
  return typeof e == 'number' ? `${e}${xS}` : e
}
let K2 = (function (e) {
    function t(n, r) {
      var a
      Yt(this, t), (a = CS(this, t)), (a.result = '')
      const o = typeof n
      return (
        (a.unitlessCssVar = r),
        n instanceof t
          ? (a.result = `(${n.result})`)
          : o === 'number'
            ? (a.result = Fd(n))
            : o === 'string' && (a.result = n),
        a
      )
    }
    return (
      co(t, e),
      qt(t, [
        {
          key: 'add',
          value: function (r) {
            return (
              r instanceof t
                ? (this.result = `${this.result} + ${r.getResult()}`)
                : (typeof r == 'number' || typeof r == 'string') &&
                  (this.result = `${this.result} + ${Fd(r)}`),
              (this.lowPriority = !0),
              this
            )
          },
        },
        {
          key: 'sub',
          value: function (r) {
            return (
              r instanceof t
                ? (this.result = `${this.result} - ${r.getResult()}`)
                : (typeof r == 'number' || typeof r == 'string') &&
                  (this.result = `${this.result} - ${Fd(r)}`),
              (this.lowPriority = !0),
              this
            )
          },
        },
        {
          key: 'mul',
          value: function (r) {
            return (
              this.lowPriority && (this.result = `(${this.result})`),
              r instanceof t
                ? (this.result = `${this.result} * ${r.getResult(!0)}`)
                : (typeof r == 'number' || typeof r == 'string') &&
                  (this.result = `${this.result} * ${r}`),
              (this.lowPriority = !1),
              this
            )
          },
        },
        {
          key: 'div',
          value: function (r) {
            return (
              this.lowPriority && (this.result = `(${this.result})`),
              r instanceof t
                ? (this.result = `${this.result} / ${r.getResult(!0)}`)
                : (typeof r == 'number' || typeof r == 'string') &&
                  (this.result = `${this.result} / ${r}`),
              (this.lowPriority = !1),
              this
            )
          },
        },
        {
          key: 'getResult',
          value: function (r) {
            return this.lowPriority || r ? `(${this.result})` : this.result
          },
        },
        {
          key: 'equal',
          value: function (r) {
            const { unit: a } = r || {}
            let o = !0
            return (
              typeof a == 'boolean'
                ? (o = a)
                : Array.from(this.unitlessCssVar).some((i) =>
                    this.result.includes(i),
                  ) && (o = !1),
              (this.result = this.result.replace(q2, o ? 'px' : '')),
              typeof this.lowPriority < 'u'
                ? `calc(${this.result})`
                : this.result
            )
          },
        },
      ])
    )
  })(wS),
  G2 = (function (e) {
    function t(n) {
      var r
      return (
        Yt(this, t),
        (r = CS(this, t)),
        (r.result = 0),
        n instanceof t
          ? (r.result = n.result)
          : typeof n == 'number' && (r.result = n),
        r
      )
    }
    return (
      co(t, e),
      qt(t, [
        {
          key: 'add',
          value: function (r) {
            return (
              r instanceof t
                ? (this.result += r.result)
                : typeof r == 'number' && (this.result += r),
              this
            )
          },
        },
        {
          key: 'sub',
          value: function (r) {
            return (
              r instanceof t
                ? (this.result -= r.result)
                : typeof r == 'number' && (this.result -= r),
              this
            )
          },
        },
        {
          key: 'mul',
          value: function (r) {
            return (
              r instanceof t
                ? (this.result *= r.result)
                : typeof r == 'number' && (this.result *= r),
              this
            )
          },
        },
        {
          key: 'div',
          value: function (r) {
            return (
              r instanceof t
                ? (this.result /= r.result)
                : typeof r == 'number' && (this.result /= r),
              this
            )
          },
        },
        {
          key: 'equal',
          value: function () {
            return this.result
          },
        },
      ])
    )
  })(wS)
const Q2 = (e, t) => {
    const n = e === 'css' ? K2 : G2
    return (r) => new n(r, t)
  },
  X2 = 1e3 * 60 * 10
let J2 = (function () {
  function e() {
    Yt(this, e),
      (this.map = new Map()),
      (this.objectIDMap = new WeakMap()),
      (this.nextID = 0),
      (this.lastAccessBeat = new Map()),
      (this.accessBeat = 0)
  }
  return qt(e, [
    {
      key: 'set',
      value: function (n, r) {
        this.clear()
        const a = this.getCompositeKey(n)
        this.map.set(a, r), this.lastAccessBeat.set(a, Date.now())
      },
    },
    {
      key: 'get',
      value: function (n) {
        const r = this.getCompositeKey(n),
          a = this.map.get(r)
        return this.lastAccessBeat.set(r, Date.now()), (this.accessBeat += 1), a
      },
    },
    {
      key: 'getCompositeKey',
      value: function (n) {
        return n
          .map((a) =>
            a && typeof a == 'object'
              ? `obj_${this.getObjectID(a)}`
              : `${typeof a}_${a}`,
          )
          .join('|')
      },
    },
    {
      key: 'getObjectID',
      value: function (n) {
        if (this.objectIDMap.has(n)) return this.objectIDMap.get(n)
        const r = this.nextID
        return this.objectIDMap.set(n, r), (this.nextID += 1), r
      },
    },
    {
      key: 'clear',
      value: function () {
        if (this.accessBeat > 1e4) {
          const n = Date.now()
          this.lastAccessBeat.forEach((r, a) => {
            n - r > X2 && (this.map.delete(a), this.lastAccessBeat.delete(a))
          }),
            (this.accessBeat = 0)
        }
      },
    },
  ])
})()
const Xv = new J2()
function Z2(e, t) {
  return Oe.useMemo(() => {
    const n = Xv.get(t)
    if (n) return n
    const r = e()
    return Xv.set(t, r), r
  }, t)
}
function tt(e) {
  var t = g.useRef()
  t.current = e
  var n = g.useCallback(function () {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i]
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(o))
  }, [])
  return n
}
function Ko(e) {
  var t = g.useRef(!1),
    n = g.useState(e),
    r = V(n, 2),
    a = r[0],
    o = r[1]
  g.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0
      }
    )
  }, [])
  function i(l, s) {
    ;(s && t.current) || o(l)
  }
  return [a, i]
}
function Nd(e) {
  return e !== void 0
}
function Gn(e, t) {
  var n = t || {},
    r = n.defaultValue,
    a = n.value,
    o = n.onChange,
    i = n.postState,
    l = Ko(function () {
      return Nd(a)
        ? a
        : Nd(r)
          ? typeof r == 'function'
            ? r()
            : r
          : typeof e == 'function'
            ? e()
            : e
    }),
    s = V(l, 2),
    u = s[0],
    c = s[1],
    d = a !== void 0 ? a : u,
    f = i ? i(d) : d,
    y = tt(o),
    v = Ko([d]),
    p = V(v, 2),
    b = p[0],
    m = p[1]
  tg(
    function () {
      var S = b[0]
      u !== S && y(u, S)
    },
    [b],
  ),
    tg(
      function () {
        Nd(a) || c(a)
      },
      [a],
    )
  var h = tt(function (S, C) {
    c(S, C), m([d], C)
  })
  return [f, h]
}
const eP = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  io = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    return {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: t ? 'inherit' : e.fontFamily,
    }
  },
  ES = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': { lineHeight: 1 },
    svg: { display: 'inline-block' },
  }),
  tP = () => ({
    '&::before': { display: 'table', content: '""' },
    '&::after': { display: 'table', clear: 'both', content: '""' },
  }),
  nP = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: `color ${e.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': { color: e.colorLinkHover },
      '&:active': { color: e.colorLinkActive },
      '&:active,\n  &:hover': {
        textDecoration: e.linkHoverDecoration,
        outline: 0,
      },
      '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
      '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
    },
  }),
  rP = (e, t, n, r) => {
    const a = `[class^="${t}"], [class*=" ${t}"]`,
      o = n ? `.${n}` : a,
      i = {
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' },
      }
    let l = {}
    return (
      r !== !1 && (l = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
      { [o]: Object.assign(Object.assign(Object.assign({}, l), i), { [a]: i }) }
    )
  },
  Yh = (e) => ({
    outline: `${ee(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s',
  }),
  aP = (e) => ({ '&:focus-visible': Object.assign({}, Yh(e)) })
function oP(e) {
  return e === 'js'
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]
          return `max(${n.map((a) => ee(a)).join(',')})`
        },
        min: function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]
          return `min(${n.map((a) => ee(a)).join(',')})`
        },
      }
}
const $S = typeof CSSINJS_STATISTIC < 'u'
let cg = !0
function Dn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  if (!$S) return Object.assign.apply(Object, [{}].concat(t))
  cg = !1
  const r = {}
  return (
    t.forEach((a) => {
      Object.keys(a).forEach((i) => {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: () => a[i],
        })
      })
    }),
    (cg = !0),
    r
  )
}
const Jv = {}
function iP() {}
const lP = (e) => {
    let t,
      n = e,
      r = iP
    return (
      $S &&
        typeof Proxy < 'u' &&
        ((t = new Set()),
        (n = new Proxy(e, {
          get(a, o) {
            return cg && t.add(o), a[o]
          },
        })),
        (r = (a, o) => {
          var i
          Jv[a] = {
            global: Array.from(t),
            component: Object.assign(
              Object.assign(
                {},
                (i = Jv[a]) === null || i === void 0 ? void 0 : i.component,
              ),
              o,
            ),
          }
        })),
      { token: n, keys: t, flush: r }
    )
  },
  PS = (e, t) => {
    const [n, r] = qr()
    return og(
      {
        theme: n,
        token: r,
        hashId: '',
        path: ['ant-design-icons', e],
        nonce: () => (t == null ? void 0 : t.nonce),
        layer: { name: 'antd' },
      },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, ES()), {
            [`.${e} .${e}-icon`]: { display: 'block' },
          }),
        },
      ],
    )
  },
  kS = (e, t, n) => {
    var r
    return typeof n == 'function'
      ? n(Dn(t, (r = t[e]) !== null && r !== void 0 ? r : {}))
      : n ?? {}
  },
  RS = (e, t, n, r) => {
    const a = Object.assign({}, t[e])
    if (r != null && r.deprecatedTokens) {
      const { deprecatedTokens: i } = r
      i.forEach((l) => {
        let [s, u] = l
        var c
        ;((a != null && a[s]) || (a != null && a[u])) &&
          (((c = a[u]) !== null && c !== void 0) ||
            (a[u] = a == null ? void 0 : a[s]))
      })
    }
    const o = Object.assign(Object.assign({}, n), a)
    return (
      Object.keys(o).forEach((i) => {
        o[i] === t[i] && delete o[i]
      }),
      o
    )
  },
  Zv = (e, t) =>
    `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2')].filter(Boolean).join('-')}`
function qh(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
  const a = Array.isArray(e) ? e : [e, e],
    [o] = a,
    i = a.join('-')
  return function (l) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : l
    const [u, c, d, f, y] = qr(),
      { getPrefixCls: v, iconPrefixCls: p, csp: b } = g.useContext(yn),
      m = v(),
      h = y ? 'css' : 'js',
      S = Z2(() => {
        const R = new Set()
        return (
          y &&
            Object.keys(r.unitless || {}).forEach((F) => {
              R.add(Js(F, y.prefix)), R.add(Js(F, Zv(o, y.prefix)))
            }),
          Q2(h, R)
        )
      }, [h, o, y && y.prefix]),
      { max: C, min: w } = oP(h),
      E = {
        theme: u,
        token: f,
        hashId: d,
        nonce: () => (b == null ? void 0 : b.nonce),
        clientOnly: r.clientOnly,
        layer: { name: 'antd' },
        order: r.order || -999,
      }
    return (
      og(
        Object.assign(Object.assign({}, E), {
          clientOnly: !1,
          path: ['Shared', m],
        }),
        () => [{ '&': nP(f) }],
      ),
      PS(p, b),
      [
        og(Object.assign(Object.assign({}, E), { path: [i, l, p] }), () => {
          if (r.injectStyle === !1) return []
          const { token: R, flush: F } = lP(f),
            _ = kS(o, c, n),
            T = `.${l}`,
            j = RS(o, c, _, { deprecatedTokens: r.deprecatedTokens })
          y &&
            Object.keys(_).forEach((N) => {
              _[N] = `var(${Js(N, Zv(o, y.prefix))})`
            })
          const A = Dn(
              R,
              {
                componentCls: T,
                prefixCls: l,
                iconCls: `.${p}`,
                antCls: `.${m}`,
                calc: S,
                max: C,
                min: w,
              },
              y ? _ : j,
            ),
            I = t(A, {
              hashId: d,
              prefixCls: l,
              rootPrefixCls: m,
              iconPrefixCls: p,
            })
          return (
            F(o, j), [r.resetStyle === !1 ? null : rP(A, l, s, r.resetFont), I]
          )
        }),
        d,
      ]
    )
  }
}
const sP = (e, t, n, r) => {
    const a = qh(e, t, n, Object.assign({ resetStyle: !1, order: -998 }, r))
    return (i) => {
      let { prefixCls: l, rootCls: s = l } = i
      return a(l, s), null
    }
  },
  uP = (e, t, n) => {
    const { unitless: r, injectStyle: a = !0, prefixToken: o } = n,
      i = (s) => {
        let { rootCls: u, cssVar: c } = s
        const [, d] = qr()
        return (
          J$(
            {
              path: [e],
              prefix: c.prefix,
              key: c == null ? void 0 : c.key,
              unitless: r,
              ignore: SS,
              token: d,
              scope: u,
            },
            () => {
              const f = kS(e, d, t),
                y = RS(e, d, f, {
                  deprecatedTokens: n == null ? void 0 : n.deprecatedTokens,
                })
              return (
                Object.keys(f).forEach((v) => {
                  ;(y[o(v)] = y[v]), delete y[v]
                }),
                y
              )
            },
          ),
          null
        )
      }
    return (s) => {
      const [, , , , u] = qr()
      return [
        (c) =>
          a && u
            ? Oe.createElement(
                Oe.Fragment,
                null,
                Oe.createElement(i, { rootCls: s, cssVar: u, component: e }),
                c,
              )
            : c,
        u == null ? void 0 : u.key,
      ]
    }
  },
  $c = (e, t, n, r) => {
    const a = Array.isArray(e) ? e[0] : e
    function o(d) {
      return `${a}${d.slice(0, 1).toUpperCase()}${d.slice(1)}`
    }
    const i = (r && r.unitless) || {},
      l = Object.assign(Object.assign({}, yS), { [o('zIndexPopup')]: !0 })
    Object.keys(i).forEach((d) => {
      l[o(d)] = i[d]
    })
    const s = Object.assign(Object.assign({}, r), {
        unitless: l,
        prefixToken: o,
      }),
      u = qh(e, t, n, s),
      c = uP(a, n, s)
    return function (d) {
      let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d
      const [, y] = u(d, f),
        [v, p] = c(f)
      return [v, y, p]
    }
  },
  cP = Object.assign({}, qu),
  { useId: ep } = cP,
  dP = () => '',
  fP = typeof ep > 'u' ? dP : ep
function gP(e, t, n) {
  var r
  const a = e || {},
    o =
      a.inherit === !1 || !t
        ? Object.assign(Object.assign({}, ug), {
            hashed:
              (r = t == null ? void 0 : t.hashed) !== null && r !== void 0
                ? r
                : ug.hashed,
            cssVar: t == null ? void 0 : t.cssVar,
          })
        : t,
    i = fP()
  return Th(
    () => {
      var l, s
      if (!e) return t
      const u = Object.assign({}, o.components)
      Object.keys(e.components || {}).forEach((f) => {
        u[f] = Object.assign(Object.assign({}, u[f]), e.components[f])
      })
      const c = `css-var-${i.replace(/:/g, '')}`,
        d =
          ((l = a.cssVar) !== null && l !== void 0 ? l : o.cssVar) &&
          Object.assign(
            Object.assign(
              Object.assign(
                { prefix: n == null ? void 0 : n.prefixCls },
                typeof o.cssVar == 'object' ? o.cssVar : {},
              ),
              typeof a.cssVar == 'object' ? a.cssVar : {},
            ),
            {
              key:
                (typeof a.cssVar == 'object' &&
                  ((s = a.cssVar) === null || s === void 0 ? void 0 : s.key)) ||
                c,
            },
          )
      return Object.assign(Object.assign(Object.assign({}, o), a), {
        token: Object.assign(Object.assign({}, o.token), a.token),
        components: u,
        cssVar: d,
      })
    },
    [a, o],
    (l, s) =>
      l.some((u, c) => {
        const d = s[c]
        return !Xf(u, d, !0)
      }),
  )
}
var hP = ['children'],
  MS = g.createContext({})
function mP(e) {
  var t = e.children,
    n = xt(e, hP)
  return g.createElement(MS.Provider, { value: n }, t)
}
var vP = (function (e) {
    co(n, e)
    var t = Hl(n)
    function n() {
      return Yt(this, n), t.apply(this, arguments)
    }
    return (
      qt(n, [
        {
          key: 'render',
          value: function () {
            return this.props.children
          },
        },
      ]),
      n
    )
  })(g.Component),
  oa = 'none',
  ks = 'appear',
  Rs = 'enter',
  Ms = 'leave',
  tp = 'none',
  sr = 'prepare',
  zo = 'start',
  Ho = 'active',
  Kh = 'end',
  OS = 'prepared'
function np(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (n['Moz'.concat(e)] = 'moz'.concat(t)),
    (n['ms'.concat(e)] = 'MS'.concat(t)),
    (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    n
  )
}
function pP(e, t) {
  var n = {
    animationend: np('Animation', 'AnimationEnd'),
    transitionend: np('Transition', 'TransitionEnd'),
  }
  return (
    e &&
      ('AnimationEvent' in t || delete n.animationend.animation,
      'TransitionEvent' in t || delete n.transitionend.transition),
    n
  )
}
var yP = pP(Nn(), typeof window < 'u' ? window : {}),
  _S = {}
if (Nn()) {
  var SP = document.createElement('div')
  _S = SP.style
}
var Os = {}
function IS(e) {
  if (Os[e]) return Os[e]
  var t = yP[e]
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in _S)
        return (Os[e] = t[o]), Os[e]
    }
  return ''
}
var TS = IS('animationend'),
  FS = IS('transitionend'),
  NS = !!(TS && FS),
  rp = TS || 'animationend',
  ap = FS || 'transitionend'
function op(e, t) {
  if (!e) return null
  if (_e(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase()
    })
    return e[n]
  }
  return ''.concat(e, '-').concat(t)
}
const bP = function (e) {
  var t = g.useRef()
  function n(a) {
    a && (a.removeEventListener(ap, e), a.removeEventListener(rp, e))
  }
  function r(a) {
    t.current && t.current !== a && n(t.current),
      a &&
        a !== t.current &&
        (a.addEventListener(ap, e), a.addEventListener(rp, e), (t.current = a))
  }
  return (
    g.useEffect(function () {
      return function () {
        n(t.current)
      }
    }, []),
    [r, n]
  )
}
var DS = Nn() ? g.useLayoutEffect : g.useEffect
const CP = function () {
  var e = g.useRef(null)
  function t() {
    Bt.cancel(e.current)
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
    t()
    var o = Bt(function () {
      a <= 1
        ? r({
            isCanceled: function () {
              return o !== e.current
            },
          })
        : n(r, a - 1)
    })
    e.current = o
  }
  return (
    g.useEffect(function () {
      return function () {
        t()
      }
    }, []),
    [n, t]
  )
}
var wP = [sr, zo, Ho, Kh],
  xP = [sr, OS],
  LS = !1,
  EP = !0
function AS(e) {
  return e === Ho || e === Kh
}
const $P = function (e, t, n) {
  var r = Ko(tp),
    a = V(r, 2),
    o = a[0],
    i = a[1],
    l = CP(),
    s = V(l, 2),
    u = s[0],
    c = s[1]
  function d() {
    i(sr, !0)
  }
  var f = t ? xP : wP
  return (
    DS(
      function () {
        if (o !== tp && o !== Kh) {
          var y = f.indexOf(o),
            v = f[y + 1],
            p = n(o)
          p === LS
            ? i(v, !0)
            : v &&
              u(function (b) {
                function m() {
                  b.isCanceled() || i(v, !0)
                }
                p === !0 ? m() : Promise.resolve(p).then(m)
              })
        }
      },
      [e, o],
    ),
    g.useEffect(function () {
      return function () {
        c()
      }
    }, []),
    [d, o]
  )
}
function PP(e, t, n, r) {
  var a = r.motionEnter,
    o = a === void 0 ? !0 : a,
    i = r.motionAppear,
    l = i === void 0 ? !0 : i,
    s = r.motionLeave,
    u = s === void 0 ? !0 : s,
    c = r.motionDeadline,
    d = r.motionLeaveImmediately,
    f = r.onAppearPrepare,
    y = r.onEnterPrepare,
    v = r.onLeavePrepare,
    p = r.onAppearStart,
    b = r.onEnterStart,
    m = r.onLeaveStart,
    h = r.onAppearActive,
    S = r.onEnterActive,
    C = r.onLeaveActive,
    w = r.onAppearEnd,
    E = r.onEnterEnd,
    x = r.onLeaveEnd,
    R = r.onVisibleChanged,
    F = Ko(),
    _ = V(F, 2),
    T = _[0],
    j = _[1],
    A = Ko(oa),
    I = V(A, 2),
    N = I[0],
    P = I[1],
    k = Ko(null),
    $ = V(k, 2),
    M = $[0],
    O = $[1],
    D = g.useRef(!1),
    L = g.useRef(null)
  function W() {
    return n()
  }
  var B = g.useRef(!1)
  function U() {
    P(oa, !0), O(null, !0)
  }
  var K = tt(function (ce) {
      if (N !== oa) {
        var Ce = W()
        if (!(ce && !ce.deadline && ce.target !== Ce)) {
          var we = B.current,
            Ne
          N === ks && we
            ? (Ne = w == null ? void 0 : w(Ce, ce))
            : N === Rs && we
              ? (Ne = E == null ? void 0 : E(Ce, ce))
              : N === Ms && we && (Ne = x == null ? void 0 : x(Ce, ce)),
            we && Ne !== !1 && U()
        }
      }
    }),
    Y = bP(K),
    q = V(Y, 1),
    X = q[0],
    Q = function (Ce) {
      switch (Ce) {
        case ks:
          return z(z(z({}, sr, f), zo, p), Ho, h)
        case Rs:
          return z(z(z({}, sr, y), zo, b), Ho, S)
        case Ms:
          return z(z(z({}, sr, v), zo, m), Ho, C)
        default:
          return {}
      }
    },
    J = g.useMemo(
      function () {
        return Q(N)
      },
      [N],
    ),
    ne = $P(N, !e, function (ce) {
      if (ce === sr) {
        var Ce = J[sr]
        return Ce ? Ce(W()) : LS
      }
      if (ye in J) {
        var we
        O(
          ((we = J[ye]) === null || we === void 0
            ? void 0
            : we.call(J, W(), null)) || null,
        )
      }
      return (
        ye === Ho &&
          N !== oa &&
          (X(W()),
          c > 0 &&
            (clearTimeout(L.current),
            (L.current = setTimeout(function () {
              K({ deadline: !0 })
            }, c)))),
        ye === OS && U(),
        EP
      )
    }),
    te = V(ne, 2),
    ae = te[0],
    ye = te[1],
    oe = AS(ye)
  ;(B.current = oe),
    DS(
      function () {
        j(t)
        var ce = D.current
        D.current = !0
        var Ce
        !ce && t && l && (Ce = ks),
          ce && t && o && (Ce = Rs),
          ((ce && !t && u) || (!ce && d && !t && u)) && (Ce = Ms)
        var we = Q(Ce)
        Ce && (e || we[sr]) ? (P(Ce), ae()) : P(oa)
      },
      [t],
    ),
    g.useEffect(
      function () {
        ;((N === ks && !l) || (N === Rs && !o) || (N === Ms && !u)) && P(oa)
      },
      [l, o, u],
    ),
    g.useEffect(function () {
      return function () {
        ;(D.current = !1), clearTimeout(L.current)
      }
    }, [])
  var he = g.useRef(!1)
  g.useEffect(
    function () {
      T && (he.current = !0),
        T !== void 0 &&
          N === oa &&
          ((he.current || T) && (R == null || R(T)), (he.current = !0))
    },
    [T, N],
  )
  var ge = M
  return (
    J[sr] && ye === zo && (ge = H({ transition: 'none' }, ge)),
    [N, ye, ge, T ?? t]
  )
}
function kP(e) {
  var t = e
  _e(e) === 'object' && (t = e.transitionSupport)
  function n(a, o) {
    return !!(a.motionName && t && o !== !1)
  }
  var r = g.forwardRef(function (a, o) {
    var i = a.visible,
      l = i === void 0 ? !0 : i,
      s = a.removeOnLeave,
      u = s === void 0 ? !0 : s,
      c = a.forceRender,
      d = a.children,
      f = a.motionName,
      y = a.leavedClassName,
      v = a.eventProps,
      p = g.useContext(MS),
      b = p.motion,
      m = n(a, b),
      h = g.useRef(),
      S = g.useRef()
    function C() {
      try {
        return h.current instanceof HTMLElement ? h.current : Xs(S.current)
      } catch {
        return null
      }
    }
    var w = PP(m, l, C, a),
      E = V(w, 4),
      x = E[0],
      R = E[1],
      F = E[2],
      _ = E[3],
      T = g.useRef(_)
    _ && (T.current = !0)
    var j = g.useCallback(
        function (M) {
          ;(h.current = M), Fh(o, M)
        },
        [o],
      ),
      A,
      I = H(H({}, v), {}, { visible: l })
    if (!d) A = null
    else if (x === oa)
      _
        ? (A = d(H({}, I), j))
        : !u && T.current && y
          ? (A = d(H(H({}, I), {}, { className: y }), j))
          : c || (!u && !y)
            ? (A = d(H(H({}, I), {}, { style: { display: 'none' } }), j))
            : (A = null)
    else {
      var N
      R === sr
        ? (N = 'prepare')
        : AS(R)
          ? (N = 'active')
          : R === zo && (N = 'start')
      var P = op(f, ''.concat(x, '-').concat(N))
      A = d(
        H(
          H({}, I),
          {},
          {
            className: ke(
              op(f, x),
              z(z({}, P, P && N), f, typeof f == 'string'),
            ),
            style: F,
          },
        ),
        j,
      )
    }
    if (g.isValidElement(A) && zl(A)) {
      var k = A,
        $ = k.ref
      $ || (A = g.cloneElement(A, { ref: j }))
    }
    return g.createElement(vP, { ref: S }, A)
  })
  return (r.displayName = 'CSSMotion'), r
}
const Vl = kP(NS)
var dg = 'add',
  fg = 'keep',
  gg = 'remove',
  Dd = 'removed'
function RP(e) {
  var t
  return (
    e && _e(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    H(H({}, t), {}, { key: String(t.key) })
  )
}
function hg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  return e.map(RP)
}
function MP() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    a = t.length,
    o = hg(e),
    i = hg(t)
  o.forEach(function (u) {
    for (var c = !1, d = r; d < a; d += 1) {
      var f = i[d]
      if (f.key === u.key) {
        r < d &&
          ((n = n.concat(
            i.slice(r, d).map(function (y) {
              return H(H({}, y), {}, { status: dg })
            }),
          )),
          (r = d)),
          n.push(H(H({}, f), {}, { status: fg })),
          (r += 1),
          (c = !0)
        break
      }
    }
    c || n.push(H(H({}, u), {}, { status: gg }))
  }),
    r < a &&
      (n = n.concat(
        i.slice(r).map(function (u) {
          return H(H({}, u), {}, { status: dg })
        }),
      ))
  var l = {}
  n.forEach(function (u) {
    var c = u.key
    l[c] = (l[c] || 0) + 1
  })
  var s = Object.keys(l).filter(function (u) {
    return l[u] > 1
  })
  return (
    s.forEach(function (u) {
      ;(n = n.filter(function (c) {
        var d = c.key,
          f = c.status
        return d !== u || f !== gg
      })),
        n.forEach(function (c) {
          c.key === u && (c.status = fg)
        })
    }),
    n
  )
}
var OP = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  _P = ['status'],
  IP = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd',
  ]
function TP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vl,
    n = (function (r) {
      co(o, r)
      var a = Hl(o)
      function o() {
        var i
        Yt(this, o)
        for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
          s[u] = arguments[u]
        return (
          (i = a.call.apply(a, [this].concat(s))),
          z(Ue(i), 'state', { keyEntities: [] }),
          z(Ue(i), 'removeKey', function (c) {
            var d = i.state.keyEntities,
              f = d.map(function (y) {
                return y.key !== c ? y : H(H({}, y), {}, { status: Dd })
              })
            return (
              i.setState({ keyEntities: f }),
              f.filter(function (y) {
                var v = y.status
                return v !== Dd
              }).length
            )
          }),
          i
        )
      }
      return (
        qt(
          o,
          [
            {
              key: 'render',
              value: function () {
                var l = this,
                  s = this.state.keyEntities,
                  u = this.props,
                  c = u.component,
                  d = u.children,
                  f = u.onVisibleChanged,
                  y = u.onAllRemoved,
                  v = xt(u, OP),
                  p = c || g.Fragment,
                  b = {}
                return (
                  IP.forEach(function (m) {
                    ;(b[m] = v[m]), delete v[m]
                  }),
                  delete v.keys,
                  g.createElement(
                    p,
                    v,
                    s.map(function (m, h) {
                      var S = m.status,
                        C = xt(m, _P),
                        w = S === dg || S === fg
                      return g.createElement(
                        t,
                        ve({}, b, {
                          key: C.key,
                          visible: w,
                          eventProps: C,
                          onVisibleChanged: function (x) {
                            if ((f == null || f(x, { key: C.key }), !x)) {
                              var R = l.removeKey(C.key)
                              R === 0 && y && y()
                            }
                          },
                        }),
                        function (E, x) {
                          return d(H(H({}, E), {}, { index: h }), x)
                        },
                      )
                    }),
                  )
                )
              },
            },
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function (l, s) {
                var u = l.keys,
                  c = s.keyEntities,
                  d = hg(u),
                  f = MP(c, d)
                return {
                  keyEntities: f.filter(function (y) {
                    var v = c.find(function (p) {
                      var b = p.key
                      return y.key === b
                    })
                    return !(v && v.status === Dd && y.status === gg)
                  }),
                }
              },
            },
          ],
        ),
        o
      )
    })(g.Component)
  return z(n, 'defaultProps', { component: 'div' }), n
}
TP(NS)
function FP(e) {
  const { children: t } = e,
    [, n] = qr(),
    { motion: r } = n,
    a = g.useRef(!1)
  return (
    (a.current = a.current || r === !1),
    a.current ? g.createElement(mP, { motion: r }, t) : t
  )
}
const NP = () => null
var DP = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]])
  return n
}
const LP = [
    'getTargetContainer',
    'getPopupContainer',
    'renderEmpty',
    'input',
    'pagination',
    'form',
    'select',
    'button',
  ],
  AP = 'ant'
let jS
function jP() {
  return jS || AP
}
function zP(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'))
}
const HP = (e) => {
    const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: a } = e
    t !== void 0 && (jS = t), r && zP(r) && z2(jP(), r)
  },
  VP = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: a,
        anchor: o,
        form: i,
        locale: l,
        componentSize: s,
        direction: u,
        space: c,
        virtual: d,
        dropdownMatchSelectWidth: f,
        popupMatchSelectWidth: y,
        popupOverflow: v,
        legacyLocale: p,
        parentContext: b,
        iconPrefixCls: m,
        theme: h,
        componentDisabled: S,
        segmented: C,
        statistic: w,
        spin: E,
        calendar: x,
        carousel: R,
        cascader: F,
        collapse: _,
        typography: T,
        checkbox: j,
        descriptions: A,
        divider: I,
        drawer: N,
        skeleton: P,
        steps: k,
        image: $,
        layout: M,
        list: O,
        mentions: D,
        modal: L,
        progress: W,
        result: B,
        slider: U,
        breadcrumb: K,
        menu: Y,
        pagination: q,
        input: X,
        textArea: Q,
        empty: J,
        badge: ne,
        radio: te,
        rate: ae,
        switch: ye,
        transfer: oe,
        avatar: he,
        message: ge,
        tag: ce,
        table: Ce,
        card: we,
        tabs: Ne,
        timeline: Le,
        timePicker: Z,
        upload: Se,
        notification: ie,
        tree: Xe,
        colorPicker: He,
        datePicker: Ie,
        rangePicker: Ye,
        flex: Je,
        wave: me,
        dropdown: We,
        warning: re,
        tour: fe,
        floatButtonGroup: Re,
      } = e,
      Ae = g.useCallback(
        (se, xe) => {
          const { prefixCls: Ve } = e
          if (xe) return xe
          const et = Ve || b.getPrefixCls('')
          return se ? `${et}-${se}` : et
        },
        [b.getPrefixCls, e.prefixCls],
      ),
      qe = m || b.iconPrefixCls || vS,
      Ze = n || b.csp
    PS(qe, Ze)
    const Qe = gP(h, b.theme, { prefixCls: Ae('') }),
      at = {
        csp: Ze,
        autoInsertSpaceInButton: r,
        alert: a,
        anchor: o,
        locale: l || p,
        direction: u,
        space: c,
        virtual: d,
        popupMatchSelectWidth: y ?? f,
        popupOverflow: v,
        getPrefixCls: Ae,
        iconPrefixCls: qe,
        theme: Qe,
        segmented: C,
        statistic: w,
        spin: E,
        calendar: x,
        carousel: R,
        cascader: F,
        collapse: _,
        typography: T,
        checkbox: j,
        descriptions: A,
        divider: I,
        drawer: N,
        skeleton: P,
        steps: k,
        image: $,
        input: X,
        textArea: Q,
        layout: M,
        list: O,
        mentions: D,
        modal: L,
        progress: W,
        result: B,
        slider: U,
        breadcrumb: K,
        menu: Y,
        pagination: q,
        empty: J,
        badge: ne,
        radio: te,
        rate: ae,
        switch: ye,
        transfer: oe,
        avatar: he,
        message: ge,
        tag: ce,
        table: Ce,
        card: we,
        tabs: Ne,
        timeline: Le,
        timePicker: Z,
        upload: Se,
        notification: ie,
        tree: Xe,
        colorPicker: He,
        datePicker: Ie,
        rangePicker: Ye,
        flex: Je,
        wave: me,
        dropdown: We,
        warning: re,
        tour: fe,
        floatButtonGroup: Re,
      },
      Et = Object.assign({}, b)
    Object.keys(at).forEach((se) => {
      at[se] !== void 0 && (Et[se] = at[se])
    }),
      LP.forEach((se) => {
        const xe = e[se]
        xe && (Et[se] = xe)
      }),
      typeof r < 'u' &&
        (Et.button = Object.assign({ autoInsertSpace: r }, Et.button))
    const Ke = Th(
        () => Et,
        Et,
        (se, xe) => {
          const Ve = Object.keys(se),
            et = Object.keys(xe)
          return Ve.length !== et.length || Ve.some((Rt) => se[Rt] !== xe[Rt])
        },
      ),
      De = g.useMemo(() => ({ prefixCls: qe, csp: Ze }), [qe, Ze])
    let be = g.createElement(
      g.Fragment,
      null,
      g.createElement(NP, { dropdownMatchSelectWidth: f }),
      t,
    )
    const Te = g.useMemo(() => {
      var se, xe, Ve, et
      return jo(
        ((se = li.Form) === null || se === void 0
          ? void 0
          : se.defaultValidateMessages) || {},
        ((Ve =
          (xe = Ke.locale) === null || xe === void 0 ? void 0 : xe.Form) ===
          null || Ve === void 0
          ? void 0
          : Ve.defaultValidateMessages) || {},
        ((et = Ke.form) === null || et === void 0
          ? void 0
          : et.validateMessages) || {},
        (i == null ? void 0 : i.validateMessages) || {},
      )
    }, [Ke, i == null ? void 0 : i.validateMessages])
    Object.keys(Te).length > 0 &&
      (be = g.createElement(a2.Provider, { value: Te }, be)),
      l && (be = g.createElement(u2, { locale: l, _ANT_MARK__: s2 }, be)),
      (qe || Ze) && (be = g.createElement(Wh.Provider, { value: De }, be)),
      s && (be = g.createElement(V2, { size: s }, be)),
      (be = g.createElement(FP, null, be))
    const pe = g.useMemo(() => {
      const se = Qe || {},
        { algorithm: xe, token: Ve, components: et, cssVar: Rt } = se,
        vt = DP(se, ['algorithm', 'token', 'components', 'cssVar']),
        vr = xe && (!Array.isArray(xe) || xe.length > 0) ? Zf(xe) : hS,
        Sn = {}
      Object.entries(et || {}).forEach((jn) => {
        let [sn, Cn] = jn
        const ct = Object.assign({}, Cn)
        'algorithm' in ct &&
          (ct.algorithm === !0
            ? (ct.theme = vr)
            : (Array.isArray(ct.algorithm) ||
                typeof ct.algorithm == 'function') &&
              (ct.theme = Zf(ct.algorithm)),
          delete ct.algorithm),
          (Sn[sn] = ct)
      })
      const bn = Object.assign(Object.assign({}, Ol), Ve)
      return Object.assign(Object.assign({}, vt), {
        theme: vr,
        token: bn,
        components: Sn,
        override: Object.assign({ override: bn }, Sn),
        cssVar: Rt,
      })
    }, [Qe])
    return (
      h && (be = g.createElement(mS.Provider, { value: pe }, be)),
      Ke.warning &&
        (be = g.createElement(r2.Provider, { value: Ke.warning }, be)),
      S !== void 0 && (be = g.createElement(H2, { disabled: S }, be)),
      g.createElement(yn.Provider, { value: Ke }, be)
    )
  },
  go = (e) => {
    const t = g.useContext(yn),
      n = g.useContext(Uh)
    return g.createElement(
      VP,
      Object.assign({ parentContext: t, legacyLocale: n }, e),
    )
  }
go.ConfigContext = yn
go.SizeContext = si
go.config = HP
go.useConfig = B2
Object.defineProperty(go, 'SizeContext', { get: () => si })
function zS(e) {
  var t
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e)
}
function BP(e) {
  return zS(e) instanceof ShadowRoot
}
function Nu(e) {
  return BP(e) ? zS(e) : null
}
function WP(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase()
  })
}
function UP(e, t) {
  pn(e, '[@ant-design/icons] '.concat(t))
}
function ip(e) {
  return (
    _e(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (_e(e.icon) === 'object' || typeof e.icon == 'function')
  )
}
function lp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n]
    switch (n) {
      case 'class':
        ;(t.className = r), delete t.class
        break
      default:
        delete t[n], (t[WP(n)] = r)
    }
    return t
  }, {})
}
function mg(e, t, n) {
  return n
    ? Oe.createElement(
        e.tag,
        H(H({ key: t }, lp(e.attrs)), n),
        (e.children || []).map(function (r, a) {
          return mg(r, ''.concat(t, '-').concat(e.tag, '-').concat(a))
        }),
      )
    : Oe.createElement(
        e.tag,
        H({ key: t }, lp(e.attrs)),
        (e.children || []).map(function (r, a) {
          return mg(r, ''.concat(t, '-').concat(e.tag, '-').concat(a))
        }),
      )
}
function HS(e) {
  return ao(e)[0]
}
function VS(e) {
  return e ? (Array.isArray(e) ? e : [e]) : []
}
var YP = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  qP = function (t) {
    var n = g.useContext(Wh),
      r = n.csp,
      a = n.prefixCls,
      o = YP
    a && (o = o.replace(/anticon/g, a)),
      g.useEffect(function () {
        var i = t.current,
          l = Nu(i)
        Vr(o, '@ant-design-icons', { prepend: !0, csp: r, attachTo: l })
      }, [])
  },
  KP = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  nl = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 }
function GP(e) {
  var t = e.primaryColor,
    n = e.secondaryColor
  ;(nl.primaryColor = t),
    (nl.secondaryColor = n || HS(t)),
    (nl.calculated = !!n)
}
function QP() {
  return H({}, nl)
}
var mi = function (t) {
  var n = t.icon,
    r = t.className,
    a = t.onClick,
    o = t.style,
    i = t.primaryColor,
    l = t.secondaryColor,
    s = xt(t, KP),
    u = g.useRef(),
    c = nl
  if (
    (i && (c = { primaryColor: i, secondaryColor: l || HS(i) }),
    qP(u),
    UP(ip(n), 'icon should be icon definiton, but got '.concat(n)),
    !ip(n))
  )
    return null
  var d = n
  return (
    d &&
      typeof d.icon == 'function' &&
      (d = H(H({}, d), {}, { icon: d.icon(c.primaryColor, c.secondaryColor) })),
    mg(
      d.icon,
      'svg-'.concat(d.name),
      H(
        H(
          {
            className: r,
            onClick: a,
            style: o,
            'data-icon': d.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          s,
        ),
        {},
        { ref: u },
      ),
    )
  )
}
mi.displayName = 'IconReact'
mi.getTwoToneColors = QP
mi.setTwoToneColors = GP
function BS(e) {
  var t = VS(e),
    n = V(t, 2),
    r = n[0],
    a = n[1]
  return mi.setTwoToneColors({ primaryColor: r, secondaryColor: a })
}
function XP() {
  var e = mi.getTwoToneColors()
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}
var JP = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
]
BS(P2.primary)
var er = g.forwardRef(function (e, t) {
  var n = e.className,
    r = e.icon,
    a = e.spin,
    o = e.rotate,
    i = e.tabIndex,
    l = e.onClick,
    s = e.twoToneColor,
    u = xt(e, JP),
    c = g.useContext(Wh),
    d = c.prefixCls,
    f = d === void 0 ? 'anticon' : d,
    y = c.rootClassName,
    v = ke(
      y,
      f,
      z(
        z({}, ''.concat(f, '-').concat(r.name), !!r.name),
        ''.concat(f, '-spin'),
        !!a || r.name === 'loading',
      ),
      n,
    ),
    p = i
  p === void 0 && l && (p = -1)
  var b = o
      ? {
          msTransform: 'rotate('.concat(o, 'deg)'),
          transform: 'rotate('.concat(o, 'deg)'),
        }
      : void 0,
    m = VS(s),
    h = V(m, 2),
    S = h[0],
    C = h[1]
  return g.createElement(
    'span',
    ve({ role: 'img', 'aria-label': r.name }, u, {
      ref: t,
      tabIndex: p,
      onClick: l,
      className: v,
    }),
    g.createElement(mi, {
      icon: r,
      primaryColor: S,
      secondaryColor: C,
      style: b,
    }),
  )
})
er.displayName = 'AntdIcon'
er.getTwoToneColor = XP
er.setTwoToneColor = BS
var ZP = {
    icon: {
      tag: 'svg',
      attrs: {
        'fill-rule': 'evenodd',
        viewBox: '64 64 896 896',
        focusable: 'false',
      },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z',
          },
        },
      ],
    },
    name: 'close-circle',
    theme: 'filled',
  },
  ek = function (t, n) {
    return g.createElement(er, ve({}, t, { ref: n, icon: ZP }))
  },
  tk = g.forwardRef(ek),
  nk = {
    icon: {
      tag: 'svg',
      attrs: {
        'fill-rule': 'evenodd',
        viewBox: '64 64 896 896',
        focusable: 'false',
      },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z',
          },
        },
      ],
    },
    name: 'close',
    theme: 'outlined',
  },
  rk = function (t, n) {
    return g.createElement(er, ve({}, t, { ref: n, icon: nk }))
  },
  ak = g.forwardRef(rk),
  ok = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
  ik = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
  lk = ''
    .concat(ok, ' ')
    .concat(ik)
    .split(/[\s\n]+/),
  sk = 'aria-',
  uk = 'data-'
function sp(e, t) {
  return e.indexOf(t) === 0
}
function Pc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n
  t === !1
    ? (n = { aria: !0, data: !0, attr: !0 })
    : t === !0
      ? (n = { aria: !0 })
      : (n = H({}, t))
  var r = {}
  return (
    Object.keys(e).forEach(function (a) {
      ;((n.aria && (a === 'role' || sp(a, sk))) ||
        (n.data && sp(a, uk)) ||
        (n.attr && lk.includes(a))) &&
        (r[a] = e[a])
    }),
    r
  )
}
function ck(e) {
  return e && Oe.isValidElement(e) && e.type === Oe.Fragment
}
const dk = (e, t, n) =>
  Oe.isValidElement(e)
    ? Oe.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
    : t
function WS(e, t) {
  return dk(e, e, t)
}
const kc = (e) => {
  const [, , , , t] = qr()
  return t ? `${e}-css-var` : ''
}
var fk = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
          },
        },
      ],
    },
    name: 'loading',
    theme: 'outlined',
  },
  gk = function (t, n) {
    return g.createElement(er, ve({}, t, { ref: n, icon: fk }))
  },
  US = g.forwardRef(gk)
const hk = Oe.createContext(void 0),
  Ha = 100,
  mk = 10,
  vk = Ha * mk,
  YS = {
    Modal: Ha,
    Drawer: Ha,
    Popover: Ha,
    Popconfirm: Ha,
    Tooltip: Ha,
    Tour: Ha,
  },
  pk = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1,
  }
function yk(e) {
  return e in YS
}
function qS(e, t) {
  const [, n] = qr(),
    r = Oe.useContext(hk),
    a = yk(e)
  if (t !== void 0) return [t, t]
  let o = r ?? 0
  return (
    a
      ? ((o += (r ? 0 : n.zIndexPopupBase) + YS[e]),
        (o = Math.min(o, n.zIndexPopupBase + vk)))
      : (o += pk[e]),
    [r === void 0 ? t : o, o]
  )
}
function an() {
  an = function () {
    return t
  }
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    a =
      Object.defineProperty ||
      function (P, k, $) {
        P[k] = $.value
      },
    o = typeof Symbol == 'function' ? Symbol : {},
    i = o.iterator || '@@iterator',
    l = o.asyncIterator || '@@asyncIterator',
    s = o.toStringTag || '@@toStringTag'
  function u(P, k, $) {
    return (
      Object.defineProperty(P, k, {
        value: $,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      P[k]
    )
  }
  try {
    u({}, '')
  } catch {
    u = function ($, M, O) {
      return ($[M] = O)
    }
  }
  function c(P, k, $, M) {
    var O = k && k.prototype instanceof m ? k : m,
      D = Object.create(O.prototype),
      L = new I(M || [])
    return a(D, '_invoke', { value: _(P, $, L) }), D
  }
  function d(P, k, $) {
    try {
      return { type: 'normal', arg: P.call(k, $) }
    } catch (M) {
      return { type: 'throw', arg: M }
    }
  }
  t.wrap = c
  var f = 'suspendedStart',
    y = 'suspendedYield',
    v = 'executing',
    p = 'completed',
    b = {}
  function m() {}
  function h() {}
  function S() {}
  var C = {}
  u(C, i, function () {
    return this
  })
  var w = Object.getPrototypeOf,
    E = w && w(w(N([])))
  E && E !== n && r.call(E, i) && (C = E)
  var x = (S.prototype = m.prototype = Object.create(C))
  function R(P) {
    ;['next', 'throw', 'return'].forEach(function (k) {
      u(P, k, function ($) {
        return this._invoke(k, $)
      })
    })
  }
  function F(P, k) {
    function $(O, D, L, W) {
      var B = d(P[O], P, D)
      if (B.type !== 'throw') {
        var U = B.arg,
          K = U.value
        return K && _e(K) == 'object' && r.call(K, '__await')
          ? k.resolve(K.__await).then(
              function (Y) {
                $('next', Y, L, W)
              },
              function (Y) {
                $('throw', Y, L, W)
              },
            )
          : k.resolve(K).then(
              function (Y) {
                ;(U.value = Y), L(U)
              },
              function (Y) {
                return $('throw', Y, L, W)
              },
            )
      }
      W(B.arg)
    }
    var M
    a(this, '_invoke', {
      value: function (D, L) {
        function W() {
          return new k(function (B, U) {
            $(D, L, B, U)
          })
        }
        return (M = M ? M.then(W, W) : W())
      },
    })
  }
  function _(P, k, $) {
    var M = f
    return function (O, D) {
      if (M === v) throw Error('Generator is already running')
      if (M === p) {
        if (O === 'throw') throw D
        return { value: e, done: !0 }
      }
      for ($.method = O, $.arg = D; ; ) {
        var L = $.delegate
        if (L) {
          var W = T(L, $)
          if (W) {
            if (W === b) continue
            return W
          }
        }
        if ($.method === 'next') $.sent = $._sent = $.arg
        else if ($.method === 'throw') {
          if (M === f) throw ((M = p), $.arg)
          $.dispatchException($.arg)
        } else $.method === 'return' && $.abrupt('return', $.arg)
        M = v
        var B = d(P, k, $)
        if (B.type === 'normal') {
          if (((M = $.done ? p : y), B.arg === b)) continue
          return { value: B.arg, done: $.done }
        }
        B.type === 'throw' && ((M = p), ($.method = 'throw'), ($.arg = B.arg))
      }
    }
  }
  function T(P, k) {
    var $ = k.method,
      M = P.iterator[$]
    if (M === e)
      return (
        (k.delegate = null),
        ($ === 'throw' &&
          P.iterator.return &&
          ((k.method = 'return'),
          (k.arg = e),
          T(P, k),
          k.method === 'throw')) ||
          ($ !== 'return' &&
            ((k.method = 'throw'),
            (k.arg = new TypeError(
              "The iterator does not provide a '" + $ + "' method",
            )))),
        b
      )
    var O = d(M, P.iterator, k.arg)
    if (O.type === 'throw')
      return (k.method = 'throw'), (k.arg = O.arg), (k.delegate = null), b
    var D = O.arg
    return D
      ? D.done
        ? ((k[P.resultName] = D.value),
          (k.next = P.nextLoc),
          k.method !== 'return' && ((k.method = 'next'), (k.arg = e)),
          (k.delegate = null),
          b)
        : D
      : ((k.method = 'throw'),
        (k.arg = new TypeError('iterator result is not an object')),
        (k.delegate = null),
        b)
  }
  function j(P) {
    var k = { tryLoc: P[0] }
    1 in P && (k.catchLoc = P[1]),
      2 in P && ((k.finallyLoc = P[2]), (k.afterLoc = P[3])),
      this.tryEntries.push(k)
  }
  function A(P) {
    var k = P.completion || {}
    ;(k.type = 'normal'), delete k.arg, (P.completion = k)
  }
  function I(P) {
    ;(this.tryEntries = [{ tryLoc: 'root' }]),
      P.forEach(j, this),
      this.reset(!0)
  }
  function N(P) {
    if (P || P === '') {
      var k = P[i]
      if (k) return k.call(P)
      if (typeof P.next == 'function') return P
      if (!isNaN(P.length)) {
        var $ = -1,
          M = function O() {
            for (; ++$ < P.length; )
              if (r.call(P, $)) return (O.value = P[$]), (O.done = !1), O
            return (O.value = e), (O.done = !0), O
          }
        return (M.next = M)
      }
    }
    throw new TypeError(_e(P) + ' is not iterable')
  }
  return (
    (h.prototype = S),
    a(x, 'constructor', { value: S, configurable: !0 }),
    a(S, 'constructor', { value: h, configurable: !0 }),
    (h.displayName = u(S, s, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (P) {
      var k = typeof P == 'function' && P.constructor
      return (
        !!k && (k === h || (k.displayName || k.name) === 'GeneratorFunction')
      )
    }),
    (t.mark = function (P) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(P, S)
          : ((P.__proto__ = S), u(P, s, 'GeneratorFunction')),
        (P.prototype = Object.create(x)),
        P
      )
    }),
    (t.awrap = function (P) {
      return { __await: P }
    }),
    R(F.prototype),
    u(F.prototype, l, function () {
      return this
    }),
    (t.AsyncIterator = F),
    (t.async = function (P, k, $, M, O) {
      O === void 0 && (O = Promise)
      var D = new F(c(P, k, $, M), O)
      return t.isGeneratorFunction(k)
        ? D
        : D.next().then(function (L) {
            return L.done ? L.value : D.next()
          })
    }),
    R(x),
    u(x, s, 'Generator'),
    u(x, i, function () {
      return this
    }),
    u(x, 'toString', function () {
      return '[object Generator]'
    }),
    (t.keys = function (P) {
      var k = Object(P),
        $ = []
      for (var M in k) $.push(M)
      return (
        $.reverse(),
        function O() {
          for (; $.length; ) {
            var D = $.pop()
            if (D in k) return (O.value = D), (O.done = !1), O
          }
          return (O.done = !0), O
        }
      )
    }),
    (t.values = N),
    (I.prototype = {
      constructor: I,
      reset: function (k) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(A),
          !k)
        )
          for (var $ in this)
            $.charAt(0) === 't' &&
              r.call(this, $) &&
              !isNaN(+$.slice(1)) &&
              (this[$] = e)
      },
      stop: function () {
        this.done = !0
        var k = this.tryEntries[0].completion
        if (k.type === 'throw') throw k.arg
        return this.rval
      },
      dispatchException: function (k) {
        if (this.done) throw k
        var $ = this
        function M(U, K) {
          return (
            (L.type = 'throw'),
            (L.arg = k),
            ($.next = U),
            K && (($.method = 'next'), ($.arg = e)),
            !!K
          )
        }
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var D = this.tryEntries[O],
            L = D.completion
          if (D.tryLoc === 'root') return M('end')
          if (D.tryLoc <= this.prev) {
            var W = r.call(D, 'catchLoc'),
              B = r.call(D, 'finallyLoc')
            if (W && B) {
              if (this.prev < D.catchLoc) return M(D.catchLoc, !0)
              if (this.prev < D.finallyLoc) return M(D.finallyLoc)
            } else if (W) {
              if (this.prev < D.catchLoc) return M(D.catchLoc, !0)
            } else {
              if (!B) throw Error('try statement without catch or finally')
              if (this.prev < D.finallyLoc) return M(D.finallyLoc)
            }
          }
        }
      },
      abrupt: function (k, $) {
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var O = this.tryEntries[M]
          if (
            O.tryLoc <= this.prev &&
            r.call(O, 'finallyLoc') &&
            this.prev < O.finallyLoc
          ) {
            var D = O
            break
          }
        }
        D &&
          (k === 'break' || k === 'continue') &&
          D.tryLoc <= $ &&
          $ <= D.finallyLoc &&
          (D = null)
        var L = D ? D.completion : {}
        return (
          (L.type = k),
          (L.arg = $),
          D
            ? ((this.method = 'next'), (this.next = D.finallyLoc), b)
            : this.complete(L)
        )
      },
      complete: function (k, $) {
        if (k.type === 'throw') throw k.arg
        return (
          k.type === 'break' || k.type === 'continue'
            ? (this.next = k.arg)
            : k.type === 'return'
              ? ((this.rval = this.arg = k.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : k.type === 'normal' && $ && (this.next = $),
          b
        )
      },
      finish: function (k) {
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var M = this.tryEntries[$]
          if (M.finallyLoc === k)
            return this.complete(M.completion, M.afterLoc), A(M), b
        }
      },
      catch: function (k) {
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var M = this.tryEntries[$]
          if (M.tryLoc === k) {
            var O = M.completion
            if (O.type === 'throw') {
              var D = O.arg
              A(M)
            }
            return D
          }
        }
        throw Error('illegal catch attempt')
      },
      delegateYield: function (k, $, M) {
        return (
          (this.delegate = { iterator: N(k), resultName: $, nextLoc: M }),
          this.method === 'next' && (this.arg = e),
          b
        )
      },
    }),
    t
  )
}
function up(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      s = l.value
  } catch (u) {
    return void n(u)
  }
  l.done ? t(s) : Promise.resolve(s).then(r, a)
}
function ho(e) {
  return function () {
    var t = this,
      n = arguments
    return new Promise(function (r, a) {
      var o = e.apply(t, n)
      function i(s) {
        up(o, r, a, i, l, 'next', s)
      }
      function l(s) {
        up(o, r, a, i, l, 'throw', s)
      }
      i(void 0)
    })
  }
}
var Bl = H({}, dE),
  Sk = Bl.version,
  bk = Bl.render,
  Ck = Bl.unmountComponentAtNode,
  Rc
try {
  var wk = Number((Sk || '').split('.')[0])
  wk >= 18 && (Rc = Bl.createRoot)
} catch {}
function cp(e) {
  var t = Bl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  t && _e(t) === 'object' && (t.usingClientEntryPoint = e)
}
var Du = '__rc_react_root__'
function xk(e, t) {
  cp(!0)
  var n = t[Du] || Rc(t)
  cp(!1), n.render(e), (t[Du] = n)
}
function Ek(e, t) {
  bk(e, t)
}
function $k(e, t) {
  if (Rc) {
    xk(e, t)
    return
  }
  Ek(e, t)
}
function Pk(e) {
  return vg.apply(this, arguments)
}
function vg() {
  return (
    (vg = ho(
      an().mark(function e(t) {
        return an().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.resolve().then(function () {
                    var a
                    ;(a = t[Du]) === null || a === void 0 || a.unmount(),
                      delete t[Du]
                  }),
                )
              case 1:
              case 'end':
                return r.stop()
            }
        }, e)
      }),
    )),
    vg.apply(this, arguments)
  )
}
function kk(e) {
  Ck(e)
}
function Rk(e) {
  return pg.apply(this, arguments)
}
function pg() {
  return (
    (pg = ho(
      an().mark(function e(t) {
        return an().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (Rc === void 0) {
                  r.next = 2
                  break
                }
                return r.abrupt('return', Pk(t))
              case 2:
                kk(t)
              case 3:
              case 'end':
                return r.stop()
            }
        }, e)
      }),
    )),
    pg.apply(this, arguments)
  )
}
const Gh = function (e) {
    if (!e) return !1
    if (e instanceof Element) {
      if (e.offsetParent) return !0
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height
        if (n || r) return !0
      }
      if (e.getBoundingClientRect) {
        var a = e.getBoundingClientRect(),
          o = a.width,
          i = a.height
        if (o || i) return !0
      }
    }
    return !1
  },
  Mk = (e) => {
    const { componentCls: t, colorPrimary: n } = e
    return {
      [t]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        color: `var(--wave-color, ${n})`,
        boxShadow: '0 0 0 0 currentcolor',
        opacity: 0.2,
        '&.wave-motion-appear': {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`,
          ].join(','),
          '&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 },
          '&.wave-quick': {
            transition: [
              `box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,
              `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
            ].join(','),
          },
        },
      },
    }
  },
  Ok = qh('Wave', (e) => [Mk(e)]),
  Qh = 'ant-wave-target'
function _k(e) {
  const t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/)
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0
}
function Ld(e) {
  return (
    e &&
    e !== '#fff' &&
    e !== '#ffffff' &&
    e !== 'rgb(255, 255, 255)' &&
    e !== 'rgba(255, 255, 255, 1)' &&
    _k(e) &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== 'transparent'
  )
}
function Ik(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r,
  } = getComputedStyle(e)
  return Ld(t) ? t : Ld(n) ? n : Ld(r) ? r : null
}
function Ad(e) {
  return Number.isNaN(e) ? 0 : e
}
const Tk = (e) => {
    const { className: t, target: n, component: r } = e,
      a = g.useRef(null),
      [o, i] = g.useState(null),
      [l, s] = g.useState([]),
      [u, c] = g.useState(0),
      [d, f] = g.useState(0),
      [y, v] = g.useState(0),
      [p, b] = g.useState(0),
      [m, h] = g.useState(!1),
      S = {
        left: u,
        top: d,
        width: y,
        height: p,
        borderRadius: l.map((E) => `${E}px`).join(' '),
      }
    o && (S['--wave-color'] = o)
    function C() {
      const E = getComputedStyle(n)
      i(Ik(n))
      const x = E.position === 'static',
        { borderLeftWidth: R, borderTopWidth: F } = E
      c(x ? n.offsetLeft : Ad(-parseFloat(R))),
        f(x ? n.offsetTop : Ad(-parseFloat(F))),
        v(n.offsetWidth),
        b(n.offsetHeight)
      const {
        borderTopLeftRadius: _,
        borderTopRightRadius: T,
        borderBottomLeftRadius: j,
        borderBottomRightRadius: A,
      } = E
      s([_, T, A, j].map((I) => Ad(parseFloat(I))))
    }
    if (
      (g.useEffect(() => {
        if (n) {
          const E = Bt(() => {
            C(), h(!0)
          })
          let x
          return (
            typeof ResizeObserver < 'u' &&
              ((x = new ResizeObserver(C)), x.observe(n)),
            () => {
              Bt.cancel(E), x == null || x.disconnect()
            }
          )
        }
      }, []),
      !m)
    )
      return null
    const w =
      (r === 'Checkbox' || r === 'Radio') &&
      (n == null ? void 0 : n.classList.contains(Qh))
    return g.createElement(
      Vl,
      {
        visible: !0,
        motionAppear: !0,
        motionName: 'wave-motion',
        motionDeadline: 5e3,
        onAppearEnd: (E, x) => {
          var R
          if (x.deadline || x.propertyName === 'opacity') {
            const F =
              (R = a.current) === null || R === void 0
                ? void 0
                : R.parentElement
            Rk(F).then(() => {
              F == null || F.remove()
            })
          }
          return !1
        },
      },
      (E, x) => {
        let { className: R } = E
        return g.createElement('div', {
          ref: gi(a, x),
          className: ke(t, { 'wave-quick': w }, R),
          style: S,
        })
      },
    )
  },
  Fk = (e, t) => {
    var n
    const { component: r } = t
    if (
      r === 'Checkbox' &&
      !(!((n = e.querySelector('input')) === null || n === void 0) && n.checked)
    )
      return
    const a = document.createElement('div')
    ;(a.style.position = 'absolute'),
      (a.style.left = '0px'),
      (a.style.top = '0px'),
      e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild),
      $k(g.createElement(Tk, Object.assign({}, t, { target: e })), a)
  },
  Nk = (e, t, n) => {
    const { wave: r } = g.useContext(yn),
      [, a, o] = qr(),
      i = tt((u) => {
        const c = e.current
        if ((r != null && r.disabled) || !c) return
        const d = c.querySelector(`.${Qh}`) || c,
          { showEffect: f } = r || {}
        ;(f || Fk)(d, {
          className: t,
          token: a,
          component: n,
          event: u,
          hashId: o,
        })
      }),
      l = g.useRef()
    return (u) => {
      Bt.cancel(l.current),
        (l.current = Bt(() => {
          i(u)
        }))
    }
  },
  KS = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: a } = g.useContext(yn),
      o = g.useRef(null),
      i = a('wave'),
      [, l] = Ok(i),
      s = Nk(o, ke(i, l), r)
    if (
      (Oe.useEffect(() => {
        const c = o.current
        if (!c || c.nodeType !== 1 || n) return
        const d = (f) => {
          !Gh(f.target) ||
            !c.getAttribute ||
            c.getAttribute('disabled') ||
            c.disabled ||
            c.className.includes('disabled') ||
            c.className.includes('-leave') ||
            s(f)
        }
        return (
          c.addEventListener('click', d, !0),
          () => {
            c.removeEventListener('click', d, !0)
          }
        )
      }, [n]),
      !Oe.isValidElement(t))
    )
      return t ?? null
    const u = zl(t) ? gi(t.ref, o) : o
    return WS(t, { ref: u })
  },
  Mc = (e) => {
    const t = Oe.useContext(si)
    return Oe.useMemo(
      () =>
        e
          ? typeof e == 'string'
            ? e ?? t
            : e instanceof Function
              ? e(t)
              : t
          : t,
      [e, t],
    )
  },
  GS = g.createContext(null),
  Xh = (e, t) => {
    const n = g.useContext(GS),
      r = g.useMemo(() => {
        if (!n) return ''
        const { compactDirection: a, isFirstItem: o, isLastItem: i } = n,
          l = a === 'vertical' ? '-vertical-' : '-'
        return ke(`${e}-compact${l}item`, {
          [`${e}-compact${l}first-item`]: o,
          [`${e}-compact${l}last-item`]: i,
          [`${e}-compact${l}item-rtl`]: t === 'rtl',
        })
      }, [e, t, n])
    return {
      compactSize: n == null ? void 0 : n.compactSize,
      compactDirection: n == null ? void 0 : n.compactDirection,
      compactItemClassnames: r,
    }
  },
  QS = (e) => {
    let { children: t } = e
    return g.createElement(GS.Provider, { value: null }, t)
  }
var Dk = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]])
  return n
}
const XS = g.createContext(void 0),
  Lk = (e) => {
    const { getPrefixCls: t, direction: n } = g.useContext(yn),
      { prefixCls: r, size: a, className: o } = e,
      i = Dk(e, ['prefixCls', 'size', 'className']),
      l = t('btn-group', r),
      [, , s] = qr()
    let u = ''
    switch (a) {
      case 'large':
        u = 'lg'
        break
      case 'small':
        u = 'sm'
        break
    }
    const c = ke(l, { [`${l}-${u}`]: u, [`${l}-rtl`]: n === 'rtl' }, o, s)
    return g.createElement(
      XS.Provider,
      { value: a },
      g.createElement('div', Object.assign({}, i, { className: c })),
    )
  },
  dp = /^[\u4e00-\u9fa5]{2}$/,
  yg = dp.test.bind(dp)
function fp(e) {
  return typeof e == 'string'
}
function jd(e) {
  return e === 'text' || e === 'link'
}
function Ak(e, t) {
  if (e == null) return
  const n = t ? ' ' : ''
  return typeof e != 'string' &&
    typeof e != 'number' &&
    fp(e.type) &&
    yg(e.props.children)
    ? WS(e, { children: e.props.children.split('').join(n) })
    : fp(e)
      ? yg(e)
        ? Oe.createElement('span', null, e.split('').join(n))
        : Oe.createElement('span', null, e)
      : ck(e)
        ? Oe.createElement('span', null, e)
        : e
}
function jk(e, t) {
  let n = !1
  const r = []
  return (
    Oe.Children.forEach(e, (a) => {
      const o = typeof a,
        i = o === 'string' || o === 'number'
      if (n && i) {
        const l = r.length - 1,
          s = r[l]
        r[l] = `${s}${a}`
      } else r.push(a)
      n = i
    }),
    Oe.Children.map(r, (a) => Ak(a, t))
  )
}
const JS = g.forwardRef((e, t) => {
    const { className: n, style: r, children: a, prefixCls: o } = e,
      i = ke(`${o}-icon`, n)
    return Oe.createElement('span', { ref: t, className: i, style: r }, a)
  }),
  gp = g.forwardRef((e, t) => {
    const { prefixCls: n, className: r, style: a, iconClassName: o } = e,
      i = ke(`${n}-loading-icon`, r)
    return Oe.createElement(
      JS,
      { prefixCls: n, className: i, style: a, ref: t },
      Oe.createElement(US, { className: o }),
    )
  }),
  zd = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
  Hd = (e) => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' }),
  zk = (e) => {
    const {
        prefixCls: t,
        loading: n,
        existIcon: r,
        className: a,
        style: o,
      } = e,
      i = !!n
    return r
      ? Oe.createElement(gp, { prefixCls: t, className: a, style: o })
      : Oe.createElement(
          Vl,
          {
            visible: i,
            motionName: `${t}-loading-icon-motion`,
            motionLeave: i,
            removeOnLeave: !0,
            onAppearStart: zd,
            onAppearActive: Hd,
            onEnterStart: zd,
            onEnterActive: Hd,
            onLeaveStart: Hd,
            onLeaveActive: zd,
          },
          (l, s) => {
            let { className: u, style: c } = l
            return Oe.createElement(gp, {
              prefixCls: t,
              className: a,
              style: Object.assign(Object.assign({}, o), c),
              ref: s,
              iconClassName: u,
            })
          },
        )
  },
  hp = (e, t) => ({
    [`> span, > ${e}`]: {
      '&:not(:last-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } },
      },
      '&:not(:first-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } },
      },
    },
  }),
  Hk = (e) => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: r,
      groupBorderColor: a,
      colorErrorHover: o,
    } = e
    return {
      [`${t}-group`]: [
        {
          position: 'relative',
          display: 'inline-flex',
          [`> span, > ${t}`]: {
            '&:not(:last-child)': {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            '&:not(:first-child)': {
              marginInlineStart: e.calc(r).mul(-1).equal(),
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [t]: {
            position: 'relative',
            zIndex: 1,
            '&:hover,\n          &:focus,\n          &:active': { zIndex: 2 },
            '&[disabled]': { zIndex: 0 },
          },
          [`${t}-icon-only`]: { fontSize: n },
        },
        hp(`${t}-primary`, a),
        hp(`${t}-danger`, o),
      ],
    }
  },
  ZS = (e) => {
    const { paddingInline: t, onlyIconSize: n, paddingBlock: r } = e
    return Dn(e, {
      buttonPaddingHorizontal: t,
      buttonPaddingVertical: r,
      buttonIconOnlyFontSize: n,
    })
  },
  eb = (e) => {
    var t, n, r, a, o, i
    const l = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize,
      s = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize,
      u = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG,
      c = (a = e.contentLineHeight) !== null && a !== void 0 ? a : ou(l),
      d = (o = e.contentLineHeightSM) !== null && o !== void 0 ? o : ou(s),
      f = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : ou(u)
    return {
      fontWeight: 400,
      defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
      primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
      dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
      primaryColor: e.colorTextLightSolid,
      dangerColor: e.colorTextLightSolid,
      borderColorDisabled: e.colorBorder,
      defaultGhostColor: e.colorBgContainer,
      ghostBg: 'transparent',
      defaultGhostBorderColor: e.colorBgContainer,
      paddingInline: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineSM: 8 - e.lineWidth,
      onlyIconSize: e.fontSizeLG,
      onlyIconSizeSM: e.fontSizeLG - 2,
      onlyIconSizeLG: e.fontSizeLG + 2,
      groupBorderColor: e.colorPrimaryHover,
      linkHoverBg: 'transparent',
      textHoverBg: e.colorBgTextHover,
      defaultColor: e.colorText,
      defaultBg: e.colorBgContainer,
      defaultBorderColor: e.colorBorder,
      defaultBorderColorDisabled: e.colorBorder,
      defaultHoverBg: e.colorBgContainer,
      defaultHoverColor: e.colorPrimaryHover,
      defaultHoverBorderColor: e.colorPrimaryHover,
      defaultActiveBg: e.colorBgContainer,
      defaultActiveColor: e.colorPrimaryActive,
      defaultActiveBorderColor: e.colorPrimaryActive,
      contentFontSize: l,
      contentFontSizeSM: s,
      contentFontSizeLG: u,
      contentLineHeight: c,
      contentLineHeightSM: d,
      contentLineHeightLG: f,
      paddingBlock: Math.max((e.controlHeight - l * c) / 2 - e.lineWidth, 0),
      paddingBlockSM: Math.max(
        (e.controlHeightSM - s * d) / 2 - e.lineWidth,
        0,
      ),
      paddingBlockLG: Math.max(
        (e.controlHeightLG - u * f) / 2 - e.lineWidth,
        0,
      ),
    }
  },
  Vk = (e) => {
    const { componentCls: t, iconCls: n, fontWeight: r } = e
    return {
      [t]: {
        outline: 'none',
        position: 'relative',
        display: 'inline-flex',
        gap: e.marginXS,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: r,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        backgroundImage: 'none',
        background: 'transparent',
        border: `${ee(e.lineWidth)} ${e.lineType} transparent`,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: 'none',
        touchAction: 'manipulation',
        color: e.colorText,
        '&:disabled > *': { pointerEvents: 'none' },
        '> span': { display: 'inline-block' },
        [`${t}-icon`]: { lineHeight: 1 },
        '> a': { color: 'currentColor' },
        '&:not(:disabled)': Object.assign({}, aP(e)),
        [`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: '0.34em' },
        [`&${t}-two-chinese-chars > *:not(${n})`]: {
          marginInlineEnd: '-0.34em',
          letterSpacing: '0.34em',
        },
        '&-icon-end': { flexDirection: 'row-reverse' },
      },
    }
  },
  Kr = (e, t, n) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: { '&:hover': t, '&:active': n },
  }),
  Bk = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: '50%',
  }),
  Wk = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
    paddingInlineEnd: e.calc(e.controlHeight).div(2).equal(),
  }),
  Uk = (e) => ({
    cursor: 'not-allowed',
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    background: e.colorBgContainerDisabled,
    boxShadow: 'none',
  }),
  _l = (e, t, n, r, a, o, i, l) => ({
    [`&${e}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: n || void 0,
          background: t,
          borderColor: r || void 0,
          boxShadow: 'none',
        },
        Kr(
          e,
          Object.assign({ background: t }, i),
          Object.assign({ background: t }, l),
        ),
      ),
      {
        '&:disabled': {
          cursor: 'not-allowed',
          color: a || void 0,
          borderColor: o || void 0,
        },
      },
    ),
  }),
  Jh = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Uk(e)),
  }),
  tb = (e) => Object.assign({}, Jh(e)),
  Lu = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: 'not-allowed',
      color: e.colorTextDisabled,
    },
  }),
  nb = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, tb(e)), {
            background: e.defaultBg,
            borderColor: e.defaultBorderColor,
            color: e.defaultColor,
            boxShadow: e.defaultShadow,
          }),
          Kr(
            e.componentCls,
            {
              color: e.defaultHoverColor,
              borderColor: e.defaultHoverBorderColor,
              background: e.defaultHoverBg,
            },
            {
              color: e.defaultActiveColor,
              borderColor: e.defaultActiveBorderColor,
              background: e.defaultActiveBg,
            },
          ),
        ),
        _l(
          e.componentCls,
          e.ghostBg,
          e.defaultGhostColor,
          e.defaultGhostBorderColor,
          e.colorTextDisabled,
          e.colorBorder,
        ),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              { color: e.colorError, borderColor: e.colorError },
              Kr(
                e.componentCls,
                {
                  color: e.colorErrorHover,
                  borderColor: e.colorErrorBorderHover,
                },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive },
              ),
            ),
            _l(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
            ),
          ),
          Jh(e),
        ),
      },
    ),
  Yk = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, tb(e)), {
            color: e.primaryColor,
            background: e.colorPrimary,
            boxShadow: e.primaryShadow,
          }),
          Kr(
            e.componentCls,
            { color: e.colorTextLightSolid, background: e.colorPrimaryHover },
            { color: e.colorTextLightSolid, background: e.colorPrimaryActive },
          ),
        ),
        _l(
          e.componentCls,
          e.ghostBg,
          e.colorPrimary,
          e.colorPrimary,
          e.colorTextDisabled,
          e.colorBorder,
          { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
          { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
        ),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                background: e.colorError,
                boxShadow: e.dangerShadow,
                color: e.dangerColor,
              },
              Kr(
                e.componentCls,
                { background: e.colorErrorHover },
                { background: e.colorErrorActive },
              ),
            ),
            _l(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorErrorHover, borderColor: e.colorErrorHover },
              { color: e.colorErrorActive, borderColor: e.colorErrorActive },
            ),
          ),
          Jh(e),
        ),
      },
    ),
  qk = (e) =>
    Object.assign(Object.assign({}, nb(e)), { borderStyle: 'dashed' }),
  Kk = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          { color: e.colorLink },
          Kr(
            e.componentCls,
            { color: e.colorLinkHover, background: e.linkHoverBg },
            { color: e.colorLinkActive },
          ),
        ),
        Lu(e),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            { color: e.colorError },
            Kr(
              e.componentCls,
              { color: e.colorErrorHover },
              { color: e.colorErrorActive },
            ),
          ),
          Lu(e),
        ),
      },
    ),
  Gk = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          {},
          Kr(
            e.componentCls,
            { color: e.colorText, background: e.textHoverBg },
            { color: e.colorText, background: e.colorBgTextActive },
          ),
        ),
        Lu(e),
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign({ color: e.colorError }, Lu(e)),
          Kr(
            e.componentCls,
            { color: e.colorErrorHover, background: e.colorErrorBg },
            { color: e.colorErrorHover, background: e.colorErrorBgActive },
          ),
        ),
      },
    ),
  Qk = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-default`]: nb(e),
      [`${t}-primary`]: Yk(e),
      [`${t}-dashed`]: qk(e),
      [`${t}-link`]: Kk(e),
      [`${t}-text`]: Gk(e),
      [`${t}-ghost`]: _l(
        e.componentCls,
        e.ghostBg,
        e.colorBgContainer,
        e.colorBgContainer,
        e.colorTextDisabled,
        e.colorBorder,
      ),
    }
  },
  Zh = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    const {
        componentCls: n,
        controlHeight: r,
        fontSize: a,
        lineHeight: o,
        borderRadius: i,
        buttonPaddingHorizontal: l,
        iconCls: s,
        buttonPaddingVertical: u,
      } = e,
      c = `${n}-icon-only`
    return [
      {
        [`${t}`]: {
          fontSize: a,
          lineHeight: o,
          height: r,
          padding: `${ee(u)} ${ee(l)}`,
          borderRadius: i,
          [`&${c}`]: {
            width: r,
            paddingInline: 0,
            [`&${n}-compact-item`]: { flex: 'none' },
            [`&${n}-round`]: { width: 'auto' },
            [s]: { fontSize: e.buttonIconOnlyFontSize },
          },
          [`&${n}-loading`]: { opacity: e.opacityLoading, cursor: 'default' },
          [`${n}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
        },
      },
      { [`${n}${n}-circle${t}`]: Bk(e) },
      { [`${n}${n}-round${t}`]: Wk(e) },
    ]
  },
  Xk = (e) => {
    const t = Dn(e, {
      fontSize: e.contentFontSize,
      lineHeight: e.contentLineHeight,
    })
    return Zh(t, e.componentCls)
  },
  Jk = (e) => {
    const t = Dn(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      lineHeight: e.contentLineHeightSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      buttonPaddingVertical: e.paddingBlockSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM,
    })
    return Zh(t, `${e.componentCls}-sm`)
  },
  Zk = (e) => {
    const t = Dn(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      lineHeight: e.contentLineHeightLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      buttonPaddingVertical: e.paddingBlockLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG,
    })
    return Zh(t, `${e.componentCls}-lg`)
  },
  eR = (e) => {
    const { componentCls: t } = e
    return { [t]: { [`&${t}-block`]: { width: '100%' } } }
  },
  tR = $c(
    'Button',
    (e) => {
      const t = ZS(e)
      return [Vk(t), Xk(t), Jk(t), Zk(t), eR(t), Qk(t), Hk(t)]
    },
    eb,
    {
      unitless: {
        fontWeight: !0,
        contentLineHeight: !0,
        contentLineHeightSM: !0,
        contentLineHeightLG: !0,
      },
    },
  )
function nR(e, t, n) {
  const { focusElCls: r, focus: a, borderElCls: o } = n,
    i = o ? '> *' : '',
    l = ['hover', a ? 'focus' : null, 'active']
      .filter(Boolean)
      .map((s) => `&:${s} ${i}`)
      .join(',')
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
    },
    '&-item': Object.assign(
      Object.assign(
        { [l]: { zIndex: 2 } },
        r ? { [`&${r}`]: { zIndex: 2 } } : {},
      ),
      { [`&[disabled] ${i}`]: { zIndex: 0 } },
    ),
  }
}
function rR(e, t, n) {
  const { borderElCls: r } = n,
    a = r ? `> ${r}` : ''
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  }
}
function em(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 }
  const { componentCls: n } = e,
    r = `${n}-compact`
  return { [r]: Object.assign(Object.assign({}, nR(e, r, t)), rR(n, r, t)) }
}
function aR(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal(),
    },
    '&-item': {
      '&:hover,&:focus,&:active': { zIndex: 2 },
      '&[disabled]': { zIndex: 0 },
    },
  }
}
function oR(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  }
}
function iR(e) {
  const t = `${e.componentCls}-compact-vertical`
  return {
    [t]: Object.assign(Object.assign({}, aR(e, t)), oR(e.componentCls, t)),
  }
}
const lR = (e) => {
    const { componentCls: t, calc: n } = e
    return {
      [t]: {
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:
            {
              position: 'relative',
              '&:before': {
                position: 'absolute',
                top: n(e.lineWidth).mul(-1).equal(),
                insetInlineStart: n(e.lineWidth).mul(-1).equal(),
                display: 'inline-block',
                width: e.lineWidth,
                height: `calc(100% + ${ee(e.lineWidth)} * 2)`,
                backgroundColor: e.colorPrimaryHover,
                content: '""',
              },
            },
        },
        '&-compact-vertical-item': {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:
              {
                position: 'relative',
                '&:before': {
                  position: 'absolute',
                  top: n(e.lineWidth).mul(-1).equal(),
                  insetInlineStart: n(e.lineWidth).mul(-1).equal(),
                  display: 'inline-block',
                  width: `calc(100% + ${ee(e.lineWidth)} * 2)`,
                  height: e.lineWidth,
                  backgroundColor: e.colorPrimaryHover,
                  content: '""',
                },
              },
          },
        },
      },
    }
  },
  sR = sP(
    ['Button', 'compact'],
    (e) => {
      const t = ZS(e)
      return [em(t), iR(t), lR(t)]
    },
    eb,
  )
var uR = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]])
  return n
}
function cR(e) {
  if (typeof e == 'object' && e) {
    let t = e == null ? void 0 : e.delay
    return (
      (t = !Number.isNaN(t) && typeof t == 'number' ? t : 0),
      { loading: t <= 0, delay: t }
    )
  }
  return { loading: !!e, delay: 0 }
}
const dR = Oe.forwardRef((e, t) => {
    var n, r, a
    const {
        loading: o = !1,
        prefixCls: i,
        type: l,
        danger: s = !1,
        shape: u = 'default',
        size: c,
        styles: d,
        disabled: f,
        className: y,
        rootClassName: v,
        children: p,
        icon: b,
        iconPosition: m = 'start',
        ghost: h = !1,
        block: S = !1,
        htmlType: C = 'button',
        classNames: w,
        style: E = {},
        autoInsertSpace: x,
      } = e,
      R = uR(e, [
        'loading',
        'prefixCls',
        'type',
        'danger',
        'shape',
        'size',
        'styles',
        'disabled',
        'className',
        'rootClassName',
        'children',
        'icon',
        'iconPosition',
        'ghost',
        'block',
        'htmlType',
        'classNames',
        'style',
        'autoInsertSpace',
      ]),
      F = l || 'default',
      { getPrefixCls: _, direction: T, button: j } = g.useContext(yn),
      A =
        (n = x ?? (j == null ? void 0 : j.autoInsertSpace)) !== null &&
        n !== void 0
          ? n
          : !0,
      I = _('btn', i),
      [N, P, k] = tR(I),
      $ = g.useContext(oo),
      M = f ?? $,
      O = g.useContext(XS),
      D = g.useMemo(() => cR(o), [o]),
      [L, W] = g.useState(D.loading),
      [B, U] = g.useState(!1),
      Y = gi(t, g.createRef()),
      q = g.Children.count(p) === 1 && !b && !jd(F)
    g.useEffect(() => {
      let Z = null
      D.delay > 0
        ? (Z = setTimeout(() => {
            ;(Z = null), W(!0)
          }, D.delay))
        : W(D.loading)
      function Se() {
        Z && (clearTimeout(Z), (Z = null))
      }
      return Se
    }, [D]),
      g.useEffect(() => {
        if (!Y || !Y.current || !A) return
        const Z = Y.current.textContent
        q && yg(Z) ? B || U(!0) : B && U(!1)
      }, [Y])
    const X = (Z) => {
        const { onClick: Se } = e
        if (L || M) {
          Z.preventDefault()
          return
        }
        Se == null || Se(Z)
      },
      { compactSize: Q, compactItemClassnames: J } = Xh(I, T),
      ne = { large: 'lg', small: 'sm', middle: void 0 },
      te = Mc((Z) => {
        var Se, ie
        return (ie = (Se = c ?? Q) !== null && Se !== void 0 ? Se : O) !==
          null && ie !== void 0
          ? ie
          : Z
      }),
      ae = (te && ne[te]) || '',
      ye = L ? 'loading' : b,
      oe = Dh(R, ['navigate']),
      he = ke(
        I,
        P,
        k,
        {
          [`${I}-${u}`]: u !== 'default' && u,
          [`${I}-${F}`]: F,
          [`${I}-${ae}`]: ae,
          [`${I}-icon-only`]: !p && p !== 0 && !!ye,
          [`${I}-background-ghost`]: h && !jd(F),
          [`${I}-loading`]: L,
          [`${I}-two-chinese-chars`]: B && A && !L,
          [`${I}-block`]: S,
          [`${I}-dangerous`]: s,
          [`${I}-rtl`]: T === 'rtl',
          [`${I}-icon-end`]: m === 'end',
        },
        J,
        y,
        v,
        j == null ? void 0 : j.className,
      ),
      ge = Object.assign(Object.assign({}, j == null ? void 0 : j.style), E),
      ce = ke(
        w == null ? void 0 : w.icon,
        (r = j == null ? void 0 : j.classNames) === null || r === void 0
          ? void 0
          : r.icon,
      ),
      Ce = Object.assign(
        Object.assign({}, (d == null ? void 0 : d.icon) || {}),
        ((a = j == null ? void 0 : j.styles) === null || a === void 0
          ? void 0
          : a.icon) || {},
      ),
      we =
        b && !L
          ? Oe.createElement(JS, { prefixCls: I, className: ce, style: Ce }, b)
          : Oe.createElement(zk, { existIcon: !!b, prefixCls: I, loading: L }),
      Ne = p || p === 0 ? jk(p, q && A) : null
    if (oe.href !== void 0)
      return N(
        Oe.createElement(
          'a',
          Object.assign({}, oe, {
            className: ke(he, { [`${I}-disabled`]: M }),
            href: M ? void 0 : oe.href,
            style: ge,
            onClick: X,
            ref: Y,
            tabIndex: M ? -1 : 0,
          }),
          we,
          Ne,
        ),
      )
    let Le = Oe.createElement(
      'button',
      Object.assign({}, R, {
        type: C,
        className: he,
        style: ge,
        onClick: X,
        disabled: M,
        ref: Y,
      }),
      we,
      Ne,
      !!J && Oe.createElement(sR, { key: 'compact', prefixCls: I }),
    )
    return (
      jd(F) ||
        (Le = Oe.createElement(KS, { component: 'Button', disabled: L }, Le)),
      N(Le)
    )
  }),
  tm = dR
tm.Group = Lk
tm.__ANT_BUTTON = !0
var rb = g.createContext(null),
  mp = []
function fR(e, t) {
  var n = g.useState(function () {
      if (!Nn()) return null
      var v = document.createElement('div')
      return v
    }),
    r = V(n, 1),
    a = r[0],
    o = g.useRef(!1),
    i = g.useContext(rb),
    l = g.useState(mp),
    s = V(l, 2),
    u = s[0],
    c = s[1],
    d =
      i ||
      (o.current
        ? void 0
        : function (v) {
            c(function (p) {
              var b = [v].concat(de(p))
              return b
            })
          })
  function f() {
    a.parentElement || document.body.appendChild(a), (o.current = !0)
  }
  function y() {
    var v
    ;(v = a.parentElement) === null || v === void 0 || v.removeChild(a),
      (o.current = !1)
  }
  return (
    ft(
      function () {
        return e ? (i ? i(f) : f()) : y(), y
      },
      [e],
    ),
    ft(
      function () {
        u.length &&
          (u.forEach(function (v) {
            return v()
          }),
          c(mp))
      },
      [u],
    ),
    [a, d]
  )
}
function gR(e) {
  var t = 'rc-scrollbar-measure-'.concat(
      Math.random().toString(36).substring(7),
    ),
    n = document.createElement('div')
  n.id = t
  var r = n.style
  ;(r.position = 'absolute'),
    (r.left = '0'),
    (r.top = '0'),
    (r.width = '100px'),
    (r.height = '100px'),
    (r.overflow = 'scroll')
  var a, o
  if (e) {
    var i = getComputedStyle(e)
    ;(r.scrollbarColor = i.scrollbarColor),
      (r.scrollbarWidth = i.scrollbarWidth)
    var l = getComputedStyle(e, '::-webkit-scrollbar'),
      s = parseInt(l.width, 10),
      u = parseInt(l.height, 10)
    try {
      var c = s ? 'width: '.concat(l.width, ';') : '',
        d = u ? 'height: '.concat(l.height, ';') : ''
      Vr(
        `
#`
          .concat(
            t,
            `::-webkit-scrollbar {
`,
          )
          .concat(
            c,
            `
`,
          )
          .concat(
            d,
            `
}`,
          ),
        t,
      )
    } catch (v) {
      console.error(v), (a = s), (o = u)
    }
  }
  document.body.appendChild(n)
  var f = e && a && !isNaN(a) ? a : n.offsetWidth - n.clientWidth,
    y = e && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight
  return document.body.removeChild(n), kl(t), { width: f, height: y }
}
function hR(e) {
  return typeof document > 'u' || !e || !(e instanceof Element)
    ? { width: 0, height: 0 }
    : gR(e)
}
function mR() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  )
}
var vR = 'rc-util-locker-'.concat(Date.now()),
  vp = 0
function pR(e) {
  var t = !!e,
    n = g.useState(function () {
      return (vp += 1), ''.concat(vR, '_').concat(vp)
    }),
    r = V(n, 1),
    a = r[0]
  ft(
    function () {
      if (t) {
        var o = hR(document.body).width,
          i = mR()
        Vr(
          `
html body {
  overflow-y: hidden;
  `.concat(
            i ? 'width: calc(100% - '.concat(o, 'px);') : '',
            `
}`,
          ),
          a,
        )
      } else kl(a)
      return function () {
        kl(a)
      }
    },
    [t, a],
  )
}
var yR = !1
function SR(e) {
  return yR
}
var pp = function (t) {
    return t === !1
      ? !1
      : !Nn() || !t
        ? null
        : typeof t == 'string'
          ? document.querySelector(t)
          : typeof t == 'function'
            ? t()
            : t
  },
  ab = g.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      a = e.getContainer
    e.debug
    var o = e.autoDestroy,
      i = o === void 0 ? !0 : o,
      l = e.children,
      s = g.useState(n),
      u = V(s, 2),
      c = u[0],
      d = u[1],
      f = c || n
    g.useEffect(
      function () {
        ;(i || n) && d(n)
      },
      [n, i],
    )
    var y = g.useState(function () {
        return pp(a)
      }),
      v = V(y, 2),
      p = v[0],
      b = v[1]
    g.useEffect(function () {
      var T = pp(a)
      b(T ?? null)
    })
    var m = fR(f && !p),
      h = V(m, 2),
      S = h[0],
      C = h[1],
      w = p ?? S
    pR(r && n && Nn() && (w === S || w === document.body))
    var E = null
    if (l && zl(l) && t) {
      var x = l
      E = x.ref
    }
    var R = Nh(E, t)
    if (!f || !Nn() || p === void 0) return null
    var F = w === !1 || SR(),
      _ = l
    return (
      t && (_ = g.cloneElement(l, { ref: R })),
      g.createElement(rb.Provider, { value: C }, F ? _ : jl.createPortal(_, w))
    )
  })
function bR() {
  var e = H({}, qu)
  return e.useId
}
var yp = 0,
  Sp = bR()
const CR = Sp
  ? function (t) {
      var n = Sp()
      return t || n
    }
  : function (t) {
      var n = g.useState('ssr-id'),
        r = V(n, 2),
        a = r[0],
        o = r[1]
      return (
        g.useEffect(function () {
          var i = yp
          ;(yp += 1), o('rc_unique_'.concat(i))
        }, []),
        t || a
      )
    }
var qa = 'RC_FORM_INTERNAL_HOOKS',
  ot = function () {
    pn(
      !1,
      'Can not find FormContext. Please make sure you wrap Field under Form.',
    )
  },
  ui = g.createContext({
    getFieldValue: ot,
    getFieldsValue: ot,
    getFieldError: ot,
    getFieldWarning: ot,
    getFieldsError: ot,
    isFieldsTouched: ot,
    isFieldTouched: ot,
    isFieldValidating: ot,
    isFieldsValidating: ot,
    resetFields: ot,
    setFields: ot,
    setFieldValue: ot,
    setFieldsValue: ot,
    validateFields: ot,
    submit: ot,
    getInternalHooks: function () {
      return (
        ot(),
        {
          dispatch: ot,
          initEntityValue: ot,
          registerField: ot,
          useSubscribe: ot,
          setInitialValues: ot,
          destroyForm: ot,
          setCallbacks: ot,
          registerWatch: ot,
          getFields: ot,
          setValidateMessages: ot,
          setPreserve: ot,
          getInitialValue: ot,
        }
      )
    },
  }),
  Au = g.createContext(null)
function Sg(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function wR(e) {
  return e && !!e._init
}
function bg() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var t = JSON.parse(JSON.stringify(this))
      return (t.clone = this.clone), t
    },
  }
}
var Cg = bg()
function xR(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  } catch {
    return typeof e == 'function'
  }
}
function ER(e, t, n) {
  if (bc()) return Reflect.construct.apply(null, arguments)
  var r = [null]
  r.push.apply(r, t)
  var a = new (e.bind.apply(e, r))()
  return n && $l(a, n.prototype), a
}
function wg(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (wg = function (r) {
      if (r === null || !xR(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        )
      if (t !== void 0) {
        if (t.has(r)) return t.get(r)
        t.set(r, a)
      }
      function a() {
        return ER(r, arguments, ro(this).constructor)
      }
      return (
        (a.prototype = Object.create(r.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        $l(a, r)
      )
    }),
    wg(e)
  )
}
var $R = /%[sdj%]/g,
  PR = function () {}
function xg(e) {
  if (!e || !e.length) return null
  var t = {}
  return (
    e.forEach(function (n) {
      var r = n.field
      ;(t[r] = t[r] || []), t[r].push(n)
    }),
    t
  )
}
function In(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r]
  var a = 0,
    o = n.length
  if (typeof e == 'function') return e.apply(null, n)
  if (typeof e == 'string') {
    var i = e.replace($R, function (l) {
      if (l === '%%') return '%'
      if (a >= o) return l
      switch (l) {
        case '%s':
          return String(n[a++])
        case '%d':
          return Number(n[a++])
        case '%j':
          try {
            return JSON.stringify(n[a++])
          } catch {
            return '[Circular]'
          }
          break
        default:
          return l
      }
    })
    return i
  }
  return e
}
function kR(e) {
  return (
    e === 'string' ||
    e === 'url' ||
    e === 'hex' ||
    e === 'email' ||
    e === 'date' ||
    e === 'pattern'
  )
}
function Nt(e, t) {
  return !!(
    e == null ||
    (t === 'array' && Array.isArray(e) && !e.length) ||
    (kR(t) && typeof e == 'string' && !e)
  )
}
function RR(e, t, n) {
  var r = [],
    a = 0,
    o = e.length
  function i(l) {
    r.push.apply(r, de(l || [])), a++, a === o && n(r)
  }
  e.forEach(function (l) {
    t(l, i)
  })
}
function bp(e, t, n) {
  var r = 0,
    a = e.length
  function o(i) {
    if (i && i.length) {
      n(i)
      return
    }
    var l = r
    ;(r = r + 1), l < a ? t(e[l], o) : n([])
  }
  o([])
}
function MR(e) {
  var t = []
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, de(e[n] || []))
    }),
    t
  )
}
var Cp = (function (e) {
  co(n, e)
  var t = Hl(n)
  function n(r, a) {
    var o
    return (
      Yt(this, n),
      (o = t.call(this, 'Async Validation Error')),
      z(Ue(o), 'errors', void 0),
      z(Ue(o), 'fields', void 0),
      (o.errors = r),
      (o.fields = a),
      o
    )
  }
  return qt(n)
})(wg(Error))
function OR(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function (f, y) {
      var v = function (m) {
          return r(m), m.length ? y(new Cp(m, xg(m))) : f(a)
        },
        p = MR(e)
      bp(p, n, v)
    })
    return (
      o.catch(function (f) {
        return f
      }),
      o
    )
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    l = Object.keys(e),
    s = l.length,
    u = 0,
    c = [],
    d = new Promise(function (f, y) {
      var v = function (b) {
        if ((c.push.apply(c, b), u++, u === s))
          return r(c), c.length ? y(new Cp(c, xg(c))) : f(a)
      }
      l.length || (r(c), f(a)),
        l.forEach(function (p) {
          var b = e[p]
          i.indexOf(p) !== -1 ? bp(b, n, v) : RR(b, n, v)
        })
    })
  return (
    d.catch(function (f) {
      return f
    }),
    d
  )
}
function _R(e) {
  return !!(e && e.message !== void 0)
}
function IR(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n
    n = n[t[r]]
  }
  return n
}
function wp(e, t) {
  return function (n) {
    var r
    return (
      e.fullFields
        ? (r = IR(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      _R(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField,
          }
    )
  }
}
function xp(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n]
        _e(r) === 'object' && _e(e[n]) === 'object'
          ? (e[n] = H(H({}, e[n]), r))
          : (e[n] = r)
      }
  }
  return e
}
var bo = 'enum',
  TR = function (t, n, r, a, o) {
    ;(t[bo] = Array.isArray(t[bo]) ? t[bo] : []),
      t[bo].indexOf(n) === -1 &&
        a.push(In(o.messages[bo], t.fullField, t[bo].join(', ')))
  },
  FR = function (t, n, r, a, o) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            a.push(In(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      else if (typeof t.pattern == 'string') {
        var i = new RegExp(t.pattern)
        i.test(n) ||
          a.push(In(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      }
    }
  },
  NR = function (t, n, r, a, o) {
    var i = typeof t.len == 'number',
      l = typeof t.min == 'number',
      s = typeof t.max == 'number',
      u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      c = n,
      d = null,
      f = typeof n == 'number',
      y = typeof n == 'string',
      v = Array.isArray(n)
    if ((f ? (d = 'number') : y ? (d = 'string') : v && (d = 'array'), !d))
      return !1
    v && (c = n.length),
      y && (c = n.replace(u, '_').length),
      i
        ? c !== t.len && a.push(In(o.messages[d].len, t.fullField, t.len))
        : l && !s && c < t.min
          ? a.push(In(o.messages[d].min, t.fullField, t.min))
          : s && !l && c > t.max
            ? a.push(In(o.messages[d].max, t.fullField, t.max))
            : l &&
              s &&
              (c < t.min || c > t.max) &&
              a.push(In(o.messages[d].range, t.fullField, t.min, t.max))
  },
  ob = function (t, n, r, a, o, i) {
    t.required &&
      (!r.hasOwnProperty(t.field) || Nt(n, i || t.type)) &&
      a.push(In(o.messages.required, t.fullField))
  },
  _s
const DR = function () {
  if (_s) return _s
  var e = '[a-fA-F\\d:]',
    t = function (E) {
      return E && E.includeBoundaries
        ? '(?:(?<=\\s|^)(?='.concat(e, ')|(?<=').concat(e, ')(?=\\s|$))')
        : ''
    },
    n =
      '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
    r = '[a-fA-F\\d]{1,4}',
    a = [
      '(?:'.concat(r, ':){7}(?:').concat(r, '|:)'),
      '(?:'.concat(r, ':){6}(?:').concat(n, '|:').concat(r, '|:)'),
      '(?:'.concat(r, ':){5}(?::').concat(n, '|(?::').concat(r, '){1,2}|:)'),
      '(?:'
        .concat(r, ':){4}(?:(?::')
        .concat(r, '){0,1}:')
        .concat(n, '|(?::')
        .concat(r, '){1,3}|:)'),
      '(?:'
        .concat(r, ':){3}(?:(?::')
        .concat(r, '){0,2}:')
        .concat(n, '|(?::')
        .concat(r, '){1,4}|:)'),
      '(?:'
        .concat(r, ':){2}(?:(?::')
        .concat(r, '){0,3}:')
        .concat(n, '|(?::')
        .concat(r, '){1,5}|:)'),
      '(?:'
        .concat(r, ':){1}(?:(?::')
        .concat(r, '){0,4}:')
        .concat(n, '|(?::')
        .concat(r, '){1,6}|:)'),
      '(?::(?:(?::'
        .concat(r, '){0,5}:')
        .concat(n, '|(?::')
        .concat(r, '){1,7}|:))'),
    ],
    o = '(?:%[0-9a-zA-Z]{1,})?',
    i = '(?:'.concat(a.join('|'), ')').concat(o),
    l = new RegExp('(?:^'.concat(n, '$)|(?:^').concat(i, '$)')),
    s = new RegExp('^'.concat(n, '$')),
    u = new RegExp('^'.concat(i, '$')),
    c = function (E) {
      return E && E.exact
        ? l
        : new RegExp(
            '(?:'
              .concat(t(E))
              .concat(n)
              .concat(t(E), ')|(?:')
              .concat(t(E))
              .concat(i)
              .concat(t(E), ')'),
            'g',
          )
    }
  ;(c.v4 = function (w) {
    return w && w.exact
      ? s
      : new RegExp(''.concat(t(w)).concat(n).concat(t(w)), 'g')
  }),
    (c.v6 = function (w) {
      return w && w.exact
        ? u
        : new RegExp(''.concat(t(w)).concat(i).concat(t(w)), 'g')
    })
  var d = '(?:(?:[a-z]+:)?//)',
    f = '(?:\\S+(?::\\S*)?@)?',
    y = c.v4().source,
    v = c.v6().source,
    p = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
    b = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
    m = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
    h = '(?::\\d{2,5})?',
    S = '(?:[/?#][^\\s"]*)?',
    C = '(?:'
      .concat(d, '|www\\.)')
      .concat(f, '(?:localhost|')
      .concat(y, '|')
      .concat(v, '|')
      .concat(p)
      .concat(b)
      .concat(m, ')')
      .concat(h)
      .concat(S)
  return (_s = new RegExp('(?:^'.concat(C, '$)'), 'i')), _s
}
var Ep = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  Vi = {
    integer: function (t) {
      return Vi.number(t) && parseInt(t, 10) === t
    },
    float: function (t) {
      return Vi.number(t) && !Vi.integer(t)
    },
    array: function (t) {
      return Array.isArray(t)
    },
    regexp: function (t) {
      if (t instanceof RegExp) return !0
      try {
        return !!new RegExp(t)
      } catch {
        return !1
      }
    },
    date: function (t) {
      return (
        typeof t.getTime == 'function' &&
        typeof t.getMonth == 'function' &&
        typeof t.getYear == 'function' &&
        !isNaN(t.getTime())
      )
    },
    number: function (t) {
      return isNaN(t) ? !1 : typeof t == 'number'
    },
    object: function (t) {
      return _e(t) === 'object' && !Vi.array(t)
    },
    method: function (t) {
      return typeof t == 'function'
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(Ep.email)
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(DR())
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(Ep.hex)
    },
  },
  LR = function (t, n, r, a, o) {
    if (t.required && n === void 0) {
      ob(t, n, r, a, o)
      return
    }
    var i = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex',
      ],
      l = t.type
    i.indexOf(l) > -1
      ? Vi[l](n) || a.push(In(o.messages.types[l], t.fullField, t.type))
      : l &&
        _e(n) !== t.type &&
        a.push(In(o.messages.types[l], t.fullField, t.type))
  },
  AR = function (t, n, r, a, o) {
    ;(/^\s+$/.test(n) || n === '') &&
      a.push(In(o.messages.whitespace, t.fullField))
  }
const Be = {
  required: ob,
  whitespace: AR,
  type: LR,
  range: NR,
  enum: TR,
  pattern: FR,
}
var jR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n) && !t.required) return r()
      Be.required(t, n, a, i, o)
    }
    r(i)
  },
  zR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (n == null && !t.required) return r()
      Be.required(t, n, a, i, o, 'array'),
        n != null && (Be.type(t, n, a, i, o), Be.range(t, n, a, i, o))
    }
    r(i)
  },
  HR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n) && !t.required) return r()
      Be.required(t, n, a, i, o), n !== void 0 && Be.type(t, n, a, i, o)
    }
    r(i)
  },
  VR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n, 'date') && !t.required) return r()
      if ((Be.required(t, n, a, i, o), !Nt(n, 'date'))) {
        var s
        n instanceof Date ? (s = n) : (s = new Date(n)),
          Be.type(t, s, a, i, o),
          s && Be.range(t, s.getTime(), a, i, o)
      }
    }
    r(i)
  },
  BR = 'enum',
  WR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n) && !t.required) return r()
      Be.required(t, n, a, i, o), n !== void 0 && Be[BR](t, n, a, i, o)
    }
    r(i)
  },
  UR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n) && !t.required) return r()
      Be.required(t, n, a, i, o),
        n !== void 0 && (Be.type(t, n, a, i, o), Be.range(t, n, a, i, o))
    }
    r(i)
  },
  YR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n) && !t.required) return r()
      Be.required(t, n, a, i, o),
        n !== void 0 && (Be.type(t, n, a, i, o), Be.range(t, n, a, i, o))
    }
    r(i)
  },
  qR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n) && !t.required) return r()
      Be.required(t, n, a, i, o), n !== void 0 && Be.type(t, n, a, i, o)
    }
    r(i)
  },
  KR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if ((n === '' && (n = void 0), Nt(n) && !t.required)) return r()
      Be.required(t, n, a, i, o),
        n !== void 0 && (Be.type(t, n, a, i, o), Be.range(t, n, a, i, o))
    }
    r(i)
  },
  GR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n) && !t.required) return r()
      Be.required(t, n, a, i, o), n !== void 0 && Be.type(t, n, a, i, o)
    }
    r(i)
  },
  QR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n, 'string') && !t.required) return r()
      Be.required(t, n, a, i, o), Nt(n, 'string') || Be.pattern(t, n, a, i, o)
    }
    r(i)
  },
  XR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n) && !t.required) return r()
      Be.required(t, n, a, i, o), Nt(n) || Be.type(t, n, a, i, o)
    }
    r(i)
  },
  JR = function (t, n, r, a, o) {
    var i = [],
      l = Array.isArray(n) ? 'array' : _e(n)
    Be.required(t, n, a, i, o, l), r(i)
  },
  ZR = function (t, n, r, a, o) {
    var i = [],
      l = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (l) {
      if (Nt(n, 'string') && !t.required) return r()
      Be.required(t, n, a, i, o, 'string'),
        Nt(n, 'string') ||
          (Be.type(t, n, a, i, o),
          Be.range(t, n, a, i, o),
          Be.pattern(t, n, a, i, o),
          t.whitespace === !0 && Be.whitespace(t, n, a, i, o))
    }
    r(i)
  },
  Vd = function (t, n, r, a, o) {
    var i = t.type,
      l = [],
      s = t.required || (!t.required && a.hasOwnProperty(t.field))
    if (s) {
      if (Nt(n, i) && !t.required) return r()
      Be.required(t, n, a, l, o, i), Nt(n, i) || Be.type(t, n, a, l, o)
    }
    r(l)
  }
const rl = {
  string: ZR,
  method: qR,
  number: KR,
  boolean: HR,
  regexp: XR,
  integer: YR,
  float: UR,
  array: zR,
  object: GR,
  enum: WR,
  pattern: QR,
  date: VR,
  url: Vd,
  hex: Vd,
  email: Vd,
  required: JR,
  any: jR,
}
var Wl = (function () {
  function e(t) {
    Yt(this, e),
      z(this, 'rules', null),
      z(this, '_messages', Cg),
      this.define(t)
  }
  return (
    qt(e, [
      {
        key: 'define',
        value: function (n) {
          var r = this
          if (!n) throw new Error('Cannot configure a schema with no rules')
          if (_e(n) !== 'object' || Array.isArray(n))
            throw new Error('Rules must be an object')
          ;(this.rules = {}),
            Object.keys(n).forEach(function (a) {
              var o = n[a]
              r.rules[a] = Array.isArray(o) ? o : [o]
            })
        },
      },
      {
        key: 'messages',
        value: function (n) {
          return n && (this._messages = xp(bg(), n)), this._messages
        },
      },
      {
        key: 'validate',
        value: function (n) {
          var r = this,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : function () {},
            i = n,
            l = a,
            s = o
          if (
            (typeof l == 'function' && ((s = l), (l = {})),
            !this.rules || Object.keys(this.rules).length === 0)
          )
            return s && s(null, i), Promise.resolve(i)
          function u(v) {
            var p = [],
              b = {}
            function m(S) {
              if (Array.isArray(S)) {
                var C
                p = (C = p).concat.apply(C, de(S))
              } else p.push(S)
            }
            for (var h = 0; h < v.length; h++) m(v[h])
            p.length ? ((b = xg(p)), s(p, b)) : s(null, i)
          }
          if (l.messages) {
            var c = this.messages()
            c === Cg && (c = bg()), xp(c, l.messages), (l.messages = c)
          } else l.messages = this.messages()
          var d = {},
            f = l.keys || Object.keys(this.rules)
          f.forEach(function (v) {
            var p = r.rules[v],
              b = i[v]
            p.forEach(function (m) {
              var h = m
              typeof h.transform == 'function' &&
                (i === n && (i = H({}, i)),
                (b = i[v] = h.transform(b)),
                b != null &&
                  (h.type = h.type || (Array.isArray(b) ? 'array' : _e(b)))),
                typeof h == 'function'
                  ? (h = { validator: h })
                  : (h = H({}, h)),
                (h.validator = r.getValidationMethod(h)),
                h.validator &&
                  ((h.field = v),
                  (h.fullField = h.fullField || v),
                  (h.type = r.getType(h)),
                  (d[v] = d[v] || []),
                  d[v].push({ rule: h, value: b, source: i, field: v }))
            })
          })
          var y = {}
          return OR(
            d,
            l,
            function (v, p) {
              var b = v.rule,
                m =
                  (b.type === 'object' || b.type === 'array') &&
                  (_e(b.fields) === 'object' || _e(b.defaultField) === 'object')
              ;(m = m && (b.required || (!b.required && v.value))),
                (b.field = v.field)
              function h(x, R) {
                return H(
                  H({}, R),
                  {},
                  {
                    fullField: ''.concat(b.fullField, '.').concat(x),
                    fullFields: b.fullFields
                      ? [].concat(de(b.fullFields), [x])
                      : [x],
                  },
                )
              }
              function S() {
                var x =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : [],
                  R = Array.isArray(x) ? x : [x]
                !l.suppressWarning &&
                  R.length &&
                  e.warning('async-validator:', R),
                  R.length && b.message !== void 0 && (R = [].concat(b.message))
                var F = R.map(wp(b, i))
                if (l.first && F.length) return (y[b.field] = 1), p(F)
                if (!m) p(F)
                else {
                  if (b.required && !v.value)
                    return (
                      b.message !== void 0
                        ? (F = [].concat(b.message).map(wp(b, i)))
                        : l.error &&
                          (F = [l.error(b, In(l.messages.required, b.field))]),
                      p(F)
                    )
                  var _ = {}
                  b.defaultField &&
                    Object.keys(v.value).map(function (A) {
                      _[A] = b.defaultField
                    }),
                    (_ = H(H({}, _), v.rule.fields))
                  var T = {}
                  Object.keys(_).forEach(function (A) {
                    var I = _[A],
                      N = Array.isArray(I) ? I : [I]
                    T[A] = N.map(h.bind(null, A))
                  })
                  var j = new e(T)
                  j.messages(l.messages),
                    v.rule.options &&
                      ((v.rule.options.messages = l.messages),
                      (v.rule.options.error = l.error)),
                    j.validate(v.value, v.rule.options || l, function (A) {
                      var I = []
                      F && F.length && I.push.apply(I, de(F)),
                        A && A.length && I.push.apply(I, de(A)),
                        p(I.length ? I : null)
                    })
                }
              }
              var C
              if (b.asyncValidator)
                C = b.asyncValidator(b, v.value, S, v.source, l)
              else if (b.validator) {
                try {
                  C = b.validator(b, v.value, S, v.source, l)
                } catch (x) {
                  var w, E
                  ;(w = (E = console).error) === null ||
                    w === void 0 ||
                    w.call(E, x),
                    l.suppressValidatorError ||
                      setTimeout(function () {
                        throw x
                      }, 0),
                    S(x.message)
                }
                C === !0
                  ? S()
                  : C === !1
                    ? S(
                        typeof b.message == 'function'
                          ? b.message(b.fullField || b.field)
                          : b.message ||
                              ''.concat(b.fullField || b.field, ' fails'),
                      )
                    : C instanceof Array
                      ? S(C)
                      : C instanceof Error && S(C.message)
              }
              C &&
                C.then &&
                C.then(
                  function () {
                    return S()
                  },
                  function (x) {
                    return S(x)
                  },
                )
            },
            function (v) {
              u(v)
            },
            i,
          )
        },
      },
      {
        key: 'getType',
        value: function (n) {
          if (
            (n.type === void 0 &&
              n.pattern instanceof RegExp &&
              (n.type = 'pattern'),
            typeof n.validator != 'function' &&
              n.type &&
              !rl.hasOwnProperty(n.type))
          )
            throw new Error(In('Unknown rule type %s', n.type))
          return n.type || 'string'
        },
      },
      {
        key: 'getValidationMethod',
        value: function (n) {
          if (typeof n.validator == 'function') return n.validator
          var r = Object.keys(n),
            a = r.indexOf('message')
          return (
            a !== -1 && r.splice(a, 1),
            r.length === 1 && r[0] === 'required'
              ? rl.required
              : rl[this.getType(n)] || void 0
          )
        },
      },
    ]),
    e
  )
})()
z(Wl, 'register', function (t, n) {
  if (typeof n != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function',
    )
  rl[t] = n
})
z(Wl, 'warning', PR)
z(Wl, 'messages', Cg)
z(Wl, 'validators', rl)
var $n = "'${name}' is not a valid ${type}",
  ib = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: $n,
      method: $n,
      array: $n,
      object: $n,
      number: $n,
      date: $n,
      boolean: $n,
      integer: $n,
      float: $n,
      regexp: $n,
      email: $n,
      url: $n,
      hex: $n,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
  },
  $p = Wl
function eM(e, t) {
  return e.replace(/\$\{\w+\}/g, function (n) {
    var r = n.slice(2, -1)
    return t[r]
  })
}
var Pp = 'CODE_LOGIC_ERROR'
function Eg(e, t, n, r, a) {
  return $g.apply(this, arguments)
}
function $g() {
  return (
    ($g = ho(
      an().mark(function e(t, n, r, a, o) {
        var i, l, s, u, c, d, f, y, v
        return an().wrap(
          function (b) {
            for (;;)
              switch ((b.prev = b.next)) {
                case 0:
                  return (
                    (i = H({}, r)),
                    delete i.ruleIndex,
                    ($p.warning = function () {}),
                    i.validator &&
                      ((l = i.validator),
                      (i.validator = function () {
                        try {
                          return l.apply(void 0, arguments)
                        } catch (m) {
                          return console.error(m), Promise.reject(Pp)
                        }
                      })),
                    (s = null),
                    i &&
                      i.type === 'array' &&
                      i.defaultField &&
                      ((s = i.defaultField), delete i.defaultField),
                    (u = new $p(z({}, t, [i]))),
                    (c = jo(ib, a.validateMessages)),
                    u.messages(c),
                    (d = []),
                    (b.prev = 10),
                    (b.next = 13),
                    Promise.resolve(u.validate(z({}, t, n), H({}, a)))
                  )
                case 13:
                  b.next = 18
                  break
                case 15:
                  ;(b.prev = 15),
                    (b.t0 = b.catch(10)),
                    b.t0.errors &&
                      (d = b.t0.errors.map(function (m, h) {
                        var S = m.message,
                          C = S === Pp ? c.default : S
                        return g.isValidElement(C)
                          ? g.cloneElement(C, { key: 'error_'.concat(h) })
                          : C
                      }))
                case 18:
                  if (!(!d.length && s)) {
                    b.next = 23
                    break
                  }
                  return (
                    (b.next = 21),
                    Promise.all(
                      n.map(function (m, h) {
                        return Eg(''.concat(t, '.').concat(h), m, s, a, o)
                      }),
                    )
                  )
                case 21:
                  return (
                    (f = b.sent),
                    b.abrupt(
                      'return',
                      f.reduce(function (m, h) {
                        return [].concat(de(m), de(h))
                      }, []),
                    )
                  )
                case 23:
                  return (
                    (y = H(
                      H({}, r),
                      {},
                      { name: t, enum: (r.enum || []).join(', ') },
                      o,
                    )),
                    (v = d.map(function (m) {
                      return typeof m == 'string' ? eM(m, y) : m
                    })),
                    b.abrupt('return', v)
                  )
                case 26:
                case 'end':
                  return b.stop()
              }
          },
          e,
          null,
          [[10, 15]],
        )
      }),
    )),
    $g.apply(this, arguments)
  )
}
function tM(e, t, n, r, a, o) {
  var i = e.join('.'),
    l = n
      .map(function (c, d) {
        var f = c.validator,
          y = H(H({}, c), {}, { ruleIndex: d })
        return (
          f &&
            (y.validator = function (v, p, b) {
              var m = !1,
                h = function () {
                  for (
                    var w = arguments.length, E = new Array(w), x = 0;
                    x < w;
                    x++
                  )
                    E[x] = arguments[x]
                  Promise.resolve().then(function () {
                    pn(
                      !m,
                      'Your validator function has already return a promise. `callback` will be ignored.',
                    ),
                      m || b.apply(void 0, E)
                  })
                },
                S = f(v, p, h)
              ;(m =
                S &&
                typeof S.then == 'function' &&
                typeof S.catch == 'function'),
                pn(
                  m,
                  '`callback` is deprecated. Please return a promise instead.',
                ),
                m &&
                  S.then(function () {
                    b()
                  }).catch(function (C) {
                    b(C || ' ')
                  })
            }),
          y
        )
      })
      .sort(function (c, d) {
        var f = c.warningOnly,
          y = c.ruleIndex,
          v = d.warningOnly,
          p = d.ruleIndex
        return !!f == !!v ? y - p : f ? 1 : -1
      }),
    s
  if (a === !0)
    s = new Promise(
      (function () {
        var c = ho(
          an().mark(function d(f, y) {
            var v, p, b
            return an().wrap(function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    v = 0
                  case 1:
                    if (!(v < l.length)) {
                      h.next = 12
                      break
                    }
                    return (p = l[v]), (h.next = 5), Eg(i, t, p, r, o)
                  case 5:
                    if (((b = h.sent), !b.length)) {
                      h.next = 9
                      break
                    }
                    return y([{ errors: b, rule: p }]), h.abrupt('return')
                  case 9:
                    ;(v += 1), (h.next = 1)
                    break
                  case 12:
                    f([])
                  case 13:
                  case 'end':
                    return h.stop()
                }
            }, d)
          }),
        )
        return function (d, f) {
          return c.apply(this, arguments)
        }
      })(),
    )
  else {
    var u = l.map(function (c) {
      return Eg(i, t, c, r, o).then(function (d) {
        return { errors: d, rule: c }
      })
    })
    s = (a ? rM(u) : nM(u)).then(function (c) {
      return Promise.reject(c)
    })
  }
  return (
    s.catch(function (c) {
      return c
    }),
    s
  )
}
function nM(e) {
  return Pg.apply(this, arguments)
}
function Pg() {
  return (
    (Pg = ho(
      an().mark(function e(t) {
        return an().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.all(t).then(function (a) {
                    var o,
                      i = (o = []).concat.apply(o, de(a))
                    return i
                  }),
                )
              case 1:
              case 'end':
                return r.stop()
            }
        }, e)
      }),
    )),
    Pg.apply(this, arguments)
  )
}
function rM(e) {
  return kg.apply(this, arguments)
}
function kg() {
  return (
    (kg = ho(
      an().mark(function e(t) {
        var n
        return an().wrap(function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (
                  (n = 0),
                  a.abrupt(
                    'return',
                    new Promise(function (o) {
                      t.forEach(function (i) {
                        i.then(function (l) {
                          l.errors.length && o([l]),
                            (n += 1),
                            n === t.length && o([])
                        })
                      })
                    }),
                  )
                )
              case 2:
              case 'end':
                return a.stop()
            }
        }, e)
      }),
    )),
    kg.apply(this, arguments)
  )
}
function Ct(e) {
  return Sg(e)
}
function kp(e, t) {
  var n = {}
  return (
    t.forEach(function (r) {
      var a = xr(e, r)
      n = lr(n, r, a)
    }),
    n
  )
}
function Go(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return (
    e &&
    e.some(function (r) {
      return lb(t, r, n)
    })
  )
}
function lb(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return !e || !t || (!n && e.length !== t.length)
    ? !1
    : t.every(function (r, a) {
        return e[a] === r
      })
}
function aM(e, t) {
  if (e === t) return !0
  if (
    (!e && t) ||
    (e && !t) ||
    !e ||
    !t ||
    _e(e) !== 'object' ||
    _e(t) !== 'object'
  )
    return !1
  var n = Object.keys(e),
    r = Object.keys(t),
    a = new Set([].concat(n, r))
  return de(a).every(function (o) {
    var i = e[o],
      l = t[o]
    return typeof i == 'function' && typeof l == 'function' ? !0 : i === l
  })
}
function oM(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1]
  return t && t.target && _e(t.target) === 'object' && e in t.target
    ? t.target[e]
    : t
}
function Rp(e, t, n) {
  var r = e.length
  if (t < 0 || t >= r || n < 0 || n >= r) return e
  var a = e[t],
    o = t - n
  return o > 0
    ? [].concat(
        de(e.slice(0, n)),
        [a],
        de(e.slice(n, t)),
        de(e.slice(t + 1, r)),
      )
    : o < 0
      ? [].concat(
          de(e.slice(0, t)),
          de(e.slice(t + 1, n + 1)),
          [a],
          de(e.slice(n + 1, r)),
        )
      : e
}
var iM = ['name'],
  Wn = []
function Mp(e, t, n, r, a, o) {
  return typeof e == 'function'
    ? e(t, n, 'source' in o ? { source: o.source } : {})
    : r !== a
}
var nm = (function (e) {
  co(n, e)
  var t = Hl(n)
  function n(r) {
    var a
    if (
      (Yt(this, n),
      (a = t.call(this, r)),
      z(Ue(a), 'state', { resetCount: 0 }),
      z(Ue(a), 'cancelRegisterFunc', null),
      z(Ue(a), 'mounted', !1),
      z(Ue(a), 'touched', !1),
      z(Ue(a), 'dirty', !1),
      z(Ue(a), 'validatePromise', void 0),
      z(Ue(a), 'prevValidating', void 0),
      z(Ue(a), 'errors', Wn),
      z(Ue(a), 'warnings', Wn),
      z(Ue(a), 'cancelRegister', function () {
        var s = a.props,
          u = s.preserve,
          c = s.isListField,
          d = s.name
        a.cancelRegisterFunc && a.cancelRegisterFunc(c, u, Ct(d)),
          (a.cancelRegisterFunc = null)
      }),
      z(Ue(a), 'getNamePath', function () {
        var s = a.props,
          u = s.name,
          c = s.fieldContext,
          d = c.prefixName,
          f = d === void 0 ? [] : d
        return u !== void 0 ? [].concat(de(f), de(u)) : []
      }),
      z(Ue(a), 'getRules', function () {
        var s = a.props,
          u = s.rules,
          c = u === void 0 ? [] : u,
          d = s.fieldContext
        return c.map(function (f) {
          return typeof f == 'function' ? f(d) : f
        })
      }),
      z(Ue(a), 'refresh', function () {
        a.mounted &&
          a.setState(function (s) {
            var u = s.resetCount
            return { resetCount: u + 1 }
          })
      }),
      z(Ue(a), 'metaCache', null),
      z(Ue(a), 'triggerMetaEvent', function (s) {
        var u = a.props.onMetaChange
        if (u) {
          var c = H(H({}, a.getMeta()), {}, { destroy: s })
          Xf(a.metaCache, c) || u(c), (a.metaCache = c)
        } else a.metaCache = null
      }),
      z(Ue(a), 'onStoreChange', function (s, u, c) {
        var d = a.props,
          f = d.shouldUpdate,
          y = d.dependencies,
          v = y === void 0 ? [] : y,
          p = d.onReset,
          b = c.store,
          m = a.getNamePath(),
          h = a.getValue(s),
          S = a.getValue(b),
          C = u && Go(u, m)
        switch (
          (c.type === 'valueUpdate' &&
            c.source === 'external' &&
            !Xf(h, S) &&
            ((a.touched = !0),
            (a.dirty = !0),
            (a.validatePromise = null),
            (a.errors = Wn),
            (a.warnings = Wn),
            a.triggerMetaEvent()),
          c.type)
        ) {
          case 'reset':
            if (!u || C) {
              ;(a.touched = !1),
                (a.dirty = !1),
                (a.validatePromise = void 0),
                (a.errors = Wn),
                (a.warnings = Wn),
                a.triggerMetaEvent(),
                p == null || p(),
                a.refresh()
              return
            }
            break
          case 'remove': {
            if (f) {
              a.reRender()
              return
            }
            break
          }
          case 'setField': {
            var w = c.data
            if (C) {
              'touched' in w && (a.touched = w.touched),
                'validating' in w &&
                  !('originRCField' in w) &&
                  (a.validatePromise = w.validating
                    ? Promise.resolve([])
                    : null),
                'errors' in w && (a.errors = w.errors || Wn),
                'warnings' in w && (a.warnings = w.warnings || Wn),
                (a.dirty = !0),
                a.triggerMetaEvent(),
                a.reRender()
              return
            } else if ('value' in w && Go(u, m, !0)) {
              a.reRender()
              return
            }
            if (f && !m.length && Mp(f, s, b, h, S, c)) {
              a.reRender()
              return
            }
            break
          }
          case 'dependenciesUpdate': {
            var E = v.map(Ct)
            if (
              E.some(function (x) {
                return Go(c.relatedFields, x)
              })
            ) {
              a.reRender()
              return
            }
            break
          }
          default:
            if (C || ((!v.length || m.length || f) && Mp(f, s, b, h, S, c))) {
              a.reRender()
              return
            }
            break
        }
        f === !0 && a.reRender()
      }),
      z(Ue(a), 'validateRules', function (s) {
        var u = a.getNamePath(),
          c = a.getValue(),
          d = s || {},
          f = d.triggerName,
          y = d.validateOnly,
          v = y === void 0 ? !1 : y,
          p = Promise.resolve().then(
            ho(
              an().mark(function b() {
                var m, h, S, C, w, E, x
                return an().wrap(function (F) {
                  for (;;)
                    switch ((F.prev = F.next)) {
                      case 0:
                        if (a.mounted) {
                          F.next = 2
                          break
                        }
                        return F.abrupt('return', [])
                      case 2:
                        if (
                          ((m = a.props),
                          (h = m.validateFirst),
                          (S = h === void 0 ? !1 : h),
                          (C = m.messageVariables),
                          (w = m.validateDebounce),
                          (E = a.getRules()),
                          f &&
                            (E = E.filter(function (_) {
                              return _
                            }).filter(function (_) {
                              var T = _.validateTrigger
                              if (!T) return !0
                              var j = Sg(T)
                              return j.includes(f)
                            })),
                          !(w && f))
                        ) {
                          F.next = 10
                          break
                        }
                        return (
                          (F.next = 8),
                          new Promise(function (_) {
                            setTimeout(_, w)
                          })
                        )
                      case 8:
                        if (a.validatePromise === p) {
                          F.next = 10
                          break
                        }
                        return F.abrupt('return', [])
                      case 10:
                        return (
                          (x = tM(u, c, E, s, S, C)),
                          x
                            .catch(function (_) {
                              return _
                            })
                            .then(function () {
                              var _ =
                                arguments.length > 0 && arguments[0] !== void 0
                                  ? arguments[0]
                                  : Wn
                              if (a.validatePromise === p) {
                                var T
                                a.validatePromise = null
                                var j = [],
                                  A = []
                                ;(T = _.forEach) === null ||
                                  T === void 0 ||
                                  T.call(_, function (I) {
                                    var N = I.rule.warningOnly,
                                      P = I.errors,
                                      k = P === void 0 ? Wn : P
                                    N
                                      ? A.push.apply(A, de(k))
                                      : j.push.apply(j, de(k))
                                  }),
                                  (a.errors = j),
                                  (a.warnings = A),
                                  a.triggerMetaEvent(),
                                  a.reRender()
                              }
                            }),
                          F.abrupt('return', x)
                        )
                      case 13:
                      case 'end':
                        return F.stop()
                    }
                }, b)
              }),
            ),
          )
        return (
          v ||
            ((a.validatePromise = p),
            (a.dirty = !0),
            (a.errors = Wn),
            (a.warnings = Wn),
            a.triggerMetaEvent(),
            a.reRender()),
          p
        )
      }),
      z(Ue(a), 'isFieldValidating', function () {
        return !!a.validatePromise
      }),
      z(Ue(a), 'isFieldTouched', function () {
        return a.touched
      }),
      z(Ue(a), 'isFieldDirty', function () {
        if (a.dirty || a.props.initialValue !== void 0) return !0
        var s = a.props.fieldContext,
          u = s.getInternalHooks(qa),
          c = u.getInitialValue
        return c(a.getNamePath()) !== void 0
      }),
      z(Ue(a), 'getErrors', function () {
        return a.errors
      }),
      z(Ue(a), 'getWarnings', function () {
        return a.warnings
      }),
      z(Ue(a), 'isListField', function () {
        return a.props.isListField
      }),
      z(Ue(a), 'isList', function () {
        return a.props.isList
      }),
      z(Ue(a), 'isPreserve', function () {
        return a.props.preserve
      }),
      z(Ue(a), 'getMeta', function () {
        a.prevValidating = a.isFieldValidating()
        var s = {
          touched: a.isFieldTouched(),
          validating: a.prevValidating,
          errors: a.errors,
          warnings: a.warnings,
          name: a.getNamePath(),
          validated: a.validatePromise === null,
        }
        return s
      }),
      z(Ue(a), 'getOnlyChild', function (s) {
        if (typeof s == 'function') {
          var u = a.getMeta()
          return H(
            H(
              {},
              a.getOnlyChild(s(a.getControlled(), u, a.props.fieldContext)),
            ),
            {},
            { isFunction: !0 },
          )
        }
        var c = Ou(s)
        return c.length !== 1 || !g.isValidElement(c[0])
          ? { child: c, isFunction: !1 }
          : { child: c[0], isFunction: !1 }
      }),
      z(Ue(a), 'getValue', function (s) {
        var u = a.props.fieldContext.getFieldsValue,
          c = a.getNamePath()
        return xr(s || u(!0), c)
      }),
      z(Ue(a), 'getControlled', function () {
        var s =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          u = a.props,
          c = u.name,
          d = u.trigger,
          f = u.validateTrigger,
          y = u.getValueFromEvent,
          v = u.normalize,
          p = u.valuePropName,
          b = u.getValueProps,
          m = u.fieldContext,
          h = f !== void 0 ? f : m.validateTrigger,
          S = a.getNamePath(),
          C = m.getInternalHooks,
          w = m.getFieldsValue,
          E = C(qa),
          x = E.dispatch,
          R = a.getValue(),
          F =
            b ||
            function (I) {
              return z({}, p, I)
            },
          _ = s[d],
          T = c !== void 0 ? F(R) : {},
          j = H(H({}, s), T)
        j[d] = function () {
          ;(a.touched = !0), (a.dirty = !0), a.triggerMetaEvent()
          for (var I, N = arguments.length, P = new Array(N), k = 0; k < N; k++)
            P[k] = arguments[k]
          y ? (I = y.apply(void 0, P)) : (I = oM.apply(void 0, [p].concat(P))),
            v && (I = v(I, R, w(!0))),
            x({ type: 'updateValue', namePath: S, value: I }),
            _ && _.apply(void 0, P)
        }
        var A = Sg(h || [])
        return (
          A.forEach(function (I) {
            var N = j[I]
            j[I] = function () {
              N && N.apply(void 0, arguments)
              var P = a.props.rules
              P &&
                P.length &&
                x({ type: 'validateField', namePath: S, triggerName: I })
            }
          }),
          j
        )
      }),
      r.fieldContext)
    ) {
      var o = r.fieldContext.getInternalHooks,
        i = o(qa),
        l = i.initEntityValue
      l(Ue(a))
    }
    return a
  }
  return (
    qt(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var a = this.props,
            o = a.shouldUpdate,
            i = a.fieldContext
          if (((this.mounted = !0), i)) {
            var l = i.getInternalHooks,
              s = l(qa),
              u = s.registerField
            this.cancelRegisterFunc = u(this)
          }
          o === !0 && this.reRender()
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1)
        },
      },
      {
        key: 'reRender',
        value: function () {
          this.mounted && this.forceUpdate()
        },
      },
      {
        key: 'render',
        value: function () {
          var a = this.state.resetCount,
            o = this.props.children,
            i = this.getOnlyChild(o),
            l = i.child,
            s = i.isFunction,
            u
          return (
            s
              ? (u = l)
              : g.isValidElement(l)
                ? (u = g.cloneElement(l, this.getControlled(l.props)))
                : (pn(!l, '`children` of Field is not validate ReactElement.'),
                  (u = l)),
            g.createElement(g.Fragment, { key: a }, u)
          )
        },
      },
    ]),
    n
  )
})(g.Component)
z(nm, 'contextType', ui)
z(nm, 'defaultProps', { trigger: 'onChange', valuePropName: 'value' })
function sb(e) {
  var t = e.name,
    n = xt(e, iM),
    r = g.useContext(ui),
    a = g.useContext(Au),
    o = t !== void 0 ? Ct(t) : void 0,
    i = 'keep'
  return (
    n.isListField || (i = '_'.concat((o || []).join('_'))),
    g.createElement(
      nm,
      ve({ key: i, name: o, isListField: !!a }, n, { fieldContext: r }),
    )
  )
}
function lM(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    a = e.rules,
    o = e.validateTrigger,
    i = e.isListField,
    l = g.useContext(ui),
    s = g.useContext(Au),
    u = g.useRef({ keys: [], id: 0 }),
    c = u.current,
    d = g.useMemo(
      function () {
        var p = Ct(l.prefixName) || []
        return [].concat(de(p), de(Ct(t)))
      },
      [l.prefixName, t],
    ),
    f = g.useMemo(
      function () {
        return H(H({}, l), {}, { prefixName: d })
      },
      [l, d],
    ),
    y = g.useMemo(
      function () {
        return {
          getKey: function (b) {
            var m = d.length,
              h = b[m]
            return [c.keys[h], b.slice(m + 1)]
          },
        }
      },
      [d],
    )
  if (typeof r != 'function')
    return pn(!1, 'Form.List only accepts function as children.'), null
  var v = function (b, m, h) {
    var S = h.source
    return S === 'internal' ? !1 : b !== m
  }
  return g.createElement(
    Au.Provider,
    { value: y },
    g.createElement(
      ui.Provider,
      { value: f },
      g.createElement(
        sb,
        {
          name: [],
          shouldUpdate: v,
          rules: a,
          validateTrigger: o,
          initialValue: n,
          isList: !0,
          isListField: i ?? !!s,
        },
        function (p, b) {
          var m = p.value,
            h = m === void 0 ? [] : m,
            S = p.onChange,
            C = l.getFieldValue,
            w = function () {
              var F = C(d || [])
              return F || []
            },
            E = {
              add: function (F, _) {
                var T = w()
                _ >= 0 && _ <= T.length
                  ? ((c.keys = [].concat(
                      de(c.keys.slice(0, _)),
                      [c.id],
                      de(c.keys.slice(_)),
                    )),
                    S([].concat(de(T.slice(0, _)), [F], de(T.slice(_)))))
                  : ((c.keys = [].concat(de(c.keys), [c.id])),
                    S([].concat(de(T), [F]))),
                  (c.id += 1)
              },
              remove: function (F) {
                var _ = w(),
                  T = new Set(Array.isArray(F) ? F : [F])
                T.size <= 0 ||
                  ((c.keys = c.keys.filter(function (j, A) {
                    return !T.has(A)
                  })),
                  S(
                    _.filter(function (j, A) {
                      return !T.has(A)
                    }),
                  ))
              },
              move: function (F, _) {
                if (F !== _) {
                  var T = w()
                  F < 0 ||
                    F >= T.length ||
                    _ < 0 ||
                    _ >= T.length ||
                    ((c.keys = Rp(c.keys, F, _)), S(Rp(T, F, _)))
                }
              },
            },
            x = h || []
          return (
            Array.isArray(x) || (x = []),
            r(
              x.map(function (R, F) {
                var _ = c.keys[F]
                return (
                  _ === void 0 &&
                    ((c.keys[F] = c.id), (_ = c.keys[F]), (c.id += 1)),
                  { name: F, key: _, isListField: !0 }
                )
              }),
              E,
              b,
            )
          )
        },
      ),
    ),
  )
}
function sM(e) {
  var t = !1,
    n = e.length,
    r = []
  return e.length
    ? new Promise(function (a, o) {
        e.forEach(function (i, l) {
          i.catch(function (s) {
            return (t = !0), s
          }).then(function (s) {
            ;(n -= 1), (r[l] = s), !(n > 0) && (t && o(r), a(r))
          })
        })
      })
    : Promise.resolve([])
}
var ub = '__@field_split__'
function Bd(e) {
  return e
    .map(function (t) {
      return ''.concat(_e(t), ':').concat(t)
    })
    .join(ub)
}
var Co = (function () {
    function e() {
      Yt(this, e), z(this, 'kvs', new Map())
    }
    return (
      qt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.kvs.set(Bd(n), r)
          },
        },
        {
          key: 'get',
          value: function (n) {
            return this.kvs.get(Bd(n))
          },
        },
        {
          key: 'update',
          value: function (n, r) {
            var a = this.get(n),
              o = r(a)
            o ? this.set(n, o) : this.delete(n)
          },
        },
        {
          key: 'delete',
          value: function (n) {
            this.kvs.delete(Bd(n))
          },
        },
        {
          key: 'map',
          value: function (n) {
            return de(this.kvs.entries()).map(function (r) {
              var a = V(r, 2),
                o = a[0],
                i = a[1],
                l = o.split(ub)
              return n({
                key: l.map(function (s) {
                  var u = s.match(/^([^:]*):(.*)$/),
                    c = V(u, 3),
                    d = c[1],
                    f = c[2]
                  return d === 'number' ? Number(f) : f
                }),
                value: i,
              })
            })
          },
        },
        {
          key: 'toJSON',
          value: function () {
            var n = {}
            return (
              this.map(function (r) {
                var a = r.key,
                  o = r.value
                return (n[a.join('.')] = o), null
              }),
              n
            )
          },
        },
      ]),
      e
    )
  })(),
  uM = ['name'],
  cM = qt(function e(t) {
    var n = this
    Yt(this, e),
      z(this, 'formHooked', !1),
      z(this, 'forceRootUpdate', void 0),
      z(this, 'subscribable', !0),
      z(this, 'store', {}),
      z(this, 'fieldEntities', []),
      z(this, 'initialValues', {}),
      z(this, 'callbacks', {}),
      z(this, 'validateMessages', null),
      z(this, 'preserve', null),
      z(this, 'lastValidatePromise', null),
      z(this, 'getForm', function () {
        return {
          getFieldValue: n.getFieldValue,
          getFieldsValue: n.getFieldsValue,
          getFieldError: n.getFieldError,
          getFieldWarning: n.getFieldWarning,
          getFieldsError: n.getFieldsError,
          isFieldsTouched: n.isFieldsTouched,
          isFieldTouched: n.isFieldTouched,
          isFieldValidating: n.isFieldValidating,
          isFieldsValidating: n.isFieldsValidating,
          resetFields: n.resetFields,
          setFields: n.setFields,
          setFieldValue: n.setFieldValue,
          setFieldsValue: n.setFieldsValue,
          validateFields: n.validateFields,
          submit: n.submit,
          _init: !0,
          getInternalHooks: n.getInternalHooks,
        }
      }),
      z(this, 'getInternalHooks', function (r) {
        return r === qa
          ? ((n.formHooked = !0),
            {
              dispatch: n.dispatch,
              initEntityValue: n.initEntityValue,
              registerField: n.registerField,
              useSubscribe: n.useSubscribe,
              setInitialValues: n.setInitialValues,
              destroyForm: n.destroyForm,
              setCallbacks: n.setCallbacks,
              setValidateMessages: n.setValidateMessages,
              getFields: n.getFields,
              setPreserve: n.setPreserve,
              getInitialValue: n.getInitialValue,
              registerWatch: n.registerWatch,
            })
          : (pn(
              !1,
              '`getInternalHooks` is internal usage. Should not call directly.',
            ),
            null)
      }),
      z(this, 'useSubscribe', function (r) {
        n.subscribable = r
      }),
      z(this, 'prevWithoutPreserves', null),
      z(this, 'setInitialValues', function (r, a) {
        if (((n.initialValues = r || {}), a)) {
          var o,
            i = jo(r, n.store)
          ;(o = n.prevWithoutPreserves) === null ||
            o === void 0 ||
            o.map(function (l) {
              var s = l.key
              i = lr(i, s, xr(r, s))
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(i)
        }
      }),
      z(this, 'destroyForm', function (r) {
        if (r) n.updateStore({})
        else {
          var a = new Co()
          n.getFieldEntities(!0).forEach(function (o) {
            n.isMergedPreserve(o.isPreserve()) || a.set(o.getNamePath(), !0)
          }),
            (n.prevWithoutPreserves = a)
        }
      }),
      z(this, 'getInitialValue', function (r) {
        var a = xr(n.initialValues, r)
        return r.length ? jo(a) : a
      }),
      z(this, 'setCallbacks', function (r) {
        n.callbacks = r
      }),
      z(this, 'setValidateMessages', function (r) {
        n.validateMessages = r
      }),
      z(this, 'setPreserve', function (r) {
        n.preserve = r
      }),
      z(this, 'watchList', []),
      z(this, 'registerWatch', function (r) {
        return (
          n.watchList.push(r),
          function () {
            n.watchList = n.watchList.filter(function (a) {
              return a !== r
            })
          }
        )
      }),
      z(this, 'notifyWatch', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        if (n.watchList.length) {
          var a = n.getFieldsValue(),
            o = n.getFieldsValue(!0)
          n.watchList.forEach(function (i) {
            i(a, o, r)
          })
        }
      }),
      z(this, 'timeoutId', null),
      z(this, 'warningUnhooked', function () {}),
      z(this, 'updateStore', function (r) {
        n.store = r
      }),
      z(this, 'getFieldEntities', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
        return r
          ? n.fieldEntities.filter(function (a) {
              return a.getNamePath().length
            })
          : n.fieldEntities
      }),
      z(this, 'getFieldsMap', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          a = new Co()
        return (
          n.getFieldEntities(r).forEach(function (o) {
            var i = o.getNamePath()
            a.set(i, o)
          }),
          a
        )
      }),
      z(this, 'getFieldEntitiesForNamePathList', function (r) {
        if (!r) return n.getFieldEntities(!0)
        var a = n.getFieldsMap(!0)
        return r.map(function (o) {
          var i = Ct(o)
          return a.get(i) || { INVALIDATE_NAME_PATH: Ct(o) }
        })
      }),
      z(this, 'getFieldsValue', function (r, a) {
        n.warningUnhooked()
        var o, i, l
        if (
          (r === !0 || Array.isArray(r)
            ? ((o = r), (i = a))
            : r && _e(r) === 'object' && ((l = r.strict), (i = r.filter)),
          o === !0 && !i)
        )
          return n.store
        var s = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null),
          u = []
        return (
          s.forEach(function (c) {
            var d,
              f,
              y =
                'INVALIDATE_NAME_PATH' in c
                  ? c.INVALIDATE_NAME_PATH
                  : c.getNamePath()
            if (l) {
              var v, p
              if ((v = (p = c).isList) !== null && v !== void 0 && v.call(p))
                return
            } else if (
              !o &&
              (d = (f = c).isListField) !== null &&
              d !== void 0 &&
              d.call(f)
            )
              return
            if (!i) u.push(y)
            else {
              var b = 'getMeta' in c ? c.getMeta() : null
              i(b) && u.push(y)
            }
          }),
          kp(n.store, u.map(Ct))
        )
      }),
      z(this, 'getFieldValue', function (r) {
        n.warningUnhooked()
        var a = Ct(r)
        return xr(n.store, a)
      }),
      z(this, 'getFieldsError', function (r) {
        n.warningUnhooked()
        var a = n.getFieldEntitiesForNamePathList(r)
        return a.map(function (o, i) {
          return o && !('INVALIDATE_NAME_PATH' in o)
            ? {
                name: o.getNamePath(),
                errors: o.getErrors(),
                warnings: o.getWarnings(),
              }
            : { name: Ct(r[i]), errors: [], warnings: [] }
        })
      }),
      z(this, 'getFieldError', function (r) {
        n.warningUnhooked()
        var a = Ct(r),
          o = n.getFieldsError([a])[0]
        return o.errors
      }),
      z(this, 'getFieldWarning', function (r) {
        n.warningUnhooked()
        var a = Ct(r),
          o = n.getFieldsError([a])[0]
        return o.warnings
      }),
      z(this, 'isFieldsTouched', function () {
        n.warningUnhooked()
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o]
        var i = a[0],
          l = a[1],
          s,
          u = !1
        a.length === 0
          ? (s = null)
          : a.length === 1
            ? Array.isArray(i)
              ? ((s = i.map(Ct)), (u = !1))
              : ((s = null), (u = i))
            : ((s = i.map(Ct)), (u = l))
        var c = n.getFieldEntities(!0),
          d = function (b) {
            return b.isFieldTouched()
          }
        if (!s)
          return u
            ? c.every(function (p) {
                return d(p) || p.isList()
              })
            : c.some(d)
        var f = new Co()
        s.forEach(function (p) {
          f.set(p, [])
        }),
          c.forEach(function (p) {
            var b = p.getNamePath()
            s.forEach(function (m) {
              m.every(function (h, S) {
                return b[S] === h
              }) &&
                f.update(m, function (h) {
                  return [].concat(de(h), [p])
                })
            })
          })
        var y = function (b) {
            return b.some(d)
          },
          v = f.map(function (p) {
            var b = p.value
            return b
          })
        return u ? v.every(y) : v.some(y)
      }),
      z(this, 'isFieldTouched', function (r) {
        return n.warningUnhooked(), n.isFieldsTouched([r])
      }),
      z(this, 'isFieldsValidating', function (r) {
        n.warningUnhooked()
        var a = n.getFieldEntities()
        if (!r)
          return a.some(function (i) {
            return i.isFieldValidating()
          })
        var o = r.map(Ct)
        return a.some(function (i) {
          var l = i.getNamePath()
          return Go(o, l) && i.isFieldValidating()
        })
      }),
      z(this, 'isFieldValidating', function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r])
      }),
      z(this, 'resetWithFieldInitialValue', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          a = new Co(),
          o = n.getFieldEntities(!0)
        o.forEach(function (s) {
          var u = s.props.initialValue,
            c = s.getNamePath()
          if (u !== void 0) {
            var d = a.get(c) || new Set()
            d.add({ entity: s, value: u }), a.set(c, d)
          }
        })
        var i = function (u) {
            u.forEach(function (c) {
              var d = c.props.initialValue
              if (d !== void 0) {
                var f = c.getNamePath(),
                  y = n.getInitialValue(f)
                if (y !== void 0)
                  pn(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      f.join('.'),
                      "'. Field can not overwrite it.",
                    ),
                  )
                else {
                  var v = a.get(f)
                  if (v && v.size > 1)
                    pn(
                      !1,
                      "Multiple Field with path '".concat(
                        f.join('.'),
                        "' set 'initialValue'. Can not decide which one to pick.",
                      ),
                    )
                  else if (v) {
                    var p = n.getFieldValue(f),
                      b = c.isListField()
                    !b &&
                      (!r.skipExist || p === void 0) &&
                      n.updateStore(lr(n.store, f, de(v)[0].value))
                  }
                }
              }
            })
          },
          l
        r.entities
          ? (l = r.entities)
          : r.namePathList
            ? ((l = []),
              r.namePathList.forEach(function (s) {
                var u = a.get(s)
                if (u) {
                  var c
                  ;(c = l).push.apply(
                    c,
                    de(
                      de(u).map(function (d) {
                        return d.entity
                      }),
                    ),
                  )
                }
              }))
            : (l = o),
          i(l)
      }),
      z(this, 'resetFields', function (r) {
        n.warningUnhooked()
        var a = n.store
        if (!r) {
          n.updateStore(jo(n.initialValues)),
            n.resetWithFieldInitialValue(),
            n.notifyObservers(a, null, { type: 'reset' }),
            n.notifyWatch()
          return
        }
        var o = r.map(Ct)
        o.forEach(function (i) {
          var l = n.getInitialValue(i)
          n.updateStore(lr(n.store, i, l))
        }),
          n.resetWithFieldInitialValue({ namePathList: o }),
          n.notifyObservers(a, o, { type: 'reset' }),
          n.notifyWatch(o)
      }),
      z(this, 'setFields', function (r) {
        n.warningUnhooked()
        var a = n.store,
          o = []
        r.forEach(function (i) {
          var l = i.name,
            s = xt(i, uM),
            u = Ct(l)
          o.push(u),
            'value' in s && n.updateStore(lr(n.store, u, s.value)),
            n.notifyObservers(a, [u], { type: 'setField', data: i })
        }),
          n.notifyWatch(o)
      }),
      z(this, 'getFields', function () {
        var r = n.getFieldEntities(!0),
          a = r.map(function (o) {
            var i = o.getNamePath(),
              l = o.getMeta(),
              s = H(H({}, l), {}, { name: i, value: n.getFieldValue(i) })
            return Object.defineProperty(s, 'originRCField', { value: !0 }), s
          })
        return a
      }),
      z(this, 'initEntityValue', function (r) {
        var a = r.props.initialValue
        if (a !== void 0) {
          var o = r.getNamePath(),
            i = xr(n.store, o)
          i === void 0 && n.updateStore(lr(n.store, o, a))
        }
      }),
      z(this, 'isMergedPreserve', function (r) {
        var a = r !== void 0 ? r : n.preserve
        return a ?? !0
      }),
      z(this, 'registerField', function (r) {
        n.fieldEntities.push(r)
        var a = r.getNamePath()
        if ((n.notifyWatch([a]), r.props.initialValue !== void 0)) {
          var o = n.store
          n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
            n.notifyObservers(o, [r.getNamePath()], {
              type: 'valueUpdate',
              source: 'internal',
            })
        }
        return function (i, l) {
          var s =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
          if (
            ((n.fieldEntities = n.fieldEntities.filter(function (d) {
              return d !== r
            })),
            !n.isMergedPreserve(l) && (!i || s.length > 1))
          ) {
            var u = i ? void 0 : n.getInitialValue(a)
            if (
              a.length &&
              n.getFieldValue(a) !== u &&
              n.fieldEntities.every(function (d) {
                return !lb(d.getNamePath(), a)
              })
            ) {
              var c = n.store
              n.updateStore(lr(c, a, u, !0)),
                n.notifyObservers(c, [a], { type: 'remove' }),
                n.triggerDependenciesUpdate(c, a)
            }
          }
          n.notifyWatch([a])
        }
      }),
      z(this, 'dispatch', function (r) {
        switch (r.type) {
          case 'updateValue': {
            var a = r.namePath,
              o = r.value
            n.updateValue(a, o)
            break
          }
          case 'validateField': {
            var i = r.namePath,
              l = r.triggerName
            n.validateFields([i], { triggerName: l })
            break
          }
        }
      }),
      z(this, 'notifyObservers', function (r, a, o) {
        if (n.subscribable) {
          var i = H(H({}, o), {}, { store: n.getFieldsValue(!0) })
          n.getFieldEntities().forEach(function (l) {
            var s = l.onStoreChange
            s(r, a, i)
          })
        } else n.forceRootUpdate()
      }),
      z(this, 'triggerDependenciesUpdate', function (r, a) {
        var o = n.getDependencyChildrenFields(a)
        return (
          o.length && n.validateFields(o),
          n.notifyObservers(r, o, {
            type: 'dependenciesUpdate',
            relatedFields: [a].concat(de(o)),
          }),
          o
        )
      }),
      z(this, 'updateValue', function (r, a) {
        var o = Ct(r),
          i = n.store
        n.updateStore(lr(n.store, o, a)),
          n.notifyObservers(i, [o], {
            type: 'valueUpdate',
            source: 'internal',
          }),
          n.notifyWatch([o])
        var l = n.triggerDependenciesUpdate(i, o),
          s = n.callbacks.onValuesChange
        if (s) {
          var u = kp(n.store, [o])
          s(u, n.getFieldsValue())
        }
        n.triggerOnFieldsChange([o].concat(de(l)))
      }),
      z(this, 'setFieldsValue', function (r) {
        n.warningUnhooked()
        var a = n.store
        if (r) {
          var o = jo(n.store, r)
          n.updateStore(o)
        }
        n.notifyObservers(a, null, { type: 'valueUpdate', source: 'external' }),
          n.notifyWatch()
      }),
      z(this, 'setFieldValue', function (r, a) {
        n.setFields([{ name: r, value: a }])
      }),
      z(this, 'getDependencyChildrenFields', function (r) {
        var a = new Set(),
          o = [],
          i = new Co()
        n.getFieldEntities().forEach(function (s) {
          var u = s.props.dependencies
          ;(u || []).forEach(function (c) {
            var d = Ct(c)
            i.update(d, function () {
              var f =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Set()
              return f.add(s), f
            })
          })
        })
        var l = function s(u) {
          var c = i.get(u) || new Set()
          c.forEach(function (d) {
            if (!a.has(d)) {
              a.add(d)
              var f = d.getNamePath()
              d.isFieldDirty() && f.length && (o.push(f), s(f))
            }
          })
        }
        return l(r), o
      }),
      z(this, 'triggerOnFieldsChange', function (r, a) {
        var o = n.callbacks.onFieldsChange
        if (o) {
          var i = n.getFields()
          if (a) {
            var l = new Co()
            a.forEach(function (u) {
              var c = u.name,
                d = u.errors
              l.set(c, d)
            }),
              i.forEach(function (u) {
                u.errors = l.get(u.name) || u.errors
              })
          }
          var s = i.filter(function (u) {
            var c = u.name
            return Go(r, c)
          })
          s.length && o(s, i)
        }
      }),
      z(this, 'validateFields', function (r, a) {
        n.warningUnhooked()
        var o, i
        Array.isArray(r) || typeof r == 'string' || typeof a == 'string'
          ? ((o = r), (i = a))
          : (i = r)
        var l = !!o,
          s = l ? o.map(Ct) : [],
          u = [],
          c = String(Date.now()),
          d = new Set(),
          f = i || {},
          y = f.recursive,
          v = f.dirty
        n.getFieldEntities(!0).forEach(function (h) {
          if (
            (l || s.push(h.getNamePath()),
            !(!h.props.rules || !h.props.rules.length) &&
              !(v && !h.isFieldDirty()))
          ) {
            var S = h.getNamePath()
            if ((d.add(S.join(c)), !l || Go(s, S, y))) {
              var C = h.validateRules(
                H({ validateMessages: H(H({}, ib), n.validateMessages) }, i),
              )
              u.push(
                C.then(function () {
                  return { name: S, errors: [], warnings: [] }
                }).catch(function (w) {
                  var E,
                    x = [],
                    R = []
                  return (
                    (E = w.forEach) === null ||
                      E === void 0 ||
                      E.call(w, function (F) {
                        var _ = F.rule.warningOnly,
                          T = F.errors
                        _ ? R.push.apply(R, de(T)) : x.push.apply(x, de(T))
                      }),
                    x.length
                      ? Promise.reject({ name: S, errors: x, warnings: R })
                      : { name: S, errors: x, warnings: R }
                  )
                }),
              )
            }
          }
        })
        var p = sM(u)
        ;(n.lastValidatePromise = p),
          p
            .catch(function (h) {
              return h
            })
            .then(function (h) {
              var S = h.map(function (C) {
                var w = C.name
                return w
              })
              n.notifyObservers(n.store, S, { type: 'validateFinish' }),
                n.triggerOnFieldsChange(S, h)
            })
        var b = p
          .then(function () {
            return n.lastValidatePromise === p
              ? Promise.resolve(n.getFieldsValue(s))
              : Promise.reject([])
          })
          .catch(function (h) {
            var S = h.filter(function (C) {
              return C && C.errors.length
            })
            return Promise.reject({
              values: n.getFieldsValue(s),
              errorFields: S,
              outOfDate: n.lastValidatePromise !== p,
            })
          })
        b.catch(function (h) {
          return h
        })
        var m = s.filter(function (h) {
          return d.has(h.join(c))
        })
        return n.triggerOnFieldsChange(m), b
      }),
      z(this, 'submit', function () {
        n.warningUnhooked(),
          n
            .validateFields()
            .then(function (r) {
              var a = n.callbacks.onFinish
              if (a)
                try {
                  a(r)
                } catch (o) {
                  console.error(o)
                }
            })
            .catch(function (r) {
              var a = n.callbacks.onFinishFailed
              a && a(r)
            })
      }),
      (this.forceRootUpdate = t)
  })
function cb(e) {
  var t = g.useRef(),
    n = g.useState({}),
    r = V(n, 2),
    a = r[1]
  if (!t.current)
    if (e) t.current = e
    else {
      var o = function () {
          a({})
        },
        i = new cM(o)
      t.current = i.getForm()
    }
  return [t.current]
}
var Rg = g.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {},
  }),
  dM = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      a = t.onFormFinish,
      o = t.children,
      i = g.useContext(Rg),
      l = g.useRef({})
    return g.createElement(
      Rg.Provider,
      {
        value: H(
          H({}, i),
          {},
          {
            validateMessages: H(H({}, i.validateMessages), n),
            triggerFormChange: function (u, c) {
              r && r(u, { changedFields: c, forms: l.current }),
                i.triggerFormChange(u, c)
            },
            triggerFormFinish: function (u, c) {
              a && a(u, { values: c, forms: l.current }),
                i.triggerFormFinish(u, c)
            },
            registerForm: function (u, c) {
              u && (l.current = H(H({}, l.current), {}, z({}, u, c))),
                i.registerForm(u, c)
            },
            unregisterForm: function (u) {
              var c = H({}, l.current)
              delete c[u], (l.current = c), i.unregisterForm(u)
            },
          },
        ),
      },
      o,
    )
  },
  fM = [
    'name',
    'initialValues',
    'fields',
    'form',
    'preserve',
    'children',
    'component',
    'validateMessages',
    'validateTrigger',
    'onValuesChange',
    'onFieldsChange',
    'onFinish',
    'onFinishFailed',
    'clearOnDestroy',
  ],
  gM = function (t, n) {
    var r = t.name,
      a = t.initialValues,
      o = t.fields,
      i = t.form,
      l = t.preserve,
      s = t.children,
      u = t.component,
      c = u === void 0 ? 'form' : u,
      d = t.validateMessages,
      f = t.validateTrigger,
      y = f === void 0 ? 'onChange' : f,
      v = t.onValuesChange,
      p = t.onFieldsChange,
      b = t.onFinish,
      m = t.onFinishFailed,
      h = t.clearOnDestroy,
      S = xt(t, fM),
      C = g.useRef(null),
      w = g.useContext(Rg),
      E = cb(i),
      x = V(E, 1),
      R = x[0],
      F = R.getInternalHooks(qa),
      _ = F.useSubscribe,
      T = F.setInitialValues,
      j = F.setCallbacks,
      A = F.setValidateMessages,
      I = F.setPreserve,
      N = F.destroyForm
    g.useImperativeHandle(n, function () {
      return H(H({}, R), {}, { nativeElement: C.current })
    }),
      g.useEffect(
        function () {
          return (
            w.registerForm(r, R),
            function () {
              w.unregisterForm(r)
            }
          )
        },
        [w, R, r],
      ),
      A(H(H({}, w.validateMessages), d)),
      j({
        onValuesChange: v,
        onFieldsChange: function (B) {
          if ((w.triggerFormChange(r, B), p)) {
            for (
              var U = arguments.length, K = new Array(U > 1 ? U - 1 : 0), Y = 1;
              Y < U;
              Y++
            )
              K[Y - 1] = arguments[Y]
            p.apply(void 0, [B].concat(K))
          }
        },
        onFinish: function (B) {
          w.triggerFormFinish(r, B), b && b(B)
        },
        onFinishFailed: m,
      }),
      I(l)
    var P = g.useRef(null)
    T(a, !P.current),
      P.current || (P.current = !0),
      g.useEffect(function () {
        return function () {
          return N(h)
        }
      }, [])
    var k,
      $ = typeof s == 'function'
    if ($) {
      var M = R.getFieldsValue(!0)
      k = s(M, R)
    } else k = s
    _(!$)
    var O = g.useRef()
    g.useEffect(
      function () {
        aM(O.current || [], o || []) || R.setFields(o || []), (O.current = o)
      },
      [o, R],
    )
    var D = g.useMemo(
        function () {
          return H(H({}, R), {}, { validateTrigger: y })
        },
        [R, y],
      ),
      L = g.createElement(
        Au.Provider,
        { value: null },
        g.createElement(ui.Provider, { value: D }, k),
      )
    return c === !1
      ? L
      : g.createElement(
          c,
          ve({}, S, {
            ref: C,
            onSubmit: function (B) {
              B.preventDefault(), B.stopPropagation(), R.submit()
            },
            onReset: function (B) {
              var U
              B.preventDefault(),
                R.resetFields(),
                (U = S.onReset) === null || U === void 0 || U.call(S, B)
            },
          }),
          L,
        )
  }
function Op(e) {
  try {
    return JSON.stringify(e)
  } catch {
    return Math.random()
  }
}
function hM() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = t[0],
    a = t[1],
    o = a === void 0 ? {} : a,
    i = wR(o) ? { form: o } : o,
    l = i.form,
    s = g.useState(),
    u = V(s, 2),
    c = u[0],
    d = u[1],
    f = g.useMemo(
      function () {
        return Op(c)
      },
      [c],
    ),
    y = g.useRef(f)
  y.current = f
  var v = g.useContext(ui),
    p = l || v,
    b = p && p._init,
    m = Ct(r),
    h = g.useRef(m)
  return (
    (h.current = m),
    g.useEffect(
      function () {
        if (b) {
          var S = p.getFieldsValue,
            C = p.getInternalHooks,
            w = C(qa),
            E = w.registerWatch,
            x = function (T, j) {
              var A = i.preserve ? j : T
              return typeof r == 'function' ? r(A) : xr(A, h.current)
            },
            R = E(function (_, T) {
              var j = x(_, T),
                A = Op(j)
              y.current !== A && ((y.current = A), d(j))
            }),
            F = x(S(), S(!0))
          return c !== F && d(F), R
        }
      },
      [b],
    ),
    c
  )
}
var mM = g.forwardRef(gM),
  Ul = mM
Ul.FormProvider = dM
Ul.Field = sb
Ul.List = lM
Ul.useForm = cb
Ul.useWatch = hM
const rm = g.createContext({}),
  vM = g.createContext(void 0),
  pM = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  yM = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  db = function (e, t, n, r) {
    const o = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? '&'
      : ''
    return {
      [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, pM(r)), {
        animationPlayState: 'paused',
      }),
      [`${o}${e}-leave`]: Object.assign(Object.assign({}, yM(r)), {
        animationPlayState: 'paused',
      }),
      [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
      [`${o}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: 'running',
        pointerEvents: 'none',
      },
    }
  },
  SM = new Zt('antMoveDownIn', {
    '0%': {
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  bM = new Zt('antMoveDownOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  CM = new Zt('antMoveLeftIn', {
    '0%': {
      transform: 'translate3d(-100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  wM = new Zt('antMoveLeftOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(-100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  xM = new Zt('antMoveRightIn', {
    '0%': {
      transform: 'translate3d(100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  EM = new Zt('antMoveRightOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  $M = new Zt('antMoveUpIn', {
    '0%': {
      transform: 'translate3d(0, -100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  PM = new Zt('antMoveUpOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(0, -100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  kM = {
    'move-up': { inKeyframes: $M, outKeyframes: PM },
    'move-down': { inKeyframes: SM, outKeyframes: bM },
    'move-left': { inKeyframes: CM, outKeyframes: wM },
    'move-right': { inKeyframes: xM, outKeyframes: EM },
  },
  _p = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: a, outKeyframes: o } = kM[t]
    return [
      db(r, a, o, e.motionDurationMid),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: { opacity: 0, animationTimingFunction: e.motionEaseOutCirc },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ]
  },
  fb = new Zt('antSlideUpIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  gb = new Zt('antSlideUpOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  hb = new Zt('antSlideDownIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
  }),
  mb = new Zt('antSlideDownOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
  }),
  RM = new Zt('antSlideLeftIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  MM = new Zt('antSlideLeftOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  OM = new Zt('antSlideRightIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
  }),
  _M = new Zt('antSlideRightOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    '100%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '100% 0%',
      opacity: 0,
    },
  }),
  IM = {
    'slide-up': { inKeyframes: fb, outKeyframes: gb },
    'slide-down': { inKeyframes: hb, outKeyframes: mb },
    'slide-left': { inKeyframes: RM, outKeyframes: MM },
    'slide-right': { inKeyframes: OM, outKeyframes: _M },
  },
  Ip = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: a, outKeyframes: o } = IM[t]
    return [
      db(r, a, o, e.motionDurationMid),
      {
        [`
      ${r}-enter,
      ${r}-appear
    `]: {
          transform: 'scale(0)',
          transformOrigin: '0% 0%',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
          '&-prepare': { transform: 'scale(1)' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ]
  }
function TM(e) {
  return (t) =>
    g.createElement(
      go,
      { theme: { token: { motion: !1, zIndexPopupBase: 0 } } },
      g.createElement(e, Object.assign({}, t)),
    )
}
const vb = (e, t, n, r) =>
    TM((o) => {
      const { prefixCls: i, style: l } = o,
        s = g.useRef(null),
        [u, c] = g.useState(0),
        [d, f] = g.useState(0),
        [y, v] = Gn(!1, { value: o.open }),
        { getPrefixCls: p } = g.useContext(yn),
        b = p(t, i)
      g.useEffect(() => {
        if ((v(!0), typeof ResizeObserver < 'u')) {
          const S = new ResizeObserver((w) => {
              const E = w[0].target
              c(E.offsetHeight + 8), f(E.offsetWidth)
            }),
            C = setInterval(() => {
              var w
              const E = `.${b}-dropdown`,
                x =
                  (w = s.current) === null || w === void 0
                    ? void 0
                    : w.querySelector(E)
              x && (clearInterval(C), S.observe(x))
            }, 10)
          return () => {
            clearInterval(C), S.disconnect()
          }
        }
      }, [])
      let m = Object.assign(Object.assign({}, o), {
        style: Object.assign(Object.assign({}, l), { margin: 0 }),
        open: y,
        visible: y,
        getPopupContainer: () => s.current,
      })
      r && (m = r(m))
      const h = { paddingBottom: u, position: 'relative', minWidth: d }
      return g.createElement(
        'div',
        { ref: s, style: h },
        g.createElement(e, Object.assign({}, m)),
      )
    }),
  FM = function () {
    if (typeof navigator > 'u' || typeof window > 'u') return !1
    var e = navigator.userAgent || navigator.vendor || window.opera
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        e,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        e == null ? void 0 : e.substr(0, 4),
      )
    )
  }
var NM = [
    'prefixCls',
    'invalidate',
    'item',
    'renderItem',
    'responsive',
    'responsiveDisabled',
    'registerSize',
    'itemKey',
    'className',
    'style',
    'children',
    'display',
    'order',
    'component',
  ],
  wo = void 0
function DM(e, t) {
  var n = e.prefixCls,
    r = e.invalidate,
    a = e.item,
    o = e.renderItem,
    i = e.responsive,
    l = e.responsiveDisabled,
    s = e.registerSize,
    u = e.itemKey,
    c = e.className,
    d = e.style,
    f = e.children,
    y = e.display,
    v = e.order,
    p = e.component,
    b = p === void 0 ? 'div' : p,
    m = xt(e, NM),
    h = i && !y
  function S(R) {
    s(u, R)
  }
  g.useEffect(function () {
    return function () {
      S(null)
    }
  }, [])
  var C = o && a !== wo ? o(a) : f,
    w
  r ||
    (w = {
      opacity: h ? 0 : 1,
      height: h ? 0 : wo,
      overflowY: h ? 'hidden' : wo,
      order: i ? v : wo,
      pointerEvents: h ? 'none' : wo,
      position: h ? 'absolute' : wo,
    })
  var E = {}
  h && (E['aria-hidden'] = !0)
  var x = g.createElement(
    b,
    ve({ className: ke(!r && n, c), style: H(H({}, w), d) }, E, m, { ref: t }),
    C,
  )
  return (
    i &&
      (x = g.createElement(
        fo,
        {
          onResize: function (F) {
            var _ = F.offsetWidth
            S(_)
          },
          disabled: l,
        },
        x,
      )),
    x
  )
}
var al = g.forwardRef(DM)
al.displayName = 'Item'
function LM(e) {
  if (typeof MessageChannel > 'u') Bt(e)
  else {
    var t = new MessageChannel()
    ;(t.port1.onmessage = function () {
      return e()
    }),
      t.port2.postMessage(void 0)
  }
}
function AM() {
  var e = g.useRef(null),
    t = function (r) {
      e.current ||
        ((e.current = []),
        LM(function () {
          jl.unstable_batchedUpdates(function () {
            e.current.forEach(function (a) {
              a()
            }),
              (e.current = null)
          })
        })),
        e.current.push(r)
    }
  return t
}
function _i(e, t) {
  var n = g.useState(t),
    r = V(n, 2),
    a = r[0],
    o = r[1],
    i = tt(function (l) {
      e(function () {
        o(l)
      })
    })
  return [a, i]
}
var ju = Oe.createContext(null),
  jM = ['component'],
  zM = ['className'],
  HM = ['className'],
  VM = function (t, n) {
    var r = g.useContext(ju)
    if (!r) {
      var a = t.component,
        o = a === void 0 ? 'div' : a,
        i = xt(t, jM)
      return g.createElement(o, ve({}, i, { ref: n }))
    }
    var l = r.className,
      s = xt(r, zM),
      u = t.className,
      c = xt(t, HM)
    return g.createElement(
      ju.Provider,
      { value: null },
      g.createElement(al, ve({ ref: n, className: ke(l, u) }, s, c)),
    )
  },
  pb = g.forwardRef(VM)
pb.displayName = 'RawItem'
var BM = [
    'prefixCls',
    'data',
    'renderItem',
    'renderRawItem',
    'itemKey',
    'itemWidth',
    'ssr',
    'style',
    'className',
    'maxCount',
    'renderRest',
    'renderRawRest',
    'suffix',
    'component',
    'itemComponent',
    'onVisibleChange',
  ],
  yb = 'responsive',
  Sb = 'invalidate'
function WM(e) {
  return '+ '.concat(e.length, ' ...')
}
function UM(e, t) {
  var n = e.prefixCls,
    r = n === void 0 ? 'rc-overflow' : n,
    a = e.data,
    o = a === void 0 ? [] : a,
    i = e.renderItem,
    l = e.renderRawItem,
    s = e.itemKey,
    u = e.itemWidth,
    c = u === void 0 ? 10 : u,
    d = e.ssr,
    f = e.style,
    y = e.className,
    v = e.maxCount,
    p = e.renderRest,
    b = e.renderRawRest,
    m = e.suffix,
    h = e.component,
    S = h === void 0 ? 'div' : h,
    C = e.itemComponent,
    w = e.onVisibleChange,
    E = xt(e, BM),
    x = d === 'full',
    R = AM(),
    F = _i(R, null),
    _ = V(F, 2),
    T = _[0],
    j = _[1],
    A = T || 0,
    I = _i(R, new Map()),
    N = V(I, 2),
    P = N[0],
    k = N[1],
    $ = _i(R, 0),
    M = V($, 2),
    O = M[0],
    D = M[1],
    L = _i(R, 0),
    W = V(L, 2),
    B = W[0],
    U = W[1],
    K = _i(R, 0),
    Y = V(K, 2),
    q = Y[0],
    X = Y[1],
    Q = g.useState(null),
    J = V(Q, 2),
    ne = J[0],
    te = J[1],
    ae = g.useState(null),
    ye = V(ae, 2),
    oe = ye[0],
    he = ye[1],
    ge = g.useMemo(
      function () {
        return oe === null && x ? Number.MAX_SAFE_INTEGER : oe || 0
      },
      [oe, T],
    ),
    ce = g.useState(!1),
    Ce = V(ce, 2),
    we = Ce[0],
    Ne = Ce[1],
    Le = ''.concat(r, '-item'),
    Z = Math.max(O, B),
    Se = v === yb,
    ie = o.length && Se,
    Xe = v === Sb,
    He = ie || (typeof v == 'number' && o.length > v),
    Ie = g.useMemo(
      function () {
        var pe = o
        return (
          ie
            ? T === null && x
              ? (pe = o)
              : (pe = o.slice(0, Math.min(o.length, A / c)))
            : typeof v == 'number' && (pe = o.slice(0, v)),
          pe
        )
      },
      [o, c, T, v, ie],
    ),
    Ye = g.useMemo(
      function () {
        return ie ? o.slice(ge + 1) : o.slice(Ie.length)
      },
      [o, Ie, ie, ge],
    ),
    Je = g.useCallback(
      function (pe, se) {
        var xe
        return typeof s == 'function'
          ? s(pe)
          : (xe = s && (pe == null ? void 0 : pe[s])) !== null && xe !== void 0
            ? xe
            : se
      },
      [s],
    ),
    me = g.useCallback(
      i ||
        function (pe) {
          return pe
        },
      [i],
    )
  function We(pe, se, xe) {
    ;(oe === pe && (se === void 0 || se === ne)) ||
      (he(pe),
      xe || (Ne(pe < o.length - 1), w == null || w(pe)),
      se !== void 0 && te(se))
  }
  function re(pe, se) {
    j(se.clientWidth)
  }
  function fe(pe, se) {
    k(function (xe) {
      var Ve = new Map(xe)
      return se === null ? Ve.delete(pe) : Ve.set(pe, se), Ve
    })
  }
  function Re(pe, se) {
    U(se), D(B)
  }
  function Ae(pe, se) {
    X(se)
  }
  function qe(pe) {
    return P.get(Je(Ie[pe], pe))
  }
  ft(
    function () {
      if (A && typeof Z == 'number' && Ie) {
        var pe = q,
          se = Ie.length,
          xe = se - 1
        if (!se) {
          We(0, null)
          return
        }
        for (var Ve = 0; Ve < se; Ve += 1) {
          var et = qe(Ve)
          if ((x && (et = et || 0), et === void 0)) {
            We(Ve - 1, void 0, !0)
            break
          }
          if (
            ((pe += et),
            (xe === 0 && pe <= A) || (Ve === xe - 1 && pe + qe(xe) <= A))
          ) {
            We(xe, null)
            break
          } else if (pe + Z > A) {
            We(Ve - 1, pe - et - q + B)
            break
          }
        }
        m && qe(0) + q > A && te(null)
      }
    },
    [A, P, B, q, Je, Ie],
  )
  var Ze = we && !!Ye.length,
    Qe = {}
  ne !== null && ie && (Qe = { position: 'absolute', left: ne, top: 0 })
  var at = { prefixCls: Le, responsive: ie, component: C, invalidate: Xe },
    Et = l
      ? function (pe, se) {
          var xe = Je(pe, se)
          return g.createElement(
            ju.Provider,
            {
              key: xe,
              value: H(
                H({}, at),
                {},
                {
                  order: se,
                  item: pe,
                  itemKey: xe,
                  registerSize: fe,
                  display: se <= ge,
                },
              ),
            },
            l(pe, se),
          )
        }
      : function (pe, se) {
          var xe = Je(pe, se)
          return g.createElement(
            al,
            ve({}, at, {
              order: se,
              key: xe,
              item: pe,
              renderItem: me,
              itemKey: xe,
              registerSize: fe,
              display: se <= ge,
            }),
          )
        },
    Ke,
    De = {
      order: Ze ? ge : Number.MAX_SAFE_INTEGER,
      className: ''.concat(Le, '-rest'),
      registerSize: Re,
      display: Ze,
    }
  if (b)
    b && (Ke = g.createElement(ju.Provider, { value: H(H({}, at), De) }, b(Ye)))
  else {
    var be = p || WM
    Ke = g.createElement(
      al,
      ve({}, at, De),
      typeof be == 'function' ? be(Ye) : be,
    )
  }
  var Te = g.createElement(
    S,
    ve({ className: ke(!Xe && r, y), style: f, ref: t }, E),
    Ie.map(Et),
    He ? Ke : null,
    m &&
      g.createElement(
        al,
        ve({}, at, {
          responsive: Se,
          responsiveDisabled: !ie,
          order: ge,
          className: ''.concat(Le, '-suffix'),
          registerSize: Ae,
          display: !0,
          style: Qe,
        }),
        m,
      ),
  )
  return (
    Se && (Te = g.createElement(fo, { onResize: re, disabled: !ie }, Te)), Te
  )
}
var Yl = g.forwardRef(UM)
Yl.displayName = 'Overflow'
Yl.Item = pb
Yl.RESPONSIVE = yb
Yl.INVALIDATE = Sb
function YM(e) {
  var t = e.prefixCls,
    n = e.align,
    r = e.arrow,
    a = e.arrowPos,
    o = r || {},
    i = o.className,
    l = o.content,
    s = a.x,
    u = s === void 0 ? 0 : s,
    c = a.y,
    d = c === void 0 ? 0 : c,
    f = g.useRef()
  if (!n || !n.points) return null
  var y = { position: 'absolute' }
  if (n.autoArrow !== !1) {
    var v = n.points[0],
      p = n.points[1],
      b = v[0],
      m = v[1],
      h = p[0],
      S = p[1]
    b === h || !['t', 'b'].includes(b)
      ? (y.top = d)
      : b === 't'
        ? (y.top = 0)
        : (y.bottom = 0),
      m === S || !['l', 'r'].includes(m)
        ? (y.left = u)
        : m === 'l'
          ? (y.left = 0)
          : (y.right = 0)
  }
  return g.createElement(
    'div',
    { ref: f, className: ke(''.concat(t, '-arrow'), i), style: y },
    l,
  )
}
function qM(e) {
  var t = e.prefixCls,
    n = e.open,
    r = e.zIndex,
    a = e.mask,
    o = e.motion
  return a
    ? g.createElement(
        Vl,
        ve({}, o, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
        function (i) {
          var l = i.className
          return g.createElement('div', {
            style: { zIndex: r },
            className: ke(''.concat(t, '-mask'), l),
          })
        },
      )
    : null
}
var KM = g.memo(
    function (e) {
      var t = e.children
      return t
    },
    function (e, t) {
      return t.cache
    },
  ),
  GM = g.forwardRef(function (e, t) {
    var n = e.popup,
      r = e.className,
      a = e.prefixCls,
      o = e.style,
      i = e.target,
      l = e.onVisibleChanged,
      s = e.open,
      u = e.keepDom,
      c = e.fresh,
      d = e.onClick,
      f = e.mask,
      y = e.arrow,
      v = e.arrowPos,
      p = e.align,
      b = e.motion,
      m = e.maskMotion,
      h = e.forceRender,
      S = e.getPopupContainer,
      C = e.autoDestroy,
      w = e.portal,
      E = e.zIndex,
      x = e.onMouseEnter,
      R = e.onMouseLeave,
      F = e.onPointerEnter,
      _ = e.ready,
      T = e.offsetX,
      j = e.offsetY,
      A = e.offsetR,
      I = e.offsetB,
      N = e.onAlign,
      P = e.onPrepare,
      k = e.stretch,
      $ = e.targetWidth,
      M = e.targetHeight,
      O = typeof n == 'function' ? n() : n,
      D = s || u,
      L = (S == null ? void 0 : S.length) > 0,
      W = g.useState(!S || !L),
      B = V(W, 2),
      U = B[0],
      K = B[1]
    if (
      (ft(
        function () {
          !U && L && i && K(!0)
        },
        [U, L, i],
      ),
      !U)
    )
      return null
    var Y = 'auto',
      q = { left: '-1000vw', top: '-1000vh', right: Y, bottom: Y }
    if (_ || !s) {
      var X,
        Q = p.points,
        J =
          p.dynamicInset ||
          ((X = p._experimental) === null || X === void 0
            ? void 0
            : X.dynamicInset),
        ne = J && Q[0][1] === 'r',
        te = J && Q[0][0] === 'b'
      ne ? ((q.right = A), (q.left = Y)) : ((q.left = T), (q.right = Y)),
        te ? ((q.bottom = I), (q.top = Y)) : ((q.top = j), (q.bottom = Y))
    }
    var ae = {}
    return (
      k &&
        (k.includes('height') && M
          ? (ae.height = M)
          : k.includes('minHeight') && M && (ae.minHeight = M),
        k.includes('width') && $
          ? (ae.width = $)
          : k.includes('minWidth') && $ && (ae.minWidth = $)),
      s || (ae.pointerEvents = 'none'),
      g.createElement(
        w,
        {
          open: h || D,
          getContainer:
            S &&
            function () {
              return S(i)
            },
          autoDestroy: C,
        },
        g.createElement(qM, {
          prefixCls: a,
          open: s,
          zIndex: E,
          mask: f,
          motion: m,
        }),
        g.createElement(fo, { onResize: N, disabled: !s }, function (ye) {
          return g.createElement(
            Vl,
            ve(
              {
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: h,
                leavedClassName: ''.concat(a, '-hidden'),
              },
              b,
              {
                onAppearPrepare: P,
                onEnterPrepare: P,
                visible: s,
                onVisibleChanged: function (he) {
                  var ge
                  b == null ||
                    (ge = b.onVisibleChanged) === null ||
                    ge === void 0 ||
                    ge.call(b, he),
                    l(he)
                },
              },
            ),
            function (oe, he) {
              var ge = oe.className,
                ce = oe.style,
                Ce = ke(a, ge, r)
              return g.createElement(
                'div',
                {
                  ref: gi(ye, t, he),
                  className: Ce,
                  style: H(
                    H(
                      H(
                        H(
                          {
                            '--arrow-x': ''.concat(v.x || 0, 'px'),
                            '--arrow-y': ''.concat(v.y || 0, 'px'),
                          },
                          q,
                        ),
                        ae,
                      ),
                      ce,
                    ),
                    {},
                    { boxSizing: 'border-box', zIndex: E },
                    o,
                  ),
                  onMouseEnter: x,
                  onMouseLeave: R,
                  onPointerEnter: F,
                  onClick: d,
                },
                y &&
                  g.createElement(YM, {
                    prefixCls: a,
                    arrow: y,
                    arrowPos: v,
                    align: p,
                  }),
                g.createElement(KM, { cache: !s && !c }, O),
              )
            },
          )
        }),
      )
    )
  }),
  QM = g.forwardRef(function (e, t) {
    var n = e.children,
      r = e.getTriggerDOMNode,
      a = zl(n),
      o = g.useCallback(
        function (l) {
          Fh(t, r ? r(l) : l)
        },
        [r],
      ),
      i = Nh(o, n.ref)
    return a ? g.cloneElement(n, { ref: i }) : n
  }),
  Tp = g.createContext(null)
function Fp(e) {
  return e ? (Array.isArray(e) ? e : [e]) : []
}
function XM(e, t, n, r) {
  return g.useMemo(
    function () {
      var a = Fp(n ?? t),
        o = Fp(r ?? t),
        i = new Set(a),
        l = new Set(o)
      return (
        e &&
          (i.has('hover') && (i.delete('hover'), i.add('click')),
          l.has('hover') && (l.delete('hover'), l.add('click'))),
        [i, l]
      )
    },
    [e, t, n, r],
  )
}
function JM() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : void 0
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
function ZM(e, t, n, r) {
  for (var a = n.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var l,
      s = o[i]
    if (JM((l = e[s]) === null || l === void 0 ? void 0 : l.points, a, r))
      return ''.concat(t, '-placement-').concat(s)
  }
  return ''
}
function Np(e, t, n, r) {
  return (
    t ||
    (n
      ? { motionName: ''.concat(e, '-').concat(n) }
      : r
        ? { motionName: r }
        : null)
  )
}
function ql(e) {
  return e.ownerDocument.defaultView
}
function Mg(e) {
  for (
    var t = [],
      n = e == null ? void 0 : e.parentElement,
      r = ['hidden', 'scroll', 'clip', 'auto'];
    n;

  ) {
    var a = ql(n).getComputedStyle(n),
      o = a.overflowX,
      i = a.overflowY,
      l = a.overflow
    ;[o, i, l].some(function (s) {
      return r.includes(s)
    }) && t.push(n),
      (n = n.parentElement)
  }
  return t
}
function Il(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  return Number.isNaN(e) ? t : e
}
function Ii(e) {
  return Il(parseFloat(e), 0)
}
function Dp(e, t) {
  var n = H({}, e)
  return (
    (t || []).forEach(function (r) {
      if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
        var a = ql(r).getComputedStyle(r),
          o = a.overflow,
          i = a.overflowClipMargin,
          l = a.borderTopWidth,
          s = a.borderBottomWidth,
          u = a.borderLeftWidth,
          c = a.borderRightWidth,
          d = r.getBoundingClientRect(),
          f = r.offsetHeight,
          y = r.clientHeight,
          v = r.offsetWidth,
          p = r.clientWidth,
          b = Ii(l),
          m = Ii(s),
          h = Ii(u),
          S = Ii(c),
          C = Il(Math.round((d.width / v) * 1e3) / 1e3),
          w = Il(Math.round((d.height / f) * 1e3) / 1e3),
          E = (v - p - h - S) * C,
          x = (f - y - b - m) * w,
          R = b * w,
          F = m * w,
          _ = h * C,
          T = S * C,
          j = 0,
          A = 0
        if (o === 'clip') {
          var I = Ii(i)
          ;(j = I * C), (A = I * w)
        }
        var N = d.x + _ - j,
          P = d.y + R - A,
          k = N + d.width + 2 * j - _ - T - E,
          $ = P + d.height + 2 * A - R - F - x
        ;(n.left = Math.max(n.left, N)),
          (n.top = Math.max(n.top, P)),
          (n.right = Math.min(n.right, k)),
          (n.bottom = Math.min(n.bottom, $))
      }
    }),
    n
  )
}
function Lp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = ''.concat(t),
    r = n.match(/^(.*)\%$/)
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n)
}
function Ap(e, t) {
  var n = t || [],
    r = V(n, 2),
    a = r[0],
    o = r[1]
  return [Lp(e.width, a), Lp(e.height, o)]
}
function jp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
  return [e[0], e[1]]
}
function xo(e, t) {
  var n = t[0],
    r = t[1],
    a,
    o
  return (
    n === 't'
      ? (o = e.y)
      : n === 'b'
        ? (o = e.y + e.height)
        : (o = e.y + e.height / 2),
    r === 'l'
      ? (a = e.x)
      : r === 'r'
        ? (a = e.x + e.width)
        : (a = e.x + e.width / 2),
    { x: a, y: o }
  )
}
function ra(e, t) {
  var n = { t: 'b', b: 't', l: 'r', r: 'l' }
  return e
    .map(function (r, a) {
      return a === t ? n[r] || 'c' : r
    })
    .join('')
}
function eO(e, t, n, r, a, o, i) {
  var l = g.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: a[r] || {},
    }),
    s = V(l, 2),
    u = s[0],
    c = s[1],
    d = g.useRef(0),
    f = g.useMemo(
      function () {
        return t ? Mg(t) : []
      },
      [t],
    ),
    y = g.useRef({}),
    v = function () {
      y.current = {}
    }
  e || v()
  var p = tt(function () {
      if (t && n && e) {
        let it = function (ts, Tr) {
            var La =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : Ce,
              po = O.x + ts,
              bi = O.y + Tr,
              Kc = po + X,
              Gc = bi + q,
              Qc = Math.max(po, La.left),
              Xc = Math.max(bi, La.top),
              ue = Math.min(Kc, La.right),
              Pe = Math.min(Gc, La.bottom)
            return Math.max(0, (ue - Qc) * (Pe - Xc))
          },
          Si = function () {
            ;(sn = O.y + be), (Cn = sn + q), (ct = O.x + De), (un = ct + X)
          }
        var je = it,
          bt = Si,
          h,
          S,
          C = t,
          w = C.ownerDocument,
          E = ql(C),
          x = E.getComputedStyle(C),
          R = x.width,
          F = x.height,
          _ = x.position,
          T = C.style.left,
          j = C.style.top,
          A = C.style.right,
          I = C.style.bottom,
          N = C.style.overflow,
          P = H(H({}, a[r]), o),
          k = w.createElement('div')
        ;(h = C.parentElement) === null || h === void 0 || h.appendChild(k),
          (k.style.left = ''.concat(C.offsetLeft, 'px')),
          (k.style.top = ''.concat(C.offsetTop, 'px')),
          (k.style.position = _),
          (k.style.height = ''.concat(C.offsetHeight, 'px')),
          (k.style.width = ''.concat(C.offsetWidth, 'px')),
          (C.style.left = '0'),
          (C.style.top = '0'),
          (C.style.right = 'auto'),
          (C.style.bottom = 'auto'),
          (C.style.overflow = 'hidden')
        var $
        if (Array.isArray(n)) $ = { x: n[0], y: n[1], width: 0, height: 0 }
        else {
          var M = n.getBoundingClientRect()
          $ = { x: M.x, y: M.y, width: M.width, height: M.height }
        }
        var O = C.getBoundingClientRect(),
          D = w.documentElement,
          L = D.clientWidth,
          W = D.clientHeight,
          B = D.scrollWidth,
          U = D.scrollHeight,
          K = D.scrollTop,
          Y = D.scrollLeft,
          q = O.height,
          X = O.width,
          Q = $.height,
          J = $.width,
          ne = { left: 0, top: 0, right: L, bottom: W },
          te = { left: -Y, top: -K, right: B - Y, bottom: U - K },
          ae = P.htmlRegion,
          ye = 'visible',
          oe = 'visibleFirst'
        ae !== 'scroll' && ae !== oe && (ae = ye)
        var he = ae === oe,
          ge = Dp(te, f),
          ce = Dp(ne, f),
          Ce = ae === ye ? ce : ge,
          we = he ? ce : Ce
        ;(C.style.left = 'auto'),
          (C.style.top = 'auto'),
          (C.style.right = '0'),
          (C.style.bottom = '0')
        var Ne = C.getBoundingClientRect()
        ;(C.style.left = T),
          (C.style.top = j),
          (C.style.right = A),
          (C.style.bottom = I),
          (C.style.overflow = N),
          (S = C.parentElement) === null || S === void 0 || S.removeChild(k)
        var Le = Il(Math.round((X / parseFloat(R)) * 1e3) / 1e3),
          Z = Il(Math.round((q / parseFloat(F)) * 1e3) / 1e3)
        if (Le === 0 || Z === 0 || (El(n) && !Gh(n))) return
        var Se = P.offset,
          ie = P.targetOffset,
          Xe = Ap(O, Se),
          He = V(Xe, 2),
          Ie = He[0],
          Ye = He[1],
          Je = Ap($, ie),
          me = V(Je, 2),
          We = me[0],
          re = me[1]
        ;($.x -= We), ($.y -= re)
        var fe = P.points || [],
          Re = V(fe, 2),
          Ae = Re[0],
          qe = Re[1],
          Ze = jp(qe),
          Qe = jp(Ae),
          at = xo($, Ze),
          Et = xo(O, Qe),
          Ke = H({}, P),
          De = at.x - Et.x + Ie,
          be = at.y - Et.y + Ye,
          Te = it(De, be),
          pe = it(De, be, ce),
          se = xo($, ['t', 'l']),
          xe = xo(O, ['t', 'l']),
          Ve = xo($, ['b', 'r']),
          et = xo(O, ['b', 'r']),
          Rt = P.overflow || {},
          vt = Rt.adjustX,
          vr = Rt.adjustY,
          Sn = Rt.shiftX,
          bn = Rt.shiftY,
          jn = function (Tr) {
            return typeof Tr == 'boolean' ? Tr : Tr >= 0
          },
          sn,
          Cn,
          ct,
          un
        Si()
        var Mt = jn(vr),
          Mr = Qe[0] === Ze[0]
        if (Mt && Qe[0] === 't' && (Cn > we.bottom || y.current.bt)) {
          var zn = be
          Mr ? (zn -= q - Q) : (zn = se.y - et.y - Ye)
          var Xr = it(De, zn),
            Hn = it(De, zn, ce)
          Xr > Te || (Xr === Te && (!he || Hn >= pe))
            ? ((y.current.bt = !0),
              (be = zn),
              (Ye = -Ye),
              (Ke.points = [ra(Qe, 0), ra(Ze, 0)]))
            : (y.current.bt = !1)
        }
        if (Mt && Qe[0] === 'b' && (sn < we.top || y.current.tb)) {
          var tr = be
          Mr ? (tr += q - Q) : (tr = Ve.y - xe.y - Ye)
          var $t = it(De, tr),
            _a = it(De, tr, ce)
          $t > Te || ($t === Te && (!he || _a >= pe))
            ? ((y.current.tb = !0),
              (be = tr),
              (Ye = -Ye),
              (Ke.points = [ra(Qe, 0), ra(Ze, 0)]))
            : (y.current.tb = !1)
        }
        var pr = jn(vt),
          At = Qe[1] === Ze[1]
        if (pr && Qe[1] === 'l' && (un > we.right || y.current.rl)) {
          var tn = De
          At ? (tn -= X - J) : (tn = se.x - et.x - Ie)
          var Or = it(tn, be),
            Ia = it(tn, be, ce)
          Or > Te || (Or === Te && (!he || Ia >= pe))
            ? ((y.current.rl = !0),
              (De = tn),
              (Ie = -Ie),
              (Ke.points = [ra(Qe, 1), ra(Ze, 1)]))
            : (y.current.rl = !1)
        }
        if (pr && Qe[1] === 'r' && (ct < we.left || y.current.lr)) {
          var Vn = De
          At ? (Vn += X - J) : (Vn = Ve.x - xe.x - Ie)
          var Jr = it(Vn, be),
            Zr = it(Vn, be, ce)
          Jr > Te || (Jr === Te && (!he || Zr >= pe))
            ? ((y.current.lr = !0),
              (De = Vn),
              (Ie = -Ie),
              (Ke.points = [ra(Qe, 1), ra(Ze, 1)]))
            : (y.current.lr = !1)
        }
        Si()
        var cn = Sn === !0 ? 0 : Sn
        typeof cn == 'number' &&
          (ct < ce.left &&
            ((De -= ct - ce.left - Ie),
            $.x + J < ce.left + cn && (De += $.x - ce.left + J - cn)),
          un > ce.right &&
            ((De -= un - ce.right - Ie),
            $.x > ce.right - cn && (De += $.x - ce.right + cn)))
        var wn = bn === !0 ? 0 : bn
        typeof wn == 'number' &&
          (sn < ce.top &&
            ((be -= sn - ce.top - Ye),
            $.y + Q < ce.top + wn && (be += $.y - ce.top + Q - wn)),
          Cn > ce.bottom &&
            ((be -= Cn - ce.bottom - Ye),
            $.y > ce.bottom - wn && (be += $.y - ce.bottom + wn)))
        var _r = O.x + De,
          ea = _r + X,
          Bn = O.y + be,
          nr = Bn + q,
          Ir = $.x,
          yr = Ir + J,
          xn = $.y,
          Ta = xn + Q,
          Fa = Math.max(_r, Ir),
          Na = Math.min(ea, yr),
          ta = (Fa + Na) / 2,
          Da = ta - _r,
          Me = Math.max(Bn, xn),
          Ee = Math.min(nr, Ta),
          Ot = (Me + Ee) / 2,
          dn = Ot - Bn
        i == null || i(t, Ke)
        var Sr = Ne.right - O.x - (De + O.width),
          Fe = Ne.bottom - O.y - (be + O.height)
        Le === 1 && ((De = Math.round(De)), (Sr = Math.round(Sr))),
          Z === 1 && ((be = Math.round(be)), (Fe = Math.round(Fe)))
        var $e = {
          ready: !0,
          offsetX: De / Le,
          offsetY: be / Z,
          offsetR: Sr / Le,
          offsetB: Fe / Z,
          arrowX: Da / Le,
          arrowY: dn / Z,
          scaleX: Le,
          scaleY: Z,
          align: Ke,
        }
        c($e)
      }
    }),
    b = function () {
      d.current += 1
      var S = d.current
      Promise.resolve().then(function () {
        d.current === S && p()
      })
    },
    m = function () {
      c(function (S) {
        return H(H({}, S), {}, { ready: !1 })
      })
    }
  return (
    ft(m, [r]),
    ft(
      function () {
        e || m()
      },
      [e],
    ),
    [
      u.ready,
      u.offsetX,
      u.offsetY,
      u.offsetR,
      u.offsetB,
      u.arrowX,
      u.arrowY,
      u.scaleX,
      u.scaleY,
      u.align,
      b,
    ]
  )
}
function tO(e, t, n, r, a) {
  ft(
    function () {
      if (e && t && n) {
        let f = function () {
          r(), a()
        }
        var d = f,
          o = t,
          i = n,
          l = Mg(o),
          s = Mg(i),
          u = ql(i),
          c = new Set([u].concat(de(l), de(s)))
        return (
          c.forEach(function (y) {
            y.addEventListener('scroll', f, { passive: !0 })
          }),
          u.addEventListener('resize', f, { passive: !0 }),
          r(),
          function () {
            c.forEach(function (y) {
              y.removeEventListener('scroll', f),
                u.removeEventListener('resize', f)
            })
          }
        )
      }
    },
    [e, t, n],
  )
}
function nO(e, t, n, r, a, o, i, l) {
  var s = g.useRef(e)
  ;(s.current = e),
    g.useEffect(
      function () {
        if (t && r && (!a || o)) {
          var u = function (y) {
              var v = y.target
              s.current && !i(v) && l(!1)
            },
            c = ql(r)
          c.addEventListener('mousedown', u, !0),
            c.addEventListener('contextmenu', u, !0)
          var d = Nu(n)
          return (
            d &&
              (d.addEventListener('mousedown', u, !0),
              d.addEventListener('contextmenu', u, !0)),
            function () {
              c.removeEventListener('mousedown', u, !0),
                c.removeEventListener('contextmenu', u, !0),
                d &&
                  (d.removeEventListener('mousedown', u, !0),
                  d.removeEventListener('contextmenu', u, !0))
            }
          )
        }
      },
      [t, n, r, a, o],
    )
}
var rO = [
  'prefixCls',
  'children',
  'action',
  'showAction',
  'hideAction',
  'popupVisible',
  'defaultPopupVisible',
  'onPopupVisibleChange',
  'afterPopupVisibleChange',
  'mouseEnterDelay',
  'mouseLeaveDelay',
  'focusDelay',
  'blurDelay',
  'mask',
  'maskClosable',
  'getPopupContainer',
  'forceRender',
  'autoDestroy',
  'destroyPopupOnHide',
  'popup',
  'popupClassName',
  'popupStyle',
  'popupPlacement',
  'builtinPlacements',
  'popupAlign',
  'zIndex',
  'stretch',
  'getPopupClassNameFromAlign',
  'fresh',
  'alignPoint',
  'onPopupClick',
  'onPopupAlign',
  'arrow',
  'popupMotion',
  'maskMotion',
  'popupTransitionName',
  'popupAnimation',
  'maskTransitionName',
  'maskAnimation',
  'className',
  'getTriggerDOMNode',
]
function aO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ab,
    t = g.forwardRef(function (n, r) {
      var a = n.prefixCls,
        o = a === void 0 ? 'rc-trigger-popup' : a,
        i = n.children,
        l = n.action,
        s = l === void 0 ? 'hover' : l,
        u = n.showAction,
        c = n.hideAction,
        d = n.popupVisible,
        f = n.defaultPopupVisible,
        y = n.onPopupVisibleChange,
        v = n.afterPopupVisibleChange,
        p = n.mouseEnterDelay,
        b = n.mouseLeaveDelay,
        m = b === void 0 ? 0.1 : b,
        h = n.focusDelay,
        S = n.blurDelay,
        C = n.mask,
        w = n.maskClosable,
        E = w === void 0 ? !0 : w,
        x = n.getPopupContainer,
        R = n.forceRender,
        F = n.autoDestroy,
        _ = n.destroyPopupOnHide,
        T = n.popup,
        j = n.popupClassName,
        A = n.popupStyle,
        I = n.popupPlacement,
        N = n.builtinPlacements,
        P = N === void 0 ? {} : N,
        k = n.popupAlign,
        $ = n.zIndex,
        M = n.stretch,
        O = n.getPopupClassNameFromAlign,
        D = n.fresh,
        L = n.alignPoint,
        W = n.onPopupClick,
        B = n.onPopupAlign,
        U = n.arrow,
        K = n.popupMotion,
        Y = n.maskMotion,
        q = n.popupTransitionName,
        X = n.popupAnimation,
        Q = n.maskTransitionName,
        J = n.maskAnimation,
        ne = n.className,
        te = n.getTriggerDOMNode,
        ae = xt(n, rO),
        ye = F || _ || !1,
        oe = g.useState(!1),
        he = V(oe, 2),
        ge = he[0],
        ce = he[1]
      ft(function () {
        ce(FM())
      }, [])
      var Ce = g.useRef({}),
        we = g.useContext(Tp),
        Ne = g.useMemo(
          function () {
            return {
              registerSubPopup: function (Pe, pt) {
                ;(Ce.current[Pe] = pt),
                  we == null || we.registerSubPopup(Pe, pt)
              },
            }
          },
          [we],
        ),
        Le = CR(),
        Z = g.useState(null),
        Se = V(Z, 2),
        ie = Se[0],
        Xe = Se[1],
        He = g.useRef(null),
        Ie = tt(function (ue) {
          ;(He.current = ue),
            El(ue) && ie !== ue && Xe(ue),
            we == null || we.registerSubPopup(Le, ue)
        }),
        Ye = g.useState(null),
        Je = V(Ye, 2),
        me = Je[0],
        We = Je[1],
        re = g.useRef(null),
        fe = tt(function (ue) {
          El(ue) && me !== ue && (We(ue), (re.current = ue))
        }),
        Re = g.Children.only(i),
        Ae = (Re == null ? void 0 : Re.props) || {},
        qe = {},
        Ze = tt(function (ue) {
          var Pe,
            pt,
            _t = me
          return (
            (_t == null ? void 0 : _t.contains(ue)) ||
            ((Pe = Nu(_t)) === null || Pe === void 0 ? void 0 : Pe.host) ===
              ue ||
            ue === _t ||
            (ie == null ? void 0 : ie.contains(ue)) ||
            ((pt = Nu(ie)) === null || pt === void 0 ? void 0 : pt.host) ===
              ue ||
            ue === ie ||
            Object.values(Ce.current).some(function (yt) {
              return (yt == null ? void 0 : yt.contains(ue)) || ue === yt
            })
          )
        }),
        Qe = Np(o, K, X, q),
        at = Np(o, Y, J, Q),
        Et = g.useState(f || !1),
        Ke = V(Et, 2),
        De = Ke[0],
        be = Ke[1],
        Te = d ?? De,
        pe = tt(function (ue) {
          d === void 0 && be(ue)
        })
      ft(
        function () {
          be(d || !1)
        },
        [d],
      )
      var se = g.useRef(Te)
      se.current = Te
      var xe = g.useRef([])
      xe.current = []
      var Ve = tt(function (ue) {
          var Pe
          pe(ue),
            ((Pe = xe.current[xe.current.length - 1]) !== null && Pe !== void 0
              ? Pe
              : Te) !== ue && (xe.current.push(ue), y == null || y(ue))
        }),
        et = g.useRef(),
        Rt = function () {
          clearTimeout(et.current)
        },
        vt = function (Pe) {
          var pt =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
          Rt(),
            pt === 0
              ? Ve(Pe)
              : (et.current = setTimeout(function () {
                  Ve(Pe)
                }, pt * 1e3))
        }
      g.useEffect(function () {
        return Rt
      }, [])
      var vr = g.useState(!1),
        Sn = V(vr, 2),
        bn = Sn[0],
        jn = Sn[1]
      ft(
        function (ue) {
          ;(!ue || Te) && jn(!0)
        },
        [Te],
      )
      var sn = g.useState(null),
        Cn = V(sn, 2),
        ct = Cn[0],
        un = Cn[1],
        Mt = g.useState([0, 0]),
        Mr = V(Mt, 2),
        zn = Mr[0],
        Xr = Mr[1],
        Hn = function (Pe) {
          Xr([Pe.clientX, Pe.clientY])
        },
        tr = eO(Te, ie, L ? zn : me, I, P, k, B),
        $t = V(tr, 11),
        _a = $t[0],
        pr = $t[1],
        At = $t[2],
        tn = $t[3],
        Or = $t[4],
        Ia = $t[5],
        Vn = $t[6],
        Jr = $t[7],
        Zr = $t[8],
        cn = $t[9],
        wn = $t[10],
        _r = XM(ge, s, u, c),
        ea = V(_r, 2),
        Bn = ea[0],
        nr = ea[1],
        Ir = Bn.has('click'),
        yr = nr.has('click') || nr.has('contextMenu'),
        xn = tt(function () {
          bn || wn()
        }),
        Ta = function () {
          se.current && L && yr && vt(!1)
        }
      tO(Te, me, ie, xn, Ta),
        ft(
          function () {
            xn()
          },
          [zn, I],
        ),
        ft(
          function () {
            Te && !(P != null && P[I]) && xn()
          },
          [JSON.stringify(k)],
        )
      var Fa = g.useMemo(
        function () {
          var ue = ZM(P, o, cn, L)
          return ke(ue, O == null ? void 0 : O(cn))
        },
        [cn, O, P, o, L],
      )
      g.useImperativeHandle(r, function () {
        return {
          nativeElement: re.current,
          popupElement: He.current,
          forceAlign: xn,
        }
      })
      var Na = g.useState(0),
        ta = V(Na, 2),
        Da = ta[0],
        Me = ta[1],
        Ee = g.useState(0),
        Ot = V(Ee, 2),
        dn = Ot[0],
        Sr = Ot[1],
        Fe = function () {
          if (M && me) {
            var Pe = me.getBoundingClientRect()
            Me(Pe.width), Sr(Pe.height)
          }
        },
        $e = function () {
          Fe(), xn()
        },
        je = function (Pe) {
          jn(!1), wn(), v == null || v(Pe)
        },
        bt = function () {
          return new Promise(function (Pe) {
            Fe(),
              un(function () {
                return Pe
              })
          })
        }
      ft(
        function () {
          ct && (wn(), ct(), un(null))
        },
        [ct],
      )
      function it(ue, Pe, pt, _t) {
        qe[ue] = function (yt) {
          var ns
          _t == null || _t(yt), vt(Pe, pt)
          for (
            var Jc = arguments.length,
              vm = new Array(Jc > 1 ? Jc - 1 : 0),
              rs = 1;
            rs < Jc;
            rs++
          )
            vm[rs - 1] = arguments[rs]
          ;(ns = Ae[ue]) === null ||
            ns === void 0 ||
            ns.call.apply(ns, [Ae, yt].concat(vm))
        }
      }
      ;(Ir || yr) &&
        (qe.onClick = function (ue) {
          var Pe
          se.current && yr ? vt(!1) : !se.current && Ir && (Hn(ue), vt(!0))
          for (
            var pt = arguments.length,
              _t = new Array(pt > 1 ? pt - 1 : 0),
              yt = 1;
            yt < pt;
            yt++
          )
            _t[yt - 1] = arguments[yt]
          ;(Pe = Ae.onClick) === null ||
            Pe === void 0 ||
            Pe.call.apply(Pe, [Ae, ue].concat(_t))
        }),
        nO(Te, yr, me, ie, C, E, Ze, vt)
      var Si = Bn.has('hover'),
        ts = nr.has('hover'),
        Tr,
        La
      Si &&
        (it('onMouseEnter', !0, p, function (ue) {
          Hn(ue)
        }),
        it('onPointerEnter', !0, p, function (ue) {
          Hn(ue)
        }),
        (Tr = function (Pe) {
          ;(Te || bn) &&
            ie !== null &&
            ie !== void 0 &&
            ie.contains(Pe.target) &&
            vt(!0, p)
        }),
        L &&
          (qe.onMouseMove = function (ue) {
            var Pe
            ;(Pe = Ae.onMouseMove) === null || Pe === void 0 || Pe.call(Ae, ue)
          })),
        ts &&
          (it('onMouseLeave', !1, m),
          it('onPointerLeave', !1, m),
          (La = function () {
            vt(!1, m)
          })),
        Bn.has('focus') && it('onFocus', !0, h),
        nr.has('focus') && it('onBlur', !1, S),
        Bn.has('contextMenu') &&
          (qe.onContextMenu = function (ue) {
            var Pe
            se.current && nr.has('contextMenu') ? vt(!1) : (Hn(ue), vt(!0)),
              ue.preventDefault()
            for (
              var pt = arguments.length,
                _t = new Array(pt > 1 ? pt - 1 : 0),
                yt = 1;
              yt < pt;
              yt++
            )
              _t[yt - 1] = arguments[yt]
            ;(Pe = Ae.onContextMenu) === null ||
              Pe === void 0 ||
              Pe.call.apply(Pe, [Ae, ue].concat(_t))
          }),
        ne && (qe.className = ke(Ae.className, ne))
      var po = H(H({}, Ae), qe),
        bi = {},
        Kc = [
          'onContextMenu',
          'onClick',
          'onMouseDown',
          'onTouchStart',
          'onMouseEnter',
          'onMouseLeave',
          'onFocus',
          'onBlur',
        ]
      Kc.forEach(function (ue) {
        ae[ue] &&
          (bi[ue] = function () {
            for (
              var Pe, pt = arguments.length, _t = new Array(pt), yt = 0;
              yt < pt;
              yt++
            )
              _t[yt] = arguments[yt]
            ;(Pe = po[ue]) === null ||
              Pe === void 0 ||
              Pe.call.apply(Pe, [po].concat(_t)),
              ae[ue].apply(ae, _t)
          })
      })
      var Gc = g.cloneElement(Re, H(H({}, po), bi)),
        Qc = { x: Ia, y: Vn },
        Xc = U ? H({}, U !== !0 ? U : {}) : null
      return g.createElement(
        g.Fragment,
        null,
        g.createElement(
          fo,
          { disabled: !Te, ref: fe, onResize: $e },
          g.createElement(QM, { getTriggerDOMNode: te }, Gc),
        ),
        g.createElement(
          Tp.Provider,
          { value: Ne },
          g.createElement(GM, {
            portal: e,
            ref: Ie,
            prefixCls: o,
            popup: T,
            className: ke(j, Fa),
            style: A,
            target: me,
            onMouseEnter: Tr,
            onMouseLeave: La,
            onPointerEnter: Tr,
            zIndex: $,
            open: Te,
            keepDom: bn,
            fresh: D,
            onClick: W,
            mask: C,
            motion: Qe,
            maskMotion: at,
            onVisibleChanged: je,
            onPrepare: bt,
            forceRender: R,
            autoDestroy: ye,
            getPopupContainer: x,
            align: cn,
            arrow: Xc,
            arrowPos: Qc,
            ready: _a,
            offsetX: pr,
            offsetY: At,
            offsetR: tn,
            offsetB: Or,
            onAlign: xn,
            stretch: M,
            targetWidth: Da / Jr,
            targetHeight: dn / Zr,
          }),
        ),
      )
    })
  return t
}
const oO = aO(ab)
function bb(e, t, n) {
  return ke({
    [`${e}-status-success`]: t === 'success',
    [`${e}-status-warning`]: t === 'warning',
    [`${e}-status-error`]: t === 'error',
    [`${e}-status-validating`]: t === 'validating',
    [`${e}-has-feedback`]: n,
  })
}
const Cb = (e, t) => t || e,
  iO = ['outlined', 'borderless', 'filled'],
  wb = function (e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0
    const n = g.useContext(vM)
    let r
    typeof e < 'u'
      ? (r = e)
      : t === !1
        ? (r = 'borderless')
        : (r = n ?? 'outlined')
    const a = iO.includes(r)
    return [r, a]
  },
  lO = (e) => {
    const {
        multipleSelectItemHeight: t,
        paddingXXS: n,
        lineWidth: r,
        INTERNAL_FIXED_ITEM_MARGIN: a,
      } = e,
      o = e.max(e.calc(n).sub(r).equal(), 0),
      i = e.max(e.calc(o).sub(a).equal(), 0)
    return {
      basePadding: o,
      containerPadding: i,
      itemHeight: ee(t),
      itemLineHeight: ee(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal()),
    }
  },
  sO = (e) => {
    const {
      componentCls: t,
      iconCls: n,
      borderRadiusSM: r,
      motionDurationSlow: a,
      paddingXS: o,
      multipleItemColorDisabled: i,
      multipleItemBorderColorDisabled: l,
      colorIcon: s,
      colorIconHover: u,
      INTERNAL_FIXED_ITEM_MARGIN: c,
    } = e
    return {
      [`${t}-selection-overflow`]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: '100%',
          display: 'inline-flex',
        },
        [`${t}-selection-item`]: {
          display: 'flex',
          alignSelf: 'center',
          flex: 'none',
          boxSizing: 'border-box',
          maxWidth: '100%',
          marginBlock: c,
          borderRadius: r,
          cursor: 'default',
          transition: `font-size ${a}, line-height ${a}, height ${a}`,
          marginInlineEnd: e.calc(c).mul(2).equal(),
          paddingInlineStart: o,
          paddingInlineEnd: e.calc(o).div(2).equal(),
          [`${t}-disabled&`]: {
            color: i,
            borderColor: l,
            cursor: 'not-allowed',
          },
          '&-content': {
            display: 'inline-block',
            marginInlineEnd: e.calc(o).div(2).equal(),
            overflow: 'hidden',
            whiteSpace: 'pre',
            textOverflow: 'ellipsis',
          },
          '&-remove': Object.assign(Object.assign({}, ES()), {
            display: 'inline-flex',
            alignItems: 'center',
            color: s,
            fontWeight: 'bold',
            fontSize: 10,
            lineHeight: 'inherit',
            cursor: 'pointer',
            [`> ${n}`]: { verticalAlign: '-0.2em' },
            '&:hover': { color: u },
          }),
        },
      },
    }
  }
var uO = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z',
          },
        },
      ],
    },
    name: 'check',
    theme: 'outlined',
  },
  cO = function (t, n) {
    return g.createElement(er, ve({}, t, { ref: n, icon: uO }))
  },
  dO = g.forwardRef(cO),
  fO = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          },
        },
      ],
    },
    name: 'down',
    theme: 'outlined',
  },
  gO = function (t, n) {
    return g.createElement(er, ve({}, t, { ref: n, icon: fO }))
  },
  hO = g.forwardRef(gO),
  mO = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          },
        },
      ],
    },
    name: 'search',
    theme: 'outlined',
  },
  vO = function (t, n) {
    return g.createElement(er, ve({}, t, { ref: n, icon: mO }))
  },
  pO = g.forwardRef(vO)
function yO(e) {
  let {
    suffixIcon: t,
    clearIcon: n,
    menuItemSelectedIcon: r,
    removeIcon: a,
    loading: o,
    multiple: i,
    hasFeedback: l,
    prefixCls: s,
    showSuffixIcon: u,
    feedbackIcon: c,
    showArrow: d,
    componentName: f,
  } = e
  const y = n ?? g.createElement(tk, null),
    v = (h) =>
      t === null && !l && !d
        ? null
        : g.createElement(g.Fragment, null, u !== !1 && h, l && c)
  let p = null
  if (t !== void 0) p = v(t)
  else if (o) p = v(g.createElement(US, { spin: !0 }))
  else {
    const h = `${s}-suffix`
    p = (S) => {
      let { open: C, showSearch: w } = S
      return v(
        C && w
          ? g.createElement(pO, { className: h })
          : g.createElement(hO, { className: h }),
      )
    }
  }
  let b = null
  r !== void 0 ? (b = r) : i ? (b = g.createElement(dO, null)) : (b = null)
  let m = null
  return (
    a !== void 0 ? (m = a) : (m = g.createElement(ak, null)),
    { clearIcon: y, suffixIcon: p, itemIcon: b, removeIcon: m }
  )
}
function SO(e) {
  const { sizePopupArrow: t, borderRadiusXS: n, borderRadiusOuter: r } = e,
    a = t / 2,
    o = 0,
    i = a,
    l = (r * 1) / Math.sqrt(2),
    s = a - r * (1 - 1 / Math.sqrt(2)),
    u = a - n * (1 / Math.sqrt(2)),
    c = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)),
    d = 2 * a - u,
    f = c,
    y = 2 * a - l,
    v = s,
    p = 2 * a - o,
    b = i,
    m = a * Math.sqrt(2) + r * (Math.sqrt(2) - 2),
    h = r * (Math.sqrt(2) - 1),
    S = `polygon(${h}px 100%, 50% ${h}px, ${2 * a - h}px 100%, ${h}px 100%)`,
    C = `path('M ${o} ${i} A ${r} ${r} 0 0 0 ${l} ${s} L ${u} ${c} A ${n} ${n} 0 0 1 ${d} ${f} L ${y} ${v} A ${r} ${r} 0 0 0 ${p} ${b} Z')`
  return { arrowShadowWidth: m, arrowPath: C, arrowPolygon: S }
}
const bO = (e, t, n) => {
  const {
    sizePopupArrow: r,
    arrowPolygon: a,
    arrowPath: o,
    arrowShadowWidth: i,
    borderRadiusXS: l,
    calc: s,
  } = e
  return {
    pointerEvents: 'none',
    width: r,
    height: r,
    overflow: 'hidden',
    '&::before': {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: 0,
      width: r,
      height: s(r).div(2).equal(),
      background: t,
      clipPath: { _multi_value_: !0, value: [a, o] },
      content: '""',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: 'auto',
      borderRadius: { _skip_check_: !0, value: `0 0 ${ee(l)} 0` },
      transform: 'translateY(50%) rotate(-135deg)',
      boxShadow: n,
      zIndex: 0,
      background: 'transparent',
    },
  }
}
var xb = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(kr, function () {
    var n = 1e3,
      r = 6e4,
      a = 36e5,
      o = 'millisecond',
      i = 'second',
      l = 'minute',
      s = 'hour',
      u = 'day',
      c = 'week',
      d = 'month',
      f = 'quarter',
      y = 'year',
      v = 'date',
      p = 'Invalid Date',
      b =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      m =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      h = {
        name: 'en',
        weekdays:
          'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
        ordinal: function (I) {
          var N = ['th', 'st', 'nd', 'rd'],
            P = I % 100
          return '[' + I + (N[(P - 20) % 10] || N[P] || N[0]) + ']'
        },
      },
      S = function (I, N, P) {
        var k = String(I)
        return !k || k.length >= N
          ? I
          : '' + Array(N + 1 - k.length).join(P) + I
      },
      C = {
        s: S,
        z: function (I) {
          var N = -I.utcOffset(),
            P = Math.abs(N),
            k = Math.floor(P / 60),
            $ = P % 60
          return (N <= 0 ? '+' : '-') + S(k, 2, '0') + ':' + S($, 2, '0')
        },
        m: function I(N, P) {
          if (N.date() < P.date()) return -I(P, N)
          var k = 12 * (P.year() - N.year()) + (P.month() - N.month()),
            $ = N.clone().add(k, d),
            M = P - $ < 0,
            O = N.clone().add(k + (M ? -1 : 1), d)
          return +(-(k + (P - $) / (M ? $ - O : O - $)) || 0)
        },
        a: function (I) {
          return I < 0 ? Math.ceil(I) || 0 : Math.floor(I)
        },
        p: function (I) {
          return (
            { M: d, y, w: c, d: u, D: v, h: s, m: l, s: i, ms: o, Q: f }[I] ||
            String(I || '')
              .toLowerCase()
              .replace(/s$/, '')
          )
        },
        u: function (I) {
          return I === void 0
        },
      },
      w = 'en',
      E = {}
    E[w] = h
    var x = '$isDayjsObject',
      R = function (I) {
        return I instanceof j || !(!I || !I[x])
      },
      F = function I(N, P, k) {
        var $
        if (!N) return w
        if (typeof N == 'string') {
          var M = N.toLowerCase()
          E[M] && ($ = M), P && ((E[M] = P), ($ = M))
          var O = N.split('-')
          if (!$ && O.length > 1) return I(O[0])
        } else {
          var D = N.name
          ;(E[D] = N), ($ = D)
        }
        return !k && $ && (w = $), $ || (!k && w)
      },
      _ = function (I, N) {
        if (R(I)) return I.clone()
        var P = typeof N == 'object' ? N : {}
        return (P.date = I), (P.args = arguments), new j(P)
      },
      T = C
    ;(T.l = F),
      (T.i = R),
      (T.w = function (I, N) {
        return _(I, { locale: N.$L, utc: N.$u, x: N.$x, $offset: N.$offset })
      })
    var j = (function () {
        function I(P) {
          ;(this.$L = F(P.locale, null, !0)),
            this.parse(P),
            (this.$x = this.$x || P.x || {}),
            (this[x] = !0)
        }
        var N = I.prototype
        return (
          (N.parse = function (P) {
            ;(this.$d = (function (k) {
              var $ = k.date,
                M = k.utc
              if ($ === null) return new Date(NaN)
              if (T.u($)) return new Date()
              if ($ instanceof Date) return new Date($)
              if (typeof $ == 'string' && !/Z$/i.test($)) {
                var O = $.match(b)
                if (O) {
                  var D = O[2] - 1 || 0,
                    L = (O[7] || '0').substring(0, 3)
                  return M
                    ? new Date(
                        Date.UTC(
                          O[1],
                          D,
                          O[3] || 1,
                          O[4] || 0,
                          O[5] || 0,
                          O[6] || 0,
                          L,
                        ),
                      )
                    : new Date(
                        O[1],
                        D,
                        O[3] || 1,
                        O[4] || 0,
                        O[5] || 0,
                        O[6] || 0,
                        L,
                      )
                }
              }
              return new Date($)
            })(P)),
              this.init()
          }),
          (N.init = function () {
            var P = this.$d
            ;(this.$y = P.getFullYear()),
              (this.$M = P.getMonth()),
              (this.$D = P.getDate()),
              (this.$W = P.getDay()),
              (this.$H = P.getHours()),
              (this.$m = P.getMinutes()),
              (this.$s = P.getSeconds()),
              (this.$ms = P.getMilliseconds())
          }),
          (N.$utils = function () {
            return T
          }),
          (N.isValid = function () {
            return this.$d.toString() !== p
          }),
          (N.isSame = function (P, k) {
            var $ = _(P)
            return this.startOf(k) <= $ && $ <= this.endOf(k)
          }),
          (N.isAfter = function (P, k) {
            return _(P) < this.startOf(k)
          }),
          (N.isBefore = function (P, k) {
            return this.endOf(k) < _(P)
          }),
          (N.$g = function (P, k, $) {
            return T.u(P) ? this[k] : this.set($, P)
          }),
          (N.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (N.valueOf = function () {
            return this.$d.getTime()
          }),
          (N.startOf = function (P, k) {
            var $ = this,
              M = !!T.u(k) || k,
              O = T.p(P),
              D = function (X, Q) {
                var J = T.w(
                  $.$u ? Date.UTC($.$y, Q, X) : new Date($.$y, Q, X),
                  $,
                )
                return M ? J : J.endOf(u)
              },
              L = function (X, Q) {
                return T.w(
                  $.toDate()[X].apply(
                    $.toDate('s'),
                    (M ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q),
                  ),
                  $,
                )
              },
              W = this.$W,
              B = this.$M,
              U = this.$D,
              K = 'set' + (this.$u ? 'UTC' : '')
            switch (O) {
              case y:
                return M ? D(1, 0) : D(31, 11)
              case d:
                return M ? D(1, B) : D(0, B + 1)
              case c:
                var Y = this.$locale().weekStart || 0,
                  q = (W < Y ? W + 7 : W) - Y
                return D(M ? U - q : U + (6 - q), B)
              case u:
              case v:
                return L(K + 'Hours', 0)
              case s:
                return L(K + 'Minutes', 1)
              case l:
                return L(K + 'Seconds', 2)
              case i:
                return L(K + 'Milliseconds', 3)
              default:
                return this.clone()
            }
          }),
          (N.endOf = function (P) {
            return this.startOf(P, !1)
          }),
          (N.$set = function (P, k) {
            var $,
              M = T.p(P),
              O = 'set' + (this.$u ? 'UTC' : ''),
              D = (($ = {}),
              ($[u] = O + 'Date'),
              ($[v] = O + 'Date'),
              ($[d] = O + 'Month'),
              ($[y] = O + 'FullYear'),
              ($[s] = O + 'Hours'),
              ($[l] = O + 'Minutes'),
              ($[i] = O + 'Seconds'),
              ($[o] = O + 'Milliseconds'),
              $)[M],
              L = M === u ? this.$D + (k - this.$W) : k
            if (M === d || M === y) {
              var W = this.clone().set(v, 1)
              W.$d[D](L),
                W.init(),
                (this.$d = W.set(v, Math.min(this.$D, W.daysInMonth())).$d)
            } else D && this.$d[D](L)
            return this.init(), this
          }),
          (N.set = function (P, k) {
            return this.clone().$set(P, k)
          }),
          (N.get = function (P) {
            return this[T.p(P)]()
          }),
          (N.add = function (P, k) {
            var $,
              M = this
            P = Number(P)
            var O = T.p(k),
              D = function (B) {
                var U = _(M)
                return T.w(U.date(U.date() + Math.round(B * P)), M)
              }
            if (O === d) return this.set(d, this.$M + P)
            if (O === y) return this.set(y, this.$y + P)
            if (O === u) return D(1)
            if (O === c) return D(7)
            var L = (($ = {}), ($[l] = r), ($[s] = a), ($[i] = n), $)[O] || 1,
              W = this.$d.getTime() + P * L
            return T.w(W, this)
          }),
          (N.subtract = function (P, k) {
            return this.add(-1 * P, k)
          }),
          (N.format = function (P) {
            var k = this,
              $ = this.$locale()
            if (!this.isValid()) return $.invalidDate || p
            var M = P || 'YYYY-MM-DDTHH:mm:ssZ',
              O = T.z(this),
              D = this.$H,
              L = this.$m,
              W = this.$M,
              B = $.weekdays,
              U = $.months,
              K = $.meridiem,
              Y = function (Q, J, ne, te) {
                return (Q && (Q[J] || Q(k, M))) || ne[J].slice(0, te)
              },
              q = function (Q) {
                return T.s(D % 12 || 12, Q, '0')
              },
              X =
                K ||
                function (Q, J, ne) {
                  var te = Q < 12 ? 'AM' : 'PM'
                  return ne ? te.toLowerCase() : te
                }
            return M.replace(m, function (Q, J) {
              return (
                J ||
                (function (ne) {
                  switch (ne) {
                    case 'YY':
                      return String(k.$y).slice(-2)
                    case 'YYYY':
                      return T.s(k.$y, 4, '0')
                    case 'M':
                      return W + 1
                    case 'MM':
                      return T.s(W + 1, 2, '0')
                    case 'MMM':
                      return Y($.monthsShort, W, U, 3)
                    case 'MMMM':
                      return Y(U, W)
                    case 'D':
                      return k.$D
                    case 'DD':
                      return T.s(k.$D, 2, '0')
                    case 'd':
                      return String(k.$W)
                    case 'dd':
                      return Y($.weekdaysMin, k.$W, B, 2)
                    case 'ddd':
                      return Y($.weekdaysShort, k.$W, B, 3)
                    case 'dddd':
                      return B[k.$W]
                    case 'H':
                      return String(D)
                    case 'HH':
                      return T.s(D, 2, '0')
                    case 'h':
                      return q(1)
                    case 'hh':
                      return q(2)
                    case 'a':
                      return X(D, L, !0)
                    case 'A':
                      return X(D, L, !1)
                    case 'm':
                      return String(L)
                    case 'mm':
                      return T.s(L, 2, '0')
                    case 's':
                      return String(k.$s)
                    case 'ss':
                      return T.s(k.$s, 2, '0')
                    case 'SSS':
                      return T.s(k.$ms, 3, '0')
                    case 'Z':
                      return O
                  }
                  return null
                })(Q) ||
                O.replace(':', '')
              )
            })
          }),
          (N.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (N.diff = function (P, k, $) {
            var M,
              O = this,
              D = T.p(k),
              L = _(P),
              W = (L.utcOffset() - this.utcOffset()) * r,
              B = this - L,
              U = function () {
                return T.m(O, L)
              }
            switch (D) {
              case y:
                M = U() / 12
                break
              case d:
                M = U()
                break
              case f:
                M = U() / 3
                break
              case c:
                M = (B - W) / 6048e5
                break
              case u:
                M = (B - W) / 864e5
                break
              case s:
                M = B / a
                break
              case l:
                M = B / r
                break
              case i:
                M = B / n
                break
              default:
                M = B
            }
            return $ ? M : T.a(M)
          }),
          (N.daysInMonth = function () {
            return this.endOf(d).$D
          }),
          (N.$locale = function () {
            return E[this.$L]
          }),
          (N.locale = function (P, k) {
            if (!P) return this.$L
            var $ = this.clone(),
              M = F(P, k, !0)
            return M && ($.$L = M), $
          }),
          (N.clone = function () {
            return T.w(this.$d, this)
          }),
          (N.toDate = function () {
            return new Date(this.valueOf())
          }),
          (N.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
          }),
          (N.toISOString = function () {
            return this.$d.toISOString()
          }),
          (N.toString = function () {
            return this.$d.toUTCString()
          }),
          I
        )
      })(),
      A = j.prototype
    return (
      (_.prototype = A),
      [
        ['$ms', o],
        ['$s', i],
        ['$m', l],
        ['$H', s],
        ['$W', u],
        ['$M', d],
        ['$y', y],
        ['$D', v],
      ].forEach(function (I) {
        A[I[1]] = function (N) {
          return this.$g(N, I[0], I[1])
        }
      }),
      (_.extend = function (I, N) {
        return I.$i || (I(N, j, _), (I.$i = !0)), _
      }),
      (_.locale = F),
      (_.isDayjs = R),
      (_.unix = function (I) {
        return _(1e3 * I)
      }),
      (_.en = E[w]),
      (_.Ls = E),
      (_.p = {}),
      _
    )
  })
})(xb)
var am = xb.exports
const zt = Rr(am)
var Eb = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(kr, function () {
    return function (n, r) {
      r.prototype.weekday = function (a) {
        var o = this.$locale().weekStart || 0,
          i = this.$W,
          l = (i < o ? i + 7 : i) - o
        return this.$utils().u(a) ? l : this.subtract(l, 'day').add(a, 'day')
      }
    }
  })
})(Eb)
var CO = Eb.exports
const wO = Rr(CO)
var $b = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(kr, function () {
    return function (n, r, a) {
      var o = r.prototype,
        i = function (d) {
          return d && (d.indexOf ? d : d.s)
        },
        l = function (d, f, y, v, p) {
          var b = d.name ? d : d.$locale(),
            m = i(b[f]),
            h = i(b[y]),
            S =
              m ||
              h.map(function (w) {
                return w.slice(0, v)
              })
          if (!p) return S
          var C = b.weekStart
          return S.map(function (w, E) {
            return S[(E + (C || 0)) % 7]
          })
        },
        s = function () {
          return a.Ls[a.locale()]
        },
        u = function (d, f) {
          return (
            d.formats[f] ||
            (function (y) {
              return y.replace(
                /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                function (v, p, b) {
                  return p || b.slice(1)
                },
              )
            })(d.formats[f.toUpperCase()])
          )
        },
        c = function () {
          var d = this
          return {
            months: function (f) {
              return f ? f.format('MMMM') : l(d, 'months')
            },
            monthsShort: function (f) {
              return f ? f.format('MMM') : l(d, 'monthsShort', 'months', 3)
            },
            firstDayOfWeek: function () {
              return d.$locale().weekStart || 0
            },
            weekdays: function (f) {
              return f ? f.format('dddd') : l(d, 'weekdays')
            },
            weekdaysMin: function (f) {
              return f ? f.format('dd') : l(d, 'weekdaysMin', 'weekdays', 2)
            },
            weekdaysShort: function (f) {
              return f ? f.format('ddd') : l(d, 'weekdaysShort', 'weekdays', 3)
            },
            longDateFormat: function (f) {
              return u(d.$locale(), f)
            },
            meridiem: this.$locale().meridiem,
            ordinal: this.$locale().ordinal,
          }
        }
      ;(o.localeData = function () {
        return c.bind(this)()
      }),
        (a.localeData = function () {
          var d = s()
          return {
            firstDayOfWeek: function () {
              return d.weekStart || 0
            },
            weekdays: function () {
              return a.weekdays()
            },
            weekdaysShort: function () {
              return a.weekdaysShort()
            },
            weekdaysMin: function () {
              return a.weekdaysMin()
            },
            months: function () {
              return a.months()
            },
            monthsShort: function () {
              return a.monthsShort()
            },
            longDateFormat: function (f) {
              return u(d, f)
            },
            meridiem: d.meridiem,
            ordinal: d.ordinal,
          }
        }),
        (a.months = function () {
          return l(s(), 'months')
        }),
        (a.monthsShort = function () {
          return l(s(), 'monthsShort', 'months', 3)
        }),
        (a.weekdays = function (d) {
          return l(s(), 'weekdays', null, null, d)
        }),
        (a.weekdaysShort = function (d) {
          return l(s(), 'weekdaysShort', 'weekdays', 3, d)
        }),
        (a.weekdaysMin = function (d) {
          return l(s(), 'weekdaysMin', 'weekdays', 2, d)
        })
    }
  })
})($b)
var xO = $b.exports
const EO = Rr(xO)
var Pb = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(kr, function () {
    var n = 'week',
      r = 'year'
    return function (a, o, i) {
      var l = o.prototype
      ;(l.week = function (s) {
        if ((s === void 0 && (s = null), s !== null))
          return this.add(7 * (s - this.week()), 'day')
        var u = this.$locale().yearStart || 1
        if (this.month() === 11 && this.date() > 25) {
          var c = i(this).startOf(r).add(1, r).date(u),
            d = i(this).endOf(n)
          if (c.isBefore(d)) return 1
        }
        var f = i(this)
            .startOf(r)
            .date(u)
            .startOf(n)
            .subtract(1, 'millisecond'),
          y = this.diff(f, n, !0)
        return y < 0 ? i(this).startOf('week').week() : Math.ceil(y)
      }),
        (l.weeks = function (s) {
          return s === void 0 && (s = null), this.week(s)
        })
    }
  })
})(Pb)
var $O = Pb.exports
const PO = Rr($O)
var kb = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(kr, function () {
    return function (n, r) {
      r.prototype.weekYear = function () {
        var a = this.month(),
          o = this.week(),
          i = this.year()
        return o === 1 && a === 11 ? i + 1 : a === 0 && o >= 52 ? i - 1 : i
      }
    }
  })
})(kb)
var kO = kb.exports
const RO = Rr(kO)
var Rb = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(kr, function () {
    return function (n, r) {
      var a = r.prototype,
        o = a.format
      a.format = function (i) {
        var l = this,
          s = this.$locale()
        if (!this.isValid()) return o.bind(this)(i)
        var u = this.$utils(),
          c = (i || 'YYYY-MM-DDTHH:mm:ssZ').replace(
            /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
            function (d) {
              switch (d) {
                case 'Q':
                  return Math.ceil((l.$M + 1) / 3)
                case 'Do':
                  return s.ordinal(l.$D)
                case 'gggg':
                  return l.weekYear()
                case 'GGGG':
                  return l.isoWeekYear()
                case 'wo':
                  return s.ordinal(l.week(), 'W')
                case 'w':
                case 'ww':
                  return u.s(l.week(), d === 'w' ? 1 : 2, '0')
                case 'W':
                case 'WW':
                  return u.s(l.isoWeek(), d === 'W' ? 1 : 2, '0')
                case 'k':
                case 'kk':
                  return u.s(
                    String(l.$H === 0 ? 24 : l.$H),
                    d === 'k' ? 1 : 2,
                    '0',
                  )
                case 'X':
                  return Math.floor(l.$d.getTime() / 1e3)
                case 'x':
                  return l.$d.getTime()
                case 'z':
                  return '[' + l.offsetName() + ']'
                case 'zzz':
                  return '[' + l.offsetName('long') + ']'
                default:
                  return d
              }
            },
          )
        return o.bind(this)(c)
      }
    }
  })
})(Rb)
var MO = Rb.exports
const OO = Rr(MO)
var Mb = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(kr, function () {
    var n = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
      },
      r =
        /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      a = /\d\d/,
      o = /\d\d?/,
      i = /\d*[^-_:/,()\s\d]+/,
      l = {},
      s = function (p) {
        return (p = +p) + (p > 68 ? 1900 : 2e3)
      },
      u = function (p) {
        return function (b) {
          this[p] = +b
        }
      },
      c = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function (p) {
          ;(this.zone || (this.zone = {})).offset = (function (b) {
            if (!b || b === 'Z') return 0
            var m = b.match(/([+-]|\d\d)/g),
              h = 60 * m[1] + (+m[2] || 0)
            return h === 0 ? 0 : m[0] === '+' ? -h : h
          })(p)
        },
      ],
      d = function (p) {
        var b = l[p]
        return b && (b.indexOf ? b : b.s.concat(b.f))
      },
      f = function (p, b) {
        var m,
          h = l.meridiem
        if (h) {
          for (var S = 1; S <= 24; S += 1)
            if (p.indexOf(h(S, 0, b)) > -1) {
              m = S > 12
              break
            }
        } else m = p === (b ? 'pm' : 'PM')
        return m
      },
      y = {
        A: [
          i,
          function (p) {
            this.afternoon = f(p, !1)
          },
        ],
        a: [
          i,
          function (p) {
            this.afternoon = f(p, !0)
          },
        ],
        S: [
          /\d/,
          function (p) {
            this.milliseconds = 100 * +p
          },
        ],
        SS: [
          a,
          function (p) {
            this.milliseconds = 10 * +p
          },
        ],
        SSS: [
          /\d{3}/,
          function (p) {
            this.milliseconds = +p
          },
        ],
        s: [o, u('seconds')],
        ss: [o, u('seconds')],
        m: [o, u('minutes')],
        mm: [o, u('minutes')],
        H: [o, u('hours')],
        h: [o, u('hours')],
        HH: [o, u('hours')],
        hh: [o, u('hours')],
        D: [o, u('day')],
        DD: [a, u('day')],
        Do: [
          i,
          function (p) {
            var b = l.ordinal,
              m = p.match(/\d+/)
            if (((this.day = m[0]), b))
              for (var h = 1; h <= 31; h += 1)
                b(h).replace(/\[|\]/g, '') === p && (this.day = h)
          },
        ],
        M: [o, u('month')],
        MM: [a, u('month')],
        MMM: [
          i,
          function (p) {
            var b = d('months'),
              m =
                (
                  d('monthsShort') ||
                  b.map(function (h) {
                    return h.slice(0, 3)
                  })
                ).indexOf(p) + 1
            if (m < 1) throw new Error()
            this.month = m % 12 || m
          },
        ],
        MMMM: [
          i,
          function (p) {
            var b = d('months').indexOf(p) + 1
            if (b < 1) throw new Error()
            this.month = b % 12 || b
          },
        ],
        Y: [/[+-]?\d+/, u('year')],
        YY: [
          a,
          function (p) {
            this.year = s(p)
          },
        ],
        YYYY: [/\d{4}/, u('year')],
        Z: c,
        ZZ: c,
      }
    function v(p) {
      var b, m
      ;(b = p), (m = l && l.formats)
      for (
        var h = (p = b.replace(
            /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
            function (F, _, T) {
              var j = T && T.toUpperCase()
              return (
                _ ||
                m[T] ||
                n[T] ||
                m[j].replace(
                  /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                  function (A, I, N) {
                    return I || N.slice(1)
                  },
                )
              )
            },
          )).match(r),
          S = h.length,
          C = 0;
        C < S;
        C += 1
      ) {
        var w = h[C],
          E = y[w],
          x = E && E[0],
          R = E && E[1]
        h[C] = R ? { regex: x, parser: R } : w.replace(/^\[|\]$/g, '')
      }
      return function (F) {
        for (var _ = {}, T = 0, j = 0; T < S; T += 1) {
          var A = h[T]
          if (typeof A == 'string') j += A.length
          else {
            var I = A.regex,
              N = A.parser,
              P = F.slice(j),
              k = I.exec(P)[0]
            N.call(_, k), (F = F.replace(k, ''))
          }
        }
        return (
          (function ($) {
            var M = $.afternoon
            if (M !== void 0) {
              var O = $.hours
              M ? O < 12 && ($.hours += 12) : O === 12 && ($.hours = 0),
                delete $.afternoon
            }
          })(_),
          _
        )
      }
    }
    return function (p, b, m) {
      ;(m.p.customParseFormat = !0),
        p && p.parseTwoDigitYear && (s = p.parseTwoDigitYear)
      var h = b.prototype,
        S = h.parse
      h.parse = function (C) {
        var w = C.date,
          E = C.utc,
          x = C.args
        this.$u = E
        var R = x[1]
        if (typeof R == 'string') {
          var F = x[2] === !0,
            _ = x[3] === !0,
            T = F || _,
            j = x[2]
          _ && (j = x[2]),
            (l = this.$locale()),
            !F && j && (l = m.Ls[j]),
            (this.$d = (function (P, k, $) {
              try {
                if (['x', 'X'].indexOf(k) > -1)
                  return new Date((k === 'X' ? 1e3 : 1) * P)
                var M = v(k)(P),
                  O = M.year,
                  D = M.month,
                  L = M.day,
                  W = M.hours,
                  B = M.minutes,
                  U = M.seconds,
                  K = M.milliseconds,
                  Y = M.zone,
                  q = new Date(),
                  X = L || (O || D ? 1 : q.getDate()),
                  Q = O || q.getFullYear(),
                  J = 0
                ;(O && !D) || (J = D > 0 ? D - 1 : q.getMonth())
                var ne = W || 0,
                  te = B || 0,
                  ae = U || 0,
                  ye = K || 0
                return Y
                  ? new Date(
                      Date.UTC(Q, J, X, ne, te, ae, ye + 60 * Y.offset * 1e3),
                    )
                  : $
                    ? new Date(Date.UTC(Q, J, X, ne, te, ae, ye))
                    : new Date(Q, J, X, ne, te, ae, ye)
              } catch {
                return new Date('')
              }
            })(w, R, E)),
            this.init(),
            j && j !== !0 && (this.$L = this.locale(j).$L),
            T && w != this.format(R) && (this.$d = new Date('')),
            (l = {})
        } else if (R instanceof Array)
          for (var A = R.length, I = 1; I <= A; I += 1) {
            x[1] = R[I - 1]
            var N = m.apply(this, x)
            if (N.isValid()) {
              ;(this.$d = N.$d), (this.$L = N.$L), this.init()
              break
            }
            I === A && (this.$d = new Date(''))
          }
        else S.call(this, C)
      }
    }
  })
})(Mb)
var _O = Mb.exports
const IO = Rr(_O)
zt.extend(IO)
zt.extend(OO)
zt.extend(wO)
zt.extend(EO)
zt.extend(PO)
zt.extend(RO)
zt.extend(function (e, t) {
  var n = t.prototype,
    r = n.format
  n.format = function (o) {
    var i = (o || '').replace('Wo', 'wo')
    return r.bind(this)(i)
  }
})
var TO = {
    bn_BD: 'bn-bd',
    by_BY: 'be',
    en_GB: 'en-gb',
    en_US: 'en',
    fr_BE: 'fr',
    fr_CA: 'fr-ca',
    hy_AM: 'hy-am',
    kmr_IQ: 'ku',
    nl_BE: 'nl-be',
    pt_BR: 'pt-br',
    zh_CN: 'zh-cn',
    zh_HK: 'zh-hk',
    zh_TW: 'zh-tw',
  },
  Aa = function (t) {
    var n = TO[t]
    return n || t.split('_')[0]
  },
  zp = function () {
    R1(!1, 'Not match any format. Please help to fire a issue about this.')
  },
  FO = {
    getNow: function () {
      return zt()
    },
    getFixedDate: function (t) {
      return zt(t, ['YYYY-M-DD', 'YYYY-MM-DD'])
    },
    getEndDate: function (t) {
      return t.endOf('month')
    },
    getWeekDay: function (t) {
      var n = t.locale('en')
      return n.weekday() + n.localeData().firstDayOfWeek()
    },
    getYear: function (t) {
      return t.year()
    },
    getMonth: function (t) {
      return t.month()
    },
    getDate: function (t) {
      return t.date()
    },
    getHour: function (t) {
      return t.hour()
    },
    getMinute: function (t) {
      return t.minute()
    },
    getSecond: function (t) {
      return t.second()
    },
    getMillisecond: function (t) {
      return t.millisecond()
    },
    addYear: function (t, n) {
      return t.add(n, 'year')
    },
    addMonth: function (t, n) {
      return t.add(n, 'month')
    },
    addDate: function (t, n) {
      return t.add(n, 'day')
    },
    setYear: function (t, n) {
      return t.year(n)
    },
    setMonth: function (t, n) {
      return t.month(n)
    },
    setDate: function (t, n) {
      return t.date(n)
    },
    setHour: function (t, n) {
      return t.hour(n)
    },
    setMinute: function (t, n) {
      return t.minute(n)
    },
    setSecond: function (t, n) {
      return t.second(n)
    },
    setMillisecond: function (t, n) {
      return t.millisecond(n)
    },
    isAfter: function (t, n) {
      return t.isAfter(n)
    },
    isValidate: function (t) {
      return t.isValid()
    },
    locale: {
      getWeekFirstDay: function (t) {
        return zt().locale(Aa(t)).localeData().firstDayOfWeek()
      },
      getWeekFirstDate: function (t, n) {
        return n.locale(Aa(t)).weekday(0)
      },
      getWeek: function (t, n) {
        return n.locale(Aa(t)).week()
      },
      getShortWeekDays: function (t) {
        return zt().locale(Aa(t)).localeData().weekdaysMin()
      },
      getShortMonths: function (t) {
        return zt().locale(Aa(t)).localeData().monthsShort()
      },
      format: function (t, n, r) {
        return n.locale(Aa(t)).format(r)
      },
      parse: function (t, n, r) {
        for (var a = Aa(t), o = 0; o < r.length; o += 1) {
          var i = r[o],
            l = n
          if (i.includes('wo') || i.includes('Wo')) {
            for (
              var s = l.split('-')[0],
                u = l.split('-')[1],
                c = zt(s, 'YYYY').startOf('year').locale(a),
                d = 0;
              d <= 52;
              d += 1
            ) {
              var f = c.add(d, 'week')
              if (f.format('Wo') === u) return f
            }
            return zp(), null
          }
          var y = zt(l, i, !0).locale(a)
          if (y.isValid()) return y
        }
        return n && zp(), null
      },
    },
  },
  mr = g.createContext(null),
  NO = {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: { adjustX: 1, adjustY: 1 },
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: { adjustX: 1, adjustY: 1 },
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: { adjustX: 0, adjustY: 1 },
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: { adjustX: 0, adjustY: 1 },
    },
  }
function Ob(e) {
  var t = e.popupElement,
    n = e.popupStyle,
    r = e.popupClassName,
    a = e.popupAlign,
    o = e.transitionName,
    i = e.getPopupContainer,
    l = e.children,
    s = e.range,
    u = e.placement,
    c = e.builtinPlacements,
    d = c === void 0 ? NO : c,
    f = e.direction,
    y = e.visible,
    v = e.onClose,
    p = g.useContext(mr),
    b = p.prefixCls,
    m = ''.concat(b, '-dropdown'),
    h = g.useMemo(
      function () {
        return u !== void 0 ? u : f === 'rtl' ? 'bottomRight' : 'bottomLeft'
      },
      [u, f],
    )
  return g.createElement(
    oO,
    {
      showAction: [],
      hideAction: ['click'],
      popupPlacement: h,
      builtinPlacements: d,
      prefixCls: m,
      popupTransitionName: o,
      popup: t,
      popupAlign: a,
      popupVisible: y,
      popupClassName: ke(
        r,
        z(z({}, ''.concat(m, '-range'), s), ''.concat(m, '-rtl'), f === 'rtl'),
      ),
      popupStyle: n,
      stretch: 'minWidth',
      getPopupContainer: i,
      onPopupVisibleChange: function (C) {
        C || v()
      },
    },
    l,
  )
}
function om(e, t) {
  for (
    var n =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0',
      r = String(e);
    r.length < t;

  )
    r = ''.concat(n).concat(r)
  return r
}
function mo(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function ol(e, t, n) {
  var r = de(e)
  return (r[t] = n), r
}
function Oc(e, t) {
  var n = {},
    r = t || Object.keys(e)
  return (
    r.forEach(function (a) {
      e[a] !== void 0 && (n[a] = e[a])
    }),
    n
  )
}
function _b(e, t, n) {
  if (n) return n
  switch (e) {
    case 'time':
      return t.fieldTimeFormat
    case 'datetime':
      return t.fieldDateTimeFormat
    case 'month':
      return t.fieldMonthFormat
    case 'year':
      return t.fieldYearFormat
    case 'quarter':
      return t.fieldQuarterFormat
    case 'week':
      return t.fieldWeekFormat
    default:
      return t.fieldDateFormat
  }
}
function Ib(e, t, n) {
  var r = n !== void 0 ? n : t[t.length - 1],
    a = t.find(function (o) {
      return e[o]
    })
  return r !== a ? e[a] : void 0
}
function Tb(e) {
  return Oc(e, [
    'placement',
    'builtinPlacements',
    'popupAlign',
    'getPopupContainer',
    'transitionName',
    'direction',
  ])
}
function im(e, t, n, r) {
  var a = g.useMemo(
      function () {
        return (
          e ||
          function (i, l) {
            var s = i
            return t && l.type === 'date'
              ? t(s, l.today)
              : n && l.type === 'month'
                ? n(s, l.locale)
                : l.originNode
          }
        )
      },
      [e, n, t],
    ),
    o = g.useCallback(
      function (i, l) {
        return a(i, H(H({}, l), {}, { range: r }))
      },
      [a, r],
    )
  return o
}
function Fb(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
    r = g.useState([!1, !1]),
    a = V(r, 2),
    o = a[0],
    i = a[1],
    l = function (c, d) {
      i(function (f) {
        return ol(f, d, c)
      })
    },
    s = g.useMemo(
      function () {
        return o.map(function (u, c) {
          if (u) return !0
          var d = e[c]
          return d ? !!((!n[c] && !d) || (d && t(d, { activeIndex: c }))) : !1
        })
      },
      [e, o, t, n],
    )
  return [s, l]
}
function Nb(e, t, n, r, a) {
  var o = '',
    i = []
  return (
    e && i.push(a ? 'hh' : 'HH'),
    t && i.push('mm'),
    n && i.push('ss'),
    (o = i.join(':')),
    r && (o += '.SSS'),
    a && (o += ' A'),
    o
  )
}
function DO(e, t, n, r, a, o) {
  var i = e.fieldDateTimeFormat,
    l = e.fieldDateFormat,
    s = e.fieldTimeFormat,
    u = e.fieldMonthFormat,
    c = e.fieldYearFormat,
    d = e.fieldWeekFormat,
    f = e.fieldQuarterFormat,
    y = e.yearFormat,
    v = e.cellYearFormat,
    p = e.cellQuarterFormat,
    b = e.dayFormat,
    m = e.cellDateFormat,
    h = Nb(t, n, r, a, o)
  return H(
    H({}, e),
    {},
    {
      fieldDateTimeFormat: i || 'YYYY-MM-DD '.concat(h),
      fieldDateFormat: l || 'YYYY-MM-DD',
      fieldTimeFormat: s || h,
      fieldMonthFormat: u || 'YYYY-MM',
      fieldYearFormat: c || 'YYYY',
      fieldWeekFormat: d || 'gggg-wo',
      fieldQuarterFormat: f || 'YYYY-[Q]Q',
      yearFormat: y || 'YYYY',
      cellYearFormat: v || 'YYYY',
      cellQuarterFormat: p || '[Q]Q',
      cellDateFormat: m || b || 'D',
    },
  )
}
function Db(e, t) {
  var n = t.showHour,
    r = t.showMinute,
    a = t.showSecond,
    o = t.showMillisecond,
    i = t.use12Hours
  return Oe.useMemo(
    function () {
      return DO(e, n, r, a, o, i)
    },
    [e, n, r, a, o, i],
  )
}
function Ti(e, t, n) {
  return (
    n ??
    t.some(function (r) {
      return e.includes(r)
    })
  )
}
var LO = [
  'showNow',
  'showHour',
  'showMinute',
  'showSecond',
  'showMillisecond',
  'use12Hours',
  'hourStep',
  'minuteStep',
  'secondStep',
  'millisecondStep',
  'hideDisabledOptions',
  'defaultValue',
  'disabledHours',
  'disabledMinutes',
  'disabledSeconds',
  'disabledMilliseconds',
  'disabledTime',
  'changeOnScroll',
  'defaultOpenValue',
]
function AO(e) {
  var t = Oc(e, LO),
    n = e.format,
    r = e.picker,
    a = null
  return (
    n &&
      ((a = n),
      Array.isArray(a) && (a = a[0]),
      (a = _e(a) === 'object' ? a.format : a)),
    r === 'time' && (t.format = a),
    [t, a]
  )
}
function jO(e) {
  return e && typeof e == 'string'
}
function Lb(e, t, n, r) {
  return [e, t, n, r].some(function (a) {
    return a !== void 0
  })
}
function Ab(e, t, n, r, a) {
  var o = t,
    i = n,
    l = r
  if (!e && !o && !i && !l && !a) (o = !0), (i = !0), (l = !0)
  else if (e) {
    var s,
      u,
      c,
      d = [o, i, l].some(function (v) {
        return v === !1
      }),
      f = [o, i, l].some(function (v) {
        return v === !0
      }),
      y = d ? !0 : !f
    ;(o = (s = o) !== null && s !== void 0 ? s : y),
      (i = (u = i) !== null && u !== void 0 ? u : y),
      (l = (c = l) !== null && c !== void 0 ? c : y)
  }
  return [o, i, l, a]
}
function jb(e) {
  var t = e.showTime,
    n = AO(e),
    r = V(n, 2),
    a = r[0],
    o = r[1],
    i = t && _e(t) === 'object' ? t : {},
    l = H(H({ defaultOpenValue: i.defaultOpenValue || i.defaultValue }, a), i),
    s = l.showMillisecond,
    u = l.showHour,
    c = l.showMinute,
    d = l.showSecond,
    f = Lb(u, c, d, s),
    y = Ab(f, u, c, d, s),
    v = V(y, 3)
  return (
    (u = v[0]),
    (c = v[1]),
    (d = v[2]),
    [
      l,
      H(
        H({}, l),
        {},
        { showHour: u, showMinute: c, showSecond: d, showMillisecond: s },
      ),
      l.format,
      o,
    ]
  )
}
function zb(e, t, n, r, a) {
  var o = e === 'time'
  if (e === 'datetime' || o) {
    for (
      var i = r, l = _b(e, a, null), s = l, u = [t, n], c = 0;
      c < u.length;
      c += 1
    ) {
      var d = mo(u[c])[0]
      if (jO(d)) {
        s = d
        break
      }
    }
    var f = i.showHour,
      y = i.showMinute,
      v = i.showSecond,
      p = i.showMillisecond,
      b = i.use12Hours,
      m = Ti(s, ['a', 'A', 'LT', 'LLL', 'LTS'], b),
      h = Lb(f, y, v, p)
    h ||
      ((f = Ti(s, ['H', 'h', 'k', 'LT', 'LLL'])),
      (y = Ti(s, ['m', 'LT', 'LLL'])),
      (v = Ti(s, ['s', 'LTS'])),
      (p = Ti(s, ['SSS'])))
    var S = Ab(h, f, y, v, p),
      C = V(S, 3)
    ;(f = C[0]), (y = C[1]), (v = C[2])
    var w = t || Nb(f, y, v, p, m)
    return H(
      H({}, i),
      {},
      {
        format: w,
        showHour: f,
        showMinute: y,
        showSecond: v,
        showMillisecond: p,
        use12Hours: m,
      },
    )
  }
  return null
}
function zO(e, t, n) {
  if (t === !1) return null
  var r = t && _e(t) === 'object' ? t : {}
  return (
    r.clearIcon ||
    n ||
    g.createElement('span', { className: ''.concat(e, '-clear-btn') })
  )
}
var Wd = 7
function Oa(e, t, n) {
  return (!e && !t) || e === t ? !0 : !e || !t ? !1 : n()
}
function Og(e, t, n) {
  return Oa(t, n, function () {
    var r = Math.floor(e.getYear(t) / 10),
      a = Math.floor(e.getYear(n) / 10)
    return r === a
  })
}
function lo(e, t, n) {
  return Oa(t, n, function () {
    return e.getYear(t) === e.getYear(n)
  })
}
function Hp(e, t) {
  var n = Math.floor(e.getMonth(t) / 3)
  return n + 1
}
function HO(e, t, n) {
  return Oa(t, n, function () {
    return lo(e, t, n) && Hp(e, t) === Hp(e, n)
  })
}
function lm(e, t, n) {
  return Oa(t, n, function () {
    return lo(e, t, n) && e.getMonth(t) === e.getMonth(n)
  })
}
function sm(e, t, n) {
  return Oa(t, n, function () {
    return lo(e, t, n) && lm(e, t, n) && e.getDate(t) === e.getDate(n)
  })
}
function Hb(e, t, n) {
  return Oa(t, n, function () {
    return (
      e.getHour(t) === e.getHour(n) &&
      e.getMinute(t) === e.getMinute(n) &&
      e.getSecond(t) === e.getSecond(n)
    )
  })
}
function Vb(e, t, n) {
  return Oa(t, n, function () {
    return (
      sm(e, t, n) && Hb(e, t, n) && e.getMillisecond(t) === e.getMillisecond(n)
    )
  })
}
function Bi(e, t, n, r) {
  return Oa(n, r, function () {
    var a = e.locale.getWeekFirstDate(t, n),
      o = e.locale.getWeekFirstDate(t, r)
    return lo(e, a, o) && e.locale.getWeek(t, n) === e.locale.getWeek(t, r)
  })
}
function Xt(e, t, n, r, a) {
  switch (a) {
    case 'date':
      return sm(e, n, r)
    case 'week':
      return Bi(e, t.locale, n, r)
    case 'month':
      return lm(e, n, r)
    case 'quarter':
      return HO(e, n, r)
    case 'year':
      return lo(e, n, r)
    case 'decade':
      return Og(e, n, r)
    case 'time':
      return Hb(e, n, r)
    default:
      return Vb(e, n, r)
  }
}
function _c(e, t, n, r) {
  return !t || !n || !r ? !1 : e.isAfter(r, t) && e.isAfter(n, r)
}
function Is(e, t, n, r, a) {
  return Xt(e, t, n, r, a) ? !0 : e.isAfter(n, r)
}
function VO(e, t, n) {
  var r = t.locale.getWeekFirstDay(e),
    a = t.setDate(n, 1),
    o = t.getWeekDay(a),
    i = t.addDate(a, r - o)
  return (
    t.getMonth(i) === t.getMonth(n) &&
      t.getDate(i) > 1 &&
      (i = t.addDate(i, -7)),
    i
  )
}
function Ft(e, t) {
  var n = t.generateConfig,
    r = t.locale,
    a = t.format
  return e
    ? typeof a == 'function'
      ? a(e)
      : n.locale.format(r.locale, e, a)
    : ''
}
function zu(e, t, n) {
  var r = t,
    a = ['getHour', 'getMinute', 'getSecond', 'getMillisecond'],
    o = ['setHour', 'setMinute', 'setSecond', 'setMillisecond']
  return (
    o.forEach(function (i, l) {
      n ? (r = e[i](r, e[a[l]](n))) : (r = e[i](r, 0))
    }),
    r
  )
}
function BO(e, t, n, r, a) {
  var o = tt(function (i, l) {
    return !!(
      (n && n(i, l)) ||
      (r && e.isAfter(r, i) && !Xt(e, t, r, i, l.type)) ||
      (a && e.isAfter(i, a) && !Xt(e, t, a, i, l.type))
    )
  })
  return o
}
function WO(e, t, n) {
  return g.useMemo(
    function () {
      var r = _b(e, t, n),
        a = mo(r),
        o = a[0],
        i = _e(o) === 'object' && o.type === 'mask' ? o.format : null
      return [
        a.map(function (l) {
          return typeof l == 'string' || typeof l == 'function' ? l : l.format
        }),
        i,
      ]
    },
    [e, t, n],
  )
}
function UO(e, t, n) {
  return typeof e[0] == 'function' || n ? !0 : t
}
function YO(e, t, n, r) {
  var a = tt(function (o, i) {
    var l = H({ type: t }, i)
    if ((delete l.activeIndex, !e.isValidate(o) || (n && n(o, l)))) return !0
    if ((t === 'date' || t === 'time') && r) {
      var s,
        u = i && i.activeIndex === 1 ? 'end' : 'start',
        c =
          ((s = r.disabledTime) === null || s === void 0
            ? void 0
            : s.call(r, o, u, { from: l.from })) || {},
        d = c.disabledHours,
        f = c.disabledMinutes,
        y = c.disabledSeconds,
        v = c.disabledMilliseconds,
        p = r.disabledHours,
        b = r.disabledMinutes,
        m = r.disabledSeconds,
        h = d || p,
        S = f || b,
        C = y || m,
        w = e.getHour(o),
        E = e.getMinute(o),
        x = e.getSecond(o),
        R = e.getMillisecond(o)
      if (
        (h && h().includes(w)) ||
        (S && S(w).includes(E)) ||
        (C && C(w, E).includes(x)) ||
        (v && v(w, E, x).includes(R))
      )
        return !0
    }
    return !1
  })
  return a
}
function Ts(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = g.useMemo(
      function () {
        var r = e && mo(e)
        return t && r && (r[1] = r[1] || r[0]), r
      },
      [e, t],
    )
  return n
}
function Bb(e, t) {
  var n = e.generateConfig,
    r = e.locale,
    a = e.picker,
    o = a === void 0 ? 'date' : a,
    i = e.prefixCls,
    l = i === void 0 ? 'rc-picker' : i,
    s = e.styles,
    u = s === void 0 ? {} : s,
    c = e.classNames,
    d = c === void 0 ? {} : c,
    f = e.order,
    y = f === void 0 ? !0 : f,
    v = e.components,
    p = v === void 0 ? {} : v,
    b = e.inputRender,
    m = e.allowClear,
    h = e.clearIcon,
    S = e.needConfirm,
    C = e.multiple,
    w = e.format,
    E = e.inputReadOnly,
    x = e.disabledDate,
    R = e.minDate,
    F = e.maxDate,
    _ = e.showTime,
    T = e.value,
    j = e.defaultValue,
    A = e.pickerValue,
    I = e.defaultPickerValue,
    N = Ts(T),
    P = Ts(j),
    k = Ts(A),
    $ = Ts(I),
    M = o === 'date' && _ ? 'datetime' : o,
    O = M === 'time' || M === 'datetime',
    D = O || C,
    L = S ?? O,
    W = jb(e),
    B = V(W, 4),
    U = B[0],
    K = B[1],
    Y = B[2],
    q = B[3],
    X = Db(r, K),
    Q = g.useMemo(
      function () {
        return zb(M, Y, q, U, X)
      },
      [M, Y, q, U, X],
    ),
    J = g.useMemo(
      function () {
        return H(
          H({}, e),
          {},
          {
            prefixCls: l,
            locale: X,
            picker: o,
            styles: u,
            classNames: d,
            order: y,
            components: H({ input: b }, p),
            clearIcon: zO(l, m, h),
            showTime: Q,
            value: N,
            defaultValue: P,
            pickerValue: k,
            defaultPickerValue: $,
          },
          t == null ? void 0 : t(),
        )
      },
      [e],
    ),
    ne = WO(M, X, w),
    te = V(ne, 2),
    ae = te[0],
    ye = te[1],
    oe = UO(ae, E, C),
    he = BO(n, r, x, R, F),
    ge = YO(n, o, he, Q),
    ce = g.useMemo(
      function () {
        return H(
          H({}, J),
          {},
          { needConfirm: L, inputReadOnly: oe, disabledDate: he },
        )
      },
      [J, L, oe, he],
    )
  return [ce, M, D, ae, ye, ge]
}
function qO(e, t, n) {
  var r = Gn(t, { value: e }),
    a = V(r, 2),
    o = a[0],
    i = a[1],
    l = Oe.useRef(e),
    s = Oe.useRef(),
    u = function () {
      Bt.cancel(s.current)
    },
    c = tt(function () {
      i(l.current), n && o !== l.current && n(l.current)
    }),
    d = tt(function (f, y) {
      u(), (l.current = f), f || y ? c() : (s.current = Bt(c))
    })
  return (
    Oe.useEffect(function () {
      return u
    }, []),
    [o, d]
  )
}
function Wb(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
    r = arguments.length > 3 ? arguments[3] : void 0,
    a = n.every(function (c) {
      return c
    })
      ? !1
      : e,
    o = qO(a, t || !1, r),
    i = V(o, 2),
    l = i[0],
    s = i[1]
  function u(c) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(!d.inherit || l) && s(c, d.force)
  }
  return [l, u]
}
function Ub(e) {
  var t = g.useRef()
  return (
    g.useImperativeHandle(e, function () {
      var n
      return {
        nativeElement:
          (n = t.current) === null || n === void 0 ? void 0 : n.nativeElement,
        focus: function (a) {
          var o
          ;(o = t.current) === null || o === void 0 || o.focus(a)
        },
        blur: function () {
          var a
          ;(a = t.current) === null || a === void 0 || a.blur()
        },
      }
    }),
    t
  )
}
function Yb(e, t) {
  return g.useMemo(
    function () {
      return (
        e ||
        (t
          ? (pn(!1, '`ranges` is deprecated. Please use `presets` instead.'),
            Object.entries(t).map(function (n) {
              var r = V(n, 2),
                a = r[0],
                o = r[1]
              return { label: a, value: o }
            }))
          : [])
      )
    },
    [e, t],
  )
}
function um(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
    r = g.useRef(t)
  ;(r.current = t),
    tg(
      function () {
        if (e) r.current(e)
        else {
          var a = Bt(function () {
            r.current(e)
          }, n)
          return function () {
            Bt.cancel(a)
          }
        }
      },
      [e],
    )
}
function qb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = g.useState(0),
    r = V(n, 2),
    a = r[0],
    o = r[1],
    i = g.useState(!1),
    l = V(i, 2),
    s = l[0],
    u = l[1],
    c = g.useRef([]),
    d = g.useRef(null),
    f = function (b) {
      u(b)
    },
    y = function (b) {
      return b && (d.current = b), d.current
    },
    v = function (b) {
      var m = c.current,
        h = new Set(
          m.filter(function (C) {
            return b[C] || t[C]
          }),
        ),
        S = m[m.length - 1] === 0 ? 1 : 0
      return h.size >= 2 || e[S] ? null : S
    }
  return (
    um(s, function () {
      s || (c.current = [])
    }),
    g.useEffect(
      function () {
        s && c.current.push(a)
      },
      [s, a],
    ),
    [s, f, y, a, o, v, c.current]
  )
}
function KO(e, t, n, r, a, o) {
  var i = n[n.length - 1],
    l = function (u, c) {
      var d = V(e, 2),
        f = d[0],
        y = d[1],
        v = H(H({}, c), {}, { from: Ib(e, n) })
      return (i === 1 &&
        t[0] &&
        f &&
        !Xt(r, a, f, u, v.type) &&
        r.isAfter(f, u)) ||
        (i === 0 && t[1] && y && !Xt(r, a, y, u, v.type) && r.isAfter(u, y))
        ? !0
        : o == null
          ? void 0
          : o(u, v)
    }
  return l
}
function Wi(e, t, n, r) {
  switch (t) {
    case 'date':
    case 'week':
      return e.addMonth(n, r)
    case 'month':
    case 'quarter':
      return e.addYear(n, r)
    case 'year':
      return e.addYear(n, r * 10)
    case 'decade':
      return e.addYear(n, r * 100)
    default:
      return n
  }
}
var Ud = []
function Kb(e, t, n, r, a, o, i, l) {
  var s = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : Ud,
    u = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : Ud,
    c = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : Ud,
    d = arguments.length > 11 ? arguments[11] : void 0,
    f = arguments.length > 12 ? arguments[12] : void 0,
    y = arguments.length > 13 ? arguments[13] : void 0,
    v = i === 'time',
    p = o || 0,
    b = function (k) {
      var $ = e.getNow()
      return v && ($ = zu(e, $)), s[k] || n[k] || $
    },
    m = V(u, 2),
    h = m[0],
    S = m[1],
    C = Gn(
      function () {
        return b(0)
      },
      { value: h },
    ),
    w = V(C, 2),
    E = w[0],
    x = w[1],
    R = Gn(
      function () {
        return b(1)
      },
      { value: S },
    ),
    F = V(R, 2),
    _ = F[0],
    T = F[1],
    j = g.useMemo(
      function () {
        var P = [E, _][p]
        return v ? P : zu(e, P, c[p])
      },
      [v, E, _, p, e, c],
    ),
    A = function (k) {
      var $ =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'panel',
        M = [x, T][p]
      M(k)
      var O = [E, _]
      ;(O[p] = k),
        d &&
          (!Xt(e, t, E, O[0], i) || !Xt(e, t, _, O[1], i)) &&
          d(O, { source: $, range: p === 1 ? 'end' : 'start', mode: r })
    },
    I = function (k, $) {
      if (l) {
        var M = {
            date: 'month',
            week: 'month',
            month: 'year',
            quarter: 'year',
          },
          O = M[i]
        if (O && !Xt(e, t, k, $, O)) return Wi(e, i, $, -1)
        if (i === 'year') {
          var D = Math.floor(e.getYear(k) / 10),
            L = Math.floor(e.getYear($) / 10)
          if (D !== L) return Wi(e, i, $, -1)
        }
      }
      return $
    },
    N = g.useRef(null)
  return (
    ft(
      function () {
        if (a && !s[p]) {
          var P = v ? null : e.getNow()
          if (
            (N.current !== null && N.current !== p
              ? (P = [E, _][p ^ 1])
              : n[p]
                ? (P = p === 0 ? n[0] : I(n[0], n[1]))
                : n[p ^ 1] && (P = n[p ^ 1]),
            P)
          ) {
            f && e.isAfter(f, P) && (P = f)
            var k = l ? Wi(e, i, P, 1) : P
            y && e.isAfter(k, y) && (P = l ? Wi(e, i, y, -1) : y), A(P, 'reset')
          }
        }
      },
      [a, p, n[p]],
    ),
    g.useEffect(
      function () {
        a ? (N.current = p) : (N.current = null)
      },
      [a, p],
    ),
    ft(
      function () {
        a && s && s[p] && A(s[p], 'reset')
      },
      [a, p],
    ),
    [j, A]
  )
}
function Gb(e, t) {
  var n = g.useRef(e),
    r = g.useState({}),
    a = V(r, 2),
    o = a[1],
    i = function (u) {
      return u && t !== void 0 ? t : n.current
    },
    l = function (u) {
      ;(n.current = u), o({})
    }
  return [i, l, i(!0)]
}
var GO = []
function Qb(e, t, n) {
  var r = function (i) {
      return i.map(function (l) {
        return Ft(l, { generateConfig: e, locale: t, format: n[0] })
      })
    },
    a = function (i, l) {
      for (var s = Math.max(i.length, l.length), u = -1, c = 0; c < s; c += 1) {
        var d = i[c] || null,
          f = l[c] || null
        if (d !== f && !Vb(e, d, f)) {
          u = c
          break
        }
      }
      return [u < 0, u !== 0]
    }
  return [r, a]
}
function Xb(e, t) {
  return de(e).sort(function (n, r) {
    return t.isAfter(n, r) ? 1 : -1
  })
}
function QO(e) {
  var t = Gb(e),
    n = V(t, 2),
    r = n[0],
    a = n[1],
    o = tt(function () {
      a(e)
    })
  return (
    g.useEffect(
      function () {
        o()
      },
      [e],
    ),
    [r, a]
  )
}
function Jb(e, t, n, r, a, o, i, l, s) {
  var u = Gn(o, { value: i }),
    c = V(u, 2),
    d = c[0],
    f = c[1],
    y = d || GO,
    v = QO(y),
    p = V(v, 2),
    b = p[0],
    m = p[1],
    h = Qb(e, t, n),
    S = V(h, 2),
    C = S[0],
    w = S[1],
    E = tt(function (R) {
      var F = de(R)
      if (r) for (var _ = 0; _ < 2; _ += 1) F[_] = F[_] || null
      else
        a &&
          (F = Xb(
            F.filter(function (P) {
              return P
            }),
            e,
          ))
      var T = w(b(), F),
        j = V(T, 2),
        A = j[0],
        I = j[1]
      if (!A && (m(F), l)) {
        var N = C(F)
        l(F, N, { range: I ? 'end' : 'start' })
      }
    }),
    x = function () {
      s && s(b())
    }
  return [y, f, b, E, x]
}
function Zb(e, t, n, r, a, o, i, l, s, u) {
  var c = e.generateConfig,
    d = e.locale,
    f = e.picker,
    y = e.onChange,
    v = e.allowEmpty,
    p = e.order,
    b = o.some(function (A) {
      return A
    })
      ? !1
      : p,
    m = Qb(c, d, i),
    h = V(m, 2),
    S = h[0],
    C = h[1],
    w = Gb(t),
    E = V(w, 2),
    x = E[0],
    R = E[1],
    F = tt(function () {
      R(t)
    })
  g.useEffect(
    function () {
      F()
    },
    [t],
  )
  var _ = tt(function (A) {
      var I = A === null,
        N = de(A || x())
      if (I)
        for (var P = Math.max(o.length, N.length), k = 0; k < P; k += 1)
          o[k] || (N[k] = null)
      b && N[0] && N[1] && (N = Xb(N, c)), a(N)
      var $ = N,
        M = V($, 2),
        O = M[0],
        D = M[1],
        L = !O,
        W = !D,
        B = v ? (!L || v[0]) && (!W || v[1]) : !0,
        U = !p || L || W || Xt(c, d, O, D, f) || c.isAfter(D, O),
        K =
          (!O || !u(O, { activeIndex: 0 })) &&
          (!D || !u(D, { from: O, activeIndex: 1 })),
        Y = I || (B && U && K)
      if (Y) {
        n(N)
        var q = C(N, t),
          X = V(q, 1),
          Q = X[0]
        y &&
          !Q &&
          y(
            I &&
              N.every(function (J) {
                return !J
              })
              ? null
              : N,
            S(N),
          )
      }
      return Y
    }),
    T = tt(function (A, I) {
      var N = ol(x(), A, r()[A])
      R(N), I && _()
    }),
    j = !l && !s
  return (
    um(
      !j,
      function () {
        j && (_(), a(t), F())
      },
      2,
    ),
    [T, _]
  )
}
function eC(e, t, n, r, a) {
  return t !== 'date' && t !== 'time'
    ? !1
    : n !== void 0
      ? n
      : r !== void 0
        ? r
        : !a && (e === 'date' || e === 'time')
}
function XO(e, t, n, r, a, o) {
  var i = e
  function l(d, f, y) {
    var v = o[d](i),
      p = y.find(function (S) {
        return S.value === v
      })
    if (!p || p.disabled) {
      var b = y.filter(function (S) {
          return !S.disabled
        }),
        m = de(b).reverse(),
        h =
          m.find(function (S) {
            return S.value <= v
          }) || b[0]
      h && ((v = h.value), (i = o[f](i, v)))
    }
    return v
  }
  var s = l('getHour', 'setHour', t()),
    u = l('getMinute', 'setMinute', n(s)),
    c = l('getSecond', 'setSecond', r(s, u))
  return l('getMillisecond', 'setMillisecond', a(s, u, c)), i
}
function Fs() {
  return []
}
function Ns(e, t) {
  for (
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
      o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 2,
      i = [],
      l = n >= 1 ? n | 0 : 1,
      s = e;
    s <= t;
    s += l
  ) {
    var u = a.includes(s)
    ;(!u || !r) && i.push({ label: om(s, o), value: s, disabled: u })
  }
  return i
}
function cm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0,
    r = t || {},
    a = r.use12Hours,
    o = r.hourStep,
    i = o === void 0 ? 1 : o,
    l = r.minuteStep,
    s = l === void 0 ? 1 : l,
    u = r.secondStep,
    c = u === void 0 ? 1 : u,
    d = r.millisecondStep,
    f = d === void 0 ? 100 : d,
    y = r.hideDisabledOptions,
    v = r.disabledTime,
    p = r.disabledHours,
    b = r.disabledMinutes,
    m = r.disabledSeconds,
    h = g.useMemo(
      function () {
        return n || e.getNow()
      },
      [n, e],
    ),
    S = g.useCallback(
      function ($) {
        var M = (v == null ? void 0 : v($)) || {}
        return [
          M.disabledHours || p || Fs,
          M.disabledMinutes || b || Fs,
          M.disabledSeconds || m || Fs,
          M.disabledMilliseconds || Fs,
        ]
      },
      [v, p, b, m],
    ),
    C = g.useMemo(
      function () {
        return S(h)
      },
      [h, S],
    ),
    w = V(C, 4),
    E = w[0],
    x = w[1],
    R = w[2],
    F = w[3],
    _ = g.useCallback(
      function ($, M, O, D) {
        var L = Ns(0, 23, i, y, $()),
          W = a
            ? L.map(function (Y) {
                return H(H({}, Y), {}, { label: om(Y.value % 12 || 12, 2) })
              })
            : L,
          B = function (q) {
            return Ns(0, 59, s, y, M(q))
          },
          U = function (q, X) {
            return Ns(0, 59, c, y, O(q, X))
          },
          K = function (q, X, Q) {
            return Ns(0, 999, f, y, D(q, X, Q), 3)
          }
        return [W, B, U, K]
      },
      [y, i, a, f, s, c],
    ),
    T = g.useMemo(
      function () {
        return _(E, x, R, F)
      },
      [_, E, x, R, F],
    ),
    j = V(T, 4),
    A = j[0],
    I = j[1],
    N = j[2],
    P = j[3],
    k = function (M, O) {
      var D = function () {
          return A
        },
        L = I,
        W = N,
        B = P
      if (O) {
        var U = S(O),
          K = V(U, 4),
          Y = K[0],
          q = K[1],
          X = K[2],
          Q = K[3],
          J = _(Y, q, X, Q),
          ne = V(J, 4),
          te = ne[0],
          ae = ne[1],
          ye = ne[2],
          oe = ne[3]
        ;(D = function () {
          return te
        }),
          (L = ae),
          (W = ye),
          (B = oe)
      }
      var he = XO(M, D, L, W, B, e)
      return he
    }
  return [k, A, I, N, P]
}
function JO(e) {
  var t = e.mode,
    n = e.internalMode,
    r = e.renderExtraFooter,
    a = e.showNow,
    o = e.showTime,
    i = e.onSubmit,
    l = e.onNow,
    s = e.invalid,
    u = e.needConfirm,
    c = e.generateConfig,
    d = e.disabledDate,
    f = g.useContext(mr),
    y = f.prefixCls,
    v = f.locale,
    p = f.button,
    b = p === void 0 ? 'button' : p,
    m = c.getNow(),
    h = cm(c, o, m),
    S = V(h, 1),
    C = S[0],
    w = r == null ? void 0 : r(t),
    E = d(m, { type: t }),
    x = function () {
      if (!E) {
        var I = C(m)
        l(I)
      }
    },
    R = ''.concat(y, '-now'),
    F = ''.concat(R, '-btn'),
    _ =
      a &&
      g.createElement(
        'li',
        { className: R },
        g.createElement(
          'a',
          {
            className: ke(F, E && ''.concat(F, '-disabled')),
            'aria-disabled': E,
            onClick: x,
          },
          n === 'date' ? v.today : v.now,
        ),
      ),
    T =
      u &&
      g.createElement(
        'li',
        { className: ''.concat(y, '-ok') },
        g.createElement(b, { disabled: s, onClick: i }, v.ok),
      ),
    j =
      (_ || T) &&
      g.createElement('ul', { className: ''.concat(y, '-ranges') }, _, T)
  return !w && !j
    ? null
    : g.createElement(
        'div',
        { className: ''.concat(y, '-footer') },
        w &&
          g.createElement(
            'div',
            { className: ''.concat(y, '-footer-extra') },
            w,
          ),
        j,
      )
}
function tC(e, t, n) {
  function r(a, o) {
    var i = a.findIndex(function (s) {
      return Xt(e, t, s, o, n)
    })
    if (i === -1) return [].concat(de(a), [o])
    var l = de(a)
    return l.splice(i, 1), l
  }
  return r
}
var vo = g.createContext(null)
function Ic() {
  return g.useContext(vo)
}
function vi(e, t) {
  var n = e.prefixCls,
    r = e.generateConfig,
    a = e.locale,
    o = e.disabledDate,
    i = e.minDate,
    l = e.maxDate,
    s = e.cellRender,
    u = e.hoverValue,
    c = e.hoverRangeValue,
    d = e.onHover,
    f = e.values,
    y = e.pickerValue,
    v = e.onSelect,
    p = e.prevIcon,
    b = e.nextIcon,
    m = e.superPrevIcon,
    h = e.superNextIcon,
    S = r.getNow(),
    C = {
      now: S,
      values: f,
      pickerValue: y,
      prefixCls: n,
      disabledDate: o,
      minDate: i,
      maxDate: l,
      cellRender: s,
      hoverValue: u,
      hoverRangeValue: c,
      onHover: d,
      locale: a,
      generateConfig: r,
      onSelect: v,
      panelType: t,
      prevIcon: p,
      nextIcon: b,
      superPrevIcon: m,
      superNextIcon: h,
    }
  return [C, S]
}
var Ea = g.createContext({})
function Kl(e) {
  for (
    var t = e.rowNum,
      n = e.colNum,
      r = e.baseDate,
      a = e.getCellDate,
      o = e.prefixColumn,
      i = e.rowClassName,
      l = e.titleFormat,
      s = e.getCellText,
      u = e.getCellClassName,
      c = e.headerCells,
      d = e.cellSelection,
      f = d === void 0 ? !0 : d,
      y = e.disabledDate,
      v = Ic(),
      p = v.prefixCls,
      b = v.panelType,
      m = v.now,
      h = v.disabledDate,
      S = v.cellRender,
      C = v.onHover,
      w = v.hoverValue,
      E = v.hoverRangeValue,
      x = v.generateConfig,
      R = v.values,
      F = v.locale,
      _ = v.onSelect,
      T = y || h,
      j = ''.concat(p, '-cell'),
      A = g.useContext(Ea),
      I = A.onCellDblClick,
      N = function (W) {
        return R.some(function (B) {
          return B && Xt(x, F, W, B, b)
        })
      },
      P = [],
      k = 0;
    k < t;
    k += 1
  ) {
    for (
      var $ = [],
        M = void 0,
        O = function () {
          var W = k * n + D,
            B = a(r, W),
            U = T == null ? void 0 : T(B, { type: b })
          D === 0 && ((M = B), o && $.push(o(M)))
          var K = !1,
            Y = !1,
            q = !1
          if (f && E) {
            var X = V(E, 2),
              Q = X[0],
              J = X[1]
            ;(K = _c(x, Q, J, B)),
              (Y = Xt(x, F, B, Q, b)),
              (q = Xt(x, F, B, J, b))
          }
          var ne = l
              ? Ft(B, { locale: F, format: l, generateConfig: x })
              : void 0,
            te = g.createElement(
              'div',
              { className: ''.concat(j, '-inner') },
              s(B),
            )
          $.push(
            g.createElement(
              'td',
              {
                key: D,
                title: ne,
                className: ke(
                  j,
                  H(
                    z(
                      z(
                        z(
                          z(
                            z(
                              z({}, ''.concat(j, '-disabled'), U),
                              ''.concat(j, '-hover'),
                              (w || []).some(function (ae) {
                                return Xt(x, F, B, ae, b)
                              }),
                            ),
                            ''.concat(j, '-in-range'),
                            K && !Y && !q,
                          ),
                          ''.concat(j, '-range-start'),
                          Y,
                        ),
                        ''.concat(j, '-range-end'),
                        q,
                      ),
                      ''.concat(p, '-cell-selected'),
                      !E && b !== 'week' && N(B),
                    ),
                    u(B),
                  ),
                ),
                onClick: function () {
                  U || _(B)
                },
                onDoubleClick: function () {
                  !U && I && I()
                },
                onMouseEnter: function () {
                  U || C == null || C(B)
                },
                onMouseLeave: function () {
                  U || C == null || C(null)
                },
              },
              S
                ? S(B, {
                    prefixCls: p,
                    originNode: te,
                    today: m,
                    type: b,
                    locale: F,
                  })
                : te,
            ),
          )
        },
        D = 0;
      D < n;
      D += 1
    )
      O()
    P.push(
      g.createElement(
        'tr',
        { key: k, className: i == null ? void 0 : i(M) },
        $,
      ),
    )
  }
  return g.createElement(
    'div',
    { className: ''.concat(p, '-body') },
    g.createElement(
      'table',
      { className: ''.concat(p, '-content') },
      c && g.createElement('thead', null, g.createElement('tr', null, c)),
      g.createElement('tbody', null, P),
    ),
  )
}
var Ds = { visibility: 'hidden' }
function pi(e) {
  var t = e.offset,
    n = e.superOffset,
    r = e.onChange,
    a = e.getStart,
    o = e.getEnd,
    i = e.children,
    l = Ic(),
    s = l.prefixCls,
    u = l.prevIcon,
    c = u === void 0 ? '‹' : u,
    d = l.nextIcon,
    f = d === void 0 ? '›' : d,
    y = l.superPrevIcon,
    v = y === void 0 ? '«' : y,
    p = l.superNextIcon,
    b = p === void 0 ? '»' : p,
    m = l.minDate,
    h = l.maxDate,
    S = l.generateConfig,
    C = l.locale,
    w = l.pickerValue,
    E = l.panelType,
    x = ''.concat(s, '-header'),
    R = g.useContext(Ea),
    F = R.hidePrev,
    _ = R.hideNext,
    T = R.hideHeader,
    j = g.useMemo(
      function () {
        if (!m || !t || !o) return !1
        var L = o(t(-1, w))
        return !Is(S, C, L, m, E)
      },
      [m, t, w, o, S, C, E],
    ),
    A = g.useMemo(
      function () {
        if (!m || !n || !o) return !1
        var L = o(n(-1, w))
        return !Is(S, C, L, m, E)
      },
      [m, n, w, o, S, C, E],
    ),
    I = g.useMemo(
      function () {
        if (!h || !t || !a) return !1
        var L = a(t(1, w))
        return !Is(S, C, h, L, E)
      },
      [h, t, w, a, S, C, E],
    ),
    N = g.useMemo(
      function () {
        if (!h || !n || !a) return !1
        var L = a(n(1, w))
        return !Is(S, C, h, L, E)
      },
      [h, n, w, a, S, C, E],
    ),
    P = function (W) {
      t && r(t(W, w))
    },
    k = function (W) {
      n && r(n(W, w))
    }
  if (T) return null
  var $ = ''.concat(x, '-prev-btn'),
    M = ''.concat(x, '-next-btn'),
    O = ''.concat(x, '-super-prev-btn'),
    D = ''.concat(x, '-super-next-btn')
  return g.createElement(
    'div',
    { className: x },
    n &&
      g.createElement(
        'button',
        {
          type: 'button',
          onClick: function () {
            return k(-1)
          },
          tabIndex: -1,
          className: ke(O, A && ''.concat(O, '-disabled')),
          disabled: A,
          style: F ? Ds : {},
        },
        v,
      ),
    t &&
      g.createElement(
        'button',
        {
          type: 'button',
          onClick: function () {
            return P(-1)
          },
          tabIndex: -1,
          className: ke($, j && ''.concat($, '-disabled')),
          disabled: j,
          style: F ? Ds : {},
        },
        c,
      ),
    g.createElement('div', { className: ''.concat(x, '-view') }, i),
    t &&
      g.createElement(
        'button',
        {
          type: 'button',
          onClick: function () {
            return P(1)
          },
          tabIndex: -1,
          className: ke(M, I && ''.concat(M, '-disabled')),
          disabled: I,
          style: _ ? Ds : {},
        },
        f,
      ),
    n &&
      g.createElement(
        'button',
        {
          type: 'button',
          onClick: function () {
            return k(1)
          },
          tabIndex: -1,
          className: ke(D, N && ''.concat(D, '-disabled')),
          disabled: N,
          style: _ ? Ds : {},
        },
        b,
      ),
  )
}
function Tc(e) {
  var t = e.prefixCls,
    n = e.panelName,
    r = n === void 0 ? 'date' : n,
    a = e.locale,
    o = e.generateConfig,
    i = e.pickerValue,
    l = e.onPickerValueChange,
    s = e.onModeChange,
    u = e.mode,
    c = u === void 0 ? 'date' : u,
    d = e.disabledDate,
    f = e.onSelect,
    y = e.onHover,
    v = e.showWeek,
    p = ''.concat(t, '-').concat(r, '-panel'),
    b = ''.concat(t, '-cell'),
    m = c === 'week',
    h = vi(e, c),
    S = V(h, 2),
    C = S[0],
    w = S[1],
    E = o.locale.getWeekFirstDay(a.locale),
    x = o.setDate(i, 1),
    R = VO(a.locale, o, x),
    F = o.getMonth(i),
    _ =
      m || v
        ? function (D) {
            var L = d == null ? void 0 : d(D, { type: 'week' })
            return g.createElement(
              'td',
              {
                key: 'week',
                className: ke(
                  b,
                  ''.concat(b, '-week'),
                  z({}, ''.concat(b, '-disabled'), L),
                ),
                onClick: function () {
                  L || f(D)
                },
                onMouseEnter: function () {
                  L || y == null || y(D)
                },
                onMouseLeave: function () {
                  L || y == null || y(null)
                },
              },
              g.createElement(
                'div',
                { className: ''.concat(b, '-inner') },
                o.locale.getWeek(a.locale, D),
              ),
            )
          }
        : null,
    T = [],
    j =
      a.shortWeekDays ||
      (o.locale.getShortWeekDays ? o.locale.getShortWeekDays(a.locale) : [])
  _ &&
    T.push(g.createElement('th', { key: 'empty', 'aria-label': 'empty cell' }))
  for (var A = 0; A < Wd; A += 1)
    T.push(g.createElement('th', { key: A }, j[(A + E) % Wd]))
  var I = function (L, W) {
      return o.addDate(L, W)
    },
    N = function (L) {
      return Ft(L, { locale: a, format: a.cellDateFormat, generateConfig: o })
    },
    P = function (L) {
      var W = z(
        z({}, ''.concat(t, '-cell-in-view'), lm(o, L, i)),
        ''.concat(t, '-cell-today'),
        sm(o, L, w),
      )
      return W
    },
    k =
      a.shortMonths ||
      (o.locale.getShortMonths ? o.locale.getShortMonths(a.locale) : []),
    $ = g.createElement(
      'button',
      {
        type: 'button',
        key: 'year',
        onClick: function () {
          s('year', i)
        },
        tabIndex: -1,
        className: ''.concat(t, '-year-btn'),
      },
      Ft(i, { locale: a, format: a.yearFormat, generateConfig: o }),
    ),
    M = g.createElement(
      'button',
      {
        type: 'button',
        key: 'month',
        onClick: function () {
          s('month', i)
        },
        tabIndex: -1,
        className: ''.concat(t, '-month-btn'),
      },
      a.monthFormat
        ? Ft(i, { locale: a, format: a.monthFormat, generateConfig: o })
        : k[F],
    ),
    O = a.monthBeforeYear ? [M, $] : [$, M]
  return g.createElement(
    vo.Provider,
    { value: C },
    g.createElement(
      'div',
      { className: ke(p, v && ''.concat(p, '-show-week')) },
      g.createElement(
        pi,
        {
          offset: function (L) {
            return o.addMonth(i, L)
          },
          superOffset: function (L) {
            return o.addYear(i, L)
          },
          onChange: l,
          getStart: function (L) {
            return o.setDate(L, 1)
          },
          getEnd: function (L) {
            var W = o.setDate(L, 1)
            return (W = o.addMonth(W, 1)), o.addDate(W, -1)
          },
        },
        O,
      ),
      g.createElement(
        Kl,
        ve({ titleFormat: a.fieldDateFormat }, e, {
          colNum: Wd,
          rowNum: 6,
          baseDate: R,
          headerCells: T,
          getCellDate: I,
          getCellText: N,
          getCellClassName: P,
          prefixColumn: _,
          cellSelection: !m,
        }),
      ),
    ),
  )
}
var ZO = 1 / 3
function e_(e, t) {
  var n = g.useRef(!1),
    r = g.useRef(null),
    a = g.useRef(null),
    o = function () {
      return n.current
    },
    i = function () {
      Bt.cancel(r.current), (n.current = !1)
    },
    l = g.useRef(),
    s = function () {
      var d = e.current
      if (((a.current = null), (l.current = 0), d)) {
        var f = d.querySelector('[data-value="'.concat(t, '"]')),
          y = d.querySelector('li'),
          v = function p() {
            i(), (n.current = !0), (l.current += 1)
            var b = d.scrollTop,
              m = y.offsetTop,
              h = f.offsetTop,
              S = h - m
            if ((h === 0 && f !== y) || !Gh(d)) {
              l.current <= 5 && (r.current = Bt(p))
              return
            }
            var C = b + (S - b) * ZO,
              w = Math.abs(S - C)
            if (a.current !== null && a.current < w) {
              i()
              return
            }
            if (((a.current = w), w <= 1)) {
              ;(d.scrollTop = S), i()
              return
            }
            ;(d.scrollTop = C), (r.current = Bt(p))
          }
        f && y && v()
      }
    },
    u = tt(s)
  return [u, i, o]
}
var t_ = 300
function Fi(e) {
  var t = e.units,
    n = e.value,
    r = e.optionalValue,
    a = e.type,
    o = e.onChange,
    i = e.onDblClick,
    l = e.changeOnScroll,
    s = Ic(),
    u = s.prefixCls,
    c = s.cellRender,
    d = s.now,
    f = s.locale,
    y = ''.concat(u, '-time-panel'),
    v = ''.concat(u, '-time-panel-cell'),
    p = g.useRef(null),
    b = g.useRef(),
    m = function () {
      clearTimeout(b.current)
    },
    h = e_(p, n ?? r),
    S = V(h, 3),
    C = S[0],
    w = S[1],
    E = S[2]
  ft(
    function () {
      return (
        C(),
        m(),
        function () {
          w(), m()
        }
      )
    },
    [n, r, t],
  )
  var x = function (_) {
      m()
      var T = _.target
      !E() &&
        l &&
        (b.current = setTimeout(function () {
          var j = p.current,
            A = j.querySelector('li').offsetTop,
            I = Array.from(j.querySelectorAll('li')),
            N = I.map(function (O) {
              return O.offsetTop - A
            }),
            P = N.map(function (O, D) {
              return t[D].disabled
                ? Number.MAX_SAFE_INTEGER
                : Math.abs(O - T.scrollTop)
            }),
            k = Math.min.apply(Math, de(P)),
            $ = P.findIndex(function (O) {
              return O === k
            }),
            M = t[$]
          M && !M.disabled && o(M.value)
        }, t_))
    },
    R = ''.concat(y, '-column')
  return g.createElement(
    'ul',
    { className: R, ref: p, 'data-type': a, onScroll: x },
    t.map(function (F) {
      var _ = F.label,
        T = F.value,
        j = F.disabled,
        A = g.createElement('div', { className: ''.concat(v, '-inner') }, _)
      return g.createElement(
        'li',
        {
          key: T,
          className: ke(
            v,
            z(
              z({}, ''.concat(v, '-selected'), n === T),
              ''.concat(v, '-disabled'),
              j,
            ),
          ),
          onClick: function () {
            j || o(T)
          },
          onDoubleClick: function () {
            !j && i && i()
          },
          'data-value': T,
        },
        c
          ? c(T, {
              prefixCls: u,
              originNode: A,
              today: d,
              type: 'time',
              subType: a,
              locale: f,
            })
          : A,
      )
    }),
  )
}
function aa(e) {
  return e < 12
}
function n_(e) {
  var t = e.showHour,
    n = e.showMinute,
    r = e.showSecond,
    a = e.showMillisecond,
    o = e.use12Hours,
    i = e.changeOnScroll,
    l = Ic(),
    s = l.prefixCls,
    u = l.values,
    c = l.generateConfig,
    d = l.locale,
    f = l.onSelect,
    y = l.pickerValue,
    v = (u == null ? void 0 : u[0]) || null,
    p = g.useContext(Ea),
    b = p.onCellDblClick,
    m = cm(c, e, v),
    h = V(m, 5),
    S = h[0],
    C = h[1],
    w = h[2],
    E = h[3],
    x = h[4],
    R = function (Se) {
      var ie = v && c[Se](v),
        Xe = y && c[Se](y)
      return [ie, Xe]
    },
    F = R('getHour'),
    _ = V(F, 2),
    T = _[0],
    j = _[1],
    A = R('getMinute'),
    I = V(A, 2),
    N = I[0],
    P = I[1],
    k = R('getSecond'),
    $ = V(k, 2),
    M = $[0],
    O = $[1],
    D = R('getMillisecond'),
    L = V(D, 2),
    W = L[0],
    B = L[1],
    U = T === null ? null : aa(T) ? 'am' : 'pm',
    K = g.useMemo(
      function () {
        return o
          ? aa(T)
            ? C.filter(function (Z) {
                return aa(Z.value)
              })
            : C.filter(function (Z) {
                return !aa(Z.value)
              })
          : C
      },
      [T, C, o],
    ),
    Y = function (Se, ie) {
      var Xe,
        He = Se.filter(function (Ie) {
          return !Ie.disabled
        })
      return (
        ie ??
        (He == null || (Xe = He[0]) === null || Xe === void 0
          ? void 0
          : Xe.value)
      )
    },
    q = Y(C, T),
    X = g.useMemo(
      function () {
        return w(q)
      },
      [w, q],
    ),
    Q = Y(X, N),
    J = g.useMemo(
      function () {
        return E(q, Q)
      },
      [E, q, Q],
    ),
    ne = Y(J, M),
    te = g.useMemo(
      function () {
        return x(q, Q, ne)
      },
      [x, q, Q, ne],
    ),
    ae = Y(te, W),
    ye = g.useMemo(
      function () {
        if (!o) return []
        var Z = c.getNow(),
          Se = c.setHour(Z, 6),
          ie = c.setHour(Z, 18),
          Xe = function (Ie, Ye) {
            var Je = d.cellMeridiemFormat
            return Je
              ? Ft(Ie, { generateConfig: c, locale: d, format: Je })
              : Ye
          }
        return [
          {
            label: Xe(Se, 'AM'),
            value: 'am',
            disabled: C.every(function (He) {
              return He.disabled || !aa(He.value)
            }),
          },
          {
            label: Xe(ie, 'PM'),
            value: 'pm',
            disabled: C.every(function (He) {
              return He.disabled || aa(He.value)
            }),
          },
        ]
      },
      [C, o, c, d],
    ),
    oe = function (Se) {
      var ie = S(Se)
      f(ie)
    },
    he = g.useMemo(
      function () {
        var Z = v || y || c.getNow(),
          Se = function (Xe) {
            return Xe != null
          }
        return (
          Se(T)
            ? ((Z = c.setHour(Z, T)),
              (Z = c.setMinute(Z, N)),
              (Z = c.setSecond(Z, M)),
              (Z = c.setMillisecond(Z, W)))
            : Se(j)
              ? ((Z = c.setHour(Z, j)),
                (Z = c.setMinute(Z, P)),
                (Z = c.setSecond(Z, O)),
                (Z = c.setMillisecond(Z, B)))
              : Se(q) &&
                ((Z = c.setHour(Z, q)),
                (Z = c.setMinute(Z, Q)),
                (Z = c.setSecond(Z, ne)),
                (Z = c.setMillisecond(Z, ae))),
          Z
        )
      },
      [v, y, T, N, M, W, q, Q, ne, ae, j, P, O, B, c],
    ),
    ge = function (Se) {
      oe(c.setHour(he, Se))
    },
    ce = function (Se) {
      oe(c.setMinute(he, Se))
    },
    Ce = function (Se) {
      oe(c.setSecond(he, Se))
    },
    we = function (Se) {
      oe(c.setMillisecond(he, Se))
    },
    Ne = function (Se) {
      Se === 'am' && !aa(T)
        ? oe(c.setHour(he, T - 12))
        : Se === 'pm' && aa(T) && oe(c.setHour(he, T + 12))
    },
    Le = { onDblClick: b, changeOnScroll: i }
  return g.createElement(
    'div',
    { className: ''.concat(s, '-content') },
    t &&
      g.createElement(
        Fi,
        ve(
          { units: K, value: T, optionalValue: j, type: 'hour', onChange: ge },
          Le,
        ),
      ),
    n &&
      g.createElement(
        Fi,
        ve(
          {
            units: X,
            value: N,
            optionalValue: P,
            type: 'minute',
            onChange: ce,
          },
          Le,
        ),
      ),
    r &&
      g.createElement(
        Fi,
        ve(
          {
            units: J,
            value: M,
            optionalValue: O,
            type: 'second',
            onChange: Ce,
          },
          Le,
        ),
      ),
    a &&
      g.createElement(
        Fi,
        ve(
          {
            units: te,
            value: W,
            optionalValue: B,
            type: 'millisecond',
            onChange: we,
          },
          Le,
        ),
      ),
    o &&
      g.createElement(
        Fi,
        ve({ units: ye, value: U, type: 'meridiem', onChange: Ne }, Le),
      ),
  )
}
function nC(e) {
  var t = e.prefixCls,
    n = e.value,
    r = e.locale,
    a = e.generateConfig,
    o = e.showTime,
    i = o || {},
    l = i.format,
    s = ''.concat(t, '-time-panel'),
    u = vi(e, 'time'),
    c = V(u, 1),
    d = c[0]
  return g.createElement(
    vo.Provider,
    { value: d },
    g.createElement(
      'div',
      { className: ke(s) },
      g.createElement(
        pi,
        null,
        n ? Ft(n, { locale: r, format: l, generateConfig: a }) : ' ',
      ),
      g.createElement(n_, o),
    ),
  )
}
function r_(e) {
  var t = e.prefixCls,
    n = e.generateConfig,
    r = e.showTime,
    a = e.onSelect,
    o = e.value,
    i = e.pickerValue,
    l = e.onHover,
    s = ''.concat(t, '-datetime-panel'),
    u = cm(n, r),
    c = V(u, 1),
    d = c[0],
    f = function (b) {
      return o ? zu(n, b, o) : zu(n, b, i)
    },
    y = function (b) {
      l(b && f(b))
    },
    v = function (b) {
      var m = f(b)
      a(d(m, m))
    }
  return g.createElement(
    'div',
    { className: s },
    g.createElement(Tc, ve({}, e, { onSelect: v, onHover: y })),
    g.createElement(nC, e),
  )
}
function a_(e) {
  var t = e.prefixCls,
    n = e.locale,
    r = e.generateConfig,
    a = e.pickerValue,
    o = e.disabledDate,
    i = e.onPickerValueChange,
    l = ''.concat(t, '-decade-panel'),
    s = vi(e, 'decade'),
    u = V(s, 1),
    c = u[0],
    d = function (E) {
      var x = Math.floor(r.getYear(a) / 100) * 100
      return r.setYear(E, x)
    },
    f = function (E) {
      var x = d(E)
      return r.addYear(x, 99)
    },
    y = d(a),
    v = f(a),
    p = r.addYear(y, -10),
    b = function (E, x) {
      return r.addYear(E, x * 10)
    },
    m = function (E) {
      var x = n.cellYearFormat,
        R = Ft(E, { locale: n, format: x, generateConfig: r }),
        F = Ft(r.addYear(E, 9), { locale: n, format: x, generateConfig: r })
      return ''.concat(R, '-').concat(F)
    },
    h = function (E) {
      return z(
        {},
        ''.concat(t, '-cell-in-view'),
        Og(r, E, y) || Og(r, E, v) || _c(r, y, v, E),
      )
    },
    S = o
      ? function (w, E) {
          var x = r.setDate(w, 1),
            R = r.setMonth(x, 0),
            F = r.setYear(R, Math.floor(r.getYear(R) / 10) * 10),
            _ = r.addYear(F, 10),
            T = r.addDate(_, -1)
          return o(F, E) && o(T, E)
        }
      : null,
    C = ''
      .concat(
        Ft(y, { locale: n, format: n.yearFormat, generateConfig: r }),
        '-',
      )
      .concat(Ft(v, { locale: n, format: n.yearFormat, generateConfig: r }))
  return g.createElement(
    vo.Provider,
    { value: c },
    g.createElement(
      'div',
      { className: l },
      g.createElement(
        pi,
        {
          superOffset: function (E) {
            return r.addYear(a, E * 100)
          },
          onChange: i,
          getStart: d,
          getEnd: f,
        },
        C,
      ),
      g.createElement(
        Kl,
        ve({}, e, {
          disabledDate: S,
          colNum: 3,
          rowNum: 4,
          baseDate: p,
          getCellDate: b,
          getCellText: m,
          getCellClassName: h,
        }),
      ),
    ),
  )
}
function o_(e) {
  var t = e.prefixCls,
    n = e.locale,
    r = e.generateConfig,
    a = e.pickerValue,
    o = e.disabledDate,
    i = e.onPickerValueChange,
    l = e.onModeChange,
    s = ''.concat(t, '-month-panel'),
    u = vi(e, 'month'),
    c = V(u, 1),
    d = c[0],
    f = r.setMonth(a, 0),
    y =
      n.shortMonths ||
      (r.locale.getShortMonths ? r.locale.getShortMonths(n.locale) : []),
    v = function (C, w) {
      return r.addMonth(C, w)
    },
    p = function (C) {
      var w = r.getMonth(C)
      return n.monthFormat
        ? Ft(C, { locale: n, format: n.monthFormat, generateConfig: r })
        : y[w]
    },
    b = function () {
      return z({}, ''.concat(t, '-cell-in-view'), !0)
    },
    m = o
      ? function (S, C) {
          var w = r.setDate(S, 1),
            E = r.setMonth(w, r.getMonth(w) + 1),
            x = r.addDate(E, -1)
          return o(w, C) && o(x, C)
        }
      : null,
    h = g.createElement(
      'button',
      {
        type: 'button',
        key: 'year',
        onClick: function () {
          l('year')
        },
        tabIndex: -1,
        className: ''.concat(t, '-year-btn'),
      },
      Ft(a, { locale: n, format: n.yearFormat, generateConfig: r }),
    )
  return g.createElement(
    vo.Provider,
    { value: d },
    g.createElement(
      'div',
      { className: s },
      g.createElement(
        pi,
        {
          superOffset: function (C) {
            return r.addYear(a, C)
          },
          onChange: i,
          getStart: function (C) {
            return r.setMonth(C, 0)
          },
          getEnd: function (C) {
            return r.setMonth(C, 11)
          },
        },
        h,
      ),
      g.createElement(
        Kl,
        ve({}, e, {
          disabledDate: m,
          titleFormat: n.fieldMonthFormat,
          colNum: 3,
          rowNum: 4,
          baseDate: f,
          getCellDate: v,
          getCellText: p,
          getCellClassName: b,
        }),
      ),
    ),
  )
}
function i_(e) {
  var t = e.prefixCls,
    n = e.locale,
    r = e.generateConfig,
    a = e.pickerValue,
    o = e.onPickerValueChange,
    i = e.onModeChange,
    l = ''.concat(t, '-quarter-panel'),
    s = vi(e, 'quarter'),
    u = V(s, 1),
    c = u[0],
    d = r.setMonth(a, 0),
    f = function (m, h) {
      return r.addMonth(m, h * 3)
    },
    y = function (m) {
      return Ft(m, {
        locale: n,
        format: n.cellQuarterFormat,
        generateConfig: r,
      })
    },
    v = function () {
      return z({}, ''.concat(t, '-cell-in-view'), !0)
    },
    p = g.createElement(
      'button',
      {
        type: 'button',
        key: 'year',
        onClick: function () {
          i('year')
        },
        tabIndex: -1,
        className: ''.concat(t, '-year-btn'),
      },
      Ft(a, { locale: n, format: n.yearFormat, generateConfig: r }),
    )
  return g.createElement(
    vo.Provider,
    { value: c },
    g.createElement(
      'div',
      { className: l },
      g.createElement(
        pi,
        {
          superOffset: function (m) {
            return r.addYear(a, m)
          },
          onChange: o,
          getStart: function (m) {
            return r.setMonth(m, 0)
          },
          getEnd: function (m) {
            return r.setMonth(m, 11)
          },
        },
        p,
      ),
      g.createElement(
        Kl,
        ve({}, e, {
          titleFormat: n.fieldQuarterFormat,
          colNum: 4,
          rowNum: 1,
          baseDate: d,
          getCellDate: f,
          getCellText: y,
          getCellClassName: v,
        }),
      ),
    ),
  )
}
function l_(e) {
  var t = e.prefixCls,
    n = e.generateConfig,
    r = e.locale,
    a = e.value,
    o = e.hoverValue,
    i = e.hoverRangeValue,
    l = r.locale,
    s = ''.concat(t, '-week-panel-row'),
    u = function (d) {
      var f = {}
      if (i) {
        var y = V(i, 2),
          v = y[0],
          p = y[1],
          b = Bi(n, l, v, d),
          m = Bi(n, l, p, d)
        ;(f[''.concat(s, '-range-start')] = b),
          (f[''.concat(s, '-range-end')] = m),
          (f[''.concat(s, '-range-hover')] = !b && !m && _c(n, v, p, d))
      }
      return (
        o &&
          (f[''.concat(s, '-hover')] = o.some(function (h) {
            return Bi(n, l, d, h)
          })),
        ke(s, z({}, ''.concat(s, '-selected'), !i && Bi(n, l, a, d)), f)
      )
    }
  return g.createElement(
    Tc,
    ve({}, e, { mode: 'week', panelName: 'week', rowClassName: u }),
  )
}
function s_(e) {
  var t = e.prefixCls,
    n = e.locale,
    r = e.generateConfig,
    a = e.pickerValue,
    o = e.disabledDate,
    i = e.onPickerValueChange,
    l = e.onModeChange,
    s = ''.concat(t, '-year-panel'),
    u = vi(e, 'year'),
    c = V(u, 1),
    d = c[0],
    f = function (x) {
      var R = Math.floor(r.getYear(a) / 10) * 10
      return r.setYear(x, R)
    },
    y = function (x) {
      var R = f(x)
      return r.addYear(R, 9)
    },
    v = f(a),
    p = y(a),
    b = r.addYear(v, -1),
    m = function (x, R) {
      return r.addYear(x, R)
    },
    h = function (x) {
      return Ft(x, { locale: n, format: n.cellYearFormat, generateConfig: r })
    },
    S = function (x) {
      return z(
        {},
        ''.concat(t, '-cell-in-view'),
        lo(r, x, v) || lo(r, x, p) || _c(r, v, p, x),
      )
    },
    C = o
      ? function (E, x) {
          var R = r.setMonth(E, 0),
            F = r.setDate(R, 1),
            _ = r.setMonth(E, r.getMonth(E) + 1),
            T = r.addDate(_, -1)
          return o(F, x) && o(T, x)
        }
      : null,
    w = g.createElement(
      'button',
      {
        type: 'button',
        key: 'year',
        onClick: function () {
          l('decade')
        },
        tabIndex: -1,
        className: ''.concat(t, '-decade-btn'),
      },
      Ft(v, { locale: n, format: n.yearFormat, generateConfig: r }),
      '-',
      Ft(p, { locale: n, format: n.yearFormat, generateConfig: r }),
    )
  return g.createElement(
    vo.Provider,
    { value: d },
    g.createElement(
      'div',
      { className: s },
      g.createElement(
        pi,
        {
          superOffset: function (x) {
            return r.addYear(a, x * 10)
          },
          onChange: i,
          getStart: f,
          getEnd: y,
        },
        w,
      ),
      g.createElement(
        Kl,
        ve({}, e, {
          disabledDate: C,
          titleFormat: n.fieldYearFormat,
          colNum: 3,
          rowNum: 4,
          baseDate: b,
          getCellDate: m,
          getCellText: h,
          getCellClassName: S,
        }),
      ),
    ),
  )
}
var u_ = {
  date: Tc,
  datetime: r_,
  week: l_,
  month: o_,
  quarter: i_,
  year: s_,
  decade: a_,
  time: nC,
}
function c_(e, t) {
  var n,
    r = e.locale,
    a = e.generateConfig,
    o = e.direction,
    i = e.prefixCls,
    l = e.tabIndex,
    s = l === void 0 ? 0 : l,
    u = e.multiple,
    c = e.defaultValue,
    d = e.value,
    f = e.onChange,
    y = e.onSelect,
    v = e.defaultPickerValue,
    p = e.pickerValue,
    b = e.onPickerValueChange,
    m = e.mode,
    h = e.onPanelChange,
    S = e.picker,
    C = S === void 0 ? 'date' : S,
    w = e.showTime,
    E = e.hoverValue,
    x = e.hoverRangeValue,
    R = e.cellRender,
    F = e.dateRender,
    _ = e.monthCellRender,
    T = e.components,
    j = T === void 0 ? {} : T,
    A = e.hideHeader,
    I =
      ((n = g.useContext(mr)) === null || n === void 0
        ? void 0
        : n.prefixCls) ||
      i ||
      'rc-picker',
    N = g.useRef()
  g.useImperativeHandle(t, function () {
    return { nativeElement: N.current }
  })
  var P = jb(e),
    k = V(P, 4),
    $ = k[0],
    M = k[1],
    O = k[2],
    D = k[3],
    L = Db(r, M),
    W = C === 'date' && w ? 'datetime' : C,
    B = g.useMemo(
      function () {
        return zb(W, O, D, $, L)
      },
      [W, O, D, $, L],
    ),
    U = a.getNow(),
    K = Gn(C, {
      value: m,
      postState: function (fe) {
        return fe || 'date'
      },
    }),
    Y = V(K, 2),
    q = Y[0],
    X = Y[1],
    Q = q === 'date' && B ? 'datetime' : q,
    J = tC(a, r, W),
    ne = Gn(c, { value: d }),
    te = V(ne, 2),
    ae = te[0],
    ye = te[1],
    oe = g.useMemo(
      function () {
        var re = mo(ae).filter(function (fe) {
          return fe
        })
        return u ? re : re.slice(0, 1)
      },
      [ae, u],
    ),
    he = tt(function (re) {
      ye(re),
        f &&
          (re === null ||
            oe.length !== re.length ||
            oe.some(function (fe, Re) {
              return !Xt(a, r, fe, re[Re], W)
            })) &&
          (f == null || f(u ? re : re[0]))
    }),
    ge = tt(function (re) {
      if ((y == null || y(re), q === C)) {
        var fe = u ? J(oe, re) : [re]
        he(fe)
      }
    }),
    ce = Gn(v || oe[0] || U, { value: p }),
    Ce = V(ce, 2),
    we = Ce[0],
    Ne = Ce[1]
  g.useEffect(
    function () {
      oe[0] && !p && Ne(oe[0])
    },
    [oe[0]],
  )
  var Le = function (fe, Re) {
      h == null || h(fe || p, Re || q)
    },
    Z = function (fe) {
      var Re =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
      Ne(fe), b == null || b(fe), Re && Le(fe)
    },
    Se = function (fe, Re) {
      X(fe), Re && Z(Re), Le(Re, fe)
    },
    ie = function (fe) {
      if ((ge(fe), Z(fe), q !== C)) {
        var Re = ['decade', 'year'],
          Ae = [].concat(Re, ['month']),
          qe = {
            quarter: [].concat(Re, ['quarter']),
            week: [].concat(de(Ae), ['week']),
            date: [].concat(de(Ae), ['date']),
          },
          Ze = qe[C] || Ae,
          Qe = Ze.indexOf(q),
          at = Ze[Qe + 1]
        at && Se(at, fe)
      }
    },
    Xe = g.useMemo(
      function () {
        var re, fe
        if (Array.isArray(x)) {
          var Re = V(x, 2)
          ;(re = Re[0]), (fe = Re[1])
        } else re = x
        return !re && !fe
          ? null
          : ((re = re || fe),
            (fe = fe || re),
            a.isAfter(re, fe) ? [fe, re] : [re, fe])
      },
      [x, a],
    ),
    He = im(R, F, _),
    Ie = j[Q] || u_[Q] || Tc,
    Ye = g.useContext(Ea),
    Je = g.useMemo(
      function () {
        return H(H({}, Ye), {}, { hideHeader: A })
      },
      [Ye, A],
    ),
    me = ''.concat(I, '-panel'),
    We = Oc(e, [
      'showWeek',
      'prevIcon',
      'nextIcon',
      'superPrevIcon',
      'superNextIcon',
      'disabledDate',
      'minDate',
      'maxDate',
      'onHover',
    ])
  return g.createElement(
    Ea.Provider,
    { value: Je },
    g.createElement(
      'div',
      {
        ref: N,
        tabIndex: s,
        className: ke(me, z({}, ''.concat(me, '-rtl'), o === 'rtl')),
      },
      g.createElement(
        Ie,
        ve({}, We, {
          showTime: B,
          prefixCls: I,
          locale: L,
          generateConfig: a,
          onModeChange: Se,
          pickerValue: we,
          onPickerValueChange: function (fe) {
            Z(fe, !0)
          },
          value: oe[0],
          onSelect: ie,
          values: oe,
          cellRender: He,
          hoverRangeValue: Xe,
          hoverValue: E,
        }),
      ),
    ),
  )
}
var Yd = g.memo(g.forwardRef(c_))
function d_(e) {
  var t = e.picker,
    n = e.multiplePanel,
    r = e.pickerValue,
    a = e.onPickerValueChange,
    o = e.needConfirm,
    i = e.onSubmit,
    l = e.range,
    s = e.hoverValue,
    u = g.useContext(mr),
    c = u.prefixCls,
    d = u.generateConfig,
    f = g.useCallback(
      function (h, S) {
        return Wi(d, t, h, S)
      },
      [d, t],
    ),
    y = g.useMemo(
      function () {
        return f(r, 1)
      },
      [r, f],
    ),
    v = function (S) {
      a(f(S, -1))
    },
    p = {
      onCellDblClick: function () {
        o && i()
      },
    },
    b = t === 'time',
    m = H(
      H({}, e),
      {},
      { hoverValue: null, hoverRangeValue: null, hideHeader: b },
    )
  return (
    l ? (m.hoverRangeValue = s) : (m.hoverValue = s),
    n
      ? g.createElement(
          'div',
          { className: ''.concat(c, '-panels') },
          g.createElement(
            Ea.Provider,
            { value: H(H({}, p), {}, { hideNext: !0 }) },
            g.createElement(Yd, m),
          ),
          g.createElement(
            Ea.Provider,
            { value: H(H({}, p), {}, { hidePrev: !0 }) },
            g.createElement(
              Yd,
              ve({}, m, { pickerValue: y, onPickerValueChange: v }),
            ),
          ),
        )
      : g.createElement(
          Ea.Provider,
          { value: H({}, p) },
          g.createElement(Yd, m),
        )
  )
}
function Vp(e) {
  return typeof e == 'function' ? e() : e
}
function f_(e) {
  var t = e.prefixCls,
    n = e.presets,
    r = e.onClick,
    a = e.onHover
  return n.length
    ? g.createElement(
        'div',
        { className: ''.concat(t, '-presets') },
        g.createElement(
          'ul',
          null,
          n.map(function (o, i) {
            var l = o.label,
              s = o.value
            return g.createElement(
              'li',
              {
                key: i,
                onClick: function () {
                  r(Vp(s))
                },
                onMouseEnter: function () {
                  a(Vp(s))
                },
                onMouseLeave: function () {
                  a(null)
                },
              },
              l,
            )
          }),
        ),
      )
    : null
}
function rC(e) {
  var t = e.panelRender,
    n = e.internalMode,
    r = e.picker,
    a = e.showNow,
    o = e.range,
    i = e.multiple,
    l = e.activeOffset,
    s = l === void 0 ? 0 : l,
    u = e.presets,
    c = e.onPresetHover,
    d = e.onPresetSubmit,
    f = e.onFocus,
    y = e.onBlur,
    v = e.direction,
    p = e.value,
    b = e.onSelect,
    m = e.isInvalid,
    h = e.defaultOpenValue,
    S = e.onOk,
    C = e.onSubmit,
    w = g.useContext(mr),
    E = w.prefixCls,
    x = ''.concat(E, '-panel'),
    R = v === 'rtl',
    F = g.useRef(null),
    _ = g.useRef(null),
    T = g.useState(0),
    j = V(T, 2),
    A = j[0],
    I = j[1],
    N = g.useState(0),
    P = V(N, 2),
    k = P[0],
    $ = P[1],
    M = function (te) {
      te.offsetWidth && I(te.offsetWidth)
    }
  g.useEffect(
    function () {
      if (o) {
        var ne,
          te =
            ((ne = F.current) === null || ne === void 0
              ? void 0
              : ne.offsetWidth) || 0,
          ae = A - te
        s <= ae ? $(0) : $(s + te - A)
      }
    },
    [A, s, o],
  )
  function O(ne) {
    return ne.filter(function (te) {
      return te
    })
  }
  var D = g.useMemo(
      function () {
        return O(mo(p))
      },
      [p],
    ),
    L = r === 'time' && !D.length,
    W = g.useMemo(
      function () {
        return L ? O([h]) : D
      },
      [L, D, h],
    ),
    B = L ? h : D,
    U = g.useMemo(
      function () {
        return W.length
          ? W.some(function (ne) {
              return m(ne)
            })
          : !0
      },
      [W, m],
    ),
    K = function () {
      L && b(h), S(), C()
    },
    Y = g.createElement(
      'div',
      { className: ''.concat(E, '-panel-layout') },
      g.createElement(f_, { prefixCls: E, presets: u, onClick: d, onHover: c }),
      g.createElement(
        'div',
        null,
        g.createElement(d_, ve({}, e, { value: B })),
        g.createElement(
          JO,
          ve({}, e, { showNow: i ? !1 : a, invalid: U, onSubmit: K }),
        ),
      ),
    )
  t && (Y = t(Y))
  var q = ''.concat(x, '-container'),
    X = 'marginLeft',
    Q = 'marginRight',
    J = g.createElement(
      'div',
      {
        tabIndex: -1,
        className: ke(q, ''.concat(E, '-').concat(n, '-panel-container')),
        style: z(z({}, R ? Q : X, k), R ? X : Q, 'auto'),
        onFocus: f,
        onBlur: y,
      },
      Y,
    )
  return (
    o &&
      (J = g.createElement(
        'div',
        {
          ref: _,
          className: ke(
            ''.concat(E, '-range-wrapper'),
            ''.concat(E, '-').concat(r, '-range-wrapper'),
          ),
        },
        g.createElement('div', {
          ref: F,
          className: ''.concat(E, '-range-arrow'),
          style: z({}, R ? 'right' : 'left', s),
        }),
        g.createElement(fo, { onResize: M }, J),
      )),
    J
  )
}
function aC(e, t) {
  var n = e.format,
    r = e.maskFormat,
    a = e.generateConfig,
    o = e.locale,
    i = e.preserveInvalidOnBlur,
    l = e.inputReadOnly,
    s = e.required,
    u = e['aria-required'],
    c = e.onSubmit,
    d = e.onFocus,
    f = e.onBlur,
    y = e.onInputChange,
    v = e.onInvalid,
    p = e.open,
    b = e.onOpenChange,
    m = e.onKeyDown,
    h = e.onChange,
    S = e.activeHelp,
    C = e.name,
    w = e.autoComplete,
    E = e.id,
    x = e.value,
    R = e.invalid,
    F = e.placeholder,
    _ = e.disabled,
    T = e.activeIndex,
    j = e.allHelp,
    A = e.picker,
    I = function (L, W) {
      var B = a.locale.parse(o.locale, L, [W])
      return B && a.isValidate(B) ? B : null
    },
    N = n[0],
    P = g.useCallback(
      function (D) {
        return Ft(D, { locale: o, format: N, generateConfig: a })
      },
      [o, a, N],
    ),
    k = g.useMemo(
      function () {
        return x.map(P)
      },
      [x, P],
    ),
    $ = g.useMemo(
      function () {
        var D = A === 'time' ? 8 : 10,
          L = typeof N == 'function' ? N(a.getNow()).length : N.length
        return Math.max(D, L) + 2
      },
      [N, A, a],
    ),
    M = function (L) {
      for (var W = 0; W < n.length; W += 1) {
        var B = n[W]
        if (typeof B == 'string') {
          var U = I(L, B)
          if (U) return U
        }
      }
      return !1
    },
    O = function (L) {
      function W(K) {
        return L !== void 0 ? K[L] : K
      }
      var B = Pc(e, { aria: !0, data: !0 }),
        U = H(
          H({}, B),
          {},
          {
            format: r,
            validateFormat: function (Y) {
              return !!M(Y)
            },
            preserveInvalidOnBlur: i,
            readOnly: l,
            required: s,
            'aria-required': u,
            name: C,
            autoComplete: w,
            size: $,
            id: W(E),
            value: W(k) || '',
            invalid: W(R),
            placeholder: W(F),
            active: T === L,
            helped: j || (S && T === L),
            disabled: W(_),
            onFocus: function (Y) {
              d(Y, L)
            },
            onBlur: function (Y) {
              f(Y, L)
            },
            onSubmit: c,
            onChange: function (Y) {
              y()
              var q = M(Y)
              if (q) {
                v(!1, L), h(q, L)
                return
              }
              v(!!Y, L)
            },
            onHelp: function () {
              b(!0, { index: L })
            },
            onKeyDown: function (Y) {
              var q = !1
              if (
                (m == null ||
                  m(Y, function () {
                    q = !0
                  }),
                !Y.defaultPrevented && !q)
              )
                switch (Y.key) {
                  case 'Escape':
                    b(!1, { index: L })
                    break
                  case 'Enter':
                    p || b(!0)
                    break
                }
            },
          },
          t == null ? void 0 : t({ valueTexts: k }),
        )
      return (
        Object.keys(U).forEach(function (K) {
          U[K] === void 0 && delete U[K]
        }),
        U
      )
    }
  return [O, P]
}
var g_ = ['onMouseEnter', 'onMouseLeave']
function oC(e) {
  return g.useMemo(
    function () {
      return Oc(e, g_)
    },
    [e],
  )
}
var h_ = ['icon', 'type'],
  m_ = ['onClear']
function Fc(e) {
  var t = e.icon,
    n = e.type,
    r = xt(e, h_),
    a = g.useContext(mr),
    o = a.prefixCls
  return t
    ? g.createElement(
        'span',
        ve({ className: ''.concat(o, '-').concat(n) }, r),
        t,
      )
    : null
}
function _g(e) {
  var t = e.onClear,
    n = xt(e, m_)
  return g.createElement(
    Fc,
    ve({}, n, {
      type: 'clear',
      role: 'button',
      onMouseDown: function (a) {
        a.preventDefault()
      },
      onClick: function (a) {
        a.stopPropagation(), t()
      },
    }),
  )
}
var qd = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss', 'SSS'],
  Bp = '顧',
  v_ = (function () {
    function e(t) {
      Yt(this, e),
        z(this, 'format', void 0),
        z(this, 'maskFormat', void 0),
        z(this, 'cells', void 0),
        z(this, 'maskCells', void 0),
        (this.format = t)
      var n = qd
          .map(function (l) {
            return '('.concat(l, ')')
          })
          .join('|'),
        r = new RegExp(n, 'g')
      this.maskFormat = t.replace(r, function (l) {
        return Bp.repeat(l.length)
      })
      var a = new RegExp('('.concat(qd.join('|'), ')')),
        o = (t.split(a) || []).filter(function (l) {
          return l
        }),
        i = 0
      ;(this.cells = o.map(function (l) {
        var s = qd.includes(l),
          u = i,
          c = i + l.length
        return (i = c), { text: l, mask: s, start: u, end: c }
      })),
        (this.maskCells = this.cells.filter(function (l) {
          return l.mask
        }))
    }
    return (
      qt(e, [
        {
          key: 'getSelection',
          value: function (n) {
            var r = this.maskCells[n] || {},
              a = r.start,
              o = r.end
            return [a || 0, o || 0]
          },
        },
        {
          key: 'match',
          value: function (n) {
            for (var r = 0; r < this.maskFormat.length; r += 1) {
              var a = this.maskFormat[r],
                o = n[r]
              if (!o || (a !== Bp && a !== o)) return !1
            }
            return !0
          },
        },
        {
          key: 'size',
          value: function () {
            return this.maskCells.length
          },
        },
        {
          key: 'getMaskCellIndex',
          value: function (n) {
            for (
              var r = Number.MAX_SAFE_INTEGER, a = 0, o = 0;
              o < this.maskCells.length;
              o += 1
            ) {
              var i = this.maskCells[o],
                l = i.start,
                s = i.end
              if (n >= l && n <= s) return o
              var u = Math.min(Math.abs(n - l), Math.abs(n - s))
              u < r && ((r = u), (a = o))
            }
            return a
          },
        },
      ]),
      e
    )
  })()
function p_(e) {
  var t = {
    YYYY: [0, 9999, new Date().getFullYear()],
    MM: [1, 12],
    DD: [1, 31],
    HH: [0, 23],
    mm: [0, 59],
    ss: [0, 59],
    SSS: [0, 999],
  }
  return t[e]
}
var y_ = [
    'active',
    'showActiveCls',
    'suffixIcon',
    'format',
    'validateFormat',
    'onChange',
    'onInput',
    'helped',
    'onHelp',
    'onSubmit',
    'onKeyDown',
    'preserveInvalidOnBlur',
    'invalid',
    'clearIcon',
  ],
  Ig = g.forwardRef(function (e, t) {
    var n = e.active,
      r = e.showActiveCls,
      a = r === void 0 ? !0 : r,
      o = e.suffixIcon,
      i = e.format,
      l = e.validateFormat,
      s = e.onChange
    e.onInput
    var u = e.helped,
      c = e.onHelp,
      d = e.onSubmit,
      f = e.onKeyDown,
      y = e.preserveInvalidOnBlur,
      v = y === void 0 ? !1 : y,
      p = e.invalid,
      b = e.clearIcon,
      m = xt(e, y_),
      h = e.value,
      S = e.onFocus,
      C = e.onBlur,
      w = e.onMouseUp,
      E = g.useContext(mr),
      x = E.prefixCls,
      R = E.input,
      F = R === void 0 ? 'input' : R,
      _ = ''.concat(x, '-input'),
      T = g.useState(!1),
      j = V(T, 2),
      A = j[0],
      I = j[1],
      N = g.useState(h),
      P = V(N, 2),
      k = P[0],
      $ = P[1],
      M = g.useState(''),
      O = V(M, 2),
      D = O[0],
      L = O[1],
      W = g.useState(null),
      B = V(W, 2),
      U = B[0],
      K = B[1],
      Y = g.useState(null),
      q = V(Y, 2),
      X = q[0],
      Q = q[1],
      J = k || ''
    g.useEffect(
      function () {
        $(h)
      },
      [h],
    )
    var ne = g.useRef(),
      te = g.useRef()
    g.useImperativeHandle(t, function () {
      return {
        nativeElement: ne.current,
        inputElement: te.current,
        focus: function (re) {
          te.current.focus(re)
        },
        blur: function () {
          te.current.blur()
        },
      }
    })
    var ae = g.useMemo(
        function () {
          return new v_(i || '')
        },
        [i],
      ),
      ye = g.useMemo(
        function () {
          return u ? [0, 0] : ae.getSelection(U)
        },
        [ae, U, u],
      ),
      oe = V(ye, 2),
      he = oe[0],
      ge = oe[1],
      ce = function (re) {
        re && re !== i && re !== h && c()
      },
      Ce = tt(function (We) {
        l(We) && s(We), $(We), ce(We)
      }),
      we = function (re) {
        if (!i) {
          var fe = re.target.value
          ce(fe), $(fe), s(fe)
        }
      },
      Ne = function (re) {
        var fe = re.clipboardData.getData('text')
        l(fe) && Ce(fe)
      },
      Le = g.useRef(!1),
      Z = function () {
        Le.current = !0
      },
      Se = function (re) {
        var fe = re.target,
          Re = fe.selectionStart,
          Ae = ae.getMaskCellIndex(Re)
        K(Ae), Q({}), w == null || w(re), (Le.current = !1)
      },
      ie = function (re) {
        I(!0), K(0), L(''), S(re)
      },
      Xe = function (re) {
        C(re)
      },
      He = function (re) {
        I(!1), Xe(re)
      }
    um(n, function () {
      !n && !v && $(h)
    })
    var Ie = function (re) {
        re.key === 'Enter' && l(J) && d(), f == null || f(re)
      },
      Ye = function (re) {
        Ie(re)
        var fe = re.key,
          Re = null,
          Ae = null,
          qe = ge - he,
          Ze = i.slice(he, ge),
          Qe = function (De) {
            K(function (be) {
              var Te = be + De
              return (
                (Te = Math.max(Te, 0)), (Te = Math.min(Te, ae.size() - 1)), Te
              )
            })
          },
          at = function (De) {
            var be = p_(Ze),
              Te = V(be, 3),
              pe = Te[0],
              se = Te[1],
              xe = Te[2],
              Ve = J.slice(he, ge),
              et = Number(Ve)
            if (isNaN(et)) return String(xe || (De > 0 ? pe : se))
            var Rt = et + De,
              vt = se - pe + 1
            return String(pe + ((vt + Rt - pe) % vt))
          }
        switch (fe) {
          case 'Backspace':
          case 'Delete':
            ;(Re = ''), (Ae = Ze)
            break
          case 'ArrowLeft':
            ;(Re = ''), Qe(-1)
            break
          case 'ArrowRight':
            ;(Re = ''), Qe(1)
            break
          case 'ArrowUp':
            ;(Re = ''), (Ae = at(1))
            break
          case 'ArrowDown':
            ;(Re = ''), (Ae = at(-1))
            break
          default:
            isNaN(Number(fe)) || ((Re = D + fe), (Ae = Re))
            break
        }
        if (
          (Re !== null && (L(Re), Re.length >= qe && (Qe(1), L(''))),
          Ae !== null)
        ) {
          var Et = J.slice(0, he) + om(Ae, qe) + J.slice(ge)
          Ce(Et.slice(0, i.length))
        }
        Q({})
      },
      Je = g.useRef()
    ft(
      function () {
        if (!(!A || !i || Le.current)) {
          if (!ae.match(J)) {
            Ce(i)
            return
          }
          return (
            te.current.setSelectionRange(he, ge),
            (Je.current = Bt(function () {
              te.current.setSelectionRange(he, ge)
            })),
            function () {
              Bt.cancel(Je.current)
            }
          )
        }
      },
      [ae, i, A, J, U, he, ge, X, Ce],
    )
    var me = i
      ? {
          onFocus: ie,
          onBlur: He,
          onKeyDown: Ye,
          onMouseDown: Z,
          onMouseUp: Se,
          onPaste: Ne,
        }
      : {}
    return g.createElement(
      'div',
      {
        ref: ne,
        className: ke(
          _,
          z(
            z({}, ''.concat(_, '-active'), n && a),
            ''.concat(_, '-placeholder'),
            u,
          ),
        ),
      },
      g.createElement(
        F,
        ve(
          { ref: te, 'aria-invalid': p, autoComplete: 'off' },
          m,
          { onKeyDown: Ie, onBlur: Xe },
          me,
          { value: J, onChange: we },
        ),
      ),
      g.createElement(Fc, { type: 'suffix', icon: o }),
      b,
    )
  }),
  S_ = [
    'id',
    'clearIcon',
    'suffixIcon',
    'separator',
    'activeIndex',
    'activeHelp',
    'allHelp',
    'focused',
    'onFocus',
    'onBlur',
    'onKeyDown',
    'locale',
    'generateConfig',
    'placeholder',
    'className',
    'style',
    'onClick',
    'onClear',
    'value',
    'onChange',
    'onSubmit',
    'onInputChange',
    'format',
    'maskFormat',
    'preserveInvalidOnBlur',
    'onInvalid',
    'disabled',
    'invalid',
    'inputReadOnly',
    'direction',
    'onOpenChange',
    'onActiveOffset',
    'onMouseDown',
    'required',
    'aria-required',
    'autoFocus',
  ],
  b_ = ['index']
function C_(e, t) {
  var n = e.id,
    r = e.clearIcon,
    a = e.suffixIcon,
    o = e.separator,
    i = o === void 0 ? '~' : o,
    l = e.activeIndex
  e.activeHelp, e.allHelp
  var s = e.focused
  e.onFocus, e.onBlur, e.onKeyDown, e.locale, e.generateConfig
  var u = e.placeholder,
    c = e.className,
    d = e.style,
    f = e.onClick,
    y = e.onClear,
    v = e.value
  e.onChange,
    e.onSubmit,
    e.onInputChange,
    e.format,
    e.maskFormat,
    e.preserveInvalidOnBlur,
    e.onInvalid
  var p = e.disabled,
    b = e.invalid
  e.inputReadOnly
  var m = e.direction
  e.onOpenChange
  var h = e.onActiveOffset,
    S = e.onMouseDown
  e.required, e['aria-required']
  var C = e.autoFocus,
    w = xt(e, S_),
    E = m === 'rtl',
    x = g.useContext(mr),
    R = x.prefixCls,
    F = g.useMemo(
      function () {
        if (typeof n == 'string') return [n]
        var q = n || {}
        return [q.start, q.end]
      },
      [n],
    ),
    _ = g.useRef(),
    T = g.useRef(),
    j = g.useRef(),
    A = function (X) {
      var Q
      return (Q = [T, j][X]) === null || Q === void 0 ? void 0 : Q.current
    }
  g.useImperativeHandle(t, function () {
    return {
      nativeElement: _.current,
      focus: function (X) {
        if (_e(X) === 'object') {
          var Q,
            J = X || {},
            ne = J.index,
            te = ne === void 0 ? 0 : ne,
            ae = xt(J, b_)
          ;(Q = A(te)) === null || Q === void 0 || Q.focus(ae)
        } else {
          var ye
          ;(ye = A(X ?? 0)) === null || ye === void 0 || ye.focus()
        }
      },
      blur: function () {
        var X, Q
        ;(X = A(0)) === null || X === void 0 || X.blur(),
          (Q = A(1)) === null || Q === void 0 || Q.blur()
      },
    }
  })
  var I = oC(w),
    N = g.useMemo(
      function () {
        return Array.isArray(u) ? u : [u, u]
      },
      [u],
    ),
    P = aC(H(H({}, e), {}, { id: F, placeholder: N })),
    k = V(P, 1),
    $ = k[0],
    M = E ? 'right' : 'left',
    O = g.useState(z({ position: 'absolute', width: 0 }, M, 0)),
    D = V(O, 2),
    L = D[0],
    W = D[1],
    B = tt(function () {
      var q = A(l)
      if (q) {
        var X = q.nativeElement,
          Q = X.offsetWidth,
          J = X.offsetLeft,
          ne = X.offsetParent,
          te = J
        if (E) {
          var ae = ne,
            ye = getComputedStyle(ae)
          te =
            ae.offsetWidth -
            parseFloat(ye.borderRightWidth) -
            parseFloat(ye.borderLeftWidth) -
            J -
            Q
        }
        W(function (oe) {
          return H(H({}, oe), {}, z({ width: Q }, M, te))
        }),
          h(l === 0 ? 0 : te)
      }
    })
  g.useEffect(
    function () {
      B()
    },
    [l],
  )
  var U = r && ((v[0] && !p[0]) || (v[1] && !p[1])),
    K = C && !p[0],
    Y = C && !K && !p[1]
  return g.createElement(
    fo,
    { onResize: B },
    g.createElement(
      'div',
      ve({}, I, {
        className: ke(
          R,
          ''.concat(R, '-range'),
          z(
            z(
              z(
                z({}, ''.concat(R, '-focused'), s),
                ''.concat(R, '-disabled'),
                p.every(function (q) {
                  return q
                }),
              ),
              ''.concat(R, '-invalid'),
              b.some(function (q) {
                return q
              }),
            ),
            ''.concat(R, '-rtl'),
            E,
          ),
          c,
        ),
        style: d,
        ref: _,
        onClick: f,
        onMouseDown: function (X) {
          var Q = X.target
          Q !== T.current.inputElement &&
            Q !== j.current.inputElement &&
            X.preventDefault(),
            S == null || S(X)
        },
      }),
      g.createElement(
        Ig,
        ve({ ref: T }, $(0), { autoFocus: K, 'date-range': 'start' }),
      ),
      g.createElement(
        'div',
        { className: ''.concat(R, '-range-separator') },
        i,
      ),
      g.createElement(
        Ig,
        ve({ ref: j }, $(1), { autoFocus: Y, 'date-range': 'end' }),
      ),
      g.createElement('div', {
        className: ''.concat(R, '-active-bar'),
        style: L,
      }),
      g.createElement(Fc, { type: 'suffix', icon: a }),
      U && g.createElement(_g, { icon: r, onClear: y }),
    ),
  )
}
var w_ = g.forwardRef(C_)
function Wp(e, t) {
  var n = e ?? t
  return Array.isArray(n) ? n : [n, n]
}
function Ls(e) {
  return e === 1 ? 'end' : 'start'
}
function x_(e, t) {
  var n = Bb(e, function () {
      var Fe = e.disabled,
        $e = e.allowEmpty,
        je = Wp(Fe, !1),
        bt = Wp($e, !1)
      return { disabled: je, allowEmpty: bt }
    }),
    r = V(n, 6),
    a = r[0],
    o = r[1],
    i = r[2],
    l = r[3],
    s = r[4],
    u = r[5],
    c = a.prefixCls,
    d = a.styles,
    f = a.classNames,
    y = a.defaultValue,
    v = a.value,
    p = a.needConfirm,
    b = a.onKeyDown,
    m = a.disabled,
    h = a.allowEmpty,
    S = a.disabledDate,
    C = a.minDate,
    w = a.maxDate,
    E = a.defaultOpen,
    x = a.open,
    R = a.onOpenChange,
    F = a.locale,
    _ = a.generateConfig,
    T = a.picker,
    j = a.showNow,
    A = a.showToday,
    I = a.showTime,
    N = a.mode,
    P = a.onPanelChange,
    k = a.onCalendarChange,
    $ = a.onOk,
    M = a.defaultPickerValue,
    O = a.pickerValue,
    D = a.onPickerValueChange,
    L = a.inputReadOnly,
    W = a.suffixIcon,
    B = a.onFocus,
    U = a.onBlur,
    K = a.presets,
    Y = a.ranges,
    q = a.components,
    X = a.cellRender,
    Q = a.dateRender,
    J = a.monthCellRender,
    ne = a.onClick,
    te = Ub(t),
    ae = Wb(x, E, m, R),
    ye = V(ae, 2),
    oe = ye[0],
    he = ye[1],
    ge = function ($e, je) {
      ;(m.some(function (bt) {
        return !bt
      }) ||
        !$e) &&
        he($e, je)
    },
    ce = Jb(_, F, l, !0, !1, y, v, k, $),
    Ce = V(ce, 5),
    we = Ce[0],
    Ne = Ce[1],
    Le = Ce[2],
    Z = Ce[3],
    Se = Ce[4],
    ie = Le(),
    Xe = qb(m, h),
    He = V(Xe, 7),
    Ie = He[0],
    Ye = He[1],
    Je = He[2],
    me = He[3],
    We = He[4],
    re = He[5],
    fe = He[6],
    Re = function ($e, je) {
      Ye(!0), B == null || B($e, { range: Ls(je ?? me) })
    },
    Ae = function ($e, je) {
      Ye(!1), U == null || U($e, { range: Ls(je ?? me) })
    },
    qe = g.useMemo(
      function () {
        if (!I) return null
        var Fe = I.disabledTime,
          $e = Fe
            ? function (je) {
                var bt = Ls(me),
                  it = Ib(ie, fe, me)
                return Fe(je, bt, { from: it })
              }
            : void 0
        return H(H({}, I), {}, { disabledTime: $e })
      },
      [I, me, ie, fe],
    ),
    Ze = Gn([T, T], { value: N }),
    Qe = V(Ze, 2),
    at = Qe[0],
    Et = Qe[1],
    Ke = at[me] || T,
    De = Ke === 'date' && qe ? 'datetime' : Ke,
    be = De === T && De !== 'time',
    Te = eC(T, Ke, j, A, !0),
    pe = Zb(a, we, Ne, Le, Z, m, l, Ie, oe, u),
    se = V(pe, 2),
    xe = se[0],
    Ve = se[1],
    et = KO(ie, m, fe, _, F, S),
    Rt = Fb(ie, u, h),
    vt = V(Rt, 2),
    vr = vt[0],
    Sn = vt[1],
    bn = Kb(
      _,
      F,
      ie,
      at,
      oe,
      me,
      o,
      be,
      M,
      O,
      qe == null ? void 0 : qe.defaultOpenValue,
      D,
      C,
      w,
    ),
    jn = V(bn, 2),
    sn = jn[0],
    Cn = jn[1],
    ct = tt(function (Fe, $e, je) {
      var bt = ol(at, me, $e)
      if (((bt[0] !== at[0] || bt[1] !== at[1]) && Et(bt), P && je !== !1)) {
        var it = de(ie)
        Fe && (it[me] = Fe), P(it, bt)
      }
    }),
    un = function ($e, je) {
      return ol(ie, je, $e)
    },
    Mt = function ($e, je) {
      var bt = ie
      $e && (bt = un($e, me))
      var it = re(bt)
      Z(bt),
        xe(me, it === null),
        it === null
          ? ge(!1, { force: !0 })
          : je || te.current.focus({ index: it })
    },
    Mr = function ($e) {
      if (!te.current.nativeElement.contains(document.activeElement)) {
        var je = m.findIndex(function (bt) {
          return !bt
        })
        je >= 0 && te.current.focus({ index: je })
      }
      ge(!0), ne == null || ne($e)
    },
    zn = function () {
      Ve(null), ge(!1, { force: !0 })
    },
    Xr = g.useState(null),
    Hn = V(Xr, 2),
    tr = Hn[0],
    $t = Hn[1],
    _a = g.useState(null),
    pr = V(_a, 2),
    At = pr[0],
    tn = pr[1],
    Or = g.useMemo(
      function () {
        return At || ie
      },
      [ie, At],
    )
  g.useEffect(
    function () {
      oe || tn(null)
    },
    [oe],
  )
  var Ia = g.useState(0),
    Vn = V(Ia, 2),
    Jr = Vn[0],
    Zr = Vn[1],
    cn = Yb(K, Y),
    wn = function ($e) {
      tn($e), $t('preset')
    },
    _r = function ($e) {
      var je = Ve($e)
      je && ge(!1, { force: !0 })
    },
    ea = function ($e) {
      Mt($e)
    },
    Bn = function ($e) {
      tn($e ? un($e, me) : null), $t('cell')
    },
    nr = function ($e) {
      ge(!0), Re($e)
    },
    Ir = function ($e) {
      Je('panel')
      var je = ol(ie, me, $e)
      Z(je), !p && !i && o === De && Mt($e)
    },
    yr = function () {
      ge(!1)
    },
    xn = im(X, Q, J, Ls(me)),
    Ta = ie[me] || null,
    Fa = tt(function (Fe) {
      return u(Fe, { activeIndex: me })
    }),
    Na = g.useMemo(
      function () {
        var Fe = Pc(a, !1),
          $e = Dh(
            a,
            [].concat(de(Object.keys(Fe)), [
              'onChange',
              'onCalendarChange',
              'style',
              'className',
              'onPanelChange',
              'disabledTime',
            ]),
          )
        return $e
      },
      [a],
    ),
    ta = g.createElement(
      rC,
      ve({}, Na, {
        showNow: Te,
        showTime: qe,
        range: !0,
        multiplePanel: be,
        activeOffset: Jr,
        disabledDate: et,
        onFocus: nr,
        onBlur: Ae,
        picker: T,
        mode: Ke,
        internalMode: De,
        onPanelChange: ct,
        format: s,
        value: Ta,
        isInvalid: Fa,
        onChange: null,
        onSelect: Ir,
        pickerValue: sn,
        defaultOpenValue: mo(I == null ? void 0 : I.defaultOpenValue)[me],
        onPickerValueChange: Cn,
        hoverValue: Or,
        onHover: Bn,
        needConfirm: p,
        onSubmit: Mt,
        onOk: Se,
        presets: cn,
        onPresetHover: wn,
        onPresetSubmit: _r,
        onNow: ea,
        cellRender: xn,
      }),
    ),
    Da = function ($e, je) {
      var bt = un($e, je)
      Z(bt)
    },
    Me = function () {
      Je('input')
    },
    Ee = function ($e, je) {
      Je('input'), ge(!0, { inherit: !0 }), We(je), Re($e, je)
    },
    Ot = function ($e, je) {
      ge(!1), Ae($e, je)
    },
    dn = function ($e, je) {
      $e.key === 'Tab' && Mt(null, !0), b == null || b($e, je)
    },
    Sr = g.useMemo(
      function () {
        return {
          prefixCls: c,
          locale: F,
          generateConfig: _,
          button: q.button,
          input: q.input,
        }
      },
      [c, F, _, q.button, q.input],
    )
  return (
    ft(
      function () {
        oe && me !== void 0 && ct(null, T, !1)
      },
      [oe, me, T],
    ),
    ft(
      function () {
        var Fe = Je()
        !oe && Fe === 'input' && (ge(!1), Mt(null, !0)),
          !oe && i && !p && Fe === 'panel' && (ge(!0), Mt())
      },
      [oe],
    ),
    g.createElement(
      mr.Provider,
      { value: Sr },
      g.createElement(
        Ob,
        ve({}, Tb(a), {
          popupElement: ta,
          popupStyle: d.popup,
          popupClassName: f.popup,
          visible: oe,
          onClose: yr,
          range: !0,
        }),
        g.createElement(
          w_,
          ve({}, a, {
            ref: te,
            suffixIcon: W,
            activeIndex: Ie || oe ? me : null,
            activeHelp: !!At,
            allHelp: !!At && tr === 'preset',
            focused: Ie,
            onFocus: Ee,
            onBlur: Ot,
            onKeyDown: dn,
            onSubmit: Mt,
            value: Or,
            maskFormat: s,
            onChange: Da,
            onInputChange: Me,
            format: l,
            inputReadOnly: L,
            disabled: m,
            open: oe,
            onOpenChange: ge,
            onClick: Mr,
            onClear: zn,
            invalid: vr,
            onInvalid: Sn,
            onActiveOffset: Zr,
          }),
        ),
      ),
    )
  )
}
var E_ = g.forwardRef(x_)
function $_(e) {
  var t = e.prefixCls,
    n = e.value,
    r = e.onRemove,
    a = e.removeIcon,
    o = a === void 0 ? '×' : a,
    i = e.formatDate,
    l = e.disabled,
    s = e.maxTagCount,
    u = e.placeholder,
    c = ''.concat(t, '-selector'),
    d = ''.concat(t, '-selection'),
    f = ''.concat(d, '-overflow')
  function y(b, m) {
    return g.createElement(
      'span',
      {
        className: ke(''.concat(d, '-item')),
        title: typeof b == 'string' ? b : null,
      },
      g.createElement('span', { className: ''.concat(d, '-item-content') }, b),
      !l &&
        m &&
        g.createElement(
          'span',
          {
            onMouseDown: function (S) {
              S.preventDefault()
            },
            onClick: m,
            className: ''.concat(d, '-item-remove'),
          },
          o,
        ),
    )
  }
  function v(b) {
    var m = i(b),
      h = function (C) {
        C && C.stopPropagation(), r(b)
      }
    return y(m, h)
  }
  function p(b) {
    var m = '+ '.concat(b.length, ' ...')
    return y(m)
  }
  return g.createElement(
    'div',
    { className: c },
    g.createElement(Yl, {
      prefixCls: f,
      data: n,
      renderItem: v,
      renderRest: p,
      itemKey: function (m) {
        return i(m)
      },
      maxCount: s,
    }),
    !n.length &&
      g.createElement(
        'span',
        { className: ''.concat(t, '-selection-placeholder') },
        u,
      ),
  )
}
var P_ = [
  'id',
  'open',
  'clearIcon',
  'suffixIcon',
  'activeHelp',
  'allHelp',
  'focused',
  'onFocus',
  'onBlur',
  'onKeyDown',
  'locale',
  'generateConfig',
  'placeholder',
  'className',
  'style',
  'onClick',
  'onClear',
  'internalPicker',
  'value',
  'onChange',
  'onSubmit',
  'onInputChange',
  'multiple',
  'maxTagCount',
  'format',
  'maskFormat',
  'preserveInvalidOnBlur',
  'onInvalid',
  'disabled',
  'invalid',
  'inputReadOnly',
  'direction',
  'onOpenChange',
  'onMouseDown',
  'required',
  'aria-required',
  'autoFocus',
  'removeIcon',
]
function k_(e, t) {
  e.id
  var n = e.open,
    r = e.clearIcon,
    a = e.suffixIcon
  e.activeHelp, e.allHelp
  var o = e.focused
  e.onFocus, e.onBlur, e.onKeyDown
  var i = e.locale,
    l = e.generateConfig,
    s = e.placeholder,
    u = e.className,
    c = e.style,
    d = e.onClick,
    f = e.onClear,
    y = e.internalPicker,
    v = e.value,
    p = e.onChange,
    b = e.onSubmit
  e.onInputChange
  var m = e.multiple,
    h = e.maxTagCount
  e.format, e.maskFormat, e.preserveInvalidOnBlur, e.onInvalid
  var S = e.disabled,
    C = e.invalid
  e.inputReadOnly
  var w = e.direction
  e.onOpenChange
  var E = e.onMouseDown
  e.required, e['aria-required']
  var x = e.autoFocus,
    R = e.removeIcon,
    F = xt(e, P_),
    _ = w === 'rtl',
    T = g.useContext(mr),
    j = T.prefixCls,
    A = g.useRef(),
    I = g.useRef()
  g.useImperativeHandle(t, function () {
    return {
      nativeElement: A.current,
      focus: function (U) {
        var K
        ;(K = I.current) === null || K === void 0 || K.focus(U)
      },
      blur: function () {
        var U
        ;(U = I.current) === null || U === void 0 || U.blur()
      },
    }
  })
  var N = oC(F),
    P = function (U) {
      p([U])
    },
    k = function (U) {
      var K = v.filter(function (Y) {
        return Y && !Xt(l, i, Y, U, y)
      })
      p(K), n || b()
    },
    $ = aC(H(H({}, e), {}, { onChange: P }), function (B) {
      var U = B.valueTexts
      return { value: U[0] || '', active: o }
    }),
    M = V($, 2),
    O = M[0],
    D = M[1],
    L = !!(r && v.length && !S),
    W = m
      ? g.createElement(
          g.Fragment,
          null,
          g.createElement($_, {
            prefixCls: j,
            value: v,
            onRemove: k,
            formatDate: D,
            maxTagCount: h,
            disabled: S,
            removeIcon: R,
            placeholder: s,
          }),
          g.createElement('input', {
            className: ''.concat(j, '-multiple-input'),
            value: v.map(D).join(','),
            ref: I,
            readOnly: !0,
            autoFocus: x,
          }),
          g.createElement(Fc, { type: 'suffix', icon: a }),
          L && g.createElement(_g, { icon: r, onClear: f }),
        )
      : g.createElement(
          Ig,
          ve({ ref: I }, O(), {
            autoFocus: x,
            suffixIcon: a,
            clearIcon: L && g.createElement(_g, { icon: r, onClear: f }),
            showActiveCls: !1,
          }),
        )
  return g.createElement(
    'div',
    ve({}, N, {
      className: ke(
        j,
        z(
          z(
            z(
              z(
                z({}, ''.concat(j, '-multiple'), m),
                ''.concat(j, '-focused'),
                o,
              ),
              ''.concat(j, '-disabled'),
              S,
            ),
            ''.concat(j, '-invalid'),
            C,
          ),
          ''.concat(j, '-rtl'),
          _,
        ),
        u,
      ),
      style: c,
      ref: A,
      onClick: d,
      onMouseDown: function (U) {
        var K,
          Y = U.target
        Y !==
          ((K = I.current) === null || K === void 0
            ? void 0
            : K.inputElement) && U.preventDefault(),
          E == null || E(U)
      },
    }),
    W,
  )
}
var R_ = g.forwardRef(k_)
function M_(e, t) {
  var n = Bb(e),
    r = V(n, 6),
    a = r[0],
    o = r[1],
    i = r[2],
    l = r[3],
    s = r[4],
    u = r[5],
    c = a,
    d = c.prefixCls,
    f = c.styles,
    y = c.classNames,
    v = c.order,
    p = c.defaultValue,
    b = c.value,
    m = c.needConfirm,
    h = c.onChange,
    S = c.onKeyDown,
    C = c.disabled,
    w = c.disabledDate,
    E = c.minDate,
    x = c.maxDate,
    R = c.defaultOpen,
    F = c.open,
    _ = c.onOpenChange,
    T = c.locale,
    j = c.generateConfig,
    A = c.picker,
    I = c.showNow,
    N = c.showToday,
    P = c.showTime,
    k = c.mode,
    $ = c.onPanelChange,
    M = c.onCalendarChange,
    O = c.onOk,
    D = c.multiple,
    L = c.defaultPickerValue,
    W = c.pickerValue,
    B = c.onPickerValueChange,
    U = c.inputReadOnly,
    K = c.suffixIcon,
    Y = c.removeIcon,
    q = c.onFocus,
    X = c.onBlur,
    Q = c.presets,
    J = c.components,
    ne = c.cellRender,
    te = c.dateRender,
    ae = c.monthCellRender,
    ye = c.onClick,
    oe = Ub(t)
  function he(Me) {
    return Me === null ? null : D ? Me : Me[0]
  }
  var ge = tC(j, T, o),
    ce = Wb(F, R, [C], _),
    Ce = V(ce, 2),
    we = Ce[0],
    Ne = Ce[1],
    Le = function (Ee, Ot, dn) {
      if (M) {
        var Sr = H({}, dn)
        delete Sr.range, M(he(Ee), he(Ot), Sr)
      }
    },
    Z = function (Ee) {
      O == null || O(he(Ee))
    },
    Se = Jb(j, T, l, !1, v, p, b, Le, Z),
    ie = V(Se, 5),
    Xe = ie[0],
    He = ie[1],
    Ie = ie[2],
    Ye = ie[3],
    Je = ie[4],
    me = Ie(),
    We = qb([C]),
    re = V(We, 4),
    fe = re[0],
    Re = re[1],
    Ae = re[2],
    qe = re[3],
    Ze = function (Ee) {
      Re(!0), q == null || q(Ee, {})
    },
    Qe = function (Ee) {
      Re(!1), X == null || X(Ee, {})
    },
    at = Gn(A, { value: k }),
    Et = V(at, 2),
    Ke = Et[0],
    De = Et[1],
    be = Ke === 'date' && P ? 'datetime' : Ke,
    Te = eC(A, Ke, I, N),
    pe =
      h &&
      function (Me, Ee) {
        h(he(Me), he(Ee))
      },
    se = Zb(
      H(H({}, a), {}, { onChange: pe }),
      Xe,
      He,
      Ie,
      Ye,
      [],
      l,
      fe,
      we,
      u,
    ),
    xe = V(se, 2),
    Ve = xe[1],
    et = Fb(me, u),
    Rt = V(et, 2),
    vt = Rt[0],
    vr = Rt[1],
    Sn = g.useMemo(
      function () {
        return vt.some(function (Me) {
          return Me
        })
      },
      [vt],
    ),
    bn = function (Ee, Ot) {
      if (B) {
        var dn = H(H({}, Ot), {}, { mode: Ot.mode[0] })
        delete dn.range, B(Ee[0], dn)
      }
    },
    jn = Kb(
      j,
      T,
      me,
      [Ke],
      we,
      qe,
      o,
      !1,
      L,
      W,
      mo(P == null ? void 0 : P.defaultOpenValue),
      bn,
      E,
      x,
    ),
    sn = V(jn, 2),
    Cn = sn[0],
    ct = sn[1],
    un = tt(function (Me, Ee, Ot) {
      if ((De(Ee), $ && Ot !== !1)) {
        var dn = Me || me[me.length - 1]
        $(dn, Ee)
      }
    }),
    Mt = function () {
      Ve(Ie()), Ne(!1, { force: !0 })
    },
    Mr = function (Ee) {
      !C &&
        !oe.current.nativeElement.contains(document.activeElement) &&
        oe.current.focus(),
        Ne(!0),
        ye == null || ye(Ee)
    },
    zn = function () {
      Ve(null), Ne(!1, { force: !0 })
    },
    Xr = g.useState(null),
    Hn = V(Xr, 2),
    tr = Hn[0],
    $t = Hn[1],
    _a = g.useState(null),
    pr = V(_a, 2),
    At = pr[0],
    tn = pr[1],
    Or = g.useMemo(
      function () {
        var Me = [At].concat(de(me)).filter(function (Ee) {
          return Ee
        })
        return D ? Me : Me.slice(0, 1)
      },
      [me, At, D],
    ),
    Ia = g.useMemo(
      function () {
        return !D && At
          ? [At]
          : me.filter(function (Me) {
              return Me
            })
      },
      [me, At, D],
    )
  g.useEffect(
    function () {
      we || tn(null)
    },
    [we],
  )
  var Vn = Yb(Q),
    Jr = function (Ee) {
      tn(Ee), $t('preset')
    },
    Zr = function (Ee) {
      var Ot = D ? ge(Ie(), Ee) : [Ee],
        dn = Ve(Ot)
      dn && !D && Ne(!1, { force: !0 })
    },
    cn = function (Ee) {
      Zr(Ee)
    },
    wn = function (Ee) {
      tn(Ee), $t('cell')
    },
    _r = function (Ee) {
      Ne(!0), Ze(Ee)
    },
    ea = function (Ee) {
      Ae('panel')
      var Ot = D ? ge(Ie(), Ee) : [Ee]
      Ye(Ot), !m && !i && o === be && Mt()
    },
    Bn = function () {
      Ne(!1)
    },
    nr = im(ne, te, ae),
    Ir = g.useMemo(
      function () {
        var Me = Pc(a, !1),
          Ee = Dh(
            a,
            [].concat(de(Object.keys(Me)), [
              'onChange',
              'onCalendarChange',
              'style',
              'className',
              'onPanelChange',
            ]),
          )
        return H(H({}, Ee), {}, { multiple: a.multiple })
      },
      [a],
    ),
    yr = g.createElement(
      rC,
      ve({}, Ir, {
        showNow: Te,
        showTime: P,
        disabledDate: w,
        onFocus: _r,
        onBlur: Qe,
        picker: A,
        mode: Ke,
        internalMode: be,
        onPanelChange: un,
        format: s,
        value: me,
        isInvalid: u,
        onChange: null,
        onSelect: ea,
        pickerValue: Cn,
        defaultOpenValue: P == null ? void 0 : P.defaultOpenValue,
        onPickerValueChange: ct,
        hoverValue: Or,
        onHover: wn,
        needConfirm: m,
        onSubmit: Mt,
        onOk: Je,
        presets: Vn,
        onPresetHover: Jr,
        onPresetSubmit: Zr,
        onNow: cn,
        cellRender: nr,
      }),
    ),
    xn = function (Ee) {
      Ye(Ee)
    },
    Ta = function () {
      Ae('input')
    },
    Fa = function (Ee) {
      Ae('input'), Ne(!0, { inherit: !0 }), Ze(Ee)
    },
    Na = function (Ee) {
      Ne(!1), Qe(Ee)
    },
    ta = function (Ee, Ot) {
      Ee.key === 'Tab' && Mt(), S == null || S(Ee, Ot)
    },
    Da = g.useMemo(
      function () {
        return {
          prefixCls: d,
          locale: T,
          generateConfig: j,
          button: J.button,
          input: J.input,
        }
      },
      [d, T, j, J.button, J.input],
    )
  return (
    ft(
      function () {
        we && qe !== void 0 && un(null, A, !1)
      },
      [we, qe, A],
    ),
    ft(
      function () {
        var Me = Ae()
        !we && Me === 'input' && (Ne(!1), Mt()),
          !we && i && !m && Me === 'panel' && (Ne(!0), Mt())
      },
      [we],
    ),
    g.createElement(
      mr.Provider,
      { value: Da },
      g.createElement(
        Ob,
        ve({}, Tb(a), {
          popupElement: yr,
          popupStyle: f.popup,
          popupClassName: y.popup,
          visible: we,
          onClose: Bn,
        }),
        g.createElement(
          R_,
          ve({}, a, {
            ref: oe,
            suffixIcon: K,
            removeIcon: Y,
            activeHelp: !!At,
            allHelp: !!At && tr === 'preset',
            focused: fe,
            onFocus: Fa,
            onBlur: Na,
            onKeyDown: ta,
            onSubmit: Mt,
            value: Ia,
            maskFormat: s,
            onChange: xn,
            onInputChange: Ta,
            internalPicker: o,
            format: l,
            inputReadOnly: U,
            disabled: C,
            open: we,
            onOpenChange: Ne,
            onClick: Mr,
            onClear: zn,
            invalid: Sn,
            onInvalid: function (Ee) {
              vr(Ee, 0)
            },
          }),
        ),
      ),
    )
  )
}
var O_ = g.forwardRef(M_)
const iC = g.createContext(null),
  __ = iC.Provider,
  lC = g.createContext(null),
  I_ = lC.Provider
var T_ = [
    'prefixCls',
    'className',
    'style',
    'checked',
    'disabled',
    'defaultChecked',
    'type',
    'title',
    'onChange',
  ],
  F_ = g.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = n === void 0 ? 'rc-checkbox' : n,
      a = e.className,
      o = e.style,
      i = e.checked,
      l = e.disabled,
      s = e.defaultChecked,
      u = s === void 0 ? !1 : s,
      c = e.type,
      d = c === void 0 ? 'checkbox' : c,
      f = e.title,
      y = e.onChange,
      v = xt(e, T_),
      p = g.useRef(null),
      b = g.useRef(null),
      m = Gn(u, { value: i }),
      h = V(m, 2),
      S = h[0],
      C = h[1]
    g.useImperativeHandle(t, function () {
      return {
        focus: function (R) {
          var F
          ;(F = p.current) === null || F === void 0 || F.focus(R)
        },
        blur: function () {
          var R
          ;(R = p.current) === null || R === void 0 || R.blur()
        },
        input: p.current,
        nativeElement: b.current,
      }
    })
    var w = ke(
        r,
        a,
        z(z({}, ''.concat(r, '-checked'), S), ''.concat(r, '-disabled'), l),
      ),
      E = function (R) {
        l ||
          ('checked' in e || C(R.target.checked),
          y == null ||
            y({
              target: H(H({}, e), {}, { type: d, checked: R.target.checked }),
              stopPropagation: function () {
                R.stopPropagation()
              },
              preventDefault: function () {
                R.preventDefault()
              },
              nativeEvent: R.nativeEvent,
            }))
      }
    return g.createElement(
      'span',
      { className: w, title: f, style: o, ref: b },
      g.createElement(
        'input',
        ve({}, v, {
          className: ''.concat(r, '-input'),
          ref: p,
          onChange: E,
          disabled: l,
          checked: !!S,
          type: d,
        }),
      ),
      g.createElement('span', { className: ''.concat(r, '-inner') }),
    )
  })
const N_ = (e) => {
    const { componentCls: t, antCls: n } = e,
      r = `${t}-group`
    return {
      [r]: Object.assign(Object.assign({}, io(e)), {
        display: 'inline-block',
        fontSize: 0,
        [`&${r}-rtl`]: { direction: 'rtl' },
        [`${n}-badge ${n}-badge-count`]: { zIndex: 1 },
        [`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]: {
          borderInlineStart: 'none',
        },
      }),
    }
  },
  D_ = (e) => {
    const {
        componentCls: t,
        wrapperMarginInlineEnd: n,
        colorPrimary: r,
        radioSize: a,
        motionDurationSlow: o,
        motionDurationMid: i,
        motionEaseInOutCirc: l,
        colorBgContainer: s,
        colorBorder: u,
        lineWidth: c,
        colorBgContainerDisabled: d,
        colorTextDisabled: f,
        paddingXS: y,
        dotColorDisabled: v,
        lineType: p,
        radioColor: b,
        radioBgColor: m,
        calc: h,
      } = e,
      S = `${t}-inner`,
      w = h(a).sub(h(4).mul(2)),
      E = h(1).mul(a).equal({ unit: !0 })
    return {
      [`${t}-wrapper`]: Object.assign(Object.assign({}, io(e)), {
        display: 'inline-flex',
        alignItems: 'baseline',
        marginInlineStart: 0,
        marginInlineEnd: n,
        cursor: 'pointer',
        [`&${t}-wrapper-rtl`]: { direction: 'rtl' },
        '&-disabled': { cursor: 'not-allowed', color: e.colorTextDisabled },
        '&::after': {
          display: 'inline-block',
          width: 0,
          overflow: 'hidden',
          content: '"\\a0"',
        },
        [`${t}-checked::after`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: '100%',
          height: '100%',
          border: `${ee(c)} ${p} ${r}`,
          borderRadius: '50%',
          visibility: 'hidden',
          opacity: 0,
          content: '""',
        },
        [t]: Object.assign(Object.assign({}, io(e)), {
          position: 'relative',
          display: 'inline-block',
          outline: 'none',
          cursor: 'pointer',
          alignSelf: 'center',
          borderRadius: '50%',
        }),
        [`${t}-wrapper:hover &,
        &:hover ${S}`]: { borderColor: r },
        [`${t}-input:focus-visible + ${S}`]: Object.assign({}, Yh(e)),
        [`${t}:hover::after, ${t}-wrapper:hover &::after`]: {
          visibility: 'visible',
        },
        [`${t}-inner`]: {
          '&::after': {
            boxSizing: 'border-box',
            position: 'absolute',
            insetBlockStart: '50%',
            insetInlineStart: '50%',
            display: 'block',
            width: E,
            height: E,
            marginBlockStart: h(1).mul(a).div(-2).equal({ unit: !0 }),
            marginInlineStart: h(1).mul(a).div(-2).equal({ unit: !0 }),
            backgroundColor: b,
            borderBlockStart: 0,
            borderInlineStart: 0,
            borderRadius: E,
            transform: 'scale(0)',
            opacity: 0,
            transition: `all ${o} ${l}`,
            content: '""',
          },
          boxSizing: 'border-box',
          position: 'relative',
          insetBlockStart: 0,
          insetInlineStart: 0,
          display: 'block',
          width: E,
          height: E,
          backgroundColor: s,
          borderColor: u,
          borderStyle: 'solid',
          borderWidth: c,
          borderRadius: '50%',
          transition: `all ${i}`,
        },
        [`${t}-input`]: {
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          cursor: 'pointer',
          opacity: 0,
        },
        [`${t}-checked`]: {
          [S]: {
            borderColor: r,
            backgroundColor: m,
            '&::after': {
              transform: `scale(${e.calc(e.dotSize).div(a).equal()})`,
              opacity: 1,
              transition: `all ${o} ${l}`,
            },
          },
        },
        [`${t}-disabled`]: {
          cursor: 'not-allowed',
          [S]: {
            backgroundColor: d,
            borderColor: u,
            cursor: 'not-allowed',
            '&::after': { backgroundColor: v },
          },
          [`${t}-input`]: { cursor: 'not-allowed' },
          [`${t}-disabled + span`]: { color: f, cursor: 'not-allowed' },
          [`&${t}-checked`]: {
            [S]: { '&::after': { transform: `scale(${h(w).div(a).equal()})` } },
          },
        },
        [`span${t} + *`]: { paddingInlineStart: y, paddingInlineEnd: y },
      }),
    }
  },
  L_ = (e) => {
    const {
      buttonColor: t,
      controlHeight: n,
      componentCls: r,
      lineWidth: a,
      lineType: o,
      colorBorder: i,
      motionDurationSlow: l,
      motionDurationMid: s,
      buttonPaddingInline: u,
      fontSize: c,
      buttonBg: d,
      fontSizeLG: f,
      controlHeightLG: y,
      controlHeightSM: v,
      paddingXS: p,
      borderRadius: b,
      borderRadiusSM: m,
      borderRadiusLG: h,
      buttonCheckedBg: S,
      buttonSolidCheckedColor: C,
      colorTextDisabled: w,
      colorBgContainerDisabled: E,
      buttonCheckedBgDisabled: x,
      buttonCheckedColorDisabled: R,
      colorPrimary: F,
      colorPrimaryHover: _,
      colorPrimaryActive: T,
      buttonSolidCheckedBg: j,
      buttonSolidCheckedHoverBg: A,
      buttonSolidCheckedActiveBg: I,
      calc: N,
    } = e
    return {
      [`${r}-button-wrapper`]: {
        position: 'relative',
        display: 'inline-block',
        height: n,
        margin: 0,
        paddingInline: u,
        paddingBlock: 0,
        color: t,
        fontSize: c,
        lineHeight: ee(N(n).sub(N(a).mul(2)).equal()),
        background: d,
        border: `${ee(a)} ${o} ${i}`,
        borderBlockStartWidth: N(a).add(0.02).equal(),
        borderInlineStartWidth: 0,
        borderInlineEndWidth: a,
        cursor: 'pointer',
        transition: [`color ${s}`, `background ${s}`, `box-shadow ${s}`].join(
          ',',
        ),
        a: { color: t },
        [`> ${r}-button`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
        },
        '&:not(:first-child)': {
          '&::before': {
            position: 'absolute',
            insetBlockStart: N(a).mul(-1).equal(),
            insetInlineStart: N(a).mul(-1).equal(),
            display: 'block',
            boxSizing: 'content-box',
            width: 1,
            height: '100%',
            paddingBlock: a,
            paddingInline: 0,
            backgroundColor: i,
            transition: `background-color ${l}`,
            content: '""',
          },
        },
        '&:first-child': {
          borderInlineStart: `${ee(a)} ${o} ${i}`,
          borderStartStartRadius: b,
          borderEndStartRadius: b,
        },
        '&:last-child': { borderStartEndRadius: b, borderEndEndRadius: b },
        '&:first-child:last-child': { borderRadius: b },
        [`${r}-group-large &`]: {
          height: y,
          fontSize: f,
          lineHeight: ee(N(y).sub(N(a).mul(2)).equal()),
          '&:first-child': {
            borderStartStartRadius: h,
            borderEndStartRadius: h,
          },
          '&:last-child': { borderStartEndRadius: h, borderEndEndRadius: h },
        },
        [`${r}-group-small &`]: {
          height: v,
          paddingInline: N(p).sub(a).equal(),
          paddingBlock: 0,
          lineHeight: ee(N(v).sub(N(a).mul(2)).equal()),
          '&:first-child': {
            borderStartStartRadius: m,
            borderEndStartRadius: m,
          },
          '&:last-child': { borderStartEndRadius: m, borderEndEndRadius: m },
        },
        '&:hover': { position: 'relative', color: F },
        '&:has(:focus-visible)': Object.assign({}, Yh(e)),
        [`${r}-inner, input[type='checkbox'], input[type='radio']`]: {
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: 'none',
        },
        [`&-checked:not(${r}-button-wrapper-disabled)`]: {
          zIndex: 1,
          color: F,
          background: S,
          borderColor: F,
          '&::before': { backgroundColor: F },
          '&:first-child': { borderColor: F },
          '&:hover': {
            color: _,
            borderColor: _,
            '&::before': { backgroundColor: _ },
          },
          '&:active': {
            color: T,
            borderColor: T,
            '&::before': { backgroundColor: T },
          },
        },
        [`${r}-group-solid &-checked:not(${r}-button-wrapper-disabled)`]: {
          color: C,
          background: j,
          borderColor: j,
          '&:hover': { color: C, background: A, borderColor: A },
          '&:active': { color: C, background: I, borderColor: I },
        },
        '&-disabled': {
          color: w,
          backgroundColor: E,
          borderColor: i,
          cursor: 'not-allowed',
          '&:first-child, &:hover': {
            color: w,
            backgroundColor: E,
            borderColor: i,
          },
        },
        [`&-disabled${r}-button-wrapper-checked`]: {
          color: R,
          backgroundColor: x,
          borderColor: i,
          boxShadow: 'none',
        },
      },
    }
  },
  A_ = (e) => {
    const {
        wireframe: t,
        padding: n,
        marginXS: r,
        lineWidth: a,
        fontSizeLG: o,
        colorText: i,
        colorBgContainer: l,
        colorTextDisabled: s,
        controlItemBgActiveDisabled: u,
        colorTextLightSolid: c,
        colorPrimary: d,
        colorPrimaryHover: f,
        colorPrimaryActive: y,
        colorWhite: v,
      } = e,
      p = 4,
      b = o,
      m = t ? b - p * 2 : b - (p + a) * 2
    return {
      radioSize: b,
      dotSize: m,
      dotColorDisabled: s,
      buttonSolidCheckedColor: c,
      buttonSolidCheckedBg: d,
      buttonSolidCheckedHoverBg: f,
      buttonSolidCheckedActiveBg: y,
      buttonBg: l,
      buttonCheckedBg: l,
      buttonColor: i,
      buttonCheckedBgDisabled: u,
      buttonCheckedColorDisabled: s,
      buttonPaddingInline: n - a,
      wrapperMarginInlineEnd: r,
      radioColor: t ? d : v,
      radioBgColor: t ? l : d,
    }
  },
  sC = $c(
    'Radio',
    (e) => {
      const { controlOutline: t, controlOutlineWidth: n } = e,
        r = `0 0 0 ${ee(n)} ${t}`,
        o = Dn(e, { radioFocusShadow: r, radioButtonFocusShadow: r })
      return [N_(o), D_(o), L_(o)]
    },
    A_,
    { unitless: { radioSize: !0, dotSize: !0 } },
  )
var j_ = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]])
  return n
}
const z_ = (e, t) => {
    var n, r
    const a = g.useContext(iC),
      o = g.useContext(lC),
      { getPrefixCls: i, direction: l, radio: s } = g.useContext(yn),
      u = g.useRef(null),
      c = gi(t, u),
      { isFormItemInput: d } = g.useContext(rm),
      f = (I) => {
        var N, P
        ;(N = e.onChange) === null || N === void 0 || N.call(e, I),
          (P = a == null ? void 0 : a.onChange) === null ||
            P === void 0 ||
            P.call(a, I)
      },
      {
        prefixCls: y,
        className: v,
        rootClassName: p,
        children: b,
        style: m,
        title: h,
      } = e,
      S = j_(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'children',
        'style',
        'title',
      ]),
      C = i('radio', y),
      w = ((a == null ? void 0 : a.optionType) || o) === 'button',
      E = w ? `${C}-button` : C,
      x = kc(C),
      [R, F, _] = sC(C, x),
      T = Object.assign({}, S),
      j = g.useContext(oo)
    a &&
      ((T.name = a.name),
      (T.onChange = f),
      (T.checked = e.value === a.value),
      (T.disabled =
        (n = T.disabled) !== null && n !== void 0 ? n : a.disabled)),
      (T.disabled = (r = T.disabled) !== null && r !== void 0 ? r : j)
    const A = ke(
      `${E}-wrapper`,
      {
        [`${E}-wrapper-checked`]: T.checked,
        [`${E}-wrapper-disabled`]: T.disabled,
        [`${E}-wrapper-rtl`]: l === 'rtl',
        [`${E}-wrapper-in-form-item`]: d,
      },
      s == null ? void 0 : s.className,
      v,
      p,
      F,
      _,
      x,
    )
    return R(
      g.createElement(
        KS,
        { component: 'Radio', disabled: T.disabled },
        g.createElement(
          'label',
          {
            className: A,
            style: Object.assign(
              Object.assign({}, s == null ? void 0 : s.style),
              m,
            ),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            title: h,
          },
          g.createElement(
            F_,
            Object.assign({}, T, {
              className: ke(T.className, !w && Qh),
              type: 'radio',
              prefixCls: E,
              ref: c,
            }),
          ),
          b !== void 0 ? g.createElement('span', null, b) : null,
        ),
      ),
    )
  },
  Hu = g.forwardRef(z_),
  H_ = g.forwardRef((e, t) => {
    const { getPrefixCls: n, direction: r } = g.useContext(yn),
      [a, o] = Gn(e.defaultValue, { value: e.value }),
      i = (I) => {
        const N = a,
          P = I.target.value
        'value' in e || o(P)
        const { onChange: k } = e
        k && P !== N && k(I)
      },
      {
        prefixCls: l,
        className: s,
        rootClassName: u,
        options: c,
        buttonStyle: d = 'outline',
        disabled: f,
        children: y,
        size: v,
        style: p,
        id: b,
        onMouseEnter: m,
        onMouseLeave: h,
        onFocus: S,
        onBlur: C,
      } = e,
      w = n('radio', l),
      E = `${w}-group`,
      x = kc(w),
      [R, F, _] = sC(w, x)
    let T = y
    c &&
      c.length > 0 &&
      (T = c.map((I) =>
        typeof I == 'string' || typeof I == 'number'
          ? g.createElement(
              Hu,
              {
                key: I.toString(),
                prefixCls: w,
                disabled: f,
                value: I,
                checked: a === I,
              },
              I,
            )
          : g.createElement(
              Hu,
              {
                key: `radio-group-value-options-${I.value}`,
                prefixCls: w,
                disabled: I.disabled || f,
                value: I.value,
                checked: a === I.value,
                title: I.title,
                style: I.style,
                id: I.id,
                required: I.required,
              },
              I.label,
            ),
      ))
    const j = Mc(v),
      A = ke(
        E,
        `${E}-${d}`,
        { [`${E}-${j}`]: j, [`${E}-rtl`]: r === 'rtl' },
        s,
        u,
        F,
        _,
        x,
      )
    return R(
      g.createElement(
        'div',
        Object.assign({}, Pc(e, { aria: !0, data: !0 }), {
          className: A,
          style: p,
          onMouseEnter: m,
          onMouseLeave: h,
          onFocus: S,
          onBlur: C,
          id: b,
          ref: t,
        }),
        g.createElement(
          __,
          {
            value: {
              onChange: i,
              value: a,
              disabled: e.disabled,
              name: e.name,
              optionType: e.optionType,
            },
          },
          T,
        ),
      ),
    )
  }),
  V_ = g.memo(H_)
var B_ = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]])
  return n
}
const W_ = (e, t) => {
    const { getPrefixCls: n } = g.useContext(yn),
      { prefixCls: r } = e,
      a = B_(e, ['prefixCls']),
      o = n('radio', r)
    return g.createElement(
      I_,
      { value: 'button' },
      g.createElement(
        Hu,
        Object.assign({ prefixCls: o }, a, { type: 'radio', ref: t }),
      ),
    )
  },
  U_ = g.forwardRef(W_),
  Qo = Hu
Qo.Button = U_
Qo.Group = V_
Qo.__ANT_RADIO = !0
function uC(e) {
  return Dn(e, { inputAffixPadding: e.paddingXXS })
}
const cC = (e) => {
    const {
      controlHeight: t,
      fontSize: n,
      lineHeight: r,
      lineWidth: a,
      controlHeightSM: o,
      controlHeightLG: i,
      fontSizeLG: l,
      lineHeightLG: s,
      paddingSM: u,
      controlPaddingHorizontalSM: c,
      controlPaddingHorizontal: d,
      colorFillAlter: f,
      colorPrimaryHover: y,
      colorPrimary: v,
      controlOutlineWidth: p,
      controlOutline: b,
      colorErrorOutline: m,
      colorWarningOutline: h,
      colorBgContainer: S,
    } = e
    return {
      paddingBlock: Math.max(Math.round(((t - n * r) / 2) * 10) / 10 - a, 0),
      paddingBlockSM: Math.max(Math.round(((o - n * r) / 2) * 10) / 10 - a, 0),
      paddingBlockLG: Math.ceil(((i - l * s) / 2) * 10) / 10 - a,
      paddingInline: u - a,
      paddingInlineSM: c - a,
      paddingInlineLG: d - a,
      addonBg: f,
      activeBorderColor: v,
      hoverBorderColor: y,
      activeShadow: `0 0 0 ${p}px ${b}`,
      errorActiveShadow: `0 0 0 ${p}px ${m}`,
      warningActiveShadow: `0 0 0 ${p}px ${h}`,
      hoverBg: S,
      activeBg: S,
      inputFontSize: n,
      inputFontSizeLG: l,
      inputFontSizeSM: n,
    }
  },
  Y_ = (e) => ({ borderColor: e.hoverBorderColor, backgroundColor: e.hoverBg }),
  dm = (e) => ({
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    borderColor: e.colorBorder,
    boxShadow: 'none',
    cursor: 'not-allowed',
    opacity: 1,
    'input[disabled], textarea[disabled]': { cursor: 'not-allowed' },
    '&:hover:not([disabled])': Object.assign(
      {},
      Y_(
        Dn(e, {
          hoverBorderColor: e.colorBorder,
          hoverBg: e.colorBgContainerDisabled,
        }),
      ),
    ),
  }),
  dC = (e, t) => ({
    background: e.colorBgContainer,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: t.borderColor,
    '&:hover': { borderColor: t.hoverBorderColor, backgroundColor: e.hoverBg },
    '&:focus, &:focus-within': {
      borderColor: t.activeBorderColor,
      boxShadow: t.activeShadow,
      outline: 0,
      backgroundColor: e.activeBg,
    },
  }),
  Up = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:
      Object.assign(Object.assign({}, dC(e, t)), {
        [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
          color: t.affixColor,
        },
      }),
    [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
      borderColor: t.borderColor,
    },
  }),
  fC = (e, t) => ({
    '&-outlined': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {},
              dC(e, {
                borderColor: e.colorBorder,
                hoverBorderColor: e.hoverBorderColor,
                activeBorderColor: e.activeBorderColor,
                activeShadow: e.activeShadow,
              }),
            ),
            {
              [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign(
                {},
                dm(e),
              ),
            },
          ),
          Up(e, {
            status: 'error',
            borderColor: e.colorError,
            hoverBorderColor: e.colorErrorBorderHover,
            activeBorderColor: e.colorError,
            activeShadow: e.errorActiveShadow,
            affixColor: e.colorError,
          }),
        ),
        Up(e, {
          status: 'warning',
          borderColor: e.colorWarning,
          hoverBorderColor: e.colorWarningBorderHover,
          activeBorderColor: e.colorWarning,
          activeShadow: e.warningActiveShadow,
          affixColor: e.colorWarning,
        }),
      ),
      t,
    ),
  }),
  Yp = (e, t) => ({
    [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
      [`${e.componentCls}-group-addon`]: {
        borderColor: t.addonBorderColor,
        color: t.addonColor,
      },
    },
  }),
  q_ = (e) => ({
    '&-outlined': Object.assign(
      Object.assign(
        Object.assign(
          {
            [`${e.componentCls}-group`]: {
              '&-addon': {
                background: e.addonBg,
                border: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              },
              '&-addon:first-child': { borderInlineEnd: 0 },
              '&-addon:last-child': { borderInlineStart: 0 },
            },
          },
          Yp(e, {
            status: 'error',
            addonBorderColor: e.colorError,
            addonColor: e.colorErrorText,
          }),
        ),
        Yp(e, {
          status: 'warning',
          addonBorderColor: e.colorWarning,
          addonColor: e.colorWarningText,
        }),
      ),
      {
        [`&${e.componentCls}-group-wrapper-disabled`]: {
          [`${e.componentCls}-group-addon`]: Object.assign({}, dm(e)),
        },
      },
    ),
  }),
  gC = (e, t) => ({
    '&-borderless': Object.assign(
      {
        background: 'transparent',
        border: 'none',
        '&:focus, &:focus-within': { outline: 'none' },
        [`&${e.componentCls}-disabled, &[disabled]`]: {
          color: e.colorTextDisabled,
        },
      },
      t,
    ),
  }),
  hC = (e, t) => ({
    background: t.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: 'transparent',
    'input&, & input, textarea&, & textarea': {
      color: t == null ? void 0 : t.inputColor,
    },
    '&:hover': { background: t.hoverBg },
    '&:focus, &:focus-within': {
      outline: 0,
      borderColor: t.activeBorderColor,
      backgroundColor: e.activeBg,
    },
  }),
  qp = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:
      Object.assign(Object.assign({}, hC(e, t)), {
        [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
          color: t.affixColor,
        },
      }),
  }),
  mC = (e, t) => ({
    '&-filled': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {},
              hC(e, {
                bg: e.colorFillTertiary,
                hoverBg: e.colorFillSecondary,
                activeBorderColor: e.colorPrimary,
              }),
            ),
            {
              [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign(
                {},
                dm(e),
              ),
            },
          ),
          qp(e, {
            status: 'error',
            bg: e.colorErrorBg,
            hoverBg: e.colorErrorBgHover,
            activeBorderColor: e.colorError,
            inputColor: e.colorErrorText,
            affixColor: e.colorError,
          }),
        ),
        qp(e, {
          status: 'warning',
          bg: e.colorWarningBg,
          hoverBg: e.colorWarningBgHover,
          activeBorderColor: e.colorWarning,
          inputColor: e.colorWarningText,
          affixColor: e.colorWarning,
        }),
      ),
      t,
    ),
  }),
  Kp = (e, t) => ({
    [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
      [`${e.componentCls}-group-addon`]: {
        background: t.addonBg,
        color: t.addonColor,
      },
    },
  }),
  K_ = (e) => ({
    '&-filled': Object.assign(
      Object.assign(
        Object.assign(
          {
            [`${e.componentCls}-group`]: {
              '&-addon': { background: e.colorFillTertiary },
              [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
                '&:not(:first-child)': {
                  borderInlineStart: `${ee(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                },
                '&:not(:last-child)': {
                  borderInlineEnd: `${ee(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                },
              },
            },
          },
          Kp(e, {
            status: 'error',
            addonBg: e.colorErrorBg,
            addonColor: e.colorErrorText,
          }),
        ),
        Kp(e, {
          status: 'warning',
          addonBg: e.colorWarningBg,
          addonColor: e.colorWarningText,
        }),
      ),
      {
        [`&${e.componentCls}-group-wrapper-disabled`]: {
          [`${e.componentCls}-group`]: {
            '&-addon': {
              background: e.colorFillTertiary,
              color: e.colorTextDisabled,
            },
            '&-addon:first-child': {
              borderInlineStart: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderTop: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            },
            '&-addon:last-child': {
              borderInlineEnd: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderTop: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            },
          },
        },
      },
    ),
  }),
  vC = (e) => ({
    '&::-moz-placeholder': { opacity: 1 },
    '&::placeholder': { color: e, userSelect: 'none' },
    '&:placeholder-shown': { textOverflow: 'ellipsis' },
  }),
  pC = (e) => {
    const {
      paddingBlockLG: t,
      lineHeightLG: n,
      borderRadiusLG: r,
      paddingInlineLG: a,
    } = e
    return {
      padding: `${ee(t)} ${ee(a)}`,
      fontSize: e.inputFontSizeLG,
      lineHeight: n,
      borderRadius: r,
    }
  },
  yC = (e) => ({
    padding: `${ee(e.paddingBlockSM)} ${ee(e.paddingInlineSM)}`,
    fontSize: e.inputFontSizeSM,
    borderRadius: e.borderRadiusSM,
  }),
  SC = (e) =>
    Object.assign(
      Object.assign(
        {
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          minWidth: 0,
          padding: `${ee(e.paddingBlock)} ${ee(e.paddingInline)}`,
          color: e.colorText,
          fontSize: e.inputFontSize,
          lineHeight: e.lineHeight,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationMid}`,
        },
        vC(e.colorTextPlaceholder),
      ),
      {
        'textarea&': {
          maxWidth: '100%',
          height: 'auto',
          minHeight: e.controlHeight,
          lineHeight: e.lineHeight,
          verticalAlign: 'bottom',
          transition: `all ${e.motionDurationSlow}, height 0s`,
          resize: 'vertical',
        },
        '&-lg': Object.assign({}, pC(e)),
        '&-sm': Object.assign({}, yC(e)),
        '&-rtl, &-textarea-rtl': { direction: 'rtl' },
      },
    ),
  G_ = (e) => {
    const { componentCls: t, antCls: n } = e
    return {
      position: 'relative',
      display: 'table',
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      "&[class*='col-']": {
        paddingInlineEnd: e.paddingXS,
        '&:last-child': { paddingInlineEnd: 0 },
      },
      [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, pC(e)),
      [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, yC(e)),
      [`&-lg ${n}-select-single ${n}-select-selector`]: {
        height: e.controlHeightLG,
      },
      [`&-sm ${n}-select-single ${n}-select-selector`]: {
        height: e.controlHeightSM,
      },
      [`> ${t}`]: {
        display: 'table-cell',
        '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
      },
      [`${t}-group`]: {
        '&-addon, &-wrap': {
          display: 'table-cell',
          width: 1,
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
        },
        '&-wrap > *': { display: 'block !important' },
        '&-addon': {
          position: 'relative',
          padding: `0 ${ee(e.paddingInline)}`,
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.inputFontSize,
          textAlign: 'center',
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationSlow}`,
          lineHeight: 1,
          [`${n}-select`]: {
            margin: `${ee(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
            [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]:
              {
                [`${n}-select-selector`]: {
                  backgroundColor: 'inherit',
                  border: `${ee(e.lineWidth)} ${e.lineType} transparent`,
                  boxShadow: 'none',
                },
              },
            '&-open, &-focused': {
              [`${n}-select-selector`]: { color: e.colorPrimary },
            },
          },
          [`${n}-cascader-picker`]: {
            margin: `-9px ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
            backgroundColor: 'transparent',
            [`${n}-cascader-input`]: {
              textAlign: 'start',
              border: 0,
              boxShadow: 'none',
            },
          },
        },
      },
      [`${t}`]: {
        width: '100%',
        marginBottom: 0,
        textAlign: 'inherit',
        '&:focus': { zIndex: 1, borderInlineEndWidth: 1 },
        '&:hover': {
          zIndex: 1,
          borderInlineEndWidth: 1,
          [`${t}-search-with-button &`]: { zIndex: 0 },
        },
      },
      [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${t}-affix-wrapper`]: {
        [`&:not(:first-child) ${t}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
        [`&:not(:last-child) ${t}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`${t}-affix-wrapper`]: {
        '&:not(:last-child)': {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${t}-search &`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
        },
        [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`&${t}-group-compact`]: Object.assign(
        Object.assign({ display: 'block' }, tP()),
        {
          [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
            '&:not(:first-child):not(:last-child)': {
              borderInlineEndWidth: e.lineWidth,
              '&:hover, &:focus': { zIndex: 1 },
            },
          },
          '& > *': {
            display: 'inline-flex',
            float: 'none',
            verticalAlign: 'top',
            borderRadius: 0,
          },
          [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: { display: 'inline-flex' },
          '& > *:not(:last-child)': {
            marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
            borderInlineEndWidth: e.lineWidth,
          },
          [`${t}`]: { float: 'none' },
          [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderRadius: 0,
            '&:hover, &:focus': { zIndex: 1 },
          },
          [`& > ${n}-select-focused`]: { zIndex: 1 },
          [`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
          [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
          [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
          },
          [`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: 'top' },
          [`${t}-group-wrapper + ${t}-group-wrapper`]: {
            marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
            [`${t}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`${t}-group-wrapper:not(:last-child)`]: {
            [`&${t}-search > ${t}-group`]: {
              [`& > ${t}-group-addon > ${t}-search-button`]: {
                borderRadius: 0,
              },
              [`& > ${t}`]: {
                borderStartStartRadius: e.borderRadius,
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                borderEndStartRadius: e.borderRadius,
              },
            },
          },
        },
      ),
    }
  },
  Q_ = (e) => {
    const { componentCls: t, controlHeightSM: n, lineWidth: r, calc: a } = e,
      i = a(n).sub(a(r).mul(2)).sub(16).div(2).equal()
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, io(e)), SC(e)),
              fC(e),
            ),
            mC(e),
          ),
          gC(e),
        ),
        {
          '&[type="color"]': {
            height: e.controlHeight,
            [`&${t}-lg`]: { height: e.controlHeightLG },
            [`&${t}-sm`]: { height: n, paddingTop: i, paddingBottom: i },
          },
          '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
            { '-webkit-appearance': 'none' },
        },
      ),
    }
  },
  X_ = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-clear-icon`]: {
        margin: 0,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        verticalAlign: -1,
        cursor: 'pointer',
        transition: `color ${e.motionDurationSlow}`,
        '&:hover': { color: e.colorTextTertiary },
        '&:active': { color: e.colorText },
        '&-hidden': { visibility: 'hidden' },
        '&-has-suffix': { margin: `0 ${ee(e.inputAffixPadding)}` },
      },
    }
  },
  J_ = (e) => {
    const {
      componentCls: t,
      inputAffixPadding: n,
      colorTextDescription: r,
      motionDurationSlow: a,
      colorIcon: o,
      colorIconHover: i,
      iconCls: l,
    } = e
    return {
      [`${t}-affix-wrapper`]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, SC(e)), {
            display: 'inline-flex',
            [`&:not(${t}-disabled):hover`]: {
              zIndex: 1,
              [`${t}-search-with-button &`]: { zIndex: 0 },
            },
            '&-focused, &:focus': { zIndex: 1 },
            [`> input${t}`]: { padding: 0 },
            [`> input${t}, > textarea${t}`]: {
              fontSize: 'inherit',
              border: 'none',
              borderRadius: 0,
              outline: 'none',
              background: 'transparent',
              color: 'inherit',
              '&::-ms-reveal': { display: 'none' },
              '&:focus': { boxShadow: 'none !important' },
            },
            '&::before': {
              display: 'inline-block',
              width: 0,
              visibility: 'hidden',
              content: '"\\a0"',
            },
            [`${t}`]: {
              '&-prefix, &-suffix': {
                display: 'flex',
                flex: 'none',
                alignItems: 'center',
                '> *:not(:last-child)': { marginInlineEnd: e.paddingXS },
              },
              '&-show-count-suffix': { color: r },
              '&-show-count-has-suffix': { marginInlineEnd: e.paddingXXS },
              '&-prefix': { marginInlineEnd: n },
              '&-suffix': { marginInlineStart: n },
            },
          }),
          X_(e),
        ),
        {
          [`${l}${t}-password-icon`]: {
            color: o,
            cursor: 'pointer',
            transition: `all ${a}`,
            '&:hover': { color: i },
          },
        },
      ),
    }
  },
  Z_ = (e) => {
    const { componentCls: t, borderRadiusLG: n, borderRadiusSM: r } = e
    return {
      [`${t}-group`]: Object.assign(
        Object.assign(Object.assign({}, io(e)), G_(e)),
        {
          '&-rtl': { direction: 'rtl' },
          '&-wrapper': Object.assign(
            Object.assign(
              Object.assign(
                {
                  display: 'inline-block',
                  width: '100%',
                  textAlign: 'start',
                  verticalAlign: 'top',
                  '&-rtl': { direction: 'rtl' },
                  '&-lg': {
                    [`${t}-group-addon`]: {
                      borderRadius: n,
                      fontSize: e.inputFontSizeLG,
                    },
                  },
                  '&-sm': { [`${t}-group-addon`]: { borderRadius: r } },
                },
                q_(e),
              ),
              K_(e),
            ),
            {
              [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:
                { [`${t}, ${t}-group-addon`]: { borderRadius: 0 } },
              [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
                [`${t}, ${t}-group-addon`]: {
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                },
              },
              [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
                [`${t}, ${t}-group-addon`]: {
                  borderStartStartRadius: 0,
                  borderEndStartRadius: 0,
                },
              },
              [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
                [`${t}-affix-wrapper`]: {
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                },
              },
            },
          ),
        },
      ),
    }
  },
  eI = (e) => {
    const { componentCls: t, antCls: n } = e,
      r = `${t}-search`
    return {
      [r]: {
        [`${t}`]: {
          '&:hover, &:focus': {
            borderColor: e.colorPrimaryHover,
            [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
              borderInlineStartColor: e.colorPrimaryHover,
            },
          },
        },
        [`${t}-affix-wrapper`]: { borderRadius: 0 },
        [`${t}-lg`]: { lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal() },
        [`> ${t}-group`]: {
          [`> ${t}-group-addon:last-child`]: {
            insetInlineStart: -1,
            padding: 0,
            border: 0,
            [`${r}-button`]: {
              marginInlineEnd: -1,
              paddingTop: 0,
              paddingBottom: 0,
              borderStartStartRadius: 0,
              borderStartEndRadius: e.borderRadius,
              borderEndEndRadius: e.borderRadius,
              borderEndStartRadius: 0,
              boxShadow: 'none',
            },
            [`${r}-button:not(${n}-btn-primary)`]: {
              color: e.colorTextDescription,
              '&:hover': { color: e.colorPrimaryHover },
              '&:active': { color: e.colorPrimaryActive },
              [`&${n}-btn-loading::before`]: {
                insetInlineStart: 0,
                insetInlineEnd: 0,
                insetBlockStart: 0,
                insetBlockEnd: 0,
              },
            },
          },
        },
        [`${r}-button`]: {
          height: e.controlHeight,
          '&:hover, &:focus': { zIndex: 1 },
        },
        [`&-large ${r}-button`]: { height: e.controlHeightLG },
        [`&-small ${r}-button`]: { height: e.controlHeightSM },
        '&-rtl': { direction: 'rtl' },
        [`&${t}-compact-item`]: {
          [`&:not(${t}-compact-last-item)`]: {
            [`${t}-group-addon`]: {
              [`${t}-search-button`]: {
                marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                borderRadius: 0,
              },
            },
          },
          [`&:not(${t}-compact-first-item)`]: {
            [`${t},${t}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { '&:hover, &:focus, &:active': { zIndex: 2 } },
          [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 },
        },
      },
    }
  },
  tI = (e) => {
    const { componentCls: t, paddingLG: n } = e,
      r = `${t}-textarea`
    return {
      [r]: {
        position: 'relative',
        '&-show-count': {
          [`> ${t}`]: { height: '100%' },
          [`${t}-data-count`]: {
            position: 'absolute',
            bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
            insetInlineEnd: 0,
            color: e.colorTextDescription,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          },
        },
        [`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]: { paddingInlineEnd: n },
        [`&-affix-wrapper${t}-affix-wrapper`]: {
          padding: 0,
          [`> textarea${t}`]: {
            fontSize: 'inherit',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            '&:focus': { boxShadow: 'none !important' },
          },
          [`${t}-suffix`]: {
            margin: 0,
            '> *:not(:last-child)': { marginInline: 0 },
            [`${t}-clear-icon`]: {
              position: 'absolute',
              insetInlineEnd: e.paddingXS,
              insetBlockStart: e.paddingXS,
            },
            [`${r}-suffix`]: {
              position: 'absolute',
              top: 0,
              insetInlineEnd: e.paddingInline,
              bottom: 0,
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              margin: 'auto',
              pointerEvents: 'none',
            },
          },
        },
      },
    }
  },
  nI = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-out-of-range`]: {
        [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
          color: e.colorError,
        },
      },
    }
  }
$c(
  'Input',
  (e) => {
    const t = Dn(e, uC(e))
    return [Q_(t), tI(t), J_(t), Z_(t), eI(t), nI(t), em(t)]
  },
  cC,
  { resetFont: !1 },
)
const Kd = (e, t) => {
    const { componentCls: n, controlHeight: r } = e,
      a = t ? `${n}-${t}` : '',
      o = lO(e)
    return [
      {
        [`${n}-multiple${a}`]: {
          paddingBlock: o.containerPadding,
          paddingInlineStart: o.basePadding,
          minHeight: r,
          [`${n}-selection-item`]: {
            height: o.itemHeight,
            lineHeight: ee(o.itemLineHeight),
          },
        },
      },
    ]
  },
  rI = (e) => {
    const { componentCls: t, calc: n, lineWidth: r } = e,
      a = Dn(e, {
        fontHeight: e.fontSize,
        selectHeight: e.controlHeightSM,
        multipleSelectItemHeight: e.multipleItemHeightSM,
        borderRadius: e.borderRadiusSM,
        borderRadiusSM: e.borderRadiusXS,
        controlHeight: e.controlHeightSM,
      }),
      o = Dn(e, {
        fontHeight: n(e.multipleItemHeightLG).sub(n(r).mul(2).equal()).equal(),
        fontSize: e.fontSizeLG,
        selectHeight: e.controlHeightLG,
        multipleSelectItemHeight: e.multipleItemHeightLG,
        borderRadius: e.borderRadiusLG,
        borderRadiusSM: e.borderRadius,
        controlHeight: e.controlHeightLG,
      })
    return [
      Kd(a, 'small'),
      Kd(e),
      Kd(o, 'large'),
      {
        [`${t}${t}-multiple`]: Object.assign(
          Object.assign(
            {
              width: '100%',
              cursor: 'text',
              [`${t}-selector`]: {
                flex: 'auto',
                padding: 0,
                position: 'relative',
                '&:after': { margin: 0 },
                [`${t}-selection-placeholder`]: {
                  position: 'absolute',
                  top: '50%',
                  insetInlineStart: e.inputPaddingHorizontalBase,
                  insetInlineEnd: 0,
                  transform: 'translateY(-50%)',
                  transition: `all ${e.motionDurationSlow}`,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  flex: 1,
                  color: e.colorTextPlaceholder,
                  pointerEvents: 'none',
                },
              },
            },
            sO(e),
          ),
          {
            [`${t}-multiple-input`]: {
              width: 0,
              height: 0,
              border: 0,
              visibility: 'hidden',
              position: 'absolute',
              zIndex: -1,
            },
          },
        ),
      },
    ]
  },
  aI = (e) => {
    const {
      pickerCellCls: t,
      pickerCellInnerCls: n,
      cellHeight: r,
      borderRadiusSM: a,
      motionDurationMid: o,
      cellHoverBg: i,
      lineWidth: l,
      lineType: s,
      colorPrimary: u,
      cellActiveWithRangeBg: c,
      colorTextLightSolid: d,
      colorTextDisabled: f,
      cellBgDisabled: y,
      colorFillSecondary: v,
    } = e
    return {
      '&::before': {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 0,
        insetInlineEnd: 0,
        zIndex: 1,
        height: r,
        transform: 'translateY(-50%)',
        content: '""',
      },
      [n]: {
        position: 'relative',
        zIndex: 2,
        display: 'inline-block',
        minWidth: r,
        height: r,
        lineHeight: ee(r),
        borderRadius: a,
        transition: `background ${o}`,
      },
      [`&:hover:not(${t}-in-view),
    &:hover:not(${t}-selected):not(${t}-range-start):not(${t}-range-end)`]: {
        [n]: { background: i },
      },
      [`&-in-view${t}-today ${n}`]: {
        '&::before': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 1,
          border: `${ee(l)} ${s} ${u}`,
          borderRadius: a,
          content: '""',
        },
      },
      [`&-in-view${t}-in-range,
      &-in-view${t}-range-start,
      &-in-view${t}-range-end`]: {
        position: 'relative',
        [`&:not(${t}-disabled):before`]: { background: c },
      },
      [`&-in-view${t}-selected,
      &-in-view${t}-range-start,
      &-in-view${t}-range-end`]: {
        [`&:not(${t}-disabled) ${n}`]: { color: d, background: u },
        [`&${t}-disabled ${n}`]: { background: v },
      },
      [`&-in-view${t}-range-start:not(${t}-disabled):before`]: {
        insetInlineStart: '50%',
      },
      [`&-in-view${t}-range-end:not(${t}-disabled):before`]: {
        insetInlineEnd: '50%',
      },
      [`&-in-view${t}-range-start:not(${t}-range-end) ${n}`]: {
        borderStartStartRadius: a,
        borderEndStartRadius: a,
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
      [`&-in-view${t}-range-end:not(${t}-range-start) ${n}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        borderStartEndRadius: a,
        borderEndEndRadius: a,
      },
      '&-disabled': {
        color: f,
        pointerEvents: 'none',
        [n]: { background: 'transparent' },
        '&::before': { background: y },
      },
      [`&-disabled${t}-today ${n}::before`]: { borderColor: f },
    }
  },
  oI = (e) => {
    const {
        componentCls: t,
        pickerCellCls: n,
        pickerCellInnerCls: r,
        pickerYearMonthCellWidth: a,
        pickerControlIconSize: o,
        cellWidth: i,
        paddingSM: l,
        paddingXS: s,
        paddingXXS: u,
        colorBgContainer: c,
        lineWidth: d,
        lineType: f,
        borderRadiusLG: y,
        colorPrimary: v,
        colorTextHeading: p,
        colorSplit: b,
        pickerControlIconBorderWidth: m,
        colorIcon: h,
        textHeight: S,
        motionDurationMid: C,
        colorIconHover: w,
        fontWeightStrong: E,
        cellHeight: x,
        pickerCellPaddingVertical: R,
        colorTextDisabled: F,
        colorText: _,
        fontSize: T,
        motionDurationSlow: j,
        withoutTimeCellHeight: A,
        pickerQuarterPanelContentHeight: I,
        borderRadiusSM: N,
        colorTextLightSolid: P,
        cellHoverBg: k,
        timeColumnHeight: $,
        timeColumnWidth: M,
        timeCellHeight: O,
        controlItemBgActive: D,
        marginXXS: L,
        pickerDatePanelPaddingHorizontal: W,
        pickerControlIconMargin: B,
      } = e,
      U = e.calc(i).mul(7).add(e.calc(W).mul(2)).equal()
    return {
      [t]: {
        '&-panel': {
          display: 'inline-flex',
          flexDirection: 'column',
          textAlign: 'center',
          background: c,
          borderRadius: y,
          outline: 'none',
          '&-focused': { borderColor: v },
          '&-rtl': {
            direction: 'rtl',
            [`${t}-prev-icon,
              ${t}-super-prev-icon`]: { transform: 'rotate(45deg)' },
            [`${t}-next-icon,
              ${t}-super-next-icon`]: { transform: 'rotate(-135deg)' },
          },
        },
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel':
          { display: 'flex', flexDirection: 'column', width: U },
        '&-header': {
          display: 'flex',
          padding: `0 ${ee(s)}`,
          color: p,
          borderBottom: `${ee(d)} ${f} ${b}`,
          '> *': { flex: 'none' },
          button: {
            padding: 0,
            color: h,
            lineHeight: ee(S),
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            transition: `color ${C}`,
            fontSize: 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '> button': {
            minWidth: '1.6em',
            fontSize: T,
            '&:hover': { color: w },
            '&:disabled': { opacity: 0.25, pointerEvents: 'none' },
          },
          '&-view': {
            flex: 'auto',
            fontWeight: E,
            lineHeight: ee(S),
            '> button': {
              color: 'inherit',
              fontWeight: 'inherit',
              '&:not(:first-child)': { marginInlineStart: s },
              '&:hover': { color: v },
            },
          },
        },
        '&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon':
          {
            position: 'relative',
            width: o,
            height: o,
            '&::before': {
              position: 'absolute',
              top: 0,
              insetInlineStart: 0,
              width: o,
              height: o,
              border: '0 solid currentcolor',
              borderBlockWidth: `${ee(m)} 0`,
              borderInlineWidth: `${ee(m)} 0`,
              content: '""',
            },
          },
        '&-super-prev-icon,\n        &-super-next-icon': {
          '&::after': {
            position: 'absolute',
            top: B,
            insetInlineStart: B,
            display: 'inline-block',
            width: o,
            height: o,
            border: '0 solid currentcolor',
            borderBlockWidth: `${ee(m)} 0`,
            borderInlineWidth: `${ee(m)} 0`,
            content: '""',
          },
        },
        '&-prev-icon,\n        &-super-prev-icon': {
          transform: 'rotate(-45deg)',
        },
        '&-next-icon,\n        &-super-next-icon': {
          transform: 'rotate(135deg)',
        },
        '&-content': {
          width: '100%',
          tableLayout: 'fixed',
          borderCollapse: 'collapse',
          'th, td': { position: 'relative', minWidth: x, fontWeight: 'normal' },
          th: {
            height: e.calc(x).add(e.calc(R).mul(2)).equal(),
            color: _,
            verticalAlign: 'middle',
          },
        },
        '&-cell': Object.assign(
          {
            padding: `${ee(R)} 0`,
            color: F,
            cursor: 'pointer',
            '&-in-view': { color: _ },
          },
          aI(e),
        ),
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel':
          {
            [`${t}-content`]: { height: e.calc(A).mul(4).equal() },
            [r]: { padding: `0 ${ee(s)}` },
          },
        '&-quarter-panel': { [`${t}-content`]: { height: I } },
        '&-decade-panel': {
          [r]: { padding: `0 ${ee(e.calc(s).div(2).equal())}` },
          [`${t}-cell::before`]: { display: 'none' },
        },
        '&-year-panel,\n        &-quarter-panel,\n        &-month-panel': {
          [`${t}-body`]: { padding: `0 ${ee(s)}` },
          [r]: { width: a },
        },
        '&-date-panel': {
          [`${t}-body`]: { padding: `${ee(s)} ${ee(W)}` },
          [`${t}-content th`]: { boxSizing: 'border-box', padding: 0 },
        },
        '&-week-panel': {
          [`${t}-cell`]: {
            [`&:hover ${r},
            &-selected ${r},
            ${r}`]: { background: 'transparent !important' },
          },
          '&-row': {
            td: {
              '&:before': { transition: `background ${C}` },
              '&:first-child:before': {
                borderStartStartRadius: N,
                borderEndStartRadius: N,
              },
              '&:last-child:before': {
                borderStartEndRadius: N,
                borderEndEndRadius: N,
              },
            },
            '&:hover td': { '&:before': { background: k } },
            '&-range-start td,\n            &-range-end td,\n            &-selected td,\n            &-hover td':
              {
                [`&${n}`]: {
                  '&:before': { background: v },
                  [`&${t}-cell-week`]: {
                    color: new Ht(P).setAlpha(0.5).toHexString(),
                  },
                  [r]: { color: P },
                },
              },
            '&-range-hover td:before': { background: D },
          },
        },
        '&-week-panel, &-date-panel-show-week': {
          [`${t}-body`]: { padding: `${ee(s)} ${ee(l)}` },
          [`${t}-content th`]: { width: 'auto' },
        },
        '&-datetime-panel': {
          display: 'flex',
          [`${t}-time-panel`]: { borderInlineStart: `${ee(d)} ${f} ${b}` },
          [`${t}-date-panel,
          ${t}-time-panel`]: { transition: `opacity ${j}` },
          '&-active': {
            [`${t}-date-panel,
            ${t}-time-panel`]: { opacity: 0.3, '&-active': { opacity: 1 } },
          },
        },
        '&-time-panel': {
          width: 'auto',
          minWidth: 'auto',
          direction: 'ltr',
          [`${t}-content`]: { display: 'flex', flex: 'auto', height: $ },
          '&-column': {
            flex: '1 0 auto',
            width: M,
            margin: `${ee(u)} 0`,
            padding: 0,
            overflowY: 'hidden',
            textAlign: 'start',
            listStyle: 'none',
            transition: `background ${C}`,
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              width: 8,
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: e.colorTextTertiary,
              borderRadius: e.borderRadiusSM,
            },
            '&': {
              scrollbarWidth: 'thin',
              scrollbarColor: `${e.colorTextTertiary} transparent`,
            },
            '&::after': {
              display: 'block',
              height: e.calc('100%').sub(O).equal(),
              content: '""',
            },
            '&:not(:first-child)': { borderInlineStart: `${ee(d)} ${f} ${b}` },
            '&-active': { background: new Ht(D).setAlpha(0.2).toHexString() },
            '&:hover': { overflowY: 'auto' },
            '> li': {
              margin: 0,
              padding: 0,
              [`&${t}-time-panel-cell`]: {
                marginInline: L,
                [`${t}-time-panel-cell-inner`]: {
                  display: 'block',
                  width: e.calc(M).sub(e.calc(L).mul(2)).equal(),
                  height: O,
                  margin: 0,
                  paddingBlock: 0,
                  paddingInlineEnd: 0,
                  paddingInlineStart: e.calc(M).sub(O).div(2).equal(),
                  color: _,
                  lineHeight: ee(O),
                  borderRadius: N,
                  cursor: 'pointer',
                  transition: `background ${C}`,
                  '&:hover': { background: k },
                },
                '&-selected': {
                  [`${t}-time-panel-cell-inner`]: { background: D },
                },
                '&-disabled': {
                  [`${t}-time-panel-cell-inner`]: {
                    color: F,
                    background: 'transparent',
                    cursor: 'not-allowed',
                  },
                },
              },
            },
          },
        },
      },
    }
  },
  iI = (e) => {
    const {
      componentCls: t,
      textHeight: n,
      lineWidth: r,
      paddingSM: a,
      antCls: o,
      colorPrimary: i,
      cellActiveWithRangeBg: l,
      colorPrimaryBorder: s,
      lineType: u,
      colorSplit: c,
    } = e
    return {
      [`${t}-dropdown`]: {
        [`${t}-footer`]: {
          borderTop: `${ee(r)} ${u} ${c}`,
          '&-extra': {
            padding: `0 ${ee(a)}`,
            lineHeight: ee(e.calc(n).sub(e.calc(r).mul(2)).equal()),
            textAlign: 'start',
            '&:not(:last-child)': { borderBottom: `${ee(r)} ${u} ${c}` },
          },
        },
        [`${t}-panels + ${t}-footer ${t}-ranges`]: {
          justifyContent: 'space-between',
        },
        [`${t}-ranges`]: {
          marginBlock: 0,
          paddingInline: ee(a),
          overflow: 'hidden',
          textAlign: 'start',
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '> li': {
            lineHeight: ee(e.calc(n).sub(e.calc(r).mul(2)).equal()),
            display: 'inline-block',
          },
          [`${t}-now-btn-disabled`]: {
            pointerEvents: 'none',
            color: e.colorTextDisabled,
          },
          [`${t}-preset > ${o}-tag-blue`]: {
            color: i,
            background: l,
            borderColor: s,
            cursor: 'pointer',
          },
          [`${t}-ok`]: {
            paddingBlock: e.calc(r).mul(2).equal(),
            marginInlineStart: 'auto',
          },
        },
      },
    }
  },
  lI = (e) => {
    const { componentCls: t, controlHeightLG: n, paddingXXS: r, padding: a } = e
    return {
      pickerCellCls: `${t}-cell`,
      pickerCellInnerCls: `${t}-cell-inner`,
      pickerYearMonthCellWidth: e.calc(n).mul(1.5).equal(),
      pickerQuarterPanelContentHeight: e.calc(n).mul(1.4).equal(),
      pickerCellPaddingVertical: e.calc(r).add(e.calc(r).div(2)).equal(),
      pickerCellBorderGap: 2,
      pickerControlIconSize: 7,
      pickerControlIconMargin: 4,
      pickerControlIconBorderWidth: 1.5,
      pickerDatePanelPaddingHorizontal: e.calc(a).add(e.calc(r).div(2)).equal(),
    }
  },
  sI = (e) => {
    const {
        colorBgContainerDisabled: t,
        controlHeight: n,
        controlHeightSM: r,
        controlHeightLG: a,
        paddingXXS: o,
        lineWidth: i,
      } = e,
      l = o * 2,
      s = i * 2,
      u = Math.min(n - l, n - s),
      c = Math.min(r - l, r - s),
      d = Math.min(a - l, a - s)
    return {
      INTERNAL_FIXED_ITEM_MARGIN: Math.floor(o / 2),
      cellHoverBg: e.controlItemBgHover,
      cellActiveWithRangeBg: e.controlItemBgActive,
      cellHoverWithRangeBg: new Ht(e.colorPrimary).lighten(35).toHexString(),
      cellRangeBorderColor: new Ht(e.colorPrimary).lighten(20).toHexString(),
      cellBgDisabled: t,
      timeColumnWidth: a * 1.4,
      timeColumnHeight: 28 * 8,
      timeCellHeight: 28,
      cellWidth: r * 1.5,
      cellHeight: r,
      textHeight: a,
      withoutTimeCellHeight: a * 1.65,
      multipleItemBg: e.colorFillSecondary,
      multipleItemBorderColor: 'transparent',
      multipleItemHeight: u,
      multipleItemHeightSM: c,
      multipleItemHeightLG: d,
      multipleSelectorBgDisabled: t,
      multipleItemColorDisabled: e.colorTextDisabled,
      multipleItemBorderColorDisabled: 'transparent',
    }
  },
  uI = (e) =>
    Object.assign(
      Object.assign(Object.assign(Object.assign({}, cC(e)), sI(e)), SO(e)),
      {
        presetsWidth: 120,
        presetsMaxWidth: 200,
        zIndexPopup: e.zIndexPopupBase + 50,
      },
    ),
  cI = (e) => {
    const { componentCls: t } = e
    return {
      [t]: [
        Object.assign(Object.assign(Object.assign({}, fC(e)), mC(e)), gC(e)),
        {
          '&-outlined': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${ee(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
          '&-filled': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.colorBgContainer,
              border: `${ee(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
            },
          },
          '&-borderless': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${ee(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
        },
      ],
    }
  },
  Gd = (e, t, n, r) => {
    const a = e.calc(n).add(2).equal(),
      o = e.max(e.calc(t).sub(a).div(2).equal(), 0),
      i = e.max(e.calc(t).sub(a).sub(o).equal(), 0)
    return { padding: `${ee(o)} ${ee(r)} ${ee(i)}` }
  },
  dI = (e) => {
    const { componentCls: t, colorError: n, colorWarning: r } = e
    return {
      [`${t}:not(${t}-disabled):not([disabled])`]: {
        [`&${t}-status-error`]: { [`${t}-active-bar`]: { background: n } },
        [`&${t}-status-warning`]: { [`${t}-active-bar`]: { background: r } },
      },
    }
  },
  fI = (e) => {
    const {
      componentCls: t,
      antCls: n,
      controlHeight: r,
      paddingInline: a,
      lineWidth: o,
      lineType: i,
      colorBorder: l,
      borderRadius: s,
      motionDurationMid: u,
      colorTextDisabled: c,
      colorTextPlaceholder: d,
      controlHeightLG: f,
      fontSizeLG: y,
      controlHeightSM: v,
      paddingInlineSM: p,
      paddingXS: b,
      marginXS: m,
      colorTextDescription: h,
      lineWidthBold: S,
      colorPrimary: C,
      motionDurationSlow: w,
      zIndexPopup: E,
      paddingXXS: x,
      sizePopupArrow: R,
      colorBgElevated: F,
      borderRadiusLG: _,
      boxShadowSecondary: T,
      borderRadiusSM: j,
      colorSplit: A,
      cellHoverBg: I,
      presetsWidth: N,
      presetsMaxWidth: P,
      boxShadowPopoverArrow: k,
      fontHeight: $,
      fontHeightLG: M,
      lineHeightLG: O,
    } = e
    return [
      {
        [t]: Object.assign(
          Object.assign(Object.assign({}, io(e)), Gd(e, r, $, a)),
          {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            lineHeight: 1,
            borderRadius: s,
            transition: `border ${u}, box-shadow ${u}, background ${u}`,
            [`${t}-input`]: {
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              width: '100%',
              '> input': Object.assign(
                Object.assign(
                  {
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    color: 'inherit',
                    fontSize: e.fontSize,
                    lineHeight: e.lineHeight,
                    transition: `all ${u}`,
                  },
                  vC(d),
                ),
                {
                  flex: 'auto',
                  minWidth: 1,
                  height: 'auto',
                  padding: 0,
                  background: 'transparent',
                  border: 0,
                  fontFamily: 'inherit',
                  '&:focus': { boxShadow: 'none', outline: 0 },
                  '&[disabled]': {
                    background: 'transparent',
                    color: c,
                    cursor: 'not-allowed',
                  },
                },
              ),
              '&-placeholder': { '> input': { color: d } },
            },
            '&-large': Object.assign(Object.assign({}, Gd(e, f, M, a)), {
              [`${t}-input > input`]: { fontSize: y, lineHeight: O },
            }),
            '&-small': Object.assign({}, Gd(e, v, $, p)),
            [`${t}-suffix`]: {
              display: 'flex',
              flex: 'none',
              alignSelf: 'center',
              marginInlineStart: e.calc(b).div(2).equal(),
              color: c,
              lineHeight: 1,
              pointerEvents: 'none',
              transition: `opacity ${u}, color ${u}`,
              '> *': {
                verticalAlign: 'top',
                '&:not(:last-child)': { marginInlineEnd: m },
              },
            },
            [`${t}-clear`]: {
              position: 'absolute',
              top: '50%',
              insetInlineEnd: 0,
              color: c,
              lineHeight: 1,
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              opacity: 0,
              transition: `opacity ${u}, color ${u}`,
              '> *': { verticalAlign: 'top' },
              '&:hover': { color: h },
            },
            '&:hover': {
              [`${t}-clear`]: { opacity: 1 },
              [`${t}-suffix:not(:last-child)`]: { opacity: 0 },
            },
            [`${t}-separator`]: {
              position: 'relative',
              display: 'inline-block',
              width: '1em',
              height: y,
              color: c,
              fontSize: y,
              verticalAlign: 'top',
              cursor: 'default',
              [`${t}-focused &`]: { color: h },
              [`${t}-range-separator &`]: {
                [`${t}-disabled &`]: { cursor: 'not-allowed' },
              },
            },
            '&-range': {
              position: 'relative',
              display: 'inline-flex',
              [`${t}-active-bar`]: {
                bottom: e.calc(o).mul(-1).equal(),
                height: S,
                background: C,
                opacity: 0,
                transition: `all ${w} ease-out`,
                pointerEvents: 'none',
              },
              [`&${t}-focused`]: { [`${t}-active-bar`]: { opacity: 1 } },
              [`${t}-range-separator`]: {
                alignItems: 'center',
                padding: `0 ${ee(b)}`,
                lineHeight: 1,
              },
            },
            '&-range, &-multiple': {
              [`${t}-clear`]: { insetInlineEnd: a },
              [`&${t}-small`]: { [`${t}-clear`]: { insetInlineEnd: p } },
            },
            '&-dropdown': Object.assign(
              Object.assign(Object.assign({}, io(e)), oI(e)),
              {
                pointerEvents: 'none',
                position: 'absolute',
                top: -9999,
                left: { _skip_check_: !0, value: -9999 },
                zIndex: E,
                [`&${t}-dropdown-hidden`]: { display: 'none' },
                [`&${t}-dropdown-placement-bottomLeft`]: {
                  [`${t}-range-arrow`]: {
                    top: 0,
                    display: 'block',
                    transform: 'translateY(-100%)',
                  },
                },
                [`&${t}-dropdown-placement-topLeft`]: {
                  [`${t}-range-arrow`]: {
                    bottom: 0,
                    display: 'block',
                    transform: 'translateY(100%) rotate(180deg)',
                  },
                },
                [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topRight`]:
                  { animationName: hb },
                [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]:
                  { animationName: fb },
                [`&${n}-slide-up-leave ${t}-panel-container`]: {
                  pointerEvents: 'none',
                },
                [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topRight`]:
                  { animationName: mb },
                [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]:
                  { animationName: gb },
                [`${t}-panel > ${t}-time-panel`]: { paddingTop: x },
                [`${t}-range-wrapper`]: {
                  display: 'flex',
                  position: 'relative',
                },
                [`${t}-range-arrow`]: Object.assign(
                  Object.assign(
                    {
                      position: 'absolute',
                      zIndex: 1,
                      display: 'none',
                      paddingInline: e.calc(a).mul(1.5).equal(),
                      boxSizing: 'content-box',
                      transition: `left ${w} ease-out`,
                    },
                    bO(e, F, k),
                  ),
                  {
                    '&:before': {
                      insetInlineStart: e.calc(a).mul(1.5).equal(),
                    },
                  },
                ),
                [`${t}-panel-container`]: {
                  overflow: 'hidden',
                  verticalAlign: 'top',
                  background: F,
                  borderRadius: _,
                  boxShadow: T,
                  transition: `margin ${w}`,
                  display: 'inline-block',
                  pointerEvents: 'auto',
                  [`${t}-panel-layout`]: {
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'stretch',
                  },
                  [`${t}-presets`]: {
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: N,
                    maxWidth: P,
                    ul: {
                      height: 0,
                      flex: 'auto',
                      listStyle: 'none',
                      overflow: 'auto',
                      margin: 0,
                      padding: b,
                      borderInlineEnd: `${ee(o)} ${i} ${A}`,
                      li: Object.assign(Object.assign({}, eP), {
                        borderRadius: j,
                        paddingInline: b,
                        paddingBlock: e.calc(v).sub($).div(2).equal(),
                        cursor: 'pointer',
                        transition: `all ${w}`,
                        '+ li': { marginTop: m },
                        '&:hover': { background: I },
                      }),
                    },
                  },
                  [`${t}-panels`]: {
                    display: 'inline-flex',
                    flexWrap: 'nowrap',
                    direction: 'ltr',
                    '&:last-child': { [`${t}-panel`]: { borderWidth: 0 } },
                  },
                  [`${t}-panel`]: {
                    verticalAlign: 'top',
                    background: 'transparent',
                    borderRadius: 0,
                    borderWidth: 0,
                    [`${t}-content,
            table`]: { textAlign: 'center' },
                    '&-focused': { borderColor: l },
                  },
                },
              },
            ),
            '&-dropdown-range': {
              padding: `${ee(e.calc(R).mul(2).div(3).equal())} 0`,
              '&-hidden': { display: 'none' },
            },
            '&-rtl': {
              direction: 'rtl',
              [`${t}-separator`]: { transform: 'rotate(180deg)' },
              [`${t}-footer`]: { '&-extra': { direction: 'rtl' } },
            },
          },
        ),
      },
      Ip(e, 'slide-up'),
      Ip(e, 'slide-down'),
      _p(e, 'move-up'),
      _p(e, 'move-down'),
    ]
  },
  bC = $c(
    'DatePicker',
    (e) => {
      const t = Dn(uC(e), lI(e), {
        inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
        multipleSelectItemHeight: e.multipleItemHeight,
        selectHeight: e.controlHeight,
      })
      return [
        iI(t),
        fI(t),
        cI(t),
        dI(t),
        rI(t),
        em(e, { focusElCls: `${e.componentCls}-focused` }),
      ]
    },
    uI,
  )
var gI = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z',
          },
        },
      ],
    },
    name: 'calendar',
    theme: 'outlined',
  },
  hI = function (t, n) {
    return g.createElement(er, ve({}, t, { ref: n, icon: gI }))
  },
  CC = g.forwardRef(hI),
  mI = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
          },
        },
      ],
    },
    name: 'clock-circle',
    theme: 'outlined',
  },
  vI = function (t, n) {
    return g.createElement(er, ve({}, t, { ref: n, icon: mI }))
  },
  wC = g.forwardRef(vI),
  pI = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z',
          },
        },
      ],
    },
    name: 'swap-right',
    theme: 'outlined',
  },
  yI = function (t, n) {
    return g.createElement(er, ve({}, t, { ref: n, icon: pI }))
  },
  SI = g.forwardRef(yI)
function bI(e, t, n) {
  return n !== void 0
    ? n
    : t === 'year' && e.lang.yearPlaceholder
      ? e.lang.yearPlaceholder
      : t === 'quarter' && e.lang.quarterPlaceholder
        ? e.lang.quarterPlaceholder
        : t === 'month' && e.lang.monthPlaceholder
          ? e.lang.monthPlaceholder
          : t === 'week' && e.lang.weekPlaceholder
            ? e.lang.weekPlaceholder
            : t === 'time' && e.timePickerLocale.placeholder
              ? e.timePickerLocale.placeholder
              : e.lang.placeholder
}
function CI(e, t, n) {
  return n !== void 0
    ? n
    : t === 'year' && e.lang.yearPlaceholder
      ? e.lang.rangeYearPlaceholder
      : t === 'quarter' && e.lang.quarterPlaceholder
        ? e.lang.rangeQuarterPlaceholder
        : t === 'month' && e.lang.monthPlaceholder
          ? e.lang.rangeMonthPlaceholder
          : t === 'week' && e.lang.weekPlaceholder
            ? e.lang.rangeWeekPlaceholder
            : t === 'time' && e.timePickerLocale.placeholder
              ? e.timePickerLocale.rangePlaceholder
              : e.lang.rangePlaceholder
}
function fm(e, t) {
  const n = { adjustX: 1, adjustY: 1 }
  switch (t) {
    case 'bottomLeft':
      return { points: ['tl', 'bl'], offset: [0, 4], overflow: n }
    case 'bottomRight':
      return { points: ['tr', 'br'], offset: [0, 4], overflow: n }
    case 'topLeft':
      return { points: ['bl', 'tl'], offset: [0, -4], overflow: n }
    case 'topRight':
      return { points: ['br', 'tr'], offset: [0, -4], overflow: n }
    default:
      return {
        points: e === 'rtl' ? ['tr', 'br'] : ['tl', 'bl'],
        offset: [0, 4],
        overflow: n,
      }
  }
}
function xC(e, t) {
  const { allowClear: n = !0 } = e,
    { clearIcon: r, removeIcon: a } = yO(
      Object.assign(Object.assign({}, e), {
        prefixCls: t,
        componentName: 'DatePicker',
      }),
    )
  return [
    g.useMemo(
      () =>
        n === !1 ? !1 : Object.assign({ clearIcon: r }, n === !0 ? {} : n),
      [n, r],
    ),
    a,
  ]
}
function wI(e) {
  return g.createElement(
    tm,
    Object.assign({ size: 'small', type: 'primary' }, e),
  )
}
function EC(e) {
  return g.useMemo(() => Object.assign({ button: wI }, e), [e])
}
var xI = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]])
  return n
}
function EI(e) {
  return g.forwardRef((n, r) => {
    var a
    const {
        prefixCls: o,
        getPopupContainer: i,
        components: l,
        className: s,
        style: u,
        placement: c,
        size: d,
        disabled: f,
        bordered: y = !0,
        placeholder: v,
        popupClassName: p,
        dropdownClassName: b,
        status: m,
        rootClassName: h,
        variant: S,
      } = n,
      C = xI(n, [
        'prefixCls',
        'getPopupContainer',
        'components',
        'className',
        'style',
        'placement',
        'size',
        'disabled',
        'bordered',
        'placeholder',
        'popupClassName',
        'dropdownClassName',
        'status',
        'rootClassName',
        'variant',
      ]),
      w = g.useRef(null),
      {
        getPrefixCls: E,
        direction: x,
        getPopupContainer: R,
        rangePicker: F,
      } = g.useContext(yn),
      _ = E('picker', o),
      { compactSize: T, compactItemClassnames: j } = Xh(_, x),
      { picker: A } = n,
      I = E(),
      [N, P] = wb(S, y),
      k = kc(_),
      [$, M, O] = bC(_, k),
      [D] = xC(n, _),
      L = EC(l),
      W = Mc((ae) => {
        var ye
        return (ye = d ?? T) !== null && ye !== void 0 ? ye : ae
      }),
      B = g.useContext(oo),
      U = f ?? B,
      K = g.useContext(rm),
      { hasFeedback: Y, status: q, feedbackIcon: X } = K,
      Q = g.createElement(
        g.Fragment,
        null,
        A === 'time' ? g.createElement(wC, null) : g.createElement(CC, null),
        Y && X,
      )
    g.useImperativeHandle(r, () => w.current)
    const [J] = uS('Calendar', Fu),
      ne = Object.assign(Object.assign({}, J), n.locale),
      [te] = qS(
        'DatePicker',
        (a = n.popupStyle) === null || a === void 0 ? void 0 : a.zIndex,
      )
    return $(
      g.createElement(
        QS,
        null,
        g.createElement(
          E_,
          Object.assign(
            {
              separator: g.createElement(
                'span',
                { 'aria-label': 'to', className: `${_}-separator` },
                g.createElement(SI, null),
              ),
              disabled: U,
              ref: w,
              popupAlign: fm(x, c),
              placement: c,
              placeholder: CI(ne, A, v),
              suffixIcon: Q,
              prevIcon: g.createElement('span', {
                className: `${_}-prev-icon`,
              }),
              nextIcon: g.createElement('span', {
                className: `${_}-next-icon`,
              }),
              superPrevIcon: g.createElement('span', {
                className: `${_}-super-prev-icon`,
              }),
              superNextIcon: g.createElement('span', {
                className: `${_}-super-next-icon`,
              }),
              transitionName: `${I}-slide-up`,
            },
            C,
            {
              className: ke(
                { [`${_}-${W}`]: W, [`${_}-${N}`]: P },
                bb(_, Cb(q, m), Y),
                M,
                j,
                s,
                F == null ? void 0 : F.className,
                O,
                k,
                h,
              ),
              style: Object.assign(
                Object.assign({}, F == null ? void 0 : F.style),
                u,
              ),
              locale: ne.lang,
              prefixCls: _,
              getPopupContainer: i || R,
              generateConfig: e,
              components: L,
              direction: x,
              classNames: { popup: ke(M, p || b, O, k, h) },
              styles: {
                popup: Object.assign(Object.assign({}, n.popupStyle), {
                  zIndex: te,
                }),
              },
              allowClear: D,
            },
          ),
        ),
      ),
    )
  })
}
var $I = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]])
  return n
}
function PI(e) {
  function t(s, u) {
    const c = u === 'TimePicker' ? 'timePicker' : 'datePicker'
    return g.forwardRef((f, y) => {
      var v
      const {
          prefixCls: p,
          getPopupContainer: b,
          components: m,
          style: h,
          className: S,
          rootClassName: C,
          size: w,
          bordered: E,
          placement: x,
          placeholder: R,
          popupClassName: F,
          dropdownClassName: _,
          disabled: T,
          status: j,
          variant: A,
          onCalendarChange: I,
        } = f,
        N = $I(f, [
          'prefixCls',
          'getPopupContainer',
          'components',
          'style',
          'className',
          'rootClassName',
          'size',
          'bordered',
          'placement',
          'placeholder',
          'popupClassName',
          'dropdownClassName',
          'disabled',
          'status',
          'variant',
          'onCalendarChange',
        ]),
        {
          getPrefixCls: P,
          direction: k,
          getPopupContainer: $,
          [c]: M,
        } = g.useContext(yn),
        O = P('picker', p),
        { compactSize: D, compactItemClassnames: L } = Xh(O, k),
        W = g.useRef(null),
        [B, U] = wb(A, E),
        K = kc(O),
        [Y, q, X] = bC(O, K)
      g.useImperativeHandle(y, () => W.current)
      const Q = { showToday: !0 },
        J = s || f.picker,
        ne = P(),
        { onSelect: te, multiple: ae } = N,
        ye = te && s === 'time' && !ae,
        oe = (Je, me, We) => {
          I == null || I(Je, me, We), ye && te(Je)
        },
        [he, ge] = xC(f, O),
        ce = EC(m),
        Ce = Mc((Je) => {
          var me
          return (me = w ?? D) !== null && me !== void 0 ? me : Je
        }),
        we = g.useContext(oo),
        Ne = T ?? we,
        Le = g.useContext(rm),
        { hasFeedback: Z, status: Se, feedbackIcon: ie } = Le,
        Xe = g.createElement(
          g.Fragment,
          null,
          J === 'time' ? g.createElement(wC, null) : g.createElement(CC, null),
          Z && ie,
        ),
        [He] = uS('DatePicker', Fu),
        Ie = Object.assign(Object.assign({}, He), f.locale),
        [Ye] = qS(
          'DatePicker',
          (v = f.popupStyle) === null || v === void 0 ? void 0 : v.zIndex,
        )
      return Y(
        g.createElement(
          QS,
          null,
          g.createElement(
            O_,
            Object.assign(
              {
                ref: W,
                placeholder: bI(Ie, J, R),
                suffixIcon: Xe,
                dropdownAlign: fm(k, x),
                placement: x,
                prevIcon: g.createElement('span', {
                  className: `${O}-prev-icon`,
                }),
                nextIcon: g.createElement('span', {
                  className: `${O}-next-icon`,
                }),
                superPrevIcon: g.createElement('span', {
                  className: `${O}-super-prev-icon`,
                }),
                superNextIcon: g.createElement('span', {
                  className: `${O}-super-next-icon`,
                }),
                transitionName: `${ne}-slide-up`,
                picker: s,
                onCalendarChange: oe,
              },
              Q,
              N,
              {
                locale: Ie.lang,
                className: ke(
                  { [`${O}-${Ce}`]: Ce, [`${O}-${B}`]: U },
                  bb(O, Cb(Se, j), Z),
                  q,
                  L,
                  M == null ? void 0 : M.className,
                  S,
                  X,
                  K,
                  C,
                ),
                style: Object.assign(
                  Object.assign({}, M == null ? void 0 : M.style),
                  h,
                ),
                prefixCls: O,
                getPopupContainer: b || $,
                generateConfig: e,
                components: ce,
                direction: k,
                disabled: Ne,
                classNames: { popup: ke(q, X, K, C, F || _) },
                styles: {
                  popup: Object.assign(Object.assign({}, f.popupStyle), {
                    zIndex: Ye,
                  }),
                },
                allowClear: he,
                removeIcon: ge,
              },
            ),
          ),
        ),
      )
    })
  }
  const n = t(),
    r = t('week', 'WeekPicker'),
    a = t('month', 'MonthPicker'),
    o = t('year', 'YearPicker'),
    i = t('quarter', 'QuarterPicker'),
    l = t('time', 'TimePicker')
  return {
    DatePicker: n,
    WeekPicker: r,
    MonthPicker: a,
    YearPicker: o,
    TimePicker: l,
    QuarterPicker: i,
  }
}
function $C(e) {
  const {
      DatePicker: t,
      WeekPicker: n,
      MonthPicker: r,
      YearPicker: a,
      TimePicker: o,
      QuarterPicker: i,
    } = PI(e),
    l = EI(e),
    s = t
  return (
    (s.WeekPicker = n),
    (s.MonthPicker = r),
    (s.YearPicker = a),
    (s.RangePicker = l),
    (s.TimePicker = o),
    (s.QuarterPicker = i),
    s
  )
}
const yi = $C(FO)
function PC(e) {
  const t = fm(e.direction, e.placement)
  return (
    (t.overflow.adjustY = !1),
    (t.overflow.adjustX = !1),
    Object.assign(Object.assign({}, e), { dropdownAlign: t })
  )
}
const kI = vb(yi, 'picker', null, PC)
yi._InternalPanelDoNotUseOrYouWillBeFired = kI
const RI = vb(yi.RangePicker, 'picker', null, PC)
yi._InternalRangePanelDoNotUseOrYouWillBeFired = RI
yi.generatePicker = $C
var gm = {},
  kC = { exports: {} }
;(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n }
  }
  ;(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports)
})(kC)
var Qr = kC.exports,
  Nc = {}
Object.defineProperty(Nc, '__esModule', { value: !0 })
Nc.default = void 0
var MI = {
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页',
  page_size: '页码',
}
Nc.default = MI
var Dc = {},
  Gl = {},
  Lc = {}
Object.defineProperty(Lc, '__esModule', { value: !0 })
Lc.default = void 0
var OI = {
  locale: 'zh_CN',
  yearFormat: 'YYYY年',
  cellDateFormat: 'D',
  cellMeridiemFormat: 'A',
  today: '今天',
  now: '此刻',
  backToToday: '返回今天',
  ok: '确定',
  timeSelect: '选择时间',
  dateSelect: '选择日期',
  weekSelect: '选择周',
  clear: '清除',
  month: '月',
  year: '年',
  previousMonth: '上个月 (翻页上键)',
  nextMonth: '下个月 (翻页下键)',
  monthSelect: '选择月份',
  yearSelect: '选择年份',
  decadeSelect: '选择年代',
  previousYear: '上一年 (Control键加左方向键)',
  nextYear: '下一年 (Control键加右方向键)',
  previousDecade: '上一年代',
  nextDecade: '下一年代',
  previousCentury: '上一世纪',
  nextCentury: '下一世纪',
}
Lc.default = OI
var Ql = {}
Object.defineProperty(Ql, '__esModule', { value: !0 })
Ql.default = void 0
const _I = {
  placeholder: '请选择时间',
  rangePlaceholder: ['开始时间', '结束时间'],
}
Ql.default = _I
var RC = Qr.default
Object.defineProperty(Gl, '__esModule', { value: !0 })
Gl.default = void 0
var II = RC(Lc),
  TI = RC(Ql)
const MC = {
  lang: Object.assign(
    {
      placeholder: '请选择日期',
      yearPlaceholder: '请选择年份',
      quarterPlaceholder: '请选择季度',
      monthPlaceholder: '请选择月份',
      weekPlaceholder: '请选择周',
      rangePlaceholder: ['开始日期', '结束日期'],
      rangeYearPlaceholder: ['开始年份', '结束年份'],
      rangeMonthPlaceholder: ['开始月份', '结束月份'],
      rangeQuarterPlaceholder: ['开始季度', '结束季度'],
      rangeWeekPlaceholder: ['开始周', '结束周'],
    },
    II.default,
  ),
  timePickerLocale: Object.assign({}, TI.default),
}
MC.lang.ok = '确定'
Gl.default = MC
var FI = Qr.default
Object.defineProperty(Dc, '__esModule', { value: !0 })
Dc.default = void 0
var NI = FI(Gl)
Dc.default = NI.default
var Ac = Qr.default
Object.defineProperty(gm, '__esModule', { value: !0 })
var OC = (gm.default = void 0),
  DI = Ac(Nc),
  LI = Ac(Dc),
  AI = Ac(Gl),
  jI = Ac(Ql)
const Pn = '${label}不是一个有效的${type}',
  zI = {
    locale: 'zh-cn',
    Pagination: DI.default,
    DatePicker: AI.default,
    TimePicker: jI.default,
    Calendar: LI.default,
    global: { placeholder: '请选择' },
    Table: {
      filterTitle: '筛选',
      filterConfirm: '确定',
      filterReset: '重置',
      filterEmptyText: '无筛选项',
      filterCheckall: '全选',
      filterSearchPlaceholder: '在筛选项中搜索',
      emptyText: '暂无数据',
      selectAll: '全选当页',
      selectInvert: '反选当页',
      selectNone: '清空所有',
      selectionAll: '全选所有',
      sortTitle: '排序',
      expand: '展开行',
      collapse: '关闭行',
      triggerDesc: '点击降序',
      triggerAsc: '点击升序',
      cancelSort: '取消排序',
    },
    Modal: { okText: '确定', cancelText: '取消', justOkText: '知道了' },
    Tour: { Next: '下一步', Previous: '上一步', Finish: '结束导览' },
    Popconfirm: { cancelText: '取消', okText: '确定' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: '请输入搜索内容',
      itemUnit: '项',
      itemsUnit: '项',
      remove: '删除',
      selectCurrent: '全选当页',
      removeCurrent: '删除当页',
      selectAll: '全选所有',
      deselectAll: '取消全选',
      removeAll: '删除全部',
      selectInvert: '反选当页',
    },
    Upload: {
      uploading: '文件上传中',
      removeFile: '删除文件',
      uploadError: '上传错误',
      previewFile: '预览文件',
      downloadFile: '下载文件',
    },
    Empty: { description: '暂无数据' },
    Icon: { icon: '图标' },
    Text: {
      edit: '编辑',
      copy: '复制',
      copied: '复制成功',
      expand: '展开',
      collapse: '收起',
    },
    Form: {
      optional: '（可选）',
      defaultValidateMessages: {
        default: '字段验证错误${label}',
        required: '请输入${label}',
        enum: '${label}必须是其中一个[${enum}]',
        whitespace: '${label}不能为空字符',
        date: {
          format: '${label}日期格式无效',
          parse: '${label}不能转换为日期',
          invalid: '${label}是一个无效日期',
        },
        types: {
          string: Pn,
          method: Pn,
          array: Pn,
          object: Pn,
          number: Pn,
          date: Pn,
          boolean: Pn,
          integer: Pn,
          float: Pn,
          regexp: Pn,
          email: Pn,
          url: Pn,
          hex: Pn,
        },
        string: {
          len: '${label}须为${len}个字符',
          min: '${label}最少${min}个字符',
          max: '${label}最多${max}个字符',
          range: '${label}须在${min}-${max}字符之间',
        },
        number: {
          len: '${label}必须等于${len}',
          min: '${label}最小值为${min}',
          max: '${label}最大值为${max}',
          range: '${label}须在${min}-${max}之间',
        },
        array: {
          len: '须为${len}个${label}',
          min: '最少${min}个${label}',
          max: '最多${max}个${label}',
          range: '${label}数量须在${min}-${max}之间',
        },
        pattern: { mismatch: '${label}与模式不匹配${pattern}' },
      },
    },
    Image: { preview: '预览' },
    QRCode: { expired: '二维码过期', refresh: '点击刷新', scanned: '已扫描' },
    ColorPicker: { presetEmpty: '暂无' },
  }
OC = gm.default = zI
var hm = {},
  jc = {}
Object.defineProperty(jc, '__esModule', { value: !0 })
jc.default = void 0
var HI = {
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size',
}
jc.default = HI
var zc = {},
  Xl = {},
  Hc = {}
Object.defineProperty(Hc, '__esModule', { value: !0 })
Hc.default = void 0
var VI = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: !0,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century',
}
Hc.default = VI
var Jl = {}
Object.defineProperty(Jl, '__esModule', { value: !0 })
Jl.default = void 0
const BI = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time'],
}
Jl.default = BI
var _C = Qr.default
Object.defineProperty(Xl, '__esModule', { value: !0 })
Xl.default = void 0
var WI = _C(Hc),
  UI = _C(Jl)
const YI = {
  lang: Object.assign(
    {
      placeholder: 'Select date',
      yearPlaceholder: 'Select year',
      quarterPlaceholder: 'Select quarter',
      monthPlaceholder: 'Select month',
      weekPlaceholder: 'Select week',
      rangePlaceholder: ['Start date', 'End date'],
      rangeYearPlaceholder: ['Start year', 'End year'],
      rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
      rangeMonthPlaceholder: ['Start month', 'End month'],
      rangeWeekPlaceholder: ['Start week', 'End week'],
    },
    WI.default,
  ),
  timePickerLocale: Object.assign({}, UI.default),
}
Xl.default = YI
var qI = Qr.default
Object.defineProperty(zc, '__esModule', { value: !0 })
zc.default = void 0
var KI = qI(Xl)
zc.default = KI.default
var Vc = Qr.default
Object.defineProperty(hm, '__esModule', { value: !0 })
var Tg = (hm.default = void 0),
  GI = Vc(jc),
  QI = Vc(zc),
  XI = Vc(Xl),
  JI = Vc(Jl)
const kn = '${label} is not a valid ${type}',
  ZI = {
    locale: 'en',
    Pagination: GI.default,
    DatePicker: XI.default,
    TimePicker: JI.default,
    Calendar: QI.default,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      deselectAll: 'Deselect all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: {
      edit: 'Edit',
      copy: 'Copy',
      copied: 'Copied',
      expand: 'Expand',
      collapse: 'Collapse',
    },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: kn,
          method: kn,
          array: kn,
          object: kn,
          number: kn,
          date: kn,
          boolean: kn,
          integer: kn,
          float: kn,
          regexp: kn,
          email: kn,
          url: kn,
          hex: kn,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
    QRCode: {
      expired: 'QR code expired',
      refresh: 'Refresh',
      scanned: 'Scanned',
    },
    ColorPicker: { presetEmpty: 'Empty' },
  }
Tg = hm.default = ZI
var mm = {},
  Bc = {}
Object.defineProperty(Bc, '__esModule', { value: !0 })
Bc.default = void 0
var eT = {
  items_per_page: '/ page',
  jump_to: 'Aller à',
  jump_to_confirm: 'confirmer',
  page: 'Page',
  prev_page: 'Page précédente',
  next_page: 'Page suivante',
  prev_5: '5 Pages précédentes',
  next_5: '5 Pages suivantes',
  prev_3: '3 Pages précédentes',
  next_3: '3 Pages suivantes',
  page_size: 'taille de la page',
}
Bc.default = eT
var Wc = {},
  Zl = {},
  Uc = {}
Object.defineProperty(Uc, '__esModule', { value: !0 })
Uc.default = void 0
var tT = {
  locale: 'fr_FR',
  today: "Aujourd'hui",
  now: 'Maintenant',
  backToToday: "Aujourd'hui",
  ok: 'OK',
  clear: 'Rétablir',
  month: 'Mois',
  year: 'Année',
  timeSelect: "Sélectionner l'heure",
  dateSelect: 'Sélectionner la date',
  monthSelect: 'Choisissez un mois',
  yearSelect: 'Choisissez une année',
  decadeSelect: 'Choisissez une décennie',
  yearFormat: 'YYYY',
  dateFormat: 'DD/MM/YYYY',
  dayFormat: 'DD',
  dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
  monthBeforeYear: !0,
  previousMonth: 'Mois précédent (PageUp)',
  nextMonth: 'Mois suivant (PageDown)',
  previousYear: 'Année précédente (Ctrl + gauche)',
  nextYear: 'Année prochaine (Ctrl + droite)',
  previousDecade: 'Décennie précédente',
  nextDecade: 'Décennie suivante',
  previousCentury: 'Siècle précédent',
  nextCentury: 'Siècle suivant',
}
Uc.default = tT
var es = {}
Object.defineProperty(es, '__esModule', { value: !0 })
es.default = void 0
const nT = {
  placeholder: "Sélectionner l'heure",
  rangePlaceholder: ['Heure de début', 'Heure de fin'],
}
es.default = nT
var IC = Qr.default
Object.defineProperty(Zl, '__esModule', { value: !0 })
Zl.default = void 0
var rT = IC(Uc),
  aT = IC(es)
const oT = {
  lang: Object.assign(
    {
      placeholder: 'Sélectionner une date',
      yearPlaceholder: 'Sélectionner une année',
      quarterPlaceholder: 'Sélectionner un trimestre',
      monthPlaceholder: 'Sélectionner un mois',
      weekPlaceholder: 'Sélectionner une semaine',
      rangePlaceholder: ['Date de début', 'Date de fin'],
      rangeYearPlaceholder: ['Année de début', 'Année de fin'],
      rangeMonthPlaceholder: ['Mois de début', 'Mois de fin'],
      rangeWeekPlaceholder: ['Semaine de début', 'Semaine de fin'],
    },
    rT.default,
  ),
  timePickerLocale: Object.assign({}, aT.default),
}
Zl.default = oT
var iT = Qr.default
Object.defineProperty(Wc, '__esModule', { value: !0 })
Wc.default = void 0
var lT = iT(Zl)
Wc.default = lT.default
var Yc = Qr.default
Object.defineProperty(mm, '__esModule', { value: !0 })
var TC = (mm.default = void 0),
  sT = Yc(Bc),
  uT = Yc(Wc),
  cT = Yc(Zl),
  dT = Yc(es)
const Rn = "La valeur du champ ${label} n'est pas valide pour le type ${type}",
  fT = {
    locale: 'fr',
    Pagination: sT.default,
    DatePicker: cT.default,
    TimePicker: dT.default,
    Calendar: uT.default,
    Table: {
      filterTitle: 'Filtrer',
      filterConfirm: 'OK',
      filterReset: 'Réinitialiser',
      filterEmptyText: 'Aucun filtre',
      filterCheckall: 'Tout sélectionner',
      filterSearchPlaceholder: 'Chercher dans les filtres',
      emptyText: 'Aucune donnée',
      selectAll: 'Sélectionner la page actuelle',
      selectInvert: 'Inverser la sélection de la page actuelle',
      selectNone: 'Désélectionner toutes les données',
      selectionAll: 'Sélectionner toutes les données',
      sortTitle: 'Trier',
      expand: 'Développer la ligne',
      collapse: 'Réduire la ligne',
      triggerDesc: 'Trier par ordre décroissant',
      triggerAsc: 'Trier par ordre croissant',
      cancelSort: 'Annuler le tri',
    },
    Modal: { okText: 'OK', cancelText: 'Annuler', justOkText: 'OK' },
    Tour: {
      Next: 'Étape suivante',
      Previous: 'Étape précédente',
      Finish: 'Fin de la visite guidée',
    },
    Popconfirm: { okText: 'OK', cancelText: 'Annuler' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Rechercher',
      itemUnit: 'élément',
      itemsUnit: 'éléments',
      remove: 'Désélectionner',
      selectCurrent: 'Sélectionner la page actuelle',
      removeCurrent: 'Désélectionner la page actuelle',
      selectAll: 'Sélectionner toutes les données',
      removeAll: 'Désélectionner toutes les données',
      selectInvert: 'Inverser la sélection de la page actuelle',
    },
    Upload: {
      uploading: 'Téléchargement...',
      removeFile: 'Effacer le fichier',
      uploadError: 'Erreur de téléchargement',
      previewFile: 'Fichier de prévisualisation',
      downloadFile: 'Télécharger un fichier',
    },
    Empty: { description: 'Aucune donnée' },
    Icon: { icon: 'icône' },
    Text: {
      edit: 'Éditer',
      copy: 'Copier',
      copied: 'Copie effectuée',
      expand: 'Développer',
    },
    Form: {
      optional: '(optionnel)',
      defaultValidateMessages: {
        default: 'Erreur de validation pour le champ ${label}',
        required: 'Le champ ${label} est obligatoire',
        enum: 'La valeur du champ ${label} doit être parmi [${enum}]',
        whitespace: 'La valeur du champ ${label} ne peut pas être vide',
        date: {
          format: "La valeur du champ ${label} n'est pas au format date",
          parse:
            'La valeur du champ ${label} ne peut pas être convertie vers une date',
          invalid: "La valeur du champ ${label} n'est pas une date valide",
        },
        types: {
          string: Rn,
          method: Rn,
          array: Rn,
          object: Rn,
          number: Rn,
          date: Rn,
          boolean: Rn,
          integer: Rn,
          float: Rn,
          regexp: Rn,
          email: Rn,
          url: Rn,
          hex: Rn,
        },
        string: {
          len: 'La taille du champ ${label} doit être de ${len} caractères',
          min: 'La taille du champ ${label} doit être au minimum de ${min} caractères',
          max: 'La taille du champ ${label} doit être au maximum de ${max} caractères',
          range:
            'La taille du champ ${label} doit être entre ${min} et ${max} caractères',
        },
        number: {
          len: 'La valeur du champ ${label} doit être égale à ${len}',
          min: 'La valeur du champ ${label} doit être plus grande que ${min}',
          max: 'La valeur du champ ${label} doit être plus petit que ${max}',
          range: 'La valeur du champ ${label} doit être entre ${min} et ${max}',
        },
        array: {
          len: 'La taille du tableau ${label} doit être de ${len}',
          min: 'La taille du tableau ${label} doit être au minimum de ${min}',
          max: 'La taille du tableau ${label} doit être au maximum de ${max}',
          range: 'La taille du tableau ${label} doit être entre ${min}-${max}',
        },
        pattern: {
          mismatch:
            'La valeur du champ ${label} ne correspond pas au modèle ${pattern}',
        },
      },
    },
    Image: { preview: 'Aperçu' },
  }
TC = mm.default = fT
var gT = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(kr, function () {
    return {
      name: 'en',
      weekdays:
        'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      months:
        'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_',
        ),
      ordinal: function (n) {
        var r = ['th', 'st', 'nd', 'rd'],
          a = n % 100
        return '[' + n + (r[(a - 20) % 10] || r[a] || r[0]) + ']'
      },
    }
  })
})(gT)
var hT = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r(am)
  })(kr, function (n) {
    function r(i) {
      return i && typeof i == 'object' && 'default' in i ? i : { default: i }
    }
    var a = r(n),
      o = {
        name: 'fr',
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
          '_',
        ),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        months:
          'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
            '_',
          ),
        monthsShort:
          'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
            '_',
          ),
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans',
        },
        ordinal: function (i) {
          return '' + i + (i === 1 ? 'er' : '')
        },
      }
    return a.default.locale(o, null, !0), o
  })
})(hT)
var mT = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r(am)
  })(kr, function (n) {
    function r(i) {
      return i && typeof i == 'object' && 'default' in i ? i : { default: i }
    }
    var a = r(n),
      o = {
        name: 'zh-cn',
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        months:
          '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_',
          ),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
          '_',
        ),
        ordinal: function (i, l) {
          return l === 'W' ? i + '周' : i + '日'
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日Ah点mm分',
          LLLL: 'YYYY年M月D日ddddAh点mm分',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm',
        },
        relativeTime: {
          future: '%s内',
          past: '%s前',
          s: '几秒',
          m: '1 分钟',
          mm: '%d 分钟',
          h: '1 小时',
          hh: '%d 小时',
          d: '1 天',
          dd: '%d 天',
          M: '1 个月',
          MM: '%d 个月',
          y: '1 年',
          yy: '%d 年',
        },
        meridiem: function (i, l) {
          var s = 100 * i + l
          return s < 600
            ? '凌晨'
            : s < 900
              ? '早上'
              : s < 1100
                ? '上午'
                : s < 1300
                  ? '中午'
                  : s < 1800
                    ? '下午'
                    : '晚上'
        },
      }
    return a.default.locale(o, null, !0), o
  })
})(mT)
function vT() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n]
    typeof t[0] == 'string' && (t[0] = `react-i18next:: ${t[0]}`),
      console.warn(...t)
  }
}
const Gp = {}
function Fg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  ;(typeof t[0] == 'string' && Gp[t[0]]) ||
    (typeof t[0] == 'string' && (Gp[t[0]] = new Date()), vT(...t))
}
const FC = (e, t) => () => {
  if (e.isInitialized) t()
  else {
    const n = () => {
      setTimeout(() => {
        e.off('initialized', n)
      }, 0),
        t()
    }
    e.on('initialized', n)
  }
}
function Qp(e, t, n) {
  e.loadNamespaces(t, FC(e, n))
}
function Xp(e, t, n, r) {
  typeof n == 'string' && (n = [n]),
    n.forEach((a) => {
      e.options.ns.indexOf(a) < 0 && e.options.ns.push(a)
    }),
    e.loadLanguages(t, FC(e, r))
}
function pT(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
  const r = t.languages[0],
    a = t.options ? t.options.fallbackLng : !1,
    o = t.languages[t.languages.length - 1]
  if (r.toLowerCase() === 'cimode') return !0
  const i = (l, s) => {
    const u = t.services.backendConnector.state[`${l}|${s}`]
    return u === -1 || u === 2
  }
  return n.bindI18n &&
    n.bindI18n.indexOf('languageChanging') > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !i(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(r, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (i(r, e) && (!a || i(o, e)))
      )
}
function yT(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
  return !t.languages || !t.languages.length
    ? (Fg('i18n.languages were undefined or empty', t.languages), !0)
    : t.options.ignoreJSONStructure !== void 0
      ? t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (a, o) => {
            if (
              n.bindI18n &&
              n.bindI18n.indexOf('languageChanging') > -1 &&
              a.services.backendConnector.backend &&
              a.isLanguageChangingTo &&
              !o(a.isLanguageChangingTo, e)
            )
              return !1
          },
        })
      : pT(e, t, n)
}
const ST =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  bT = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  CT = (e) => bT[e],
  wT = (e) => e.replace(ST, CT)
let Ng = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: wT,
}
function xT() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  Ng = { ...Ng, ...e }
}
function ET() {
  return Ng
}
let NC
function $T(e) {
  NC = e
}
function PT() {
  return NC
}
const kT = {
    type: '3rdParty',
    init(e) {
      xT(e.options.react), $T(e)
    },
  },
  RT = g.createContext()
class MT {
  constructor() {
    this.usedNamespaces = {}
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
    })
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces)
  }
}
const OT = (e, t) => {
  const n = g.useRef()
  return (
    g.useEffect(() => {
      n.current = e
    }, [e, t]),
    n.current
  )
}
function DC(e, t, n, r) {
  return e.getFixedT(t, n, r)
}
function _T(e, t, n, r) {
  return g.useCallback(DC(e, t, n, r), [e, t, n, r])
}
function IT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { i18n: n } = t,
    { i18n: r, defaultNS: a } = g.useContext(RT) || {},
    o = n || r || PT()
  if ((o && !o.reportNamespaces && (o.reportNamespaces = new MT()), !o)) {
    Fg('You will need to pass in an i18next instance by using initReactI18next')
    const C = (E, x) =>
        typeof x == 'string'
          ? x
          : x && typeof x == 'object' && typeof x.defaultValue == 'string'
            ? x.defaultValue
            : Array.isArray(E)
              ? E[E.length - 1]
              : E,
      w = [C, {}, !1]
    return (w.t = C), (w.i18n = {}), (w.ready = !1), w
  }
  o.options.react &&
    o.options.react.wait !== void 0 &&
    Fg(
      'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
    )
  const i = { ...ET(), ...o.options.react, ...t },
    { useSuspense: l, keyPrefix: s } = i
  let u = a || (o.options && o.options.defaultNS)
  ;(u = typeof u == 'string' ? [u] : u || ['translation']),
    o.reportNamespaces.addUsedNamespaces &&
      o.reportNamespaces.addUsedNamespaces(u)
  const c =
      (o.isInitialized || o.initializedStoreOnce) &&
      u.every((C) => yT(C, o, i)),
    d = _T(o, t.lng || null, i.nsMode === 'fallback' ? u : u[0], s),
    f = () => d,
    y = () => DC(o, t.lng || null, i.nsMode === 'fallback' ? u : u[0], s),
    [v, p] = g.useState(f)
  let b = u.join()
  t.lng && (b = `${t.lng}${b}`)
  const m = OT(b),
    h = g.useRef(!0)
  g.useEffect(() => {
    const { bindI18n: C, bindI18nStore: w } = i
    ;(h.current = !0),
      !c &&
        !l &&
        (t.lng
          ? Xp(o, t.lng, u, () => {
              h.current && p(y)
            })
          : Qp(o, u, () => {
              h.current && p(y)
            })),
      c && m && m !== b && h.current && p(y)
    function E() {
      h.current && p(y)
    }
    return (
      C && o && o.on(C, E),
      w && o && o.store.on(w, E),
      () => {
        ;(h.current = !1),
          C && o && C.split(' ').forEach((x) => o.off(x, E)),
          w && o && w.split(' ').forEach((x) => o.store.off(x, E))
      }
    )
  }, [o, b]),
    g.useEffect(() => {
      h.current && c && p(f)
    }, [o, s, c])
  const S = [v, o, c]
  if (((S.t = v), (S.i18n = o), (S.ready = c), c || (!c && !l))) return S
  throw new Promise((C) => {
    t.lng ? Xp(o, t.lng, u, () => C()) : Qp(o, u, () => C())
  })
}
function TT() {
  const { t: e, i18n: t } = IT(),
    [n, r] = g.useState(Tg)
  g.useEffect(() => {
    const o = (i) => {
      switch (i) {
        case 'fr':
          r(TC), zt.locale(i)
          break
        case 'en':
          r(Tg), zt.locale(i)
          break
        case 'cn':
        default:
          r(OC), zt.locale('zh-cn')
          break
      }
    }
    return (
      o(t.language),
      t.on('languageChanged', o),
      () => {
        t.off('languageChanged', o)
      }
    )
  }, [t])
  const a = g.useCallback((o) => {
    console.log(o.target.value), t.changeLanguage(o.target.value)
  }, [])
  return ia.jsxs(go, {
    locale: n,
    children: [
      ia.jsx('h1', { children: e('demo.Welcome to React') }),
      ia.jsx(yi, {}),
      ia.jsxs(Qo.Group, {
        value: t.language,
        onChange: a,
        children: [
          ia.jsx(Qo.Button, { value: 'en', children: 'English' }, 'en'),
          ia.jsx(Qo.Button, { value: 'cn', children: '中文' }, 'cn'),
        ],
      }),
    ],
  })
}
const FT = {
  type: 'logger',
  log(e) {
    this.output('log', e)
  },
  warn(e) {
    this.output('warn', e)
  },
  error(e) {
    this.output('error', e)
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t)
  },
}
class Vu {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(t, n)
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || FT),
      (this.options = n),
      (this.debug = n.debug)
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return this.forward(n, 'log', '', !0)
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return this.forward(n, 'warn', '', !0)
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return this.forward(n, 'error', '')
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0)
  }
  forward(t, n, r, a) {
    return a && !this.debug
      ? null
      : (typeof t[0] == 'string' && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t))
  }
  create(t) {
    return new Vu(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    })
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Vu(this.logger, t)
    )
  }
}
var Er = new Vu()
class qc {
  constructor() {
    this.observers = {}
  }
  on(t, n) {
    return (
      t.split(' ').forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map())
        const a = this.observers[r].get(n) || 0
        this.observers[r].set(n, a + 1)
      }),
      this
    )
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t]
        return
      }
      this.observers[t].delete(n)
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
      a < n;
      a++
    )
      r[a - 1] = arguments[a]
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((i) => {
        let [l, s] = i
        for (let u = 0; u < s; u++) l(...r)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((i) => {
          let [l, s] = i
          for (let u = 0; u < s; u++) l.apply(l, [t, ...r])
        })
  }
}
function Ni() {
  let e, t
  const n = new Promise((r, a) => {
    ;(e = r), (t = a)
  })
  return (n.resolve = e), (n.reject = t), n
}
function Jp(e) {
  return e == null ? '' : '' + e
}
function NT(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r])
  })
}
const DT = /###/g
function il(e, t, n) {
  function r(l) {
    return l && l.indexOf('###') > -1 ? l.replace(DT, '.') : l
  }
  function a() {
    return !e || typeof e == 'string'
  }
  const o = typeof t != 'string' ? t : t.split('.')
  let i = 0
  for (; i < o.length - 1; ) {
    if (a()) return {}
    const l = r(o[i])
    !e[l] && n && (e[l] = new n()),
      Object.prototype.hasOwnProperty.call(e, l) ? (e = e[l]) : (e = {}),
      ++i
  }
  return a() ? {} : { obj: e, k: r(o[i]) }
}
function Zp(e, t, n) {
  const { obj: r, k: a } = il(e, t, Object)
  if (r !== void 0 || t.length === 1) {
    r[a] = n
    return
  }
  let o = t[t.length - 1],
    i = t.slice(0, t.length - 1),
    l = il(e, i, Object)
  for (; l.obj === void 0 && i.length; )
    (o = `${i[i.length - 1]}.${o}`),
      (i = i.slice(0, i.length - 1)),
      (l = il(e, i, Object)),
      l && l.obj && typeof l.obj[`${l.k}.${o}`] < 'u' && (l.obj = void 0)
  l.obj[`${l.k}.${o}`] = n
}
function LT(e, t, n, r) {
  const { obj: a, k: o } = il(e, t, Object)
  ;(a[o] = a[o] || []), a[o].push(n)
}
function Bu(e, t) {
  const { obj: n, k: r } = il(e, t)
  if (n) return n[r]
}
function AT(e, t, n) {
  const r = Bu(e, n)
  return r !== void 0 ? r : Bu(t, n)
}
function LC(e, t, n) {
  for (const r in t)
    r !== '__proto__' &&
      r !== 'constructor' &&
      (r in e
        ? typeof e[r] == 'string' ||
          e[r] instanceof String ||
          typeof t[r] == 'string' ||
          t[r] instanceof String
          ? n && (e[r] = t[r])
          : LC(e[r], t[r], n)
        : (e[r] = t[r]))
  return e
}
function Eo(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
}
var jT = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
function zT(e) {
  return typeof e == 'string' ? e.replace(/[&<>"'\/]/g, (t) => jT[t]) : e
}
class HT {
  constructor(t) {
    ;(this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = [])
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t)
    if (n !== void 0) return n
    const r = new RegExp(t)
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    )
  }
}
const VT = [' ', ',', '?', '!', ';'],
  BT = new HT(20)
function WT(e, t, n) {
  ;(t = t || ''), (n = n || '')
  const r = VT.filter((i) => t.indexOf(i) < 0 && n.indexOf(i) < 0)
  if (r.length === 0) return !0
  const a = BT.getRegExp(`(${r.map((i) => (i === '?' ? '\\?' : i)).join('|')})`)
  let o = !a.test(e)
  if (!o) {
    const i = e.indexOf(n)
    i > 0 && !a.test(e.substring(0, i)) && (o = !0)
  }
  return o
}
function Dg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
  if (!e) return
  if (e[t]) return e[t]
  const r = t.split(n)
  let a = e
  for (let o = 0; o < r.length; ) {
    if (!a || typeof a != 'object') return
    let i,
      l = ''
    for (let s = o; s < r.length; ++s)
      if ((s !== o && (l += n), (l += r[s]), (i = a[l]), i !== void 0)) {
        if (
          ['string', 'number', 'boolean'].indexOf(typeof i) > -1 &&
          s < r.length - 1
        )
          continue
        o += s - o + 1
        break
      }
    a = i
  }
  return a
}
function Wu(e) {
  return e && e.indexOf('_') > 0 ? e.replace('_', '-') : e
}
class e0 extends qc {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' }
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0)
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t)
    n > -1 && this.options.ns.splice(n, 1)
  }
  getResource(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const o =
        a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      i =
        a.ignoreJSONStructure !== void 0
          ? a.ignoreJSONStructure
          : this.options.ignoreJSONStructure
    let l
    t.indexOf('.') > -1
      ? (l = t.split('.'))
      : ((l = [t, n]),
        r &&
          (Array.isArray(r)
            ? l.push(...r)
            : typeof r == 'string' && o
              ? l.push(...r.split(o))
              : l.push(r)))
    const s = Bu(this.data, l)
    return (
      !s &&
        !n &&
        !r &&
        t.indexOf('.') > -1 &&
        ((t = l[0]), (n = l[1]), (r = l.slice(2).join('.'))),
      s || !i || typeof r != 'string'
        ? s
        : Dg(this.data && this.data[t] && this.data[t][n], r, o)
    )
  }
  addResource(t, n, r, a) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 }
    const i =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
    let l = [t, n]
    r && (l = l.concat(i ? r.split(i) : r)),
      t.indexOf('.') > -1 && ((l = t.split('.')), (a = n), (n = l[1])),
      this.addNamespaces(n),
      Zp(this.data, l, a),
      o.silent || this.emit('added', t, n, r, a)
  }
  addResources(t, n, r) {
    let a =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 }
    for (const o in r)
      (typeof r[o] == 'string' || Array.isArray(r[o])) &&
        this.addResource(t, n, o, r[o], { silent: !0 })
    a.silent || this.emit('added', t, n, r)
  }
  addResourceBundle(t, n, r, a, o) {
    let i =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      l = [t, n]
    t.indexOf('.') > -1 && ((l = t.split('.')), (a = r), (r = n), (n = l[1])),
      this.addNamespaces(n)
    let s = Bu(this.data, l) || {}
    i.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      a ? LC(s, r, o) : (s = { ...s, ...r }),
      Zp(this.data, l, s),
      i.silent || this.emit('added', t, n, r)
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit('removed', t, n)
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    )
  }
  getDataByLanguage(t) {
    return this.data[t]
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t)
    return !!((n && Object.keys(n)) || []).find(
      (a) => n[a] && Object.keys(n[a]).length > 0,
    )
  }
  toJSON() {
    return this.data
  }
}
var AC = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e
  },
  handle(e, t, n, r, a) {
    return (
      e.forEach((o) => {
        this.processors[o] && (t = this.processors[o].process(t, n, r, a))
      }),
      t
    )
  },
}
const t0 = {}
class Uu extends qc {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      NT(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this,
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Er.create('translator'))
  }
  changeLanguage(t) {
    t && (this.language = t)
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    if (t == null) return !1
    const r = this.resolve(t, n)
    return r && r.res !== void 0
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator
    r === void 0 && (r = ':')
    const a =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
    let o = n.ns || this.options.defaultNS || []
    const i = r && t.indexOf(r) > -1,
      l =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !WT(t, r, a)
    if (i && !l) {
      const s = t.match(this.interpolator.nestingRegexp)
      if (s && s.length > 0) return { key: t, namespaces: o }
      const u = t.split(r)
      ;(r !== a || (r === a && this.options.ns.indexOf(u[0]) > -1)) &&
        (o = u.shift()),
        (t = u.join(a))
    }
    return typeof o == 'string' && (o = [o]), { key: t, namespaces: o }
  }
  translate(t, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return ''
    Array.isArray(t) || (t = [String(t)])
    const a =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      o =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: i, namespaces: l } = this.extractFromKey(t[t.length - 1], n),
      s = l[l.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if (u && u.toLowerCase() === 'cimode') {
      if (c) {
        const C = n.nsSeparator || this.options.nsSeparator
        return a
          ? {
              res: `${s}${C}${i}`,
              usedKey: i,
              exactUsedKey: i,
              usedLng: u,
              usedNS: s,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${s}${C}${i}`
      }
      return a
        ? {
            res: i,
            usedKey: i,
            exactUsedKey: i,
            usedLng: u,
            usedNS: s,
            usedParams: this.getUsedParamsDetails(n),
          }
        : i
    }
    const d = this.resolve(t, n)
    let f = d && d.res
    const y = (d && d.usedKey) || i,
      v = (d && d.exactUsedKey) || i,
      p = Object.prototype.toString.apply(f),
      b = ['[object Number]', '[object Function]', '[object RegExp]'],
      m = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      h = !this.i18nFormat || this.i18nFormat.handleAsObject
    if (
      h &&
      f &&
      typeof f != 'string' &&
      typeof f != 'boolean' &&
      typeof f != 'number' &&
      b.indexOf(p) < 0 &&
      !(typeof m == 'string' && Array.isArray(f))
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!',
          )
        const C = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(y, f, { ...n, ns: l })
          : `key '${i} (${this.language})' returned an object instead of string.`
        return a
          ? ((d.res = C), (d.usedParams = this.getUsedParamsDetails(n)), d)
          : C
      }
      if (o) {
        const C = Array.isArray(f),
          w = C ? [] : {},
          E = C ? v : y
        for (const x in f)
          if (Object.prototype.hasOwnProperty.call(f, x)) {
            const R = `${E}${o}${x}`
            ;(w[x] = this.translate(R, { ...n, joinArrays: !1, ns: l })),
              w[x] === R && (w[x] = f[x])
          }
        f = w
      }
    } else if (h && typeof m == 'string' && Array.isArray(f))
      (f = f.join(m)), f && (f = this.extendTranslation(f, t, n, r))
    else {
      let C = !1,
        w = !1
      const E = n.count !== void 0 && typeof n.count != 'string',
        x = Uu.hasDefaultValue(n),
        R = E ? this.pluralResolver.getSuffix(u, n.count, n) : '',
        F =
          n.ordinal && E
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : '',
        _ =
          E &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        T =
          (_ && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${R}`] ||
          n[`defaultValue${F}`] ||
          n.defaultValue
      !this.isValidLookup(f) && x && ((C = !0), (f = T)),
        this.isValidLookup(f) || ((w = !0), (f = i))
      const A =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          w
            ? void 0
            : f,
        I = x && T !== f && this.options.updateMissing
      if (w || C || I) {
        if (
          (this.logger.log(I ? 'updateKey' : 'missingKey', u, s, i, I ? T : f),
          o)
        ) {
          const $ = this.resolve(i, { ...n, keySeparator: !1 })
          $ &&
            $.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            )
        }
        let N = []
        const P = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language,
        )
        if (this.options.saveMissingTo === 'fallback' && P && P[0])
          for (let $ = 0; $ < P.length; $++) N.push(P[$])
        else
          this.options.saveMissingTo === 'all'
            ? (N = this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
              ))
            : N.push(n.lng || this.language)
        const k = ($, M, O) => {
          const D = x && O !== f ? O : A
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler($, s, M, D, I, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing($, s, M, D, I, n),
            this.emit('missingKey', $, s, M, f)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && E
            ? N.forEach(($) => {
                const M = this.pluralResolver.getSuffixes($, n)
                _ &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  M.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  M.push(`${this.options.pluralSeparator}zero`),
                  M.forEach((O) => {
                    k([$], i + O, n[`defaultValue${O}`] || T)
                  })
              })
            : k(N, i, T))
      }
      ;(f = this.extendTranslation(f, t, n, d, r)),
        w &&
          f === i &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${s}:${i}`),
        (w || C) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (f = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${s}:${i}` : i,
                C ? f : void 0,
              ))
            : (f = this.options.parseMissingKeyHandler(f)))
    }
    return a
      ? ((d.res = f), (d.usedParams = this.getUsedParamsDetails(n)), d)
      : f
  }
  extendTranslation(t, n, r, a, o) {
    var i = this
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || a.usedLng,
        a.usedNS,
        a.usedKey,
        { resolved: a },
      )
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        })
      const u =
        typeof t == 'string' &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let c
      if (u) {
        const f = t.match(this.interpolator.nestingRegexp)
        c = f && f.length
      }
      let d = r.replace && typeof r.replace != 'string' ? r.replace : r
      if (
        (this.options.interpolation.defaultVariables &&
          (d = { ...this.options.interpolation.defaultVariables, ...d }),
        (t = this.interpolator.interpolate(t, d, r.lng || this.language, r)),
        u)
      ) {
        const f = t.match(this.interpolator.nestingRegexp),
          y = f && f.length
        c < y && (r.nest = !1)
      }
      !r.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        a &&
        a.res &&
        (r.lng = a.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var f = arguments.length, y = new Array(f), v = 0;
                v < f;
                v++
              )
                y[v] = arguments[v]
              return o && o[0] === y[0] && !r.context
                ? (i.logger.warn(
                    `It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`,
                  ),
                  null)
                : i.translate(...y, n)
            },
            r,
          )),
        r.interpolation && this.interpolator.reset()
    }
    const l = r.postProcess || this.options.postProcess,
      s = typeof l == 'string' ? [l] : l
    return (
      t != null &&
        s &&
        s.length &&
        r.applyPostProcessor !== !1 &&
        (t = AC.handle(
          s,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...a,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this,
        )),
      t
    )
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      a,
      o,
      i,
      l
    return (
      typeof t == 'string' && (t = [t]),
      t.forEach((s) => {
        if (this.isValidLookup(r)) return
        const u = this.extractFromKey(s, n),
          c = u.key
        a = c
        let d = u.namespaces
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS))
        const f = n.count !== void 0 && typeof n.count != 'string',
          y =
            f &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          v =
            n.context !== void 0 &&
            (typeof n.context == 'string' || typeof n.context == 'number') &&
            n.context !== '',
          p = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng,
              )
        d.forEach((b) => {
          this.isValidLookup(r) ||
            ((l = b),
            !t0[`${p[0]}-${b}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(l) &&
              ((t0[`${p[0]}-${b}`] = !0),
              this.logger.warn(
                `key "${a}" for languages "${p.join(', ')}" won't get resolved as namespace "${l}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            p.forEach((m) => {
              if (this.isValidLookup(r)) return
              i = m
              const h = [c]
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(h, c, m, b, n)
              else {
                let C
                f && (C = this.pluralResolver.getSuffix(m, n.count, n))
                const w = `${this.options.pluralSeparator}zero`,
                  E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (f &&
                    (h.push(c + C),
                    n.ordinal &&
                      C.indexOf(E) === 0 &&
                      h.push(c + C.replace(E, this.options.pluralSeparator)),
                    y && h.push(c + w)),
                  v)
                ) {
                  const x = `${c}${this.options.contextSeparator}${n.context}`
                  h.push(x),
                    f &&
                      (h.push(x + C),
                      n.ordinal &&
                        C.indexOf(E) === 0 &&
                        h.push(x + C.replace(E, this.options.pluralSeparator)),
                      y && h.push(x + w))
                }
              }
              let S
              for (; (S = h.pop()); )
                this.isValidLookup(r) ||
                  ((o = S), (r = this.getResource(m, b, S, n)))
            }))
        })
      }),
      { res: r, usedKey: a, exactUsedKey: o, usedLng: i, usedNS: l }
    )
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    )
  }
  getResource(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, a)
      : this.resourceStore.getResource(t, n, r, a)
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const n = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      r = t.replace && typeof t.replace != 'string'
    let a = r ? t.replace : t
    if (
      (r && typeof t.count < 'u' && (a.count = t.count),
      this.options.interpolation.defaultVariables &&
        (a = { ...this.options.interpolation.defaultVariables, ...a }),
      !r)
    ) {
      a = { ...a }
      for (const o of n) delete a[o]
    }
    return a
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue'
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0
    return !1
  }
}
function Qd(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
class n0 {
  constructor(t) {
    ;(this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Er.create('languageUtils'))
  }
  getScriptPartFromCode(t) {
    if (((t = Wu(t)), !t || t.indexOf('-') < 0)) return null
    const n = t.split('-')
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'))
  }
  getLanguagePartFromCode(t) {
    if (((t = Wu(t)), !t || t.indexOf('-') < 0)) return t
    const n = t.split('-')
    return this.formatLanguageCode(n[0])
  }
  formatLanguageCode(t) {
    if (typeof t == 'string' && t.indexOf('-') > -1) {
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab']
      let r = t.split('-')
      return (
        this.options.lowerCaseLng
          ? (r = r.map((a) => a.toLowerCase()))
          : r.length === 2
            ? ((r[0] = r[0].toLowerCase()),
              (r[1] = r[1].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = Qd(r[1].toLowerCase())))
            : r.length === 3 &&
              ((r[0] = r[0].toLowerCase()),
              r[1].length === 2 && (r[1] = r[1].toUpperCase()),
              r[0] !== 'sgn' &&
                r[2].length === 2 &&
                (r[2] = r[2].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = Qd(r[1].toLowerCase())),
              n.indexOf(r[2].toLowerCase()) > -1 &&
                (r[2] = Qd(r[2].toLowerCase()))),
        r.join('-')
      )
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    )
  }
  getBestMatchFromCodes(t) {
    if (!t) return null
    let n
    return (
      t.forEach((r) => {
        if (n) return
        const a = this.formatLanguageCode(r)
        ;(!this.options.supportedLngs || this.isSupportedCode(a)) && (n = a)
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return
          const a = this.getLanguagePartFromCode(r)
          if (this.isSupportedCode(a)) return (n = a)
          n = this.options.supportedLngs.find((o) => {
            if (o === a) return o
            if (
              !(o.indexOf('-') < 0 && a.indexOf('-') < 0) &&
              ((o.indexOf('-') > 0 &&
                a.indexOf('-') < 0 &&
                o.substring(0, o.indexOf('-')) === a) ||
                (o.indexOf(a) === 0 && a.length > 1))
            )
              return o
          })
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    )
  }
  getFallbackCodes(t, n) {
    if (!t) return []
    if (
      (typeof t == 'function' && (t = t(n)),
      typeof t == 'string' && (t = [t]),
      Array.isArray(t))
    )
      return t
    if (!n) return t.default || []
    let r = t[n]
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    )
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      a = [],
      o = (i) => {
        i &&
          (this.isSupportedCode(i)
            ? a.push(i)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${i}`,
              ))
      }
    return (
      typeof t == 'string' && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            o(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            o(this.getLanguagePartFromCode(t)))
        : typeof t == 'string' && o(this.formatLanguageCode(t)),
      r.forEach((i) => {
        a.indexOf(i) < 0 && o(this.formatLanguageCode(i))
      }),
      a
    )
  }
}
let UT = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  YT = {
    1: function (e) {
      return +(e > 1)
    },
    2: function (e) {
      return +(e != 1)
    },
    3: function (e) {
      return 0
    },
    4: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2
    },
    5: function (e) {
      return e == 0
        ? 0
        : e == 1
          ? 1
          : e == 2
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
                ? 4
                : 5
    },
    6: function (e) {
      return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
    },
    7: function (e) {
      return e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2
    },
    8: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3
    },
    9: function (e) {
      return +(e >= 2)
    },
    10: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
    },
    11: function (e) {
      return e == 1 || e == 11
        ? 0
        : e == 2 || e == 12
          ? 1
          : e > 2 && e < 20
            ? 2
            : 3
    },
    12: function (e) {
      return +(e % 10 != 1 || e % 100 == 11)
    },
    13: function (e) {
      return +(e !== 0)
    },
    14: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3
    },
    15: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2
    },
    16: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2
    },
    17: function (e) {
      return e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1
    },
    18: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : 2
    },
    19: function (e) {
      return e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3
    },
    20: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
    },
    21: function (e) {
      return e % 100 == 1
        ? 1
        : e % 100 == 2
          ? 2
          : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0
    },
    22: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
    },
  }
const qT = ['v1', 'v2', 'v3'],
  KT = ['v4'],
  r0 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }
function GT() {
  const e = {}
  return (
    UT.forEach((t) => {
      t.lngs.forEach((n) => {
        e[n] = { numbers: t.nr, plurals: YT[t.fc] }
      })
    }),
    e
  )
}
class QT {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = t),
      (this.options = n),
      (this.logger = Er.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        KT.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
        )),
      (this.rules = GT())
  }
  addRule(t, n) {
    this.rules[t] = n
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Wu(t === 'dev' ? 'en' : t), {
          type: n.ordinal ? 'ordinal' : 'cardinal',
        })
      } catch {
        return
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    )
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const r = this.getRule(t, n)
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return this.getSuffixes(t, r).map((a) => `${n}${a}`)
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const r = this.getRule(t, n)
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((a, o) => r0[a] - r0[o])
            .map(
              (a) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${a}`,
            )
        : r.numbers.map((a) => this.getSuffix(t, a, n))
      : []
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const a = this.getRule(t, r)
    return a
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${a.select(n)}`
        : this.getSuffixRetroCompatible(a, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '')
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n))
    let a = t.numbers[r]
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (a === 2 ? (a = 'plural') : a === 1 && (a = ''))
    const o = () =>
      this.options.prepend && a.toString()
        ? this.options.prepend + a.toString()
        : a.toString()
    return this.options.compatibilityJSON === 'v1'
      ? a === 1
        ? ''
        : typeof a == 'number'
          ? `_plural_${a.toString()}`
          : o()
      : this.options.compatibilityJSON === 'v2' ||
          (this.options.simplifyPluralSuffix &&
            t.numbers.length === 2 &&
            t.numbers[0] === 1)
        ? o()
        : this.options.prepend && r.toString()
          ? this.options.prepend + r.toString()
          : r.toString()
  }
  shouldUseIntlApi() {
    return !qT.includes(this.options.compatibilityJSON)
  }
}
function a0(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
    a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    o = AT(e, t, n)
  return (
    !o &&
      a &&
      typeof n == 'string' &&
      ((o = Dg(e, n, r)), o === void 0 && (o = Dg(t, n, r))),
    o
  )
}
class XT {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Er.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t)
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    t.interpolation || (t.interpolation = { escapeValue: !0 })
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: a,
      prefix: o,
      prefixEscaped: i,
      suffix: l,
      suffixEscaped: s,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: y,
      nestingSuffix: v,
      nestingSuffixEscaped: p,
      nestingOptionsSeparator: b,
      maxReplaces: m,
      alwaysFormat: h,
    } = t.interpolation
    ;(this.escape = n !== void 0 ? n : zT),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = a !== void 0 ? a : !1),
      (this.prefix = o ? Eo(o) : i || '{{'),
      (this.suffix = l ? Eo(l) : s || '}}'),
      (this.formatSeparator = u || ','),
      (this.unescapePrefix = c ? '' : d || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : c || ''),
      (this.nestingPrefix = f ? Eo(f) : y || Eo('$t(')),
      (this.nestingSuffix = v ? Eo(v) : p || Eo(')')),
      (this.nestingOptionsSeparator = b || ','),
      (this.maxReplaces = m || 1e3),
      (this.alwaysFormat = h !== void 0 ? h : !1),
      this.resetRegExp()
  }
  reset() {
    this.options && this.init(this.options)
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, 'g')
    ;(this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      ))
  }
  interpolate(t, n, r, a) {
    let o, i, l
    const s =
      (this.options &&
        this.options.interpolation &&
        this.options.interpolation.defaultVariables) ||
      {}
    function u(v) {
      return v.replace(/\$/g, '$$$$')
    }
    const c = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const h = a0(
          n,
          s,
          v,
          this.options.keySeparator,
          this.options.ignoreJSONStructure,
        )
        return this.alwaysFormat
          ? this.format(h, void 0, r, { ...a, ...n, interpolationkey: v })
          : h
      }
      const p = v.split(this.formatSeparator),
        b = p.shift().trim(),
        m = p.join(this.formatSeparator).trim()
      return this.format(
        a0(
          n,
          s,
          b,
          this.options.keySeparator,
          this.options.ignoreJSONStructure,
        ),
        m,
        r,
        { ...a, ...n, interpolationkey: b },
      )
    }
    this.resetRegExp()
    const d =
        (a && a.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        a && a.interpolation && a.interpolation.skipOnVariables !== void 0
          ? a.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables
    return (
      [
        { regex: this.regexpUnescape, safeValue: (v) => u(v) },
        {
          regex: this.regexp,
          safeValue: (v) => (this.escapeValue ? u(this.escape(v)) : u(v)),
        },
      ].forEach((v) => {
        for (l = 0; (o = v.regex.exec(t)); ) {
          const p = o[1].trim()
          if (((i = c(p)), i === void 0))
            if (typeof d == 'function') {
              const m = d(t, o, a)
              i = typeof m == 'string' ? m : ''
            } else if (a && Object.prototype.hasOwnProperty.call(a, p)) i = ''
            else if (f) {
              i = o[0]
              continue
            } else
              this.logger.warn(
                `missed to pass in variable ${p} for interpolating ${t}`,
              ),
                (i = '')
          else typeof i != 'string' && !this.useRawValueToEscape && (i = Jp(i))
          const b = v.safeValue(i)
          if (
            ((t = t.replace(o[0], b)),
            f
              ? ((v.regex.lastIndex += i.length),
                (v.regex.lastIndex -= o[0].length))
              : (v.regex.lastIndex = 0),
            l++,
            l >= this.maxReplaces)
          )
            break
        }
      }),
      t
    )
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a,
      o,
      i
    function l(s, u) {
      const c = this.nestingOptionsSeparator
      if (s.indexOf(c) < 0) return s
      const d = s.split(new RegExp(`${c}[ ]*{`))
      let f = `{${d[1]}`
      ;(s = d[0]), (f = this.interpolate(f, i))
      const y = f.match(/'/g),
        v = f.match(/"/g)
      ;((y && y.length % 2 === 0 && !v) || v.length % 2 !== 0) &&
        (f = f.replace(/'/g, '"'))
      try {
        ;(i = JSON.parse(f)), u && (i = { ...u, ...i })
      } catch (p) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${s}`,
            p,
          ),
          `${s}${c}${f}`
        )
      }
      return (
        i.defaultValue &&
          i.defaultValue.indexOf(this.prefix) > -1 &&
          delete i.defaultValue,
        s
      )
    }
    for (; (a = this.nestingRegexp.exec(t)); ) {
      let s = []
      ;(i = { ...r }),
        (i = i.replace && typeof i.replace != 'string' ? i.replace : i),
        (i.applyPostProcessor = !1),
        delete i.defaultValue
      let u = !1
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const c = a[1].split(this.formatSeparator).map((d) => d.trim())
        ;(a[1] = c.shift()), (s = c), (u = !0)
      }
      if (
        ((o = n(l.call(this, a[1].trim(), i), i)),
        o && a[0] === t && typeof o != 'string')
      )
        return o
      typeof o != 'string' && (o = Jp(o)),
        o ||
          (this.logger.warn(`missed to resolve ${a[1]} for nesting ${t}`),
          (o = '')),
        u &&
          (o = s.reduce(
            (c, d) =>
              this.format(c, d, r.lng, { ...r, interpolationkey: a[1].trim() }),
            o.trim(),
          )),
        (t = t.replace(a[0], o)),
        (this.regexp.lastIndex = 0)
    }
    return t
  }
}
function JT(e) {
  let t = e.toLowerCase().trim()
  const n = {}
  if (e.indexOf('(') > -1) {
    const r = e.split('(')
    t = r[0].toLowerCase().trim()
    const a = r[1].substring(0, r[1].length - 1)
    t === 'currency' && a.indexOf(':') < 0
      ? n.currency || (n.currency = a.trim())
      : t === 'relativetime' && a.indexOf(':') < 0
        ? n.range || (n.range = a.trim())
        : a.split(';').forEach((i) => {
            if (i) {
              const [l, ...s] = i.split(':'),
                u = s
                  .join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                c = l.trim()
              n[c] || (n[c] = u),
                u === 'false' && (n[c] = !1),
                u === 'true' && (n[c] = !0),
                isNaN(u) || (n[c] = parseInt(u, 10))
            }
          })
  }
  return { formatName: t, formatOptions: n }
}
function $o(e) {
  const t = {}
  return function (r, a, o) {
    const i = a + JSON.stringify(o)
    let l = t[i]
    return l || ((l = e(Wu(a), o)), (t[i] = l)), l(r)
  }
}
class ZT {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Er.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: $o((n, r) => {
          const a = new Intl.NumberFormat(n, { ...r })
          return (o) => a.format(o)
        }),
        currency: $o((n, r) => {
          const a = new Intl.NumberFormat(n, { ...r, style: 'currency' })
          return (o) => a.format(o)
        }),
        datetime: $o((n, r) => {
          const a = new Intl.DateTimeFormat(n, { ...r })
          return (o) => a.format(o)
        }),
        relativetime: $o((n, r) => {
          const a = new Intl.RelativeTimeFormat(n, { ...r })
          return (o) => a.format(o, r.range || 'day')
        }),
        list: $o((n, r) => {
          const a = new Intl.ListFormat(n, { ...r })
          return (o) => a.format(o)
        }),
      }),
      this.init(t)
  }
  init(t) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ','
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = $o(n)
  }
  format(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return n.split(this.formatSeparator).reduce((l, s) => {
      const { formatName: u, formatOptions: c } = JT(s)
      if (this.formats[u]) {
        let d = l
        try {
          const f =
              (a && a.formatParams && a.formatParams[a.interpolationkey]) || {},
            y = f.locale || f.lng || a.locale || a.lng || r
          d = this.formats[u](l, y, { ...c, ...a, ...f })
        } catch (f) {
          this.logger.warn(f)
        }
        return d
      } else this.logger.warn(`there was no format function for ${u}`)
      return l
    }, t)
  }
}
function eF(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class tF extends qc {
  constructor(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = a),
      (this.logger = Er.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = a.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
      (this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, a.backend, a)
  }
  queueLoad(t, n, r, a) {
    const o = {},
      i = {},
      l = {},
      s = {}
    return (
      t.forEach((u) => {
        let c = !0
        n.forEach((d) => {
          const f = `${u}|${d}`
          !r.reload && this.store.hasResourceBundle(u, d)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? i[f] === void 0 && (i[f] = !0)
                : ((this.state[f] = 1),
                  (c = !1),
                  i[f] === void 0 && (i[f] = !0),
                  o[f] === void 0 && (o[f] = !0),
                  s[d] === void 0 && (s[d] = !0)))
        }),
          c || (l[u] = !0)
      }),
      (Object.keys(o).length || Object.keys(i).length) &&
        this.queue.push({
          pending: i,
          pendingCount: Object.keys(i).length,
          loaded: {},
          errors: [],
          callback: a,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(i),
        toLoadLanguages: Object.keys(l),
        toLoadNamespaces: Object.keys(s),
      }
    )
  }
  loaded(t, n, r) {
    const a = t.split('|'),
      o = a[0],
      i = a[1]
    n && this.emit('failedLoading', o, i, n),
      r &&
        this.store.addResourceBundle(o, i, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2)
    const l = {}
    this.queue.forEach((s) => {
      LT(s.loaded, [o], i),
        eF(s, t),
        n && s.errors.push(n),
        s.pendingCount === 0 &&
          !s.done &&
          (Object.keys(s.loaded).forEach((u) => {
            l[u] || (l[u] = {})
            const c = s.loaded[u]
            c.length &&
              c.forEach((d) => {
                l[u][d] === void 0 && (l[u][d] = !0)
              })
          }),
          (s.done = !0),
          s.errors.length ? s.callback(s.errors) : s.callback())
    }),
      this.emit('loaded', l),
      (this.queue = this.queue.filter((s) => !s.done))
  }
  read(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      i = arguments.length > 5 ? arguments[5] : void 0
    if (!t.length) return i(null, {})
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: a,
        wait: o,
        callback: i,
      })
      return
    }
    this.readingCalls++
    const l = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift()
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback)
        }
        if (u && c && a < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, a + 1, o * 2, i)
          }, o)
          return
        }
        i(u, c)
      },
      s = this.backend[r].bind(this.backend)
    if (s.length === 2) {
      try {
        const u = s(t, n)
        u && typeof u.then == 'function'
          ? u.then((c) => l(null, c)).catch(l)
          : l(null, u)
      } catch (u) {
        l(u)
      }
      return
    }
    return s(t, n, l)
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a = arguments.length > 3 ? arguments[3] : void 0
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.',
        ),
        a && a()
      )
    typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof n == 'string' && (n = [n])
    const o = this.queueLoad(t, n, r, a)
    if (!o.toLoad.length) return o.pending.length || a(), null
    o.toLoad.forEach((i) => {
      this.loadOne(i)
    })
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r)
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r)
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    const r = t.split('|'),
      a = r[0],
      o = r[1]
    this.read(a, o, 'read', void 0, void 0, (i, l) => {
      i &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${a} failed`,
          i,
        ),
        !i &&
          l &&
          this.logger.log(`${n}loaded namespace ${o} for language ${a}`, l),
        this.loaded(t, i, l)
    })
  }
  saveMissing(t, n, r, a, o) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      l =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {}
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      )
      return
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const s = { ...i, isUpdate: o },
          u = this.backend.create.bind(this.backend)
        if (u.length < 6)
          try {
            let c
            u.length === 5 ? (c = u(t, n, r, a, s)) : (c = u(t, n, r, a)),
              c && typeof c.then == 'function'
                ? c.then((d) => l(null, d)).catch(l)
                : l(null, c)
          } catch (c) {
            l(c)
          }
        else u(t, n, r, a, l, s)
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, a)
    }
  }
}
function o0() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (t) {
      let n = {}
      if (
        (typeof t[1] == 'object' && (n = t[1]),
        typeof t[1] == 'string' && (n.defaultValue = t[1]),
        typeof t[2] == 'string' && (n.tDescription = t[2]),
        typeof t[2] == 'object' || typeof t[3] == 'object')
      ) {
        const r = t[3] || t[2]
        Object.keys(r).forEach((a) => {
          n[a] = r[a]
        })
      }
      return n
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }
}
function i0(e) {
  return (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  )
}
function As() {}
function nF(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == 'function' && (e[n] = e[n].bind(e))
  })
}
class Tl extends qc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = i0(t)),
      (this.services = {}),
      (this.logger = Er),
      (this.modules = { external: [] }),
      nF(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this
      setTimeout(() => {
        this.init(t, n)
      }, 0)
    }
  }
  init() {
    var t = this
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0
    ;(this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == 'string'
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]))
    const a = o0()
    ;(this.options = { ...a, ...this.options, ...i0(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...a.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator)
    function o(c) {
      return c ? (typeof c == 'function' ? new c() : c) : null
    }
    if (!this.options.isClone) {
      this.modules.logger
        ? Er.init(o(this.modules.logger), this.options)
        : Er.init(null, this.options)
      let c
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < 'u' && (c = ZT)
      const d = new n0(this.options)
      this.store = new e0(this.options.resources, this.options)
      const f = this.services
      ;(f.logger = Er),
        (f.resourceStore = this.store),
        (f.languageUtils = d),
        (f.pluralResolver = new QT(d, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === a.interpolation.format) &&
          ((f.formatter = o(c)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter,
          ))),
        (f.interpolator = new XT(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new tF(
          o(this.modules.backend),
          f.resourceStore,
          f,
          this.options,
        )),
        f.backendConnector.on('*', function (y) {
          for (
            var v = arguments.length, p = new Array(v > 1 ? v - 1 : 0), b = 1;
            b < v;
            b++
          )
            p[b - 1] = arguments[b]
          t.emit(y, ...p)
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = o(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = o(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new Uu(this.services, this.options)),
        this.translator.on('*', function (y) {
          for (
            var v = arguments.length, p = new Array(v > 1 ? v - 1 : 0), b = 1;
            b < v;
            b++
          )
            p[b - 1] = arguments[b]
          t.emit(y, ...p)
        }),
        this.modules.external.forEach((y) => {
          y.init && y.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = As),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      )
      c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0])
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined',
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments)
        }
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t
        }
      })
    const s = Ni(),
      u = () => {
        const c = (d, f) => {
          ;(this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!',
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            s.resolve(f),
            r(d, f)
        }
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this))
        this.changeLanguage(this.options.lng, c)
      }
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      s
    )
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : As
    const a = typeof t == 'string' ? t : this.language
    if (
      (typeof t == 'function' && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        a &&
        a.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r()
      const o = [],
        i = (l) => {
          if (!l || l === 'cimode') return
          this.services.languageUtils.toResolveHierarchy(l).forEach((u) => {
            u !== 'cimode' && o.indexOf(u) < 0 && o.push(u)
          })
        }
      a
        ? i(a)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((s) => i(s)),
        this.options.preload && this.options.preload.forEach((l) => i(l)),
        this.services.backendConnector.load(o, this.options.ns, (l) => {
          !l &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(l)
        })
    } else r(null)
  }
  reloadResources(t, n, r) {
    const a = Ni()
    return (
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = As),
      this.services.backendConnector.reload(t, n, (o) => {
        a.resolve(), r(o)
      }),
      a
    )
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
      )
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
      )
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && AC.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    )
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n]
        if (
          !(['cimode', 'dev'].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r
          break
        }
      }
  }
  changeLanguage(t, n) {
    var r = this
    this.isLanguageChangingTo = t
    const a = Ni()
    this.emit('languageChanging', t)
    const o = (s) => {
        ;(this.language = s),
          (this.languages = this.services.languageUtils.toResolveHierarchy(s)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(s)
      },
      i = (s, u) => {
        u
          ? (o(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', u),
            this.logger.log('languageChanged', u))
          : (this.isLanguageChangingTo = void 0),
          a.resolve(function () {
            return r.t(...arguments)
          }),
          n &&
            n(s, function () {
              return r.t(...arguments)
            })
      },
      l = (s) => {
        !t && !s && this.services.languageDetector && (s = [])
        const u =
          typeof s == 'string'
            ? s
            : this.services.languageUtils.getBestMatchFromCodes(s)
        u &&
          (this.language || o(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            i(c, u)
          })
      }
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? l(this.services.languageDetector.detect())
        : !t &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(l)
            : this.services.languageDetector.detect(l)
          : l(t),
      a
    )
  }
  getFixedT(t, n, r) {
    var a = this
    const o = function (i, l) {
      let s
      if (typeof l != 'object') {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2;
          d < u;
          d++
        )
          c[d - 2] = arguments[d]
        s = a.options.overloadTranslationOptionHandler([i, l].concat(c))
      } else s = { ...l }
      ;(s.lng = s.lng || o.lng),
        (s.lngs = s.lngs || o.lngs),
        (s.ns = s.ns || o.ns),
        (s.keyPrefix = s.keyPrefix || r || o.keyPrefix)
      const f = a.options.keySeparator || '.'
      let y
      return (
        s.keyPrefix && Array.isArray(i)
          ? (y = i.map((v) => `${s.keyPrefix}${f}${v}`))
          : (y = s.keyPrefix ? `${s.keyPrefix}${f}${i}` : i),
        a.t(y, s)
      )
    }
    return (
      typeof t == 'string' ? (o.lng = t) : (o.lngs = t),
      (o.ns = n),
      (o.keyPrefix = r),
      o
    )
  }
  t() {
    return this.translator && this.translator.translate(...arguments)
  }
  exists() {
    return this.translator && this.translator.exists(...arguments)
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages,
        ),
        !1
      )
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages,
        ),
        !1
      )
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      a = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1]
    if (r.toLowerCase() === 'cimode') return !0
    const i = (l, s) => {
      const u = this.services.backendConnector.state[`${l}|${s}`]
      return u === -1 || u === 2
    }
    if (n.precheck) {
      const l = n.precheck(this, i)
      if (l !== void 0) return l
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (i(r, t) && (!a || i(o, t)))
    )
  }
  loadNamespaces(t, n) {
    const r = Ni()
    return this.options.ns
      ? (typeof t == 'string' && (t = [t]),
        t.forEach((a) => {
          this.options.ns.indexOf(a) < 0 && this.options.ns.push(a)
        }),
        this.loadResources((a) => {
          r.resolve(), n && n(a)
        }),
        r)
      : (n && n(), Promise.resolve())
  }
  loadLanguages(t, n) {
    const r = Ni()
    typeof t == 'string' && (t = [t])
    const a = this.options.preload || [],
      o = t.filter(
        (i) =>
          a.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i),
      )
    return o.length
      ? ((this.options.preload = a.concat(o)),
        this.loadResources((i) => {
          r.resolve(), n && n(i)
        }),
        r)
      : (n && n(), Promise.resolve())
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return 'rtl'
    const n = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      r = (this.services && this.services.languageUtils) || new n0(o0())
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr'
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    return new Tl(t, n)
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : As
    const r = t.forkResourceStore
    r && delete t.forkResourceStore
    const a = { ...this.options, ...t, isClone: !0 },
      o = new Tl(a)
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (o.logger = o.logger.clone(t)),
      ['store', 'services', 'language'].forEach((l) => {
        o[l] = this[l]
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r &&
        ((o.store = new e0(this.store.data, a)),
        (o.services.resourceStore = o.store)),
      (o.translator = new Uu(o.services, a)),
      o.translator.on('*', function (l) {
        for (
          var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), c = 1;
          c < s;
          c++
        )
          u[c - 1] = arguments[c]
        o.emit(l, ...u)
      }),
      o.init(a, n),
      (o.translator.options = a),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    )
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    }
  }
}
const en = Tl.createInstance()
en.createInstance = Tl.createInstance
en.createInstance
en.dir
en.init
en.loadResources
en.reloadResources
en.use
en.changeLanguage
en.getFixedT
en.t
en.exists
en.setDefaultNamespace
en.hasLoadedNamespace
en.loadNamespaces
en.loadLanguages
const { slice: rF, forEach: aF } = []
function oF(e) {
  return (
    aF.call(rF.call(arguments, 1), (t) => {
      if (t) for (const n in t) e[n] === void 0 && (e[n] = t[n])
    }),
    e
  )
}
const l0 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  iF = (e, t, n) => {
    const r = n || {}
    r.path = r.path || '/'
    const a = encodeURIComponent(t)
    let o = `${e}=${a}`
    if (r.maxAge > 0) {
      const i = r.maxAge - 0
      if (Number.isNaN(i)) throw new Error('maxAge should be a Number')
      o += `; Max-Age=${Math.floor(i)}`
    }
    if (r.domain) {
      if (!l0.test(r.domain)) throw new TypeError('option domain is invalid')
      o += `; Domain=${r.domain}`
    }
    if (r.path) {
      if (!l0.test(r.path)) throw new TypeError('option path is invalid')
      o += `; Path=${r.path}`
    }
    if (r.expires) {
      if (typeof r.expires.toUTCString != 'function')
        throw new TypeError('option expires is invalid')
      o += `; Expires=${r.expires.toUTCString()}`
    }
    if (
      (r.httpOnly && (o += '; HttpOnly'),
      r.secure && (o += '; Secure'),
      r.sameSite)
    )
      switch (
        typeof r.sameSite == 'string' ? r.sameSite.toLowerCase() : r.sameSite
      ) {
        case !0:
          o += '; SameSite=Strict'
          break
        case 'lax':
          o += '; SameSite=Lax'
          break
        case 'strict':
          o += '; SameSite=Strict'
          break
        case 'none':
          o += '; SameSite=None'
          break
        default:
          throw new TypeError('option sameSite is invalid')
      }
    return o
  },
  s0 = {
    create(e, t, n, r) {
      let a =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' }
      n &&
        ((a.expires = new Date()),
        a.expires.setTime(a.expires.getTime() + n * 60 * 1e3)),
        r && (a.domain = r),
        (document.cookie = iF(e, encodeURIComponent(t), a))
    },
    read(e) {
      const t = `${e}=`,
        n = document.cookie.split(';')
      for (let r = 0; r < n.length; r++) {
        let a = n[r]
        for (; a.charAt(0) === ' '; ) a = a.substring(1, a.length)
        if (a.indexOf(t) === 0) return a.substring(t.length, a.length)
      }
      return null
    },
    remove(e) {
      this.create(e, '', -1)
    },
  }
var lF = {
    name: 'cookie',
    lookup(e) {
      let { lookupCookie: t } = e
      if (t && typeof document < 'u') return s0.read(t) || void 0
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: r,
        cookieDomain: a,
        cookieOptions: o,
      } = t
      n && typeof document < 'u' && s0.create(n, e, r, a, o)
    },
  },
  sF = {
    name: 'querystring',
    lookup(e) {
      var r
      let { lookupQuerystring: t } = e,
        n
      if (typeof window < 'u') {
        let { search: a } = window.location
        !window.location.search &&
          ((r = window.location.hash) == null ? void 0 : r.indexOf('?')) > -1 &&
          (a = window.location.hash.substring(
            window.location.hash.indexOf('?'),
          ))
        const i = a.substring(1).split('&')
        for (let l = 0; l < i.length; l++) {
          const s = i[l].indexOf('=')
          s > 0 && i[l].substring(0, s) === t && (n = i[l].substring(s + 1))
        }
      }
      return n
    },
  }
let Di = null
const u0 = () => {
  if (Di !== null) return Di
  try {
    Di = window !== 'undefined' && window.localStorage !== null
    const e = 'i18next.translate.boo'
    window.localStorage.setItem(e, 'foo'), window.localStorage.removeItem(e)
  } catch {
    Di = !1
  }
  return Di
}
var uF = {
  name: 'localStorage',
  lookup(e) {
    let { lookupLocalStorage: t } = e
    if (t && u0()) return window.localStorage.getItem(t) || void 0
  },
  cacheUserLanguage(e, t) {
    let { lookupLocalStorage: n } = t
    n && u0() && window.localStorage.setItem(n, e)
  },
}
let Li = null
const c0 = () => {
  if (Li !== null) return Li
  try {
    Li = window !== 'undefined' && window.sessionStorage !== null
    const e = 'i18next.translate.boo'
    window.sessionStorage.setItem(e, 'foo'), window.sessionStorage.removeItem(e)
  } catch {
    Li = !1
  }
  return Li
}
var cF = {
    name: 'sessionStorage',
    lookup(e) {
      let { lookupSessionStorage: t } = e
      if (t && c0()) return window.sessionStorage.getItem(t) || void 0
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: n } = t
      n && c0() && window.sessionStorage.setItem(n, e)
    },
  },
  dF = {
    name: 'navigator',
    lookup(e) {
      const t = []
      if (typeof navigator < 'u') {
        const { languages: n, userLanguage: r, language: a } = navigator
        if (n) for (let o = 0; o < n.length; o++) t.push(n[o])
        r && t.push(r), a && t.push(a)
      }
      return t.length > 0 ? t : void 0
    },
  },
  fF = {
    name: 'htmlTag',
    lookup(e) {
      let { htmlTag: t } = e,
        n
      const r = t || (typeof document < 'u' ? document.documentElement : null)
      return (
        r &&
          typeof r.getAttribute == 'function' &&
          (n = r.getAttribute('lang')),
        n
      )
    },
  },
  gF = {
    name: 'path',
    lookup(e) {
      var a
      let { lookupFromPathIndex: t } = e
      if (typeof window > 'u') return
      const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g)
      return Array.isArray(n)
        ? (a = n[typeof t == 'number' ? t : 0]) == null
          ? void 0
          : a.replace('/', '')
        : void 0
    },
  },
  hF = {
    name: 'subdomain',
    lookup(e) {
      var a, o
      let { lookupFromSubdomainIndex: t } = e
      const n = typeof t == 'number' ? t + 1 : 1,
        r =
          typeof window < 'u' &&
          ((o = (a = window.location) == null ? void 0 : a.hostname) == null
            ? void 0
            : o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i))
      if (r) return r[n]
    },
  }
function mF() {
  return {
    order: [
      'querystring',
      'cookie',
      'localStorage',
      'sessionStorage',
      'navigator',
      'htmlTag',
    ],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
    convertDetectedLanguage: (e) => e,
  }
}
class jC {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.type = 'languageDetector'), (this.detectors = {}), this.init(t, n)
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    ;(this.services = t || { languageUtils: {} }),
      (this.options = oF(n, this.options || {}, mF())),
      typeof this.options.convertDetectedLanguage == 'string' &&
        this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
        (this.options.convertDetectedLanguage = (a) => a.replace('-', '_')),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = r),
      this.addDetector(lF),
      this.addDetector(sF),
      this.addDetector(uF),
      this.addDetector(cF),
      this.addDetector(dF),
      this.addDetector(fF),
      this.addDetector(gF),
      this.addDetector(hF)
  }
  addDetector(t) {
    return (this.detectors[t.name] = t), this
  }
  detect(t) {
    t || (t = this.options.order)
    let n = []
    return (
      t.forEach((r) => {
        if (this.detectors[r]) {
          let a = this.detectors[r].lookup(this.options)
          a && typeof a == 'string' && (a = [a]), a && (n = n.concat(a))
        }
      }),
      (n = n.map((r) => this.options.convertDetectedLanguage(r))),
      this.services.languageUtils.getBestMatchFromCodes
        ? n
        : n.length > 0
          ? n[0]
          : null
    )
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches),
      n &&
        ((this.options.excludeCacheFor &&
          this.options.excludeCacheFor.indexOf(t) > -1) ||
          n.forEach((r) => {
            this.detectors[r] &&
              this.detectors[r].cacheUserLanguage(t, this.options)
          }))
  }
}
jC.type = 'languageDetector'
const vF = { 'Welcome to React': '欢迎使用 React 和 react-i18next' },
  pF = { demo: vF },
  yF = { 'Welcome to React': 'Welcome to React and react-i18next' },
  SF = { demo: yF },
  bF = { 'Welcome to React': 'Welcome to React and react-i18next' },
  CF = { demo: bF }
en.use(jC)
  .use(kT)
  .init({
    resources: {
      en: { translation: SF },
      cn: { translation: pF },
      fr: { translation: CF },
    },
    lng: 'cn',
    interpolation: { escapeValue: !1 },
  })
Xd.createRoot(document.getElementById('root')).render(
  ia.jsx(Oe.StrictMode, { children: ia.jsx(TT, {}) }),
)
