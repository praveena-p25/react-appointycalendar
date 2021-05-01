import React from 'react'
import './views.css'

function views() {
    return (
        
     <div>
     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">+ New Event Type</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create New Event</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Event Name*</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Location</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Description</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Event Link*</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Max Invitees in a spot</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

      </div>  
        
        
        
    );
}

export default views;

