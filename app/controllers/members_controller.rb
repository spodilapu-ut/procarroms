class MembersController < ApplicationController
  before_action :set_team
  before_action :set_member, only: [:show, :edit, :update, :destroy]

  # GET /members
  # GET /members.json
  def index
    @members = @team.members
  end

  # GET /members/1
  # GET /members/1.json
  def show
  end

  # GET /members/new
  def new
    #@member = Member.new
    @member = @team.members.build
  end

  # GET /members/1/edit
  def edit
  end

  # POST /members
  # POST /members.json
  def create

    count = Member.where("team_id = (?)", @team.id).count

    if count != 2
      @member = @team.members.build(member_params)
      respond_to do |format|
        if @member.save
          format.html { redirect_to team_members_path(@team, @member), notice: 'Member was successfully created.' }
          format.json { render :show, status: :created, location: @member }
        else
          format.html { render :new }
          format.json { render json: @member.errors, status: :unprocessable_entity }
        end
      end
    else
      respond_to do |format|
        format.html { redirect_to team_members_path(@team, @member), notice: 'Two Members already exists!' }
        format.json { render :show, status: :created, location: @member }
      end
    end
  end

  # PATCH/PUT /members/1
  # PATCH/PUT /members/1.json
  def update
    respond_to do |format|
      if @member.update(member_params)
        format.html { redirect_to team_members_path(@team, @member), notice: 'Member was successfully updated.' }
        #format.html { redirect_to @member, notice: 'Member was successfully updated.' }
        format.json { render :show, status: :ok, location: @member }
      else
        format.html { render :edit }
        format.json { render json: @member.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /members/1
  # DELETE /members/1.json
  def destroy
    @member.destroy
    respond_to do |format|
      format.html { redirect_to team_members_url(@team), notice: 'Member was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

     # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    def set_team
      @team = Team.find(params[:team_id])
    end
   
    # Never trust parameters from the scary internet, only allow the white list through.
    def member_params
      params.require(:member).permit(:team_id, :user_id)
    end
end
