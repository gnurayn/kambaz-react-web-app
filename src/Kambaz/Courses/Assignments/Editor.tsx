export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
        <div style={{ height: "20px" }} />  {}
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page 
          of your Web application running on Netlify. The landing page should 
          include the following: Your full name and section Links to each of 
          the lab assignments Link to the Kanbaz application Links to all relevant 
          source code repositories The Kanbaz application should include a link 
          to navigate back to the landing page. 
        </textarea>
        <br />
        <div style={{ height: "20px" }} />  {}
        <table>
        <tr>
  <td>
    <label htmlFor="wd-points">Points</label>&nbsp;
    <input id="wd-points" value={100} />
  </td>
</tr>
<div style={{ height: "20px" }} />  {}
<tr>
  <td>
    <label htmlFor="wd-select-one-assignment-group">Assignment Group</label>&nbsp;
    <select id="wd-select-one-assignment-group">
      <option value="Assignments">ASSIGNMENTS</option>
    </select>
  </td>
</tr>
<div style={{ height: "20px" }} />  {}
<tr>
  <td>
    <label htmlFor="wd-display-grade">Display Grade as</label>&nbsp;
    <select id="wd-display-grade">
      <option value="PERCENTAGE">Percentage</option>
      <option value="LETTER">Letter</option>
    </select>
  </td>
</tr>
<div style={{ height: "20px" }} />  {}
<tr>
  <td>
    <label htmlFor="wd-submission-type">Submission Type</label>&nbsp;
    <select id="wd-submission-type">
      <option value="ONLINE">Online</option>
    </select>
  </td>
</tr>

        <div style={{ height: "20px" }} />  {}
        <tr>
        <td>
        <label>Online Entry Options</label><br/>
        <input type="checkbox" name="check-option" id="wd-chkbox-text-entry"/>
        <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br/>

        <input type="checkbox" name="check-option" id="wd-chkbox-website-url"/>
        <label htmlFor="wd-chkbox-website-url">Website URL</label><br/>

        <input type="checkbox" name="check-option" id="wd-media-recordings"/>
        <label htmlFor="wd-chkbox-media-recordings">Media Recordings</label><br/>

        <input type="checkbox" name="check-option" id="wd-chkbox-student-annotation"/>
        <label htmlFor="wd-chkbox-student-annotation">Student Annotation</label><br/>

        <input type="checkbox" name="check-option" id="wd-chkbox-file-uploads"/>
        <label htmlFor="wd-chkbox-file-uploads">File Uploads</label>
        </td>
        </tr>
        <div style={{ height: "20px" }} />  {}
        <tr>
        <td align="left" valign="top">
        <label htmlFor="wd-assign">Assign to</label><br/>
        <input id="wd-assign" value="Everyone" />
        </td>
        </tr>
        <div style={{ height: "20px" }} />  {}
        <tr>
        <td align="left" valign="top">
        <label htmlFor="wd-due"> Due </label><br/>
        <input type="date" value="2024-05-13"id="wd-due"/><br/>
        </td>
        </tr>

        <tr>
        <td align="left" valign="top">
        <div style={{ height: "20px" }} />  {}
        <label htmlFor="wd-available"> Available from </label> &nbsp; &nbsp; &nbsp; &nbsp;
        <label htmlFor="wd-until"> Until </label><br/>
        <input type="date"
        value="2024-05-06"
        id="wd-available"/>&nbsp;
        <input type="date"
        value="2024-05-20"
        id="wd-until"/><br/>
        </td>
        </tr>
        <hr style={{ width: "350px" }} /><br/>
        <td align="right" valign="top">
        <div style={{ height: "20px" }} />  {}
        <button id="wd-cancel">Cancel</button> &nbsp;
        <button id="wd-save">Save</button>
        </td>
        </table>

      </div>
  );}



  