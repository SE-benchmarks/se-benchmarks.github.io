import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NewsItem {
  date: string
  title: string
  content: string
  link: string
}

interface NewsSectionProps {
  news: NewsItem[]
}

export function NewsSection({ news }: NewsSectionProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {news.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <div className="text-sm text-muted-foreground">{item.date}</div>
              <h3 className="font-semibold">
                <a href={item.link} className="hover:text-blue-500">
                  {item.title}
                </a>
              </h3>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

