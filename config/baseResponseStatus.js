module.exports = {
  // Success
  SUCCESS: { isSuccess: true, code: 1000, message: "성공" },

  // Common
  TOKEN_EMPTY: {
    isSuccess: false,
    code: 2000,
    message: "JWT 토큰을 입력해주세요.",
  },
  TOKEN_VERIFICATION_FAILURE: {
    isSuccess: false,
    code: 3000,
    message: "JWT 토큰 검증 실패",
  },
  TOKEN_VERIFICATION_SUCCESS: {
    isSuccess: true,
    code: 1001,
    message: "JWT 토큰 검증 성공",
  }, // ?

  //Request error
  SIGNUP_EMAIL_EMPTY: {
    isSuccess: false,
    code: 2001,
    message: "이메일을 입력해주세요",
  },
  SIGNUP_EMAIL_LENGTH: {
    isSuccess: false,
    code: 2002,
    message: "이메일은 30자리 미만으로 입력해주세요.",
  },
  SIGNUP_EMAIL_TYPE: {
    isSuccess: false,
    code: 2003,
    message: "이메일 형식이 올바르지 않습니다.",
  },
  SIGNUP_PASSWORD_EMPTY: {
    isSuccess: false,
    code: 2004,
    message: "비밀번호를 입력해주세요.",
  },
  SIGNUP_PASSWORD_LENGTH: {
    isSuccess: false,
    code: 2005,
    message: "비밀번호는 8~20자리를 입력해주세요.",
  },
  SIGNUP_NAME_EMPTY: {
    isSuccess: false,
    code: 2006,
    message: "이름을 입력해주세요.",
  },
  SIGNUP_NAME_LENGTH: {
    isSuccess: false,
    code: 2007,
    message: "이름은 최대 10자리입니다.",
  },
  SIGNUP_PHONENUM_EMPTY: {
    isSuccess: false,
    code: 2008,
    message: "전화번호를 입력해주세요.",
  },
  SIGNUP_PHONENUM_TYPE: {
    isSuccess: false,
    code: 2009,
    message: "전화번호의 형식이 올바르지 않습니다.",
  },
  USER_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2010,
    message: "userId값을 입력해주세요.",
  },
  // USER_ID_NOT_MATCH: {
  //   isSuccess: false,
  //   code: 2012,
  //   message: "userId가 적절하지 않습니다.",
  // },
  LATITUDE_IS_NOT_VALID: {
    isSuccess: false,
    code: 2013,
    message: "유효하지 않은 위도입니다.",
  },
  LONGTITUDE_IS_NOT_VALID: {
    isSuccess: false,
    code: 2014,
    message: "유효하지 않은 경도입니다.",
  },
  ADDRESS_IS_EMPTY: {
    isSuccess: false,
    code: 2015,
    message: "주소를 입력해주세요.",
  },
  // CATEGORY_ID_NOT_VALID: {
  //   isSuccess: false,
  //   code: 2016,
  //   message: "유효하지 않은 카테고리 아이디입니다.",
  // },
  PAGE_IS_EMPTY: {
    isSuccess: false,
    code: 2017,
    message: "page를 입력해주세요.",
  },
  PAGE_IS_NOT_VALID: {
    isSuccess: false,
    code: 2018,
    message: "page 형식이 올바르지 않습니다.",
  },
  SIZE_IS_EMPTY: {
    isSuccess: false,
    code: 2019,
    message: "size를 입력해주세요.",
  },
  SIZE_IS_NOT_VALID: {
    isSuccess: false,
    code: 2020,
    message: "size 형식이 올바르지 않습니다.",
  },
  TYPE_IS_NOT_VALID: {
    isSuccess: false,
    code: 2021,
    message: "type 형식이 올바르지 않습니다.",
  },
  ADDRESS_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2022,
    message: "addressId 값을 입력해주세요.",
  },
  AMOUNT_IS_EMPTY: {
    isSuccess: false,
    code: 2023,
    message: "수량을 입력해주세요.",
  },
  AMOUNT_IS_NOT_VALID: {
    isSuccess: false,
    code: 2024,
    message: "수량이 올바르지 않습니다.",
  },
  PRICE_IS_NOT_VALID: {
    isSuccess: false,
    code: 2025,
    message: "주문금액이 올바르지 않습니다.",
  },
  STORE_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2026,
    message: "storeId 값을 입력해주세요.",
  },
  TOTAL_PRICE_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2027,
    message: "totalPrice 값을 입력해주세요.",
  },
  FILTER_IS_NOT_VALID: {
    isSuccess: false,
    code: 2028,
    message: "filter 값이 올바르지 않습니다.",
  },
  COUPON_STATUS_IS_NOT_VALID: {
    isSuccess: false,
    code: 2029,
    message: "coupon 값이 올바르지 않습니다.",
  },
  EVENT_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2030,
    message: "eventId 값을 입력해주세요.",
  },
  DISTANCE_IS_NOT_VALID: {
    isSuccess: false,
    code: 2031,
    message: "distance 값이 올바르지 않습니다.",
  },
  NOTICE_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2032,
    message: "noticeId 값을 입력해주세요.",
  },
  MENU_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2033,
    message: "menuId 값을 입력해주세요.",
  },
  CATEGORY_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2034,
    message: "categoryId 값을 입력해주세요.",
  },
  FRANCHISE_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2035,
    message: "franchiseId 값을 입력해주세요.",
  },
  PHOTO_FILTER_IS_NOT_VALID: {
    isSuccess: false,
    code: 2036,
    message: "photoFilter 값이 올바르지 않습니다.",
  },
  POINT_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2037,
    message: "point 값을 입력해주세요.",
  },
  POINT_IS_NOT_VALID: {
    isSuccess: false,
    code: 2038,
    message: "point 값이 올바르지 않습니다.",
  },
  POINT_IS_EMPTY: {
    isSuccess: false,
    code: 2039,
    message: "point 값을 입력해주세요.",
  },
  ORDER_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2040,
    message: "orderId 값을 입력해주세요.",
  },
  CONTENTS_IS_SHORT: {
    isSuccess: false,
    code: 2041,
    message: "리뷰는 10자 이상 작성해주세요.",
  },
  REVIEW_ID_IS_EMPTY: {
    isSuccess: false,
    code: 2042,
    message: "reviewId 값을 입력해주세요.",
  },
  CHOOSE_MORE_THAN_ONE_SELECT_REASON: {
    isSuccess: false,
    code: 2043,
    message: "선택사유를 선택해주세요.",
  },
  COMMENT_REASON_IS_SHORT: {
    isSuccess: false,
    code: 2044,
    message: "기재사유는 10자 이상 작성해주세요.",
  },
  SELECT_REASON_TYPE_IS_NOT_VALID: {
    isSuccess: false,
    code: 2045,
    message: "선택사유의 값이 유효하지 않습니다.",
  },

  // Response error
  SIGNUP_REDUNDANT_EMAIL: {
    isSuccess: false,
    code: 3001,
    message: "중복된 이메일입니다.",
  },
  SIGNUP_REDUNDANT_PHONENUM: {
    isSuccess: false,
    code: 3002,
    message: "중복된 전화번호입니다.",
  },
  SIGNIN_EMAIL_NOT_EXIST: {
    isSuccess: false,
    code: 3003,
    message: "존재하지 않는 이메일입니다.",
  },
  SIGNIN_PASSWORD_WRONG: {
    isSuccess: false,
    code: 3004,
    message: "비밀번호가 올바르지 않습니다.",
  },
  CATEGORY_NOT_EXIST: {
    isSuccess: false,
    code: 3005,
    message: "존재하지 않는 카테고리입니다.",
  },
  USER_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3006, // 2011
    message: "해당 유저는 존재하지 않습니다.",
  },
  ADDRESS_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3007, // 2016
    message: "존재하지 않는 주소입니다.",
  },
  STORE_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3008,
    message: "존재하지 않는 음식점입니다.",
  },
  ADDRESS_IS_DELETED: {
    isSuccess: false,
    code: 3009,
    message: "삭제된 주소입니다.",
  },
  STORE_IS_DELETED: {
    isSuccess: false,
    code: 3010,
    message: "삭제된 음식점입니다.",
  },
  MENU_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3011,
    message: "존재하지 않는 메뉴입니다.",
  },
  MENU_IS_DELETED: {
    isSuccess: false,
    code: 3012,
    message: "삭제된 메뉴입니다.",
  },
  CART_IS_EMPTY: {
    isSuccess: false,
    code: 3013,
    message: "카트가 비어 있습니다.",
  },
  SAME_STORE_MENU: {
    isSuccess: false,
    code: 3014,
    message: "같은 음식점의 상품입니다.",
  },
  COUPON_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3015,
    message: "존재하지 않는 쿠폰입니다.",
  },
  COUPON_IS_NOT_VALID: {
    isSuccess: false,
    code: 3016,
    message: "유효기간이 지난 쿠폰입니다.",
  },
  COUPON_AlREADY_OBTAINED: {
    isSuccess: false,
    code: 3017,
    message: "해당 쿠폰은 이미 등록되어 있습니다.",
  },
  STORE_LIKE_ALREADY_EXIST: {
    isSuccess: false,
    code: 3018,
    message: "해당 음식점은 이미 즐겨찾기에 있습니다.",
  },
  STORE_LIKE_NOT_EXIST: {
    isSuccess: false,
    code: 3019,
    message: "즐겨찾기에 등록되지 않은 음식점입니다.",
  },
  SUB_MENU_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3020,
    message: "존재하지 않는 추가메뉴입니다.",
  },
  SUB_MENU_IS_DELETED: {
    isSuccess: false,
    code: 3021,
    message: "삭제된 추가메뉴입니다.",
  },
  EVENT_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3022,
    message: "존재하지 않는 이벤트입니다.",
  },
  EVENT_IS_DELETED: {
    isSuccess: false,
    code: 3023,
    message: "삭제된 이벤트입니다.",
  },
  FRANCHISE_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3024,
    message: "존재하지 않는 프랜차이즈입니다.",
  },
  NOTICE_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3025,
    message: "존재하지 않는 공지입니다.",
  },
  NOTICE_IS_DELETED: {
    isSuccess: false,
    code: 3026,
    message: "삭제된 공지입니다.",
  },
  ORDER_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3027,
    message: "존재하지 않는 주문입니다.",
  },
  ORDER_IS_DELETED: {
    isSuccess: false,
    code: 3028,
    message: "결제취소된 주문입니다.",
  },
  REVIEW_ALREADY_EXIST: {
    isSuccess: false,
    code: 3029,
    message: "해당 주문의 리뷰는 이미 존재합니다.",
  },
  ORDER_IS_NOT_USERS: {
    isSuccess: false,
    code: 3030,
    message: "해당 주문은 다른 유저의 주문입니다.",
  },
  REVIEW_IS_NOT_EXIST: {
    isSuccess: false,
    code: 3031,
    message: "존재하지 않는 리뷰입니다.",
  },
  USER_IS_NOT_REVIEW_HOST: {
    isSuccess: false,
    code: 3032,
    message: "리뷰 수정/삭제는 작성자만 가능합니다.",
  },
  REVIEW_CAN_REPORTED_BY_OTHERS: {
    isSuccess: false,
    code: 3033,
    message: "자신의 리뷰는 신고가 불가능합니다.",
  },
  USER_ALREADY_REPORT: {
    isSuccess: false,
    code: 3034,
    message: "해당 리뷰는 이미 신고가 완료되었습니다.",
  },

  // made by note

  // SIGNIN_INACTIVE_ACCOUNT: {
  //   isSuccess: false,
  //   code: 3005,
  //   message: "비활성화 된 계정입니다. 고객센터에 문의해주세요.",
  // },
  // SIGNIN_WITHDRAWAL_ACCOUNT: {
  //   isSuccess: false,
  //   code: 3006,
  //   message: "탈퇴 된 계정입니다. 고객센터에 문의해주세요.",
  // },

  //Connection, Transaction 등의 서버 오류
  DB_ERROR: { isSuccess: false, code: 4000, message: "데이터 베이스 에러" },
  SERVER_ERROR: { isSuccess: false, code: 4001, message: "서버 에러" },
};
