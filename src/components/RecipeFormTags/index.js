import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { apiUrl } from "../../config/constants";

export default function RecipeFormTags(props) {
  const { tag, index, changeTagTitle } = props;

  const [tagOptions, setTagOptions] = useState([]);
  const getTagOptions = async () => {
    const res = await axios.get(`${apiUrl}/tags`);
    let tagArray = [];
    res.data.map((tag) => tagArray.push(tag.title));
    setTagOptions(tagArray);
  };

  useEffect(() => {
    getTagOptions();
  }, []);
  return (
    <Col>
      <Typeahead
        id="tag title"
        defaultInputValue={tag.title}
        name="title"
        onInputChange={(value) => changeTagTitle(value, index)}
        type="text"
        placeholder="tag"
        required
        options={tagOptions}
        emptyLabel="new tag"
        className="mb-1"
      />
    </Col>
  );
}
