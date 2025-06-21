import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Video } from "lucide-react";

const dcit104Resources = [
  {
    type: "pdf",
    title: "Week 1 - Intro to Computing",
    link: "https://example.com/dcit104/week1.pdf",
  },
  {
    type: "video",
    title: "Lecture: Introduction to Computing",
    link: "https://drive.google.com/file/d/VIDEO_ID/preview",
  },
];

const dcit102Resources = [
  {
    type: "pdf",
    title: "Week 1 - Logic Basics",
    link: "https://example.com/dcit102/week1.pdf",
  },
  {
    type: "video",
    title: "Lecture: What is Logic?",
    link: "https://drive.google.com/file/d/VIDEO_ID/preview",
  },
];

export default function UGResources() {
  const [tab, setTab] = useState("dcit104");

  const renderResource = (item, index) => (
    <Card key={index} className="mb-4 shadow-md">
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 font-semibold">
          {item.type === "pdf" ? <FileText size={18} /> : <Video size={18} />}
          {item.title}
        </div>
        {item.type === "video" ? (
          <iframe
            src={item.link}
            className="w-full h-52 rounded"
            allow="autoplay"
            allowFullScreen
            loading="lazy"
          ></iframe>
        ) : null}
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm flex items-center gap-1 text-blue-600 hover:underline"
        >
          <Download size={14} /> Download / Open
        </a>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        UG Resources Hub
      </h1>
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="justify-center">
          <TabsTrigger value="dcit104">DCIT104</TabsTrigger>
          <TabsTrigger value="dcit102">DCIT102</TabsTrigger>
        </TabsList>
        <TabsContent value="dcit104">
          {dcit104Resources.map(renderResource)}
        </TabsContent>
        <TabsContent value="dcit102">
          {dcit102Resources.map(renderResource)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
