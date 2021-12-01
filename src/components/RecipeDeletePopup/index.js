import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function RecipeDeletePopup(props) {
  const { deleteRecipePopupShow, setDeleteRecipePopupShow, deleteRecipe } =
    props;

  function MyVerticallyCenteredModal(props) {
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
        <Modal.Body closeButton>
          <h4>Are you sure?</h4>
          <p>Recipe will permanently be deleted from your RecipeBook.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="primary" onClick={deleteRecipe}>
            Delete recipe
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      {/* <Button variant="primary" onClick={() => setDeleteRecipePopupShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={deleteRecipePopupShow}
        onHide={() => setDeleteRecipePopupShow(false)}
      />
    </>
  );
}
