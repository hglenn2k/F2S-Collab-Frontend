declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_ENROLLMENT_LIST_LINK: string;
        NEXT_PUBLIC_FAQ_TEAM_LINK: string;
        NEXT_PUBLIC_FAQ_COACH_LINK: string;
        [key: string]: string | undefined;
    }
}