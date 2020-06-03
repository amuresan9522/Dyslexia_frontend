export const levels = {
    HEIGHT: 'HEIGHT',
    MEDIUM: 'MEDIUM',
    LOW: 'LOW',
}

export const getQuizQuestions = () => {
    return Promise.resolve({
        data: [
            {
                "question" : "You appear bright, highly intelligent, and articulate but unable to read, write, or spell at grade level.",
                "answers" : ["Absolutely","Somewhat", "Rarery or never"]
            },
            {
                "question" : "You are labeled careless, immature, `not trying hard enough,` or  `having a behavior problem`.",
                "answers" : ["Absolutely","Somewhat", "Rarery or never"]
            },
            {
                "question" : "High in IQ, yet you may not test well academically; you test well orally, but not written.",
                "answers" : ["Absolutely","Somewhat", "Rarery or never"]
            },
            {
                "question" : "You would consider you have poor self-esteem; and you try to cover up weaknesses with ingenious compensatory strategies.",
                "answers" : ["Absolutely","Somewhat", "Rarery or never"]
            },
            {
                "question" : "You get emotional about school, reading or testing. ",
                "answers" : ["Absolutely","Somewhat", "Rarery or never"]
            },
            {
                "question" : "You seem to `zone out` or daydream often; get lost easily or loses track of time. ",
                "answers" : ["Absolutely","Somewhat", "Rarery or never"]
            },
            {
                "question" : "You encounter difficulty sustaining attention; seem `hyper` or `a daydreamer` .",
                "answers" : ["Absolutely","Somewhat", "Rarery or never"]
            },
            {
                "question" : "You learn best through hands-on experience, demonstrations, experimentation, observation, and visual aids. ",
                "answers" : ["Absolutely","Somewhat", "Rarery or never"]
            }
        ]
    })
}

export const getResources = (level) => {
    switch(level) {
        case levels.HEIGHT:
            return [
                {
                    "text": "Listen to some audio books : Story Nory",
                    "resource": "https://www.storynory.com/ "
                },
                {
                    "text": "Use a mobile app that may help you",
                    "resource": "https://play.google.com/store/apps/details?id=com.texthelp.readwriteforandroid&hl=en_US"
                }
            ]
        case levels.MEDIUM:
            return [
                {
                    "text": "Listen to an educational podcast",
                    "resource": " https://www.cultofpedagogy.com/educational-podcasts-for-kids/"
                },
                {
                    "text": "Watch a tutorial",
                    "resource": "https://www.youtube.com/watch?v=yHsl3zqayF8 "
                }
            ] 
        case levels.LOW:
            return [
                {
                    "text": "Build words based on color codes using this worksheet",
                    "resource": "https://assets.ctfassets.net/p0qf7j048i0q/4cAL4NYcmrI6y49jj7T9BC/1c244307b724a800617432809f6f6bd4/Color-Coded_Word_Building_Tiles_Understood.pdf"
                },
                {
                    "text": "Play some word puzzles",
                    "resource": "https://lovattspuzzles.com/kids/childrens-online-puzzles/"
                }
            ] 
    }
}