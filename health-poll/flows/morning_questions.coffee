Flow = require('./flow')

class MorningQuestionsFlow extends Flow
  constructor: (channel) ->
    @name = 'morning_questions'
    super(channel)
    @addQuestion
      id: 'sleep_quality'
      text: 'How did you sleep last evening?'

    @addQuestion
      id: 'feeling_morning'
      text: 'How do you feel this morning?'

  start: () ->
    console.log('flow started')
    console.log(@unaskedQuestions)
    @askNextQuestion()

  message: (message) ->
    if @currentQuestion
      console.log('I got a message: ' + message.Body)
      console.log('Storing it in data: ' + @currentQuestion.id)
      @storeData(@currentQuestion.id, {text: message.Body})
      @askNextQuestion()

module.exports = MorningQuestionsFlow