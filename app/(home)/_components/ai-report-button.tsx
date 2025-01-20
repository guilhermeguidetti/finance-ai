"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { BotIcon, Loader2Icon } from "lucide-react";
import React, { useState } from "react";
import { generateAiReport } from "../_actions/generate-ai-report";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import Markdown from "react-markdown";

interface AiReportButtonProps {
  month: string;
}

export default function AiReportButton({ month }: AiReportButtonProps) {
  const [report, setReport] = useState<string | null>(null);
  const [reportIsLoading, setReportIsLoading] = useState(false);
  const handleGenerateReportClick = async () => {
    // API call to generate AI report
    console.log("Generating AI report...");
    try {
      setReportIsLoading(true);
      const aiReport = await generateAiReport({ month });
      setReport(aiReport);
    } catch (error) {
      console.error("Failed to generate AI report", error);
    } finally {
      setReportIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          Relatório de IA
          <BotIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Relatório de IA</DialogTitle>
          <DialogDescription>
            Use inteligência artificial para gerar relatórios com insights sobre
            suas finanças.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="prose max-h-[450px] text-white prose-h3:text-white prose-h4:text-white prose-strong:text-white">
          <Markdown>{report}</Markdown>
        </ScrollArea>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button
            onClick={handleGenerateReportClick}
            disabled={reportIsLoading}
          >
            Gerar relatório
            {reportIsLoading && <Loader2Icon className="animate-spin" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
