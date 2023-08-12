(() => {
  // 打开新增提现地址弹窗后，黏贴代码到控制台 回车运行
  // 需要添加的地址, 一行一个 一次最多20个地址

const addrs = [
    
  ]
  const nodes = document.querySelectorAll('.withdraw-book-list .okui-input-input');

  const add_handler = document.querySelector('.add-address-form-btn');
  const placeholderValue = nodes[1].placeholder;

  addrs.slice(1).forEach(() => {
    setTimeout(() => add_handler.click(), 1)
  })

  setTimeout(() => {
    const inputs = document.querySelectorAll(`input[placeholder="${placeholderValue}"]`);

    addrs.forEach((el, i) => {
      const input = inputs[i];
      const latestValue = input.value;
      input.value = el;

      const event = new Event('input', { bubbles: true })
      event.simulated = true;
      const tracker = input._valueTracker;

      if (tracker) {
        tracker.setValue(latestValue)
      }
      input.dispatchEvent(event)
    })
  }, 1000)
})();
