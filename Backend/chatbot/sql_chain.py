from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
def get_sql_chain(db,api_key):
    template="""You are a data analyst at a company, You are interacting with a user who is asking you questions about this database.
        Based on the table schema below, write a SQL query that would answer the user's questions. Take the conversation history into account
        <SCHEMA>{schema}</SCHEMA>

        Conversation History: {chat_history}

        Write only the SQL query and nothing else. Don't wrap the SQL query in any other text, not even backticks. Don't use any of the following subquery (LIMIT & IN/ALL/ANY/SOME )
         
        for example: 
        Question1: which 3 artists have the most tracks?
        SQL Query: SELECT ArtistId, COUNT(*) as track_count FROM Track GROUP BY ArtistId ORDER by track_count BESC LIMIT 3;
        Question2: Name those Artists
        SQL Query: SELECT Name FROM Artist WHERE ArtistId IN (SELECT ArtistId FROM Track GROUP BY ArtistId ORDER BY COUNT(*) DESC LIMIT 3); 

        Your turn: 

        Question:{question}
        SQL query:
        """
    prompt =ChatPromptTemplate.from_template(template)
    llm=ChatOpenAI(model="gpt-4-0125-preview",openai_api_key=api_key)
    def get_schema(_):
        return db.get_table_info()
    
    return (
        RunnablePassthrough.assign(schema=get_schema)
        | prompt
        | llm
        | StrOutputParser()
    )


    