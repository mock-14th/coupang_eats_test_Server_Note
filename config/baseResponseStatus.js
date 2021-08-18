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
    message: "userId값이 입력되지 않았습니다.",
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
    message: "addressId 값이 입력되지 않았습니다.",
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
