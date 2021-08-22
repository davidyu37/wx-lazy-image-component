// components/LazyImage.js

Component({
  options: {
    styleIsolation: "apply-shared"
  },
  properties: {
    src: {
      type: String,
      value: ""
    },
    mode: {
      type: String,
      value: "aspectFill"
    }
  },
  data: {
    loaded: false,
    opacity: 0
  },
  methods: {
    imageLoaded(e) {
      this.setData({
        loaded: true,
        opacity: 1
      });
    }
  },
});
