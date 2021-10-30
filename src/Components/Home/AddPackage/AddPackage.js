import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reser } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/packages', data)
        .then(res => {
            if(res.data.insertedId) {
                alert('Add Package Successfully');
                reser();
            }
        })
    }

// https://i.ibb.co/6n2hMD7/13.jpg

// https://i.ibb.co/V93SMps/image.jpg
    return (
        <div className="add-package">
            <h2>Add a Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder="Name"/>
                <textarea {...register("description", { required: true})} placeholder="Description" />
                <input type="number" {...register("price", { required: true})} placeholder="Price" />
                <input {...register("days", { required: true})} placeholder="Duration days" />
                <input {...register("qnote", { required: true})} placeholder="Bannner qunote" />
                <input {...register("bannerImg", { required: true})} placeholder="Banner Image url (w1920-h640)" />
                <input {...register("img", { required: true})} placeholder="Package Image url (Ratio 3:2)" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;