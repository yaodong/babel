json.extract! snippet, :id, :description, :language, :content, :created_at, :updated_at
json.url snippet_url(snippet, format: :json)
json.description snippet.description.to_s
