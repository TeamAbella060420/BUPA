interface fontSizes {
    // deprecate
    caption: [string, string];
    bodySmall: [string, string];
    body: [string, string];
    bodyLarge: [string, string];
    subtitle: [string, string];
    mobileSubtitle: [string, string];
    fourKSubtitle: [string, string];
    eightKSubtitle: [string, string];
    title: [string, string];
    bigTitleSm: [string, string];
    bigTitle: [string, string];
    LPTitle: [string, string];
    fourKTitle: [string, string];
    eightKTitle: [string, string];
    mobileDynamic: [string, string];
    xlargeDynamic: [string, string];
    fiveKDynamic: [string, string];
    eightKDynamic: [string, string];
    huge: [string, string];
    mobileText: [string, string];
    mobilePromotedText: [string, string];

    // use these font variables
    'fs-big-title-sm': [string, string];
    'fs-huge-sm': [string, string];
    'fs-lp-title-sm': [string, string];
    'fs-caption-small': [string, string];
    'fs-caption': [string, string];
    'fs-body-small': [string, string];
    'fs-body': [string, string];
    'fs-body-large': [string, string];
    'fs-subtitle': [string, string];
    'fs-title': [string, string];
    'fs-big-title': [string, string];
    'fs-huge': [string, string];
    'fs-lp-title': [string, string];
}

export const webFontSizes: fontSizes = {
    caption: ['12px', '16px'],
    bodySmall: ['14px', '20px'],
    body: ['16px', '24px'],
    bodyLarge: ['18px', '24px'],
    mobileSubtitle: ['20px', '32px'],
    subtitle: ['24px', '32px'],
    title: ['32px', '36px'],
    bigTitleSm: ['36px', '42px'],
    bigTitle: ['40px', '48px'],
    fourKSubtitle: ['43.2px', '57.6px'],
    mobileDynamic: ['55px', '60px'],
    huge: ['64px', '68px'],
    LPTitle: ['80px', '96px'],
    eightKSubtitle: ['96px', '128px'],
    xlargeDynamic: ['110px', '116px'],
    fourKTitle: ['144px', '144px'],
    fiveKDynamic: ['198px', '208.8px'],
    eightKTitle: ['320px', '320px'],
    eightKDynamic: ['440px', '464px'],
    mobileText: ['9px', '16px'],
    mobilePromotedText: ['10px', '12px'],

    'fs-big-title-sm': ['2.25rem', '1.167'], // big title small - 36 / 42
    'fs-huge-sm': ['3.25rem', '1.154'], // huge small - 52 / 60
    'fs-lp-title-sm': ['2.5rem', '1.1'], // landing page title small - 40 / 44

    'fs-caption-small': ['0.625rem', '0.875rem'], //caption small - 10 / 14
    'fs-caption': ['0.75rem', '1.3'], // caption - 12 / 16
    'fs-body-small': ['0.875rem', '1.429'], // body small - 14 / 20
    'fs-body': ['1rem', '1.5'], // body - 16 / 24
    'fs-body-large': ['1.125rem', '1.3'], // body large - 18 / 24
    'fs-subtitle': ['1.5rem', '1.3'], // subtitle - 24 / 32
    'fs-title': ['2rem', '1.125'], // title - 32 / 36
    'fs-big-title': ['2.5rem', '1.1'], // big title - 40 / 48
    'fs-huge': ['4rem', '1.06'], // huge - 64 / 68
    'fs-lp-title': ['5rem', '1'], // landing page title - 80 / 80
};
