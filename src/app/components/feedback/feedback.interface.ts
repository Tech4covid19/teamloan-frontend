export const FEEDBACK_STATUS = {
    SUCCESS: 'success',
    FAIL: 'fail',
    LOADING: 'loading'
};

export interface FeedbackInterface {
    status?: string;
    title?: string;
    subTitle?: string;
    text?: string;
    actionLabel?: string;
    url?: string;
}
