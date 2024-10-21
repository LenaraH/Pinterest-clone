import { Tooltip } from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";

export const QuestionMark = () => {
    return (
        <Tooltip label="More">
            <button className="border rounded-full fixed bottom-5 right-5 z-50 w-16 h-16 bg-white flex justify-center items-center hover:bg-slate-100"><IconQuestionMark size={48} /></button>
        </Tooltip>
    );
}