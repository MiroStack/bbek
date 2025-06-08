export const Cookies={
     getCookie(name: string): string | null {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    },
    deleteCookie(name: string) {
        document.cookie = name + '=; Max-Age=0; path=/;';
    }
}

