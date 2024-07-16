import React from "react";
import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../atoms";
import colors from "@/styles/colors";

interface UserDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const UserDeleteModal: React.FC<UserDeleteModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader
        title="Hapus User"
        showCloseButton={true}
        onClose={onClose}
      />
      <ModalBody>
        <Label>Apakah anda yakin untuk menghapus data ini?</Label>
      </ModalBody>
      <ModalFooter>
        <div className="flex row-auto px-1 space-x-2 ">
          <Button onClick={onClose} variant={"light"}>
            <Label color={colors.black}>Batal</Label>
          </Button>
          <Button onClick={onDelete} variant={"danger"}>
            <Label color={colors.light}>Hapus</Label>
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export { UserDeleteModal };
