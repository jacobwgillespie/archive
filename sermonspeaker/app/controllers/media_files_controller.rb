class MediaFilesController < ApplicationController

  load_and_authorize_resource

  def notify
    Rails.logger.info params.to_json
    media_file = MediaFile.find_by_job_id(params[:output][:id].to_s)
    media_file.capture_notification(params[:output]) if media_file
    render :text => "Thanks, Zencoder!", :status => 200
  end

  def show
    @media_file = MediaFile.find(params[:id])

    if stale?(:last_modified => @media_file.updated_at.utc, :etag => @media_file)
      respond_to do |format|
        format.json { render json: @media_file }
      end
    end
  end

  def create
    @media_file = MediaFile.new(params[:media_file])
    if @media_file.save
      render json: @media_file.to_json
    else
      render json: @media_file.errors, status: :unprocessable_entity
    end
  end

  def update
    @media_file = MediaFile.find(params[:id])

    respond_to do |format|
      if @media_file.update_attributes(params[:media_file])
        format.html { redirect_to @media_file, notice: 'Media file was successfully updated.' }
        format.json { respond_with_bip(@media_file) }
      else
        format.html { render action: "edit" }
        format.json { respond_with_bip(@media_file) }
      end
    end
  end

  def destroy
    @media_file = MediaFile.find(params[:id])
    @media_file.destroy
    respond_to do |format|
      format.html { redirect_to @media_file.sermon, notice: 'File removed successfully.' }
      format.json { head :ok }
    end
  end
end
