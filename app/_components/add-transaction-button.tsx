"use client";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";

import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              disabled={!userCanAddTransaction}
              className="rounded-full"
              onClick={() => setDialogIsOpen(true)}
            >
              Adicionar transação <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            {!userCanAddTransaction
              ? "Você atingiu o limite de transações para o mês"
              : "Adicione uma nova transação"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
