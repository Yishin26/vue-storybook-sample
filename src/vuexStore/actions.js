import axios from "axios"

export default {
  async authenticate({ commit }, { username, password }) {
    try {
      const authenticated = await axios.post("/api/authenticate", {
        username, password
      })

      commit("SET_AUTHENTICATED", authenticated)
    } catch (e) {
      throw Error("API Error occurred.")
    }
  }
}

//action 的测试应该断言：

// 1.是否使用了正确的 API 端？
// 2.payload 是否正确？
// 3.根据结果，是否有正确的 mutation 被 commit