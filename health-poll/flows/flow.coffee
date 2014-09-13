class Flow
  constructor: (channel) ->
    @unaskedQuestions = []
    @askedQuestions = []
    @currentQuestion = {}

    @addQuestion = (question) =>
      @unaskedQuestions.push(question)

    askQuestion = (question) =>
      console.log('Asking question: ' + question.text)
      #@dependencies.sms(question.text)

    @askNextQuestion = =>
      if question = @unaskedQuestions.pop()
        @currentQuestion = question
        askQuestion(question)
        @askedQuestions.push(question)
      else
        @currentQuestion = {}
        @unaskedQuestions = @askedQuestions
        channel.publish "flows.#{@name}.done", true

    @storeData = (key, value) =>
      value.date = (new Date()).toString()
      channel.publish('db.push', {key: "test.#{key}", value: value})

    channel.subscribe "flows.#{@name}.start", =>
      @start()

    channel.subscribe "flows.#{@name}.new_message", (data) =>
      @message(data)

    channel.publish('flow_manager.register', @name)

  start: () ->

  message: (data) ->

module.exports = Flow