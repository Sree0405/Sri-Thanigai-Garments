import { readItems } from "@directus/sdk"
import { directus } from "@/src/lib/api"
import { ManufacturingStep } from "@/src/components/ProcessTimeline"


export async function getmanufactoring(): Promise<ManufacturingStep[]> {
  try {

    const data = await directus.request(
      readItems("manufactoring")
    )

    const steps: ManufacturingStep[] = data.map((item) => ({
      id: item.id,
      title: item.title,
      desc: item.desc,
      image: item.image,
      icon: item.icon
    }))

    return steps

  } catch (error) {
    console.error("Manufacturing fetch error:", error)
    return []
  }
}