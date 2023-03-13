const Html5Example = () => {
  return (
    <div className="html-5">
      <fieldset>
        <legend>Choose your favorite monster</legend>
        <label>My-Name</label>
        <input type="checkbox" value="myname" />
        <br />
        <br />
        <label>My-Property</label>
        <input type="radio" value="myproperty" />
        <br />
        <br />
        <label>Text</label>
        <input type="text" value="" placeholder="Enter some text" />
        <br />
        <br />
        <label>Select example</label>
        <select name="animals" id="something">
          <option value="">-----Please select any of these-----</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="gedhe">Gedhe</option>
        </select>
        <br />
        <br />
        <br />
        <label htmlFor="browser">Choose your browser from the list:</label>
        <br />
        <br />
        <input list="browsers" name="browser" />
        <datalist id="browsers">
          <option value="Edge" />
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>
        <br />
        <br />
        <label>Below is the textarea</label>
        <br />
        <textarea
          rows="10"
          columns="20"
          style={{ marginTop: "20px" }}
        ></textarea>
        <br />
        <br />

        <input type="button" name="submit" value="submt" />
      </fieldset>
      <br />
      <ul>
        <li>Hello</li>
        <li>My name</li>
        <li>is</li>
        <li>Mueksh</li>
        <li>reddy</li>
        <li>katipally</li>
      </ul>
      <span>Mukesh</span> <npsb />
      <span>Mukesh</span>
      <table style={{ borderRadius: 5 + "px", borderStyle: "solid" }}>
        <tr>
          <th>ID</th>
          <td>1</td>
        </tr>
        <tr>
          <th>NAME</th>
          <td>Mukesh</td>
        </tr>
        <tr>
          <th>ADDRESS</th>
          <td>15384 santa barbara rd</td>
        </tr>
      </table>
      <div className="Example-Flex">
        <div className="One">
          <p>First DIV</p>
          <p>Hello</p>
        </div>
        <div className="Two">
          <p>Second DIV</p>
        </div>
        <div className="Three">
          <p>Three DIV</p>
        </div>
        <div className="Four">
          <p>Four DIV</p>
        </div>
        <div className="Five">
          <p>Five DIV</p>
        </div>
      </div>
      <div className="Example-Grid">
        <div className="Six">First DIV</div>
        <div className="Seven">Second DIV</div>
        <div className="Eight">Three DIV</div>
        <div className="Nine">Four DIV</div>
        <div className="Ten">Five DIV</div>
      </div>
    </div>
  );
};

export default Html5Example;
