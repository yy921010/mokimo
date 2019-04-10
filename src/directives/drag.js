
export default {
  name: 'mokdrag',
  inserted (el, binding) {
    let currentDOM = el
    let maxLeft = el.parentNode.clientWidth - el.clientWidth
    currentDOM.onmousedown = (e) => {
      let disX = e.clientX - currentDOM.offsetLeft
      currentDOM.onmousemove = (event) => {
        let distanceX = event.clientX - disX
        currentDOM.style.left = `${distanceX}px`

        // if (e.clientX - disX <= 0) {
        //   currentDOM.style.left = 0 + 'px'
        // }
        if (e.clientX - disX >= maxLeft) {
          currentDOM.style.left = maxLeft + 'px'
        }
        console.log(e.clientX - disX)
      }
      currentDOM.onmouseup = () => {
        currentDOM.onmousemove = null
        currentDOM.onmouseup = null
      }
      currentDOM.onmouseout = (event) => {
        currentDOM.onmousemove = null
        currentDOM.onmouseup = null
      }
    }
  }
}
