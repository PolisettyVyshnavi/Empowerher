import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const TodoModal = ({ open, setOpen, title, onSave }) => {
const [value, setValue] = useState(title);
return (
<Dialog open={open} onOpenChange={setOpen}>
<DialogContent>
<DialogHeader>
<DialogTitle>Edit Todo</DialogTitle>
</DialogHeader>
<Input value={value} onChange={e => setValue(e.target.value)} />
<Button onClick={() => onSave(value)}>Save</Button>
</DialogContent>
</Dialog>
);
};
export default TodoModal;