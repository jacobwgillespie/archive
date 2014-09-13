module Presser
  def self.with_friendly_errors
    begin
      yield
    rescue Presser::PresserError => e
      Presser.ui.error e.message
      Presser.ui.debug e.backtrace.join("\n")
      exit e.status_code
    rescue Interrupt => e
      Presser.ui.error "\nQuitting..."
      Presser.ui.debug e.backtrace.join("\n")
      exit 1
    rescue SystemExit => e
      exit e.status
    rescue Exception => e
      Presser.ui.error(
        "Unfortunately, a fatal error has occurred. Please see the Presser \n" \
        "troubleshooting documentation at http://bit.ly/bundler-issues. Thanks! \n")
      raise e
    end
  end
end