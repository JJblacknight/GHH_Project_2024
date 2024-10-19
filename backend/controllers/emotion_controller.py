from textblob import TextBlob

def get_emotion(user_input):        
    blob = TextBlob(user_input)
    polarity = blob.sentiment.polarity # -1 to 1

    if polarity > 0:
        return "positive"
    elif polarity < 0:
        return "negative"
    else:
        return "neutral"
