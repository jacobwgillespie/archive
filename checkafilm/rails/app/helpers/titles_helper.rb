module TitlesHelper

  def runtime(title)
    runtime = title.runtime.to_i
    out = ""
    out += pluralize(runtime / 60, 'hr', 'hrs') if runtime / 60 > 0
    out += " #{(runtime % 60).to_s} min" if runtime % 60 > 0
    out
  end
end
