import Cookies from 'js-cookie'

/** 
 * 令牌的使用
 */
function Token() {
  return {
    TOKENKEY: 'admin-token',
    getToken: function () {
      return Cookies.get(this.TOKENKEY)
    },
    setToken: function (token: string) {
      return Cookies.set(this.TOKENKEY, token)
    },
    removeToken: function () {
      return Cookies.remove(this.TOKENKEY)
    }
  }
}

export const CookieToken = Token()

/**
 * 最新用户名填充
 */
function NewestUserName() {
  return {
    KEY: 'nst-user-name',
    getName: function () {
      return Cookies.get(this.KEY)
    },
    setName: function (name: string) {
      return Cookies.set(this.KEY, name, { expires: 30 })
    },
  }
}

export const CookieNewestUserName = NewestUserName()

