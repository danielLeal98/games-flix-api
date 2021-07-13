module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("dxutop1bd"),
      api_key: env("326881721217315"),
      api_secret: env("TXZBoCRTTBH52ShAlgRtVvRkKKY"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});
