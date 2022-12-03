import cookie from 'cookie'

interface SetCookieProps{
    name: string;
    value: string;
    expireTime?: number;
    path?: string;
}

function getDate(offset: number) {
    const d = new Date();
    d.setTime(d.getTime() + offset);
    return d;
}

function getPath() {
    // return `/${getCloudMarketplacePrefix(window.location.pathname).replace(/\/$/, "")}`;
    return '';
  }

const CookieHelper = {
    setCookie: function({ name, value, expireTime, path }: SetCookieProps): void {
  
      document.cookie = cookie.serialize(name, value, {
        expires: expireTime ? getDate(expireTime) : undefined,
        path: path,
        sameSite: true
      });
    },
  
    getCookie: function(cname: string, context?: any): string {
      let cookies;
  
      if (typeof window !== "undefined") {
        cookies = cookie.parse(window.document.cookie);
      } else if (context?.req?.headers?.cookie) {
        cookies = cookie.parse(context?.req?.headers?.cookie);
      }
      return cookies?.[cname] || "";
    },
  
    deleteCookie: function(cname: string): void {
      if (typeof window === "undefined") return;
      const path = getPath();
  
      this.setCookie({ name: cname, value: "", path, expireTime: -1 });
    },
  
    deleteCookiesStartingWith: function(prefix: string): void {
      if (typeof window === "undefined") return;
      const path = getPath();
  
      document.cookie.split(';')
        .filter(x => x.trim().startsWith(prefix))
        .forEach(x => this.setCookie({ name: x.trim().split('=')[0], value: "", path, expireTime: -1 }));
    }
  };
  
  export default CookieHelper;