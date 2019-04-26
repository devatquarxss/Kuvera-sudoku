export default {
  filters: {
    hhmmss (date) {
      let ss = date.getSeconds()
      let mm = date.getMinutes()
      let hh = date.getHours()

      if (ss < 10)
        ss = `0${ss}`

      if (mm < 10)
        mm = `0${mm}`

      if (hh < 10)
        hh = `0${hh}`

      return `${hh}:${mm}:${ss}`
    }
  }
}
