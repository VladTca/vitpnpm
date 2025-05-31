/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LINKEDIN: string;
    readonly VITE_WHATSAPP: string;
    readonly VITE_TELEGRAM: string;
    readonly VITE_EMAIL: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
