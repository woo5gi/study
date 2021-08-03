self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "D:\\study\\Api_Project\\local-api\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // const MsgList = ({ smsgs, users }) => {
//   const {
//     query: { userId = '' },
//   } = useRouter()
//   const [msgs, setMsgs] = useState(smsgs)
//   const [editingId, setEditingId] = useState(null)
//   const [hasNext, setHasNext] = useState(true)
//   const fetchMoreEl = useRef(null)
//   const intersecting = useInfiniteScroll(fetchMoreEl)
//   const onCreate = async text => {
//     const newMsg = await fetcher('post', '/messages', { text, userId })
//     if (!newMsg) throw Error('something wrong')
//     setMsgs(msgs => [newMsg, ...msgs])
//   }
//   const onUpdate = async (text, id) => {
//     const newMsg = await fetcher('put', `/messages/${id}`, { text, userId })
//     if (!newMsg) throw Error('something wrong')
//     setMsgs(msgs => {
//       const targetIndex = msgs.findIndex(msg => msg.id === id)
//       if (targetIndex < 0) return msgs
//       const newMsgs = [...msgs]
//       newMsgs.splice(targetIndex, 1, newMsg)
//       return newMsgs
//     })
//     doneEdit()
//   }
//   const onDelete = async id => {
//     const receivedId = await fetcher('delete', `/messages/${id}`, { params: { userId } })
//     setMsgs(msgs => {
//       const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '')
//       if (targetIndex < 0) return msgs
//       const newMsgs = [...msgs]
//       newMsgs.splice(targetIndex, 1)
//       return newMsgs
//     })
//   }
//   const doneEdit = () => setEditingId(null)
//   const getMessages = async () => {
//     const newMsgs = await fetcher('get', '/messages', { params: { cursor: msgs[msgs.length - 1]?.id || '' } })
//     if (newMsgs.length === 0) {
//       setHasNext(false)
//       return
//     }
//     setMsgs(msgs => [...msgs, ...newMsgs])
//   }
//   useEffect(() => {
//     if (intersecting && hasNext) getMessages()
//   }, [intersecting])
//   console.log({ intersecting, hasNext, msgs })
//   return (
//     <>
//       <MsgInput mutate={onCreate} />
//       <ul className="messages">
//         {msgs.map(x => (
//           <MsgItem
//             key={x.id}
//             {...x}
//             onUpdate={onUpdate}
//             onDelete={() => onDelete(x.id)}
//             startEdit={() => setEditingId(x.id)}
//             isEditing={editingId === x.id}
//             myId={userId}
//             user={users[x.userId]}
//           />
//         ))}
//       </ul>
//       <div ref={fetchMoreEl} />
//     </>
//   )
// }
// export default MsgList

var UserIds = ['roy', 'jay']; //랜덤하게 아이디 생성

var getRandomUserId = function getRandomUserId() {
  return UserIds[Math.round(Math.random())];
}; // const originalMsgs = Array(50).fill(0).map((_,i) => ({
//   id: i + 1,
//   userId:getRandomUserId(),
//   timestamp: 1234567890123 + i * 1000 * 60,
//   text: `${i+1} mock text`
// })).reverse()
// console.log(JSON.stringify(originalMsgs))


var MsgList = function MsgList(_ref) {
  _s();

  var smsgs = _ref.smsgs;

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(smsgs),
      query = _useRouter.query;

  var userId = query.userId || query.userid || '';

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      msgs = _useState[0],
      setMsgs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
      hasNext = _useState3[0],
      setHasNext = _useState3[1];

  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__.default)(fetchMoreEl); // const onCreate = async text => {
  //   const newMsg ={
  //     id: msgs.length + 1,
  //     userId: getRandomUserId(),
  //     timestamp: Date.now(),
  //     text: `${msgs.length+ 1} ${text}`,
  //   }

  var onCreate = /*#__PURE__*/function () {
    var _ref2 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(text) {
      var newMsg;
      return D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('post', '/messages', {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context.sent;

              if (newMsg) {
                _context.next = 5;
                break;
              }

              throw Error('something wrong');

            case 5:
              setMsgs(function (msgs) {
                return [newMsg].concat((0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs));
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onCreate(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // input으로 입력한 데이터 저장
  // setMsgs(msgs => ([newMsg, ...msgs]))
  // console.log(newMsg);


  var onUpdate = /*#__PURE__*/function () {
    var _ref3 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(text, id) {
      var newMsg;
      return D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('put', "/messages/".concat(id), {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context2.sent;

              if (newMsg) {
                _context2.next = 5;
                break;
              }

              throw Error('something wrong');

            case 5:
              setMsgs(function (msgs) {
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === id;
                });
                if (targetIndex < 0) return msgs;

                var newMsgs = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

                newMsgs.splice(targetIndex, 1, newMsg);
                return newMsgs;
              });
              doneEdit();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onUpdate(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var doneEdit = function doneEdit() {
    return setEditingId(null);
  };

  var getMessages = /*#__PURE__*/function () {
    var _ref4 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var _msgs;

      var newMsgs;
      return D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('get', '/messages', {
                params: {
                  cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''
                }
              });

            case 2:
              newMsgs = _context3.sent;

              if (!(newMsgs.length === 0)) {
                _context3.next = 6;
                break;
              }

              setHasNext(false);
              return _context3.abrupt("return");

            case 6:
              setMsgs(function (msgs) {
                return [].concat((0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs), (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(newMsgs));
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getMessages() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);

  var _onDelete = /*#__PURE__*/function () {
    var _ref5 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(id) {
      var receivedId;
      return D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('delete', "/messages/".concat(id), {
                params: {
                  userId: userId
                }
              });

            case 2:
              receivedId = _context4.sent;
              console.log(typeof receivedId, typeof id);
              setMsgs(function (msgs) {
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === receivedId + '';
                });
                if (targetIndex < 0) return msgs;

                var newMsgs = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

                newMsgs.splice(targetIndex, 1);
                return newMsgs;
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onDelete(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 18
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "message",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, x), {}, {
          onUpdate: onUpdate,
          startEdit: function startEdit() {
            return setEditingId(x.id);
          },
          isEditing: editingId === x.id,
          onDelete: function onDelete() {
            return _onDelete(x.id);
          },
          myId: userId
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "rhXsinqIO4JJEZ3lbrpJmHFJ5I0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__.default];
});

_c = MsgList;
/* harmony default export */ __webpack_exports__["default"] = (MsgList);

var _c;

$RefreshReg$(_c, "MsgList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0Iiwic21zZ3MiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZXJJZCIsInVzZXJpZCIsInVzZVN0YXRlIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZldGNoTW9yZUVsIiwidXNlUmVmIiwiaW50ZXJzZWN0aW5nIiwidXNlSW5maW5pdGVTY3JvbGwiLCJvbkNyZWF0ZSIsInRleHQiLCJmZXRjaGVyIiwibmV3TXNnIiwiRXJyb3IiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJnZXRNZXNzYWdlcyIsInBhcmFtcyIsImN1cnNvciIsImxlbmd0aCIsInVzZUVmZmVjdCIsIm9uRGVsZXRlIiwicmVjZWl2ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUMsQ0FBQ2pCLEVBQUgsQ0FBbEI7QUFBQSxXQUpYO0FBS0EsbUJBQVMsRUFBRWQsU0FBUyxLQUFLK0IsQ0FBQyxDQUFDakIsRUFMM0I7QUFNQSxrQkFBUSxFQUFFO0FBQUEsbUJBQU1ZLFNBQVEsQ0FBQ0ssQ0FBQyxDQUFDakIsRUFBSCxDQUFkO0FBQUEsV0FOVjtBQU9BLGNBQUksRUFBRW5CO0FBUE4sWUFDS29DLENBQUMsQ0FBQ2pCLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQVY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFlRTtBQUFLLFNBQUcsRUFBRVY7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkY7QUFBQSxrQkFERjtBQW1CRCxDQXJGRDs7R0FBTWIsTztVQUNjRSxrRCxFQU1HYyw4RDs7O0tBUGpCaEIsTztBQXNGTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NmVmMjUxYTUxYWFkZTM1NTZlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSdcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0J1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcidcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCdcblxuLy8gY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiB7XG4vLyAgIGNvbnN0IHtcbi8vICAgICBxdWVyeTogeyB1c2VySWQgPSAnJyB9LFxuLy8gICB9ID0gdXNlUm91dGVyKClcbi8vICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoc21zZ3MpXG4vLyAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxuLy8gICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKVxuLy8gICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKVxuLy8gICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbClcblxuLy8gICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xuLy8gICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSlcbi8vICAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpXG4vLyAgICAgc2V0TXNncyhtc2dzID0+IFtuZXdNc2csIC4uLm1zZ3NdKVxuLy8gICB9XG5cbi8vICAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcbi8vICAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSlcbi8vICAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpXG4vLyAgICAgc2V0TXNncyhtc2dzID0+IHtcbi8vICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXG4vLyAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xuLy8gICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuLy8gICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZylcbi8vICAgICAgIHJldHVybiBuZXdNc2dzXG4vLyAgICAgfSlcbi8vICAgICBkb25lRWRpdCgpXG4vLyAgIH1cblxuLy8gICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcbi8vICAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH0pXG4vLyAgICAgc2V0TXNncyhtc2dzID0+IHtcbi8vICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArICcnKVxuLy8gICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3Ncbi8vICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cbi8vICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKVxuLy8gICAgICAgcmV0dXJuIG5ld01zZ3Ncbi8vICAgICB9KVxuLy8gICB9XG5cbi8vICAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcblxuLy8gICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbi8vICAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHsgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCAnJyB9IH0pXG4vLyAgICAgaWYgKG5ld01zZ3MubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICBzZXRIYXNOZXh0KGZhbHNlKVxuLy8gICAgICAgcmV0dXJuXG4vLyAgICAgfVxuLy8gICAgIHNldE1zZ3MobXNncyA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pXG4vLyAgIH1cblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGlmIChpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dCkgZ2V0TWVzc2FnZXMoKVxuLy8gICB9LCBbaW50ZXJzZWN0aW5nXSlcblxuLy8gICBjb25zb2xlLmxvZyh7IGludGVyc2VjdGluZywgaGFzTmV4dCwgbXNncyB9KVxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxuLy8gICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4vLyAgICAgICAgIHttc2dzLm1hcCh4ID0+IChcbi8vICAgICAgICAgICA8TXNnSXRlbVxuLy8gICAgICAgICAgICAga2V5PXt4LmlkfVxuLy8gICAgICAgICAgICAgey4uLnh9XG4vLyAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4vLyAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4vLyAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbi8vICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxuLy8gICAgICAgICAgICAgbXlJZD17dXNlcklkfVxuLy8gICAgICAgICAgICAgdXNlcj17dXNlcnNbeC51c2VySWRdfVxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC91bD5cbi8vICAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cbi8vICAgICA8Lz5cbi8vICAgKVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNc2dMaXN0XG5cbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXVxuLy/rnpzrjaTtlZjqsowg7JWE7J2065SUIOyDneyEsVxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxuXG4vLyBjb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MCkuZmlsbCgwKS5tYXAoKF8saSkgPT4gKHtcblxuLy8gICBpZDogaSArIDEsXG4vLyAgIHVzZXJJZDpnZXRSYW5kb21Vc2VySWQoKSxcbi8vICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCxcbi8vICAgdGV4dDogYCR7aSsxfSBtb2NrIHRleHRgXG4vLyB9KSkucmV2ZXJzZSgpXG5cbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTXNncykpXG5cbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncyB9KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcihzbXNncylcbiAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCAnJztcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKVxuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbClcbiAgLy8gY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcbiAgLy8gICBjb25zdCBuZXdNc2cgPXtcbiAgLy8gICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gIC8vICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAvLyAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAvLyAgICAgdGV4dDogYCR7bXNncy5sZW5ndGgrIDF9ICR7dGV4dH1gLFxuICAvLyAgIH1cblxuICAgIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KVxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJylcbiAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pXG4gIH1cblxuICAgIC8vIGlucHV07Jy866GcIOyeheugpe2VnCDrjbDsnbTthLAg7KCA7J6lXG4gICAgLy8gc2V0TXNncyhtc2dzID0+IChbbmV3TXNnLCAuLi5tc2dzXSkpXG4gICAgLy8gY29uc29sZS5sb2cobmV3TXNnKTtcbiAgIFxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KVxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJylcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKVxuICAgICAgcmV0dXJuIG5ld01zZ3NcbiAgICB9KVxuICAgIGRvbmVFZGl0KClcbiAgfVxuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXG4gIFxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHsgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCAnJyB9IH0pXG4gICAgaWYgKG5ld01zZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRIYXNOZXh0KGZhbHNlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldE1zZ3MobXNncyA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dCkgZ2V0TWVzc2FnZXMoKVxuICB9LCBbaW50ZXJzZWN0aW5nXSlcblxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH0pXG4gICAgY29uc29sZS5sb2codHlwZW9mICByZWNlaXZlZElkLCB0eXBlb2YgaWQpXG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArICcnKVxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKVxuICAgICAgcmV0dXJuIG5ld01zZ3NcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZVwiPntcbiAgICAgICAgbXNncy5tYXAoeCA9PiBcbiAgICAgICAgPE1zZ0l0ZW0gXG4gICAgICAgIGtleT17eC5pZH0gXG4gICAgICAgIHsuLi54fSBcbiAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbiAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XG4gICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cbiAgICAgICAgbXlJZD17dXNlcklkfVxuICAgICAgICAgLz4pXG4gICAgICB9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxuICAgIDwvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==