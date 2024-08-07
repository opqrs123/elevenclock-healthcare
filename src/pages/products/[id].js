// pages/index.js
"use client"
import Layout from "@/components/Layout";
import CategoriesTab from "@/components/ProductCategoryListTabs";
import { useRouter } from "next/router";

export default function Main() {
    const router = useRouter();
    const { id } = router.query;
// console.log(id)
    return (
    <Layout>
      {/* <ProductList /> */}
      <CategoriesTab categoryId={id} />
    </Layout>
  );
}
