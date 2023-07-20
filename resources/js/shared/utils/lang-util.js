import { inject } from "vue";
import { useI18n } from "vue-i18n";

export default {
    key: "LANG",
    set(lang) {
        localStorage.setItem(this.key, lang);
    },
    get() {
        return localStorage.getItem(this.key) ? localStorage.getItem(this.key) : "ar";
    },
    isRtl() {
        var lang = localStorage.getItem(this.key) ? localStorage.getItem(this.key) : "ar";
        return lang == "ar";
    },
    isArabic() {
        return this.get() == 'ar';
    },
    isEnglish() {
        return this.get() == 'en';
    },
    setup() {
        const { t, locale } = useI18n({ useScope: 'global' });
        const store = inject("store");
        const self = this;
        function changeLang(lang) {
            self.set(locale.value = lang);
            store.dir = locale.value == "ar" ? "rtl" : "ltr";
            if (lang == "ar") {
                $("#body").attr("dir", "rtl");
            } else if (lang == "en") {
                $("#body").attr("dir", "ltr");
            }
        }
        return { changeLang };
    }

}