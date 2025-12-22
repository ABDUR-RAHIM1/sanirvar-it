"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { getAllStudents } from "@/fetch/students"
import InputField from "@/helpers/InputField"
import SelectField from "@/helpers/SelectField"
import { Delete, Plus } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { postAction } from "@/actions/postAction"
import { globalContext } from "@/ContextApi/ContextApi"
import { resultCreateGetAll } from "@/constans/Endpoints"

export function AddResult() {

    const { showToast } = useContext(globalContext);
    const [loading, setLoading] = useState(false)
    const [studentList, setStudentList] = useState([]);
    const [subjectAndMark, setSubjectAndMark] = useState({
        subjectName: "",
        mark: ""
    });

    /** =============================== Main Form State ======================= Below */
    const [formData, setFormData] = useState({
        resultType: "",
        student: "",
        totalWrtingMark: 0,
        totalPracticalMark: 0,
        subjectWiseResults: [],
    });
    /** =============================== Main Form State ======================= Below */


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    };



    const handleSMChange = (e) => {
        const { name, value } = e.target;

        setSubjectAndMark((prev) => ({
            ...prev,
            [name]: value
        }))

    };

    /**==================== handle multiple result in the main State =============> Below */
    const handleAddMultipeResult = () => {
        setFormData((prev) => ({
            ...prev,
            subjectWiseResults: [...prev.subjectWiseResults, subjectAndMark]
        }))
    }
    /**==================== handle multiple result in the main State =============> above */

    /** ================== handle remove singel result in the main state ============> Below */
    const handleRemoveSingelResult = (index) => {
        const removedResults = formData.subjectWiseResults.filter((_, i) => i !== index);

        setFormData((prev) => ({
            ...prev,
            subjectWiseResults: removedResults
        }))
    }
    /** ================== handle remove singel result in the main state ============> Above */

    /**================= get all studetn for select Field ======================> Below */
    useEffect(() => {

        const getAll = async () => {
            try {
                const { status, data: studentData } = await getAllStudents();
                console.log(status, studentData)
                if (status === 200 || status === 201) {

                    const formatedData = studentData.map(st => ({
                        name: st.studentName,
                        value: st._id
                    }))

                    setStudentList(formatedData)
                    console.log(formatedData)
                };


            } catch (error) {
                console.log(error)
            };
        };

        getAll();

    }, [])
    /**================= get all studetn for select Field ======================> Above */



    /** =============================== submit handler ======================= Below */
    const handleSubmitResult = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {

            const payload = {
                method: "POST",
                endPoint: resultCreateGetAll,
                body: formData
            };


            const { status, data } = await postAction(payload);

            showToast(status, data)

        } catch (error) {
            console.log(error)
            showToast(500, "failed to puslished result")
        } finally {
            setLoading(false)
        }
    }
    /** =============================== submit handler ======================= Above */


    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">রেজাল্ট তৈরি করুন</Button>
                </DialogTrigger>
                <DialogContent className={" min-w-[70%] max-h-[90vh] overflow-y-scroll"}>
                    <DialogHeader>
                        <DialogTitle>
                            রেজাল্ট তৈরি করুন
                        </DialogTitle>
                        <DialogDescription>
                            তথ্য গুলো দিয়ে সেভ বাটনে ক্লিক করুন , বাতিল করতে চাইলে  কেন্সেল বাটনে ক্লিক করুন।
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4">


                        <SelectField
                            name={"resultType"}
                            label={"result Type"}
                            value={formData.resultType}
                            defaultOption={"Select Result Type"}
                            handleChange={handleChange}
                            options={[
                                { name: "test", value: "test" },
                                { name: "board", value: "board" }
                            ]}
                        />

                        <SelectField
                            name={"student"}
                            label={"student"}
                            value={formData.student}
                            defaultOption={"Select a student"}
                            handleChange={handleChange}
                            options={studentList}
                        />
                        <InputField
                            name={"totalWrtingMark"}
                            label={"Total Writing Mark"}
                            value={formData.totalWrtingMark}
                            placeholder={"কত নাম্বারের পরিক্ষা"}
                            handleChange={handleChange}
                        />
                        <InputField
                            name={"totalPracticalMark"}
                            label={"Total Practicel Mark"}
                            value={formData.totalPracticalMark}
                            placeholder={"কত নাম্বারের পরিক্ষা"}
                            handleChange={handleChange}
                        />
                        <div className=" col-span-2 grid grid-cols-2 gap-4">
                            <div className=" col-span-2 my-4 text-center bg-gray-100 p-3 rounded-md">
                                <p className=" underline"> সাবজেক্ট নাম ও নাম্বার যোগ করতে প্লাস বাটনে ক্লিক করতে হবে</p>
                            </div>
                            <SelectField
                                name={"subjectName"}
                                label={"Subject Name"}
                                value={subjectAndMark.subjectName}
                                defaultOption={"Select a subjectName"}
                                handleChange={handleSMChange}
                                options={[
                                    { name: "writing", value: "writing" },
                                    { name: "practicale & Viva", value: "practicale viva voice" },
                                ]}
                            />
                            <InputField
                                name={"mark"}
                                label={"Mark"}
                                type={"number"}
                                value={subjectAndMark.mark}
                                handleChange={handleSMChange}
                                placeholder={"Input mark here"}
                            />
                            <div className=" col-span-2 my-4">
                                <Button onClick={handleAddMultipeResult} type={"button"}
                                    title={"Click And Add Multipe Subject and Marks"}
                                    className={"w-full bg-blue-500 cursor-pointer"}>
                                    <Plus size={10} />
                                </Button>
                            </div>
                        </div>
                        {formData.subjectWiseResults && formData.subjectWiseResults?.length > 0 &&
                            <div className="col-span-2 my-5">
                                <p className=" inline-block w-full p-3 bg-gray-100 text-center my-3 font-bold">  মোট {formData.subjectWiseResults?.length} টি বিষয়ের রেজাল্ট যুক্ত করা হয়েছে </p>
                                <Table>
                                    <TableCaption>Subject Wise Result </TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Serial</TableHead>
                                            <TableHead>Subject</TableHead>
                                            <TableHead>Mark</TableHead>
                                            <TableHead>Delete</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            formData.subjectWiseResults?.map((sr, i) => (
                                                <TableRow key={i}>
                                                    <TableCell>
                                                        {i + 1}
                                                    </TableCell>
                                                    <TableCell>
                                                        {sr.subjectName}
                                                    </TableCell>
                                                    <TableCell>
                                                        {sr.mark}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button
                                                            onClick={() => handleRemoveSingelResult(i)}
                                                            type={"button"} className={"bg-red-500 text-white cursor-pointer"}
                                                        >
                                                            <Delete size={10} />

                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </div>}
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" onClick={handleSubmitResult} className={"bg-blue-500 text-white cursor-pointer"}>
                            {
                                loading ? "Saving..." : "Save"
                            }
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
