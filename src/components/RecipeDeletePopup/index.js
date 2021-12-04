import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function RecipeDeletePopup(props) {
  const { deleteRecipePopupShow, setDeleteRecipePopupShow, deleteRecipe } =
    props;

  function Popup(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton> */}
        {/* <Modal.Title id="contained-modal-title-vcenter">
            Are you sure?
          </Modal.Title> */}
        {/* </Modal.Header> */}
        <Modal.Body>
          <h4>Are you sure?</h4>
          <p>This recipe will permanently be deleted from your RecipeBook.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="outline-success" onClick={deleteRecipe}>
            Delete recipe
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Popup
        show={deleteRecipePopupShow}
        onHide={() => setDeleteRecipePopupShow(false)}
      />
    </>
  );
}
