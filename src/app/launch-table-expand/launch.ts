// model for launch objects pulled from API

export interface Launch {
    flight_number: number;
    launch_year: number;
    rocket: {
        rocket_name: string;
    };
    details: string;
    links: {
        reddit_campaign: string;
        reddit_launch: string;
        reddit_media: string;
        presskit: string;
        article_link: string;
        wikipedia: string;
        video_link: string;
    };
}
