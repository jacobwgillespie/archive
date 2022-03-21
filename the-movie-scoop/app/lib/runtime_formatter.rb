class RuntimeFormatter
  def self.format(runtime)
    new(runtime).formatted
  end

  attr_reader :runtime

  def initialize(runtime)
    @runtime = runtime
  end

  def formatted
    text = []
    text << "#{hours} #{'hour'.pluralize(hours)}" if hours > 0
    text << " #{minutes} #{'minute'.pluralize(minutes)}" if minutes > 0
    text.join(' ')
  end

  def hours
    @_hours ||= runtime / 60
  end

  def minutes
    @_minutes ||= runtime - hours * 60
  end
end
