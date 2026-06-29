self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/admin/:path*",
        "destination": "/api/auth/admin-proxy/:path*"
      },
      {
        "source": "/user/:path*",
        "destination": "/api/auth/user-proxy/:path*"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()