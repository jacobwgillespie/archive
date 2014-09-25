module SermonsHelper

  def facet_link_params key=nil, value=nil

    search_params = {
      :q => params[:q],
      :date => params[:date],
      :utf8 => params[:utf8]
    }

    search_params.update({:speaker => params[:speaker], :church => params[:church]}) unless key == false

    search_params[key] = value unless key.nil?

    search_params

  end

  def facet_link text, count, id, param_name
    link_to "#{text} (#{count})", sermons_search_path(facet_link_params(param_name, id))
  end

end
